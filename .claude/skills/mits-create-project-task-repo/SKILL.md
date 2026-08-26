---
name: mits-create-project-task-repo
description: >-
  Create a brand-new MITS project task GitHub repository from the
  mits-project-task-template using the GitHub CLI (gh), clone it into
  project-tasks/staging/, and fill in the deterministic metadata.json fields
  (name, competition, authors). Use this skill whenever the user asks to
  create a new test project repo, start a new module/task from the template,
  "set up a new S17 module" repo, or scaffold a new competition module before
  any content is written — for example "create a new repo for CNBE2026 module
  C", "scaffold a new project task from the template", or "set up module B for
  SFC2026". This is the prerequisite, repo-scaffolding step that runs BEFORE
  content authoring (mits-create-project-task) — do not use this skill to
  write project-description.md, and do not use mits-create-project-task when
  the staging folder / GitHub repo does not exist yet.
---

# MITS Create Project Task Repo

Scaffold a **new** MITS project task by creating a GitHub repository from the
[MITS Project Task Template](https://github.com/marketable-it-skills/mits-project-task-template)
via the GitHub CLI, cloning it into `/project-tasks/staging/`, and setting the
few `metadata.json` fields that are fully determined by the inputs the user
gives you: `name`, `competition`, and `authors`.

This skill is deliberately narrow. It does **not** write
`project-description.md`, `README.md`, `displayName`, `description`,
`estTime`, `technologies`, `tags`, or the `url` field — those belong to
[mits-create-project-task](../mits-create-project-task/SKILL.md), which runs
next once the repo exists.

## Role vs related skills

| Skill | Use when |
| ----- | -------- |
| **mits-create-project-task-repo** (this) | The GitHub repo / staging folder does **not exist yet** — create it from the template and set name/competition/authors |
| `mits-create-project-task` | The staging folder already exists — author `project-description.md`, `metadata.json` content fields, `README.md` |
| `mits-project-task-updater` | Standardize / review an **existing** competition-adapted task |
| `mits-marking-scheme-creator` | Create `marking/marking-scheme.json` once the description exists |

Do not chain into content authoring automatically — after the repo is created,
tell the user they can run `mits-create-project-task` next.

## Prerequisites

- **GitHub CLI (`gh`)** installed and authenticated (`gh auth status` must
  succeed). The repo is created under **the authenticated user's personal
  account** (not the `marketable-it-skills` org) — that matches how existing
  staging repos were created; they get transferred/PR'd into the org later.
- **Node.js** 18+ to run the bundled script.
- Run everything from the **repository root** (the folder containing
  `project-tasks/`), since the script resolves `project-tasks/staging` and
  `project-tasks/references` relative to the working directory by default.

## Required vs optional inputs

Ask the user for these if they weren't already given in the request:

| Input | Required | Notes |
| ----- | -------- | ----- |
| Competition short name | Yes | Short code used in the repo slug and metadata name, e.g. `SFC2026`, `CNBE2026` |
| Module letter | Yes | Single letter, e.g. `A`, `B`, `C` |
| Competition (full name) | No | Full descriptive name, e.g. "Skills for Competitiveness 2026". Skip if the user doesn't have it yet — the script will try to look it up from a sibling module (see below) before leaving it blank. |
| Author(s) | No | One or more names. Skip if unknown; can be added later. |

Don't block on the optional fields — proceed without them if the user doesn't
supply them, and say so in the final summary.

## Naming conventions (deterministic — the script handles these)

- **Repo name / staging folder**: `s17-[competition-short-name]-module-[letter]`,
  all lowercase, e.g. `SFC2026` + `C` → `s17-sfc2026-module-c`. Non-alphanumeric
  characters in the short name are collapsed to hyphens.
- **`metadata.json` `name` field**: `[competition short name] S17 - Module
  [LETTER]`, e.g. `SFC2026 S17 - Module C` (keeps the short name as typed,
  letter uppercased).
- **`metadata.json` `competition` field**: set if the user supplied a full
  competition name, **or** if it could be looked up from a sibling module of
  the same competition (see below); otherwise left as the template default
  (empty).
- **`metadata.json` `authors` field**: set only if the user supplied author
  names; otherwise left as the template default.

## Author URL and competition name lookup

**Authors.** For each author name the user gives you, the script searches
every `metadata.json` under `project-tasks/staging/*` and
`project-tasks/references/*` for a case-insensitive match on
`authors[].name`, and reuses that author's existing `url` (which may be a
GitHub or LinkedIn profile — whichever was recorded before). This avoids
asking the user to re-supply a URL that's already known from another project
task.

If a name isn't found anywhere, its `url` is left as an empty string and
reported back to you as unresolved — ask the user if they have a profile URL
to add; if not, leave it blank and mention it in the summary so it can be
filled in later.

**Competition full name.** If the user only gives the competition **short**
name and not the full name (e.g. they say "CNBE2026" but not "CNB Exchange
2026"), the script looks for another module folder under the same search
dirs whose name shares the same `s17-<short-name>-module-` prefix (i.e. a
different module of the same competition, such as Module A when you're
creating Module C) and reuses its `metadata.json` `competition` value. This
is common because modules of the same competition are usually created one
after another, and the full competition name is only typed once.

- An explicit `--competition` always wins over the lookup.
- The preview's `competitionSource` tells you where the value came from:
  `"explicit"` (user-supplied), a relative path to the sibling module's
  `metadata.json` (looked up), or `null` (not found anywhere — left blank).
- If no sibling module exists yet (e.g. this is the very first module of a
  brand-new competition) and the user didn't supply a full name, it's fine to
  leave `competition` blank — mention it in the summary so it can be added
  later, either by hand or when a sibling module is created.

## Workflow

```
Create project task repo:
- [ ] 1. Collect inputs (short name, module letter required; competition, authors optional)
- [ ] 2. Dry run — preview repo name, metadata name, and author URL resolution
- [ ] 3. Resolve any unclear/ambiguous/unresolved author URLs with the user
- [ ] 4. Confirm with the user, then create + clone for real
- [ ] 5. Verify metadata.json was updated correctly
- [ ] 6. Summarize and hand off to mits-create-project-task
```

### 1. Collect inputs

Ask conversationally for whatever wasn't already supplied in the request.
Normalize the module letter to a single letter; if the user gives something
else (a full word, multiple letters), ask them to clarify.

### 2. Dry run

Always preview before touching GitHub. From the repository root:

```bash
node .claude/skills/mits-create-project-task-repo/scripts/create-project-task-repo.js \
  "<competitionShortName>" "<moduleLetter>" \
  --competition="<full competition name>" \
  --authors="<Name One,Name Two>" \
  --dry-run
```

Omit `--competition` / `--authors` entirely if the user didn't supply them.
The script prints a JSON preview: `repoName`, `metadataName`, `targetDir`,
the resolved `competition` value and its `competitionSource`, resolved
`authors` (with `url` and which file it was found in, `source`), and
`unresolvedAuthorNames`.

### 3. Resolve unclear cases

- If `unresolvedAuthorNames` is non-empty, tell the user which names had no
  existing URL on file and ask if they can supply one (GitHub or LinkedIn).
  Re-run the dry run with the added info, or just note it'll stay blank.
- If `competition` is `null` and the user didn't supply one, mention that no
  sibling module was found either, and ask if they know the full competition
  name; otherwise it's fine to proceed without it.
- If the target folder or GitHub repo already exists, the script will fail
  fast with a clear message on the real run — surface that to the user and
  ask how they want to proceed (different short name/letter, or reuse the
  existing repo).

### 4. Create for real

Once the user confirms the preview looks right, re-run the exact same command
**without** `--dry-run`. This will:

1. Verify `gh auth status` succeeds.
2. Confirm `<owner>/<repoName>` doesn't already exist on GitHub.
3. Run `gh repo create <repoName> --public --template marketable-it-skills/mits-project-task-template --clone` with the working directory set to `project-tasks/staging`, so the clone lands directly at `project-tasks/staging/<repoName>`.
4. Update `metadata.json` in the cloned folder: `name` always; `authors` only
   if supplied; `competition` if supplied or resolved from a sibling module.

### 5. Verify

Read back `project-tasks/staging/<repoName>/metadata.json` and confirm `name`
(and `competition`/`authors` if set) look right. Confirm the folder is a git
repo pointing at the new GitHub remote (`git remote -v` inside it).

### 6. Summarize and hand off

Report to the user:

- The new repo URL (`https://github.com/<owner>/<repoName>`) and local path
  (`project-tasks/staging/<repoName>`).
- Which metadata fields were set vs left as template defaults.
- Any unresolved author URLs.
- Next step: run `mits-create-project-task` to author
  `project-description.md`, the remaining `metadata.json` fields, and
  `README.md`.

## Key principles

- **Deterministic parts are scripted** — repo/folder naming, the `gh`/`git`
  calls, JSON field updates, and author URL lookup all happen in
  `scripts/create-project-task-repo.js`, not by hand-editing.
- **Narrow scope** — only `name`, `competition`, and `authors` in
  `metadata.json` are touched; everything else (content, `url`, tags, etc.)
  is explicitly left for `mits-create-project-task`.
- **Preview before mutating** — always run `--dry-run` first and get user
  confirmation before creating a real GitHub repo.
- **Personal account, not the org** — repos are created under the
  authenticated `gh` user; moving them into `marketable-it-skills` happens
  later, outside this skill.
- **Reuse known author URLs and competition names** — search existing
  staging/reference tasks before asking the user to supply information
  that's already on record from a sibling module.

## Script reference

`scripts/create-project-task-repo.js` (Node, no dependencies beyond the
built-in `fs`/`path`/`child_process` and the `gh` CLI on `PATH`):

```bash
node scripts/create-project-task-repo.js <competitionShortName> <moduleLetter> [options]

Options:
  --competition="Full Competition Name"   Optional. If omitted, reused from a
                                           sibling module with the same short name
  --authors="Name One,Name Two"           Optional, comma-separated
  --dry-run                               Preview only, no side effects
  --repo-root=<path>                       Defaults to the current working directory
  --staging-dir=<path>                     Defaults to <repo-root>/project-tasks/staging
  --search-dirs=<path,path>                Defaults to project-tasks/staging and
                                           project-tasks/references under repo-root
```

Exits non-zero with a clear `Error: ...` message on any failure (bad module
letter, folder/repo collision, `gh` not authenticated, `gh repo create`
failure, missing `metadata.json` after clone) — surface that message to the
user rather than retrying blindly.
