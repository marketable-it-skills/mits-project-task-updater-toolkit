#!/usr/bin/env bash
set -euo pipefail

cd ..

npm_dirs=(
  .claude/skills/mits-project-task-updater/scripts/xlsx-to-json
  .claude/skills/mits-project-task-updater/scripts/json-to-xlsx
  .claude/skills/mits-marking-scheme-json-to-xlsx/scripts
  .claude/skills/mits-marking-scheme-creator/scripts/convert-marking.scheme-json-to-xlsx
)

for dir in "${npm_dirs[@]}"; do
  echo "npm install: $dir"
  (cd "$dir" && npm install)
done

cd project-tasks/references

repos=(
  https://github.com/marketable-it-skills/s17-es2023-module_a-design_and_implementation.git
  https://github.com/marketable-it-skills/s17-ws2024-module_b-product-management.git
  https://github.com/marketable-it-skills/s17-ws2024-module_c-lyon-heritage-site.git
  https://github.com/marketable-it-skills/s17-ws2024-module_d-lyon-mobile-web-service.git
)

for repo in "${repos[@]}"; do
  name="$(basename "$repo" .git)"
  if [[ -d "$name" ]]; then
    echo "Skip clone (already exists): $name"
  else
    git clone "$repo"
  fi
done

echo "Done."
