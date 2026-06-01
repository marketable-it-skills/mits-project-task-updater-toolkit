---
name: mits-project-task-updater
description: >-
  Standardize and update MITS project tasks (test projects) in
  project-tasks/staging/, adapted from WorldSkills, EuroSkills, and other skills
  competitions. Provides two separate processes plus an optional review:
  (1) update the project CONTENT (project-description.md, metadata.json,
  README.md) per the MITS guide; (2) generate or convert the marking scheme
  between Excel and JSON. Use this skill automatically whenever the user asks to
  update, standardize, revise, or review a MITS project task or its content, or
  to generate/convert/update a marking scheme - for example "update the project
  content", "standardize this test project", "update the marking scheme", or
  "convert the marking scheme to/from Excel".
---

# MITS Project Task Updater

End-to-end toolkit for turning an original competition module task into a
standardized MITS project task. This skill replaces the former standalone slash
commands (`/update-test-project`, `/update-marking-scheme`,
`/generate-marking-scheme`, `/convert-marking-json-to-xlsx`,
`/review-project-description`) and bundles the scripts they relied on.

## Context and role

We develop standardized project-based tasks for vocational students in Web
Technologies. Tasks are adapted from previous WorldSkills, EuroSkills, national
or international training competitions and must remain faithful to the original:
**no changes or additions to the original task content are allowed.** The goal
is to make tasks clear, student-friendly, and pedagogically sound while
preserving every original instruction and subtask.

Act as an instructional design advisor and web technology expert. Improve
structure, clarity, language, and format without changing or omitting any part
of the original content. Be accurate, concise, and professional. Follow the
formal structure and formatting requirements in the
[MITS Project Task Creation Guide](../../guide/mits-project-task-creation-guide.md)
precisely (Markdown format, defined sections such as Introduction / Requirements
/ Assessment, the `/assets/` and `/marking/` folder layout, and `metadata.json`
+ marking scheme JSON files). Consistency across all tasks is essential.

Already-standardized tasks in the `/project-tasks/references/` folder are the
reference for structure and style. Examples:
`s17-es2023-module_a-design_and_implementation`,
`s17-ws2024-module_b-product-management`,
`s17-ws2024-module_c-lyon-heritage-site`,
`s17-ws2024-module_d-lyon-mobile-web-service`.

## Prerequisites (assumed)

The project repository was already created from the
[MITS Project Task Template](https://github.com/marketable-it-skills/mits-project-task-template)
and cloned into `/project-tasks/staging/[project-task-name]/` (a subfolder named
after the repository). Its `project-description.md` already contains the original
task description, the `assets/` folder already contains the original project
assets, and the `marking/` folder already contains the original marking scheme as
an Excel (`.xlsx`) file. No repository creation or content copying is performed by
this skill.

## Path conventions

- Paths starting with `/` are repo-root-relative (e.g. `/project-tasks/...`).
- The working/staging folder for a project is
  `/project-tasks/staging/[project-task-name]/`, where `[project-task-name]` is
  the cloned repository's folder name.
- Already-standardized reference projects live in `/project-tasks/references/`.
- Scripts in this skill live under `scripts/` and read the paths you pass on the
  command line; run them as shown in the references.

## Processes

This skill provides two **separate, independently-run processes**, plus an
optional review. Run only the process the user asks for — do **not** chain them
automatically. If there is more than one project under `/project-tasks/staging/`,
ask the user which one to work on.

```
Process 1  Update content   standardize ONLY project-description.md, metadata.json, README.md
Process 2  Marking scheme   generate or convert the marking scheme (json <-> xlsx)
Review     (optional)        check compliance and produce review.md
```

The usual order is content first, then the marking scheme as a separate step,
but each process is self-contained and can be run on its own.

### Process 1: Update the project content

Standardize **only** `project-description.md`, `metadata.json`, and `README.md`
against the MITS guide, working step by step from an approved plan. This process
does not touch the marking scheme. See
[references/01-update-content.md](references/01-update-content.md).

### Process 2: Update the marking scheme

A separate process. The original marking scheme is assumed to already exist as an
Excel file in the project's `marking/` folder, so the default operation is to
convert that Excel file to `marking-scheme.json`. Also supports exporting JSON
back to Excel, and (as a fallback only) generating a scheme from the project
description. See [references/02-marking-scheme.md](references/02-marking-scheme.md).

### Review (optional)

Check the standardized task for compliance and produce a `review.md` report. Can
be run after either process. See [references/03-review.md](references/03-review.md).

## Bundled scripts

| Script | Purpose |
| ------ | ------- |
| `scripts/xlsx-to-json/` | Convert an Excel marking scheme into `marking-scheme.json`. |
| `scripts/json-to-xlsx/` | Convert `marking-scheme.json` back into the competition Excel template. |

Both are Node scripts and require a one-time `npm install` in their folder
(dependency: `xlsx`). They take input/output paths as command-line arguments.

## Key principles

- Preserve original content: never change or omit original task requirements.
- Clarity first: improve structure and language without altering meaning.
- Consistency: follow the standardized format across all tasks.
- Simplicity: make minimal, targeted changes.
- The Excel marking scheme is the source of truth when converting to JSON.

## Reference guides

- [MITS Project Task Creation Guide](../../guide/mits-project-task-creation-guide.md)
- [Marking Scheme Creation Guideline](../../guide/marking-scheme-creation-guideline.md)
- Reference marking schemes: `/.claude/guide/marking-scheme-references/`
