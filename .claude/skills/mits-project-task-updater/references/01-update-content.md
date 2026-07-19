# Process 1: Update the project content

Standardize the project task **content** against the MITS guide. This process
updates **only** these three files:

- `project-description.md`
- `metadata.json`
- `README.md`

It does **not** touch the marking scheme. Updating the marking scheme is a
separate process — see [02-marking-scheme.md](02-marking-scheme.md).

## Assumptions

The project repository was already created from the
[MITS Project Task Template](https://github.com/marketable-it-skills/mits-project-task-template)
and cloned into `/project-tasks/staging/[project-task-name]/` (a subfolder named
after the repository). Its `project-description.md` already contains the original
task description and the `assets/` folder already contains the original project
assets.

## Context

- Skill context and role: [../SKILL.md](../SKILL.md)
- Detailed standardization requirements:
  `/.claude/guide/mits-project-task-creation-guide.md`

## Steps

1. Identify the target project folder under `/project-tasks/staging/`. This is
   the repository cloned from the MITS template, named after the repository. If
   there is more than one staging project, ask the user which one to work on.
2. Read the target project content carefully (`metadata.json`,
   `project-description.md`, and the contents of the `assets/` folder), think
   through the problem, and create a plan with a detailed todo list in
   `/project-tasks/staging/[project-task-name]/projectplan.md`, strictly
   following `/.claude/guide/mits-project-task-creation-guide.md`. The plan
   must include a requirement traceability checklist: every instruction,
   subtask, and deliverable from the original project task (in
   `project-description.md` and `assets/`) mapped to where it will appear in
   the updated task.
3. Get user approval for the plan.
4. Implement the content update step by step, limiting changes to
   `project-description.md`, `metadata.json`, and `README.md`:
   - Mark todos as complete as you go.
   - Provide high-level explanations of changes made.
   - Keep changes simple and minimal.
   - Add a review section to `projectplan.md` when complete.
   - Do **not** change `marking-scheme.json` in this process.
   - When updating `metadata.json`, ensure the `description` field follows the
     style of other projects in the repository:
     - Start with an action verb (e.g. "Build", "Create").
     - Describe what is being built and its purpose.
     - List key features and functionality.
     - Mention important technical requirements or standards.
     - Reference existing project descriptions in the
       `/project-tasks/references/` folder for examples.
5. **Double-check requirement coverage** before considering the content update
   complete. Systematically compare the original project task against the updated
   `project-description.md`, `metadata.json`, and `README.md` (and confirm
   referenced `assets/` content is still accounted for). Verify that every
   requirement, instruction, subtask, and deliverable from the original task is
   present in the updated task — reworded or reorganized is fine, but nothing
   may be omitted or replaced with new scope. Document the result in the review
   section of `projectplan.md`; call out any gaps and resolve them before
   proceeding.
6. When the content update is complete and approved, the marking scheme can be
   updated separately via [02-marking-scheme.md](02-marking-scheme.md).
