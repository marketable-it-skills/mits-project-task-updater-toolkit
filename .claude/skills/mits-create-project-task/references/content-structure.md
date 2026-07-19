# Content structure (MITS-aligned)

Use this when writing `project-description.md`, `metadata.json`, and `README.md`
for a **new** project task. Prefer this shape so `mits-project-task-updater` has
less form work later. If the prompt’s content does not fit cleanly, keep the
requirements clear and approximate the structure.

Full guide: `/.claude/guide/mits-project-task-creation-guide.md`.

## `project-description.md` header order

```markdown
# Test Project Outline – [Module Name] – [Skill Area]

## Competition time

## Introduction

## General Description of Project and Tasks

## Requirements

### [Feature / page / area]

#### [Detail if needed]

## Assessment

## Mark distribution
```

### Header levels

| Level | Use for |
| ----- | ------- |
| `#` | Document title only |
| `##` | Competition time, Introduction, General Description, Requirements, Assessment, Mark distribution |
| `###` | Subsections under Requirements (pages, features) |
| `####` | Fine-grained items within a subsection |

### Section guidance

**Competition time** — duration in hours (e.g. `3 hours`), matching `metadata.json` `estTime`.

**Introduction** — brief context and purpose of the project.

**General Description of Project and Tasks** — only what the brief supports, e.g.:

- Scope (pages/components/APIs)
- Provided vs competitor-created assets
- Technology restrictions
- Validation / accessibility / responsive breakpoints
- Paths to files under `assets/`

**Requirements** — detailed, testable instructions. Prefer concrete behaviour over
vague goals. Group by feature or page with `###` headings.

**Assessment** — tools/methods if known (browsers, validators, manual testing).
If unknown, state that assessment follows the marking scheme / expert judgement.

**Mark distribution** — WSOS-style table when possible:

```markdown
## Mark distribution

| WSOS SECTION | Description                            | Points |
| ------------ | -------------------------------------- | ------ |
| 1            | Work organization and self-management  | X      |
| 2            | Communication and interpersonal skills | X      |
| 3            | Design Implementation                  | X      |
| 4            | Front-End Development                  | X      |
| 5            | Back-End Development                   | X      |
| **Total**    |                                        | XX     |
```

Omit unused WSOS rows when the module clearly does not cover them, or keep a
draft total and note that marks will be finalized with the marking scheme.
Point totals are drafts unless the user specified them.

## `metadata.json` fields

```json
{
  "name": "ES2023 S17 - Module A",
  "displayName": "Short public title",
  "description": "Build … (action verb; purpose; key features; tech constraints).",
  "url": "https://github.com/marketable-it-skills/[repo-name]",
  "skillDomainIds": [1],
  "languages": ["EN"],
  "competition": "Competition or training name",
  "estTime": 3,
  "authors": [{ "name": "Author Name", "url": "https://…" }],
  "technologies": ["HTML", "CSS", "JavaScript"],
  "tags": ["frontend", "design", "static website"]
}
```

- `skillDomainIds`: `[1]` = Web Technologies unless told otherwise.
- `description`: action verb first; no fluff; searchable and specific.
- `tags` / `technologies`: lowercase-friendly filter tags; real tech names.

## `README.md` sections

1. `#` Title  
2. Short description (1–2 sentences)  
3. `## Skill domain(s)`  
4. `## Task Origin` — competition/training, module, authors  
5. `## Content` — links to `project-description.md`, `assets/`, `marking/marking-scheme.json`  
6. `## About the MITS Project` (or `## About the Project`) — Erasmus+ / partners blurb from the template  

## Assets layout (when applicable)

```
assets/
  data/                         # CSV, JSON, sample data
  images/                       # competitor-facing media
  project-description-images/   # images referenced from project-description.md
  texts/                        # copy blocks if needed
```

Reference assets with repo-relative paths (e.g. `assets/data/users.csv`).
