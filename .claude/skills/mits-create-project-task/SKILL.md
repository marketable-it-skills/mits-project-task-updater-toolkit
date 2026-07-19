---
name: mits-create-project-task
description: >-
  Create a new MITS project task (test project) from requirements given in the
  user prompt, writing content into an existing template repository under
  project-tasks/staging/. Focuses on authoring the task CONTENT
  (project-description.md, metadata.json, README.md, and assets notes) — not on
  cloning the template or polishing form. Use this skill whenever the user asks
  to create, author, draft, or write a new project task / test project from
  scratch or from a prompt brief — for example "create a project task for…",
  "draft a new Module B task", or "write the project description for this
  training module". Do not use for adapting an existing competition module
  (mits-project-task-updater) or for creating only a marking scheme
  (mits-marking-scheme-creator).
---

# MITS Create Project Task

Author a **new** MITS project task from requirements in the user prompt (and any
attached briefs/files). The empty template repository must already exist under
`/project-tasks/staging/[project-task-name]/`.

This skill prioritizes **content**: clear, complete, competition-ready
requirements. Align form to the MITS standard where practical; final form review
and standardization belong to `mits-project-task-updater`.

## Prerequisites (required)

1. A project folder already exists at
   `/project-tasks/staging/[project-task-name]/`, created from the
   [MITS Project Task Template](https://github.com/marketable-it-skills/mits-project-task-template).
2. The user prompt (and optional attachments) supply the **task requirements** —
   what competitors must build, constraints, duration, context, etc.

If the staging folder is missing, **stop** and ask the user to create/clone the
template repo first. Do **not** create GitHub repositories or clone the template
in this skill.

If more than one staging project exists and the target is unclear, ask which
folder to use.

## Role vs related skills

| Skill | Use when |
| ----- | -------- |
| **mits-create-project-task** (this) | Author **new** task content from a prompt into an empty/template staging folder |
| `mits-project-task-updater` | Standardize / review an **existing** competition-adapted task (form + fidelity) |
| `mits-marking-scheme-creator` | Create `marking/marking-scheme.json` after the description exists |

Do **not** chain updater or marking-scheme creation automatically. After content
is written, tell the user they can run those skills next if they want.

## Path conventions

- Paths starting with `/` are repo-root-relative.
- Working folder: `/project-tasks/staging/[project-task-name]/`.
- Style references: other staging/reference tasks and
  `/.claude/guide/mits-project-task-creation-guide.md`.

## What to produce

Update these files in the staging folder:

| File | Required |
| ---- | -------- |
| `project-description.md` | Yes — full task specification from the prompt |
| `metadata.json` | Yes — fill from prompt + reasonable inference; ask if critical fields are missing |
| `README.md` | Yes — short overview matching the new task |
| `assets/` | As needed — add files the prompt requires, or document expected asset paths/placeholders |
| `marking/marking-scheme.json` | No — leave for `mits-marking-scheme-creator` unless the user explicitly asks |

## Workflow

Copy and track this checklist:

```
Create project task:
- [ ] 1. Confirm staging folder
- [ ] 2. Extract requirements from the prompt
- [ ] 3. Clarify gaps (only if blocking)
- [ ] 4. Draft plan (optional for large briefs)
- [ ] 5. Write project-description.md
- [ ] 6. Update metadata.json and README.md
- [ ] 7. Handle assets
- [ ] 8. Coverage check vs prompt
- [ ] 9. Summarize + hand off
```

### 1. Confirm staging folder

- Resolve `/project-tasks/staging/[project-task-name]/`.
- Verify template files exist (`project-description.md`, `metadata.json`,
  `README.md`, `assets/`, `marking/`).
- If `project-description.md` already has substantial non-template content, ask
  whether to overwrite, extend, or stop.

### 2. Extract requirements from the prompt

Build an internal requirements list from the user message and attachments:

- Project context / scenario
- Deliverables (pages, APIs, features, files)
- Technical constraints (stack, SSR/SPA, validation, security, breakpoints)
- Duration (`estTime`)
- Assessment expectations (if stated)
- Assets / data files mentioned
- Competition / training origin, authors, module name (if stated)

**Content fidelity rule:** every requirement in the prompt must appear in the
written task. You may organize, clarify, and expand for student clarity, but do
**not** invent major new scope unless the user asked for it. If the brief is
thin, expand only within the stated intent (typical competition detail level)
and note assumptions in the summary.

### 3. Clarify gaps (blocking only)

Ask only when missing information would block a usable task, e.g.:

- Target staging folder
- Competition time
- Module / skill area name for the title
- Hard technology restrictions implied but not stated

Do not block on polish fields (tags, author LinkedIn URL); use placeholders or
sensible defaults and note them.

### 4. Draft plan (optional)

For large or ambiguous briefs, write a short plan in
`/project-tasks/staging/[project-task-name]/projectplan.md` (outline +
requirements checklist) and get approval before writing files. For small clear
briefs, skip straight to writing.

### 5. Write `project-description.md`

**Primary goal:** complete, unambiguous competitor instructions.

**Form (align to standard, content still wins):** follow the MITS section order
when it fits the brief. See
[references/content-structure.md](references/content-structure.md).

Minimum quality bar:

- Clear Introduction and Requirements
- Concrete, testable instructions (what to build / behaviour / constraints)
- Student-friendly professional tone (WorldSkills / EuroSkills style)
- Sensible Assessment and Mark distribution sections when the brief supports
  them; if points are unknown, use a plausible draft table and flag it for later
  review

Prefer matching headers from the creation guide so the updater has less to fix.
If the brief’s natural structure conflicts with the guide, preserve content
clarity first and keep section names as close as practical.

### 6. Update `metadata.json` and `README.md`

**`metadata.json`**

- Fill all template fields you can infer.
- `description`: start with an action verb (“Build”, “Create”, …); state what is
  built, purpose, key features, important tech constraints.
- `estTime`: hours as a number.
- `url`: use the staging repo’s GitHub URL if known; otherwise leave a clear
  placeholder or the path-derived name under `marketable-it-skills/`.
- Match field style of existing staging tasks (e.g.
  `s17-ws2026hu-training-mits-metadata-json-editor`).

**`README.md`**

- Title, 1–2 sentence description, skill domain(s), task origin, links to
  `project-description.md`, `assets/`, `marking/marking-scheme.json`, and the
  standard MITS / Erasmus+ blurb (see template / guide).

### 7. Handle assets

- If the prompt includes or implies assets (CSV, images, API specs), place them
  under `assets/` with a clear layout (`assets/data/`, `assets/images/`,
  `assets/project-description-images/`, etc.).
- If assets are described but not provided, create placeholder paths and
  document what files must be added later (in the summary and/or a short note in
  General Description).

### 8. Coverage check

Before finishing, compare the prompt requirements list against
`project-description.md` (and assets). Every prompt requirement must be present.
Fix gaps before the hand-off summary.

### 9. Summarize and hand off

Briefly report:

- Staging folder used
- What was written / assumed
- Any missing assets or metadata the user should supply
- Suggested next steps: `mits-project-task-updater` (form/compliance review),
  then `mits-marking-scheme-creator` if no scheme yet

## Key principles

- **Prompt is the source of truth** for scope and requirements.
- **Content over form** — completeness and clarity first; MITS structure second.
- **No silent scope creep** — do not add major features the prompt did not ask for.
- **No repo creation** — staging template must already exist.
- **No automatic marking scheme** unless explicitly requested.
- **Consistency** — tone and metadata style should match existing MITS tasks.

## Reference guides

- [Content structure (MITS-aligned)](references/content-structure.md)
- [MITS Project Task Creation Guide](../../guide/mits-project-task-creation-guide.md)
