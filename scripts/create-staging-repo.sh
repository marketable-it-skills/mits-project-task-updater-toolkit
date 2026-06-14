#!/usr/bin/env bash
# Create a GitHub repo from the MITS project task template and clone it into project-tasks/staging/.
set -euo pipefail

TEMPLATE_OWNER="marketable-it-skills"
TEMPLATE_REPO="mits-project-task-template"
TEMPLATE="${TEMPLATE_OWNER}/${TEMPLATE_REPO}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STAGING_ROOT="$REPO_ROOT/project-tasks/staging"
MARKER_FILE="project-description.md"

usage() {
  echo "Usage: $(basename "$0") [--private] [repo-name]"
  echo "  repo-name  e.g. s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering"
  exit 1
}

check_gh() {
  if ! command -v gh >/dev/null 2>&1; then
    echo "GitHub CLI (gh) is required. Install from https://cli.github.com/ and run: gh auth login" >&2
    exit 1
  fi
  if ! gh auth status >/dev/null 2>&1; then
    echo "GitHub CLI is not authenticated. Run: gh auth login" >&2
    exit 1
  fi
}

validate_name() {
  local name="$1"
  if [[ -z "$name" ]]; then
    echo "Repository name is required." >&2
    exit 1
  fi
  if [[ ${#name} -gt 100 ]]; then
    echo "Repository name must be 100 characters or fewer." >&2
    exit 1
  fi
  if [[ ! "$name" =~ ^[a-zA-Z0-9._-]+$ ]]; then
    echo "Invalid repository name '$name'. Use letters, numbers, dots, hyphens, and underscores only." >&2
    exit 1
  fi
}

repo_exists() {
  gh api "repos/$1" --jq '.name' >/dev/null 2>&1
}

get_gh_user() {
  local login
  login="$(gh api user --jq .login 2>/dev/null || true)"
  if [[ -z "$login" ]]; then
    echo "Could not determine GitHub user. Run: gh auth login" >&2
    exit 1
  fi
  echo "$login"
}

create_from_template() {
  local owner="$1"
  local full_name="$2"
  local name="$3"
  local private="$4"

  echo "Creating $full_name from template $TEMPLATE (GitHub generate API) ..."
  if [[ "$private" == true ]]; then
    gh api -X POST "repos/$TEMPLATE/generate" \
      -f owner="$owner" \
      -f name="$name" \
      -F private=true >/dev/null
  else
    gh api -X POST "repos/$TEMPLATE/generate" \
      -f owner="$owner" \
      -f name="$name" \
      -F private=false >/dev/null
  fi
}

wait_for_commits() {
  local full_name="$1"
  local max_seconds="${2:-90}"
  local elapsed=0

  while [[ "$elapsed" -lt "$max_seconds" ]]; do
    local count
    count="$(gh api "repos/$full_name/commits" --jq 'length' 2>/dev/null || true)"
    if [[ -n "$count" && "$count" -gt 0 ]]; then
      return 0
    fi
    echo "Waiting for GitHub to finish generating the repository from template ..."
    sleep 2
    elapsed=$((elapsed + 2))
  done

  return 1
}

has_template_content() {
  [[ -f "$1/$MARKER_FILE" ]]
}

push_template_content() {
  local full_name="$1"
  local clone_path="$2"

  echo "Repository is empty on GitHub. Seeding from template and pushing to $full_name ..."
  rm -rf "$clone_path"
  git clone --depth 1 "https://github.com/$TEMPLATE.git" "$clone_path"
  rm -rf "$clone_path/.git"

  (
    cd "$clone_path"
    git init
    git add .
    git commit -m "Initial commit from $TEMPLATE"
    git branch -M main
    git remote add origin "https://github.com/$full_name.git"
    git push -u origin main --force
  )
}

PRIVATE=false
REPO_NAME=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --private) PRIVATE=true; shift ;;
    -h | --help) usage ;;
    *)
      if [[ -z "$REPO_NAME" ]]; then
        REPO_NAME="$1"
      else
        usage
      fi
      shift
      ;;
  esac
done

check_gh

OWNER="$(get_gh_user)"
echo "Creating repository under GitHub user: $OWNER"

if [[ -z "$REPO_NAME" ]]; then
  read -rp "Repository name (e.g. s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering): " REPO_NAME
fi

REPO_NAME="$(echo "$REPO_NAME" | xargs)"
validate_name "$REPO_NAME"

FULL_NAME="$OWNER/$REPO_NAME"
CLONE_PATH="$STAGING_ROOT/$REPO_NAME"

mkdir -p "$STAGING_ROOT"

if [[ -e "$CLONE_PATH" ]]; then
  echo "Target already exists: $CLONE_PATH" >&2
  exit 1
fi

if repo_exists "$FULL_NAME"; then
  echo "GitHub repository already exists: https://github.com/$FULL_NAME. Delete it first or choose another name." >&2
  exit 1
fi

create_from_template "$OWNER" "$FULL_NAME" "$REPO_NAME" "$PRIVATE"

if ! wait_for_commits "$FULL_NAME"; then
  echo "Warning: timed out waiting for template generation on GitHub." >&2
  push_template_content "$FULL_NAME" "$CLONE_PATH"
  if has_template_content "$CLONE_PATH"; then
    echo "Done. Staging project at: $CLONE_PATH"
    exit 0
  fi
  echo "Template content is still missing after fallback push." >&2
  exit 1
fi

echo "Cloning into $CLONE_PATH ..."
rm -rf "$CLONE_PATH"
git clone "https://github.com/$FULL_NAME.git" "$CLONE_PATH"

if ! has_template_content "$CLONE_PATH"; then
  push_template_content "$FULL_NAME" "$CLONE_PATH"
fi

if ! has_template_content "$CLONE_PATH"; then
  echo "Clone succeeded but '$MARKER_FILE' is missing. Check https://github.com/$FULL_NAME" >&2
  exit 1
fi

echo "Done. Staging project at: $CLONE_PATH"
