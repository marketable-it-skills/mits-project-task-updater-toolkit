# MITS Project Task Updater Toolkit

An AI-assisted toolkit for standardizing MITS project tasks (test projects) adapted from WorldSkills, EuroSkills, and other skills competitions for vocational IT education.

> **Important**: The instructions in this document are for human experts only. Do not attempt to execute these instructions as an AI agent.

## About

This repository is part of the **"Marketable IT Skills: Integrating Real-World Challenges into Vocational Education"** (MITS) project, supported by the **Erasmus+ programme** of the European Union. It is coordinated by the **HTTP Foundation** (Hungary) in cooperation with **Business College Helsinki** (Finland).

The toolkit helps maintain consistency and quality across MITS project tasks by guiding AI-assisted standardization workflows.

## What it does

- Standardize project task documentation (`project-description.md`, `metadata.json`, `README.md`) per MITS guidelines, preserving original task content while improving clarity and structure
- Convert WorldSkills Competition Information System (CIS) marking scheme XLSX exports to MITS marking scheme JSON format
- Perform a final compliance review of the standardized task

## Repository layout

```
mits-project-task-updater-toolkit/
├── .claude/
│   ├── skills/
│   │   └── mits-project-task-updater/        # All-in-one updater skill
│   │       ├── SKILL.md                      # Orchestrator: context + processes
│   │       ├── references/                   # Per-process instructions (read on demand)
│   │       │   ├── 01-update-content.md      # description / metadata / README only
│   │       │   ├── 02-marking-scheme.md      # convert existing Excel <-> JSON
│   │       │   └── 03-review.md              # optional compliance review
│   │       └── scripts/                      # Bundled automation scripts
│   │           ├── xlsx-to-json/             # Excel -> JSON converter (Node)
│   │           └── json-to-xlsx/             # JSON -> Excel converter (Node)
│   └── guide/                                # Creation guides and marking scheme references
├── guides/
│   └── MITS_PROJECT_TASK_STANDARDIZATION_GUIDE.md  # Official standardization guide
├── project-tasks/                  # (git-ignored) working area
│   ├── staging/                    # Repos cloned from the template, being standardized
│   │   └── [project-task-name]/    # One subfolder per project (named after the repo)
│   │       ├── assets/             # Original project assets
│   │       ├── metadata.json       # Project metadata
│   │       ├── project-description.md  # Original task description
│   │       └── marking/            # Original marking scheme (.xlsx) + marking-scheme.json
│   └── references/                 # Previously standardized projects (used as references)
└── README.md                       # Main documentation
```

## Prerequisites

- **Node.js** (for marking scheme conversion scripts)
- **Git**
- **Cursor** or **Claude Code** ([installation guide](https://docs.anthropic.com/en/docs/claude-code/setup))
- Clone standardized reference projects from the `marketable-it-skills` organization into `project-tasks/references/`

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/marketable-it-skills/mits-project-task-updater-toolkit.git
   cd mits-project-task-updater-toolkit
   ```

2. Run the init script. It installs Node dependencies for the converters and clones a few updated MITS project tasks as references.

   **On Windows** (PowerShell):

   ```powershell
   cd scripts
   .\init.ps1
   ```

   **On Linux or macOS**:

   ```bash
   cd scripts
   ./init.sh
   ```

3. Open the folder in VS Code or Cursor (`code .`).

## Using the updater skill

The **`mits-project-task-updater`** skill (`.claude/skills/mits-project-task-updater/`) runs in Claude Code or Cursor.

**Automatic invocation:** describe what you need in natural language, for example:

- "update the project content for s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering"
- "standardize this test project"
- "update the marking scheme"
- "review the project task"

The skill is selected automatically when your prompt matches its trigger phrases (see the skill `description` in `SKILL.md`). You can also name the skill explicitly: `use the mits-project-task-updater skill`.

**Key principles:**

- Preserve original content: never change or omit original task requirements
- Clarity first: improve structure and language without altering meaning
- Consistency: follow the standardized format across all tasks
- Simplicity: make minimal, targeted changes
- Excel is the source of truth for marking schemes until converted to JSON

**Three processes** (run only what you need; Process 3 is optional but recommended):

| Step                     | What it does                                                                | Skill reference                   |
| ------------------------ | --------------------------------------------------------------------------- | --------------------------------- |
| **Process 1**            | Standardize `project-description.md`, `metadata.json`, and `README.md` only | `references/01-update-content.md` |
| **Process 2**            | Convert the Excel marking scheme in `marking/` to `marking-scheme.json`     | `references/02-marking-scheme.md` |
| **Process 3** (optional) | Compliance check, `review.md`, and cleanup of working files                 | `references/03-review.md`         |

Typical order: Process 1, then Process 2, then optionally Process 3 — all in `project-tasks/staging/`.

### Process 1 — Standardize a project task

This process updates `project-description.md`, `metadata.json`, and `README.md` only.

Before starting, the project must be in `project-tasks/staging/[project-task-name]/`:

1. Create a repo from the [MITS Project Task Template](https://github.com/marketable-it-skills/mits-project-task-template) and clone it into `project-tasks/staging/[project-task-name]/`. Choose an appropriate repo name using this pattern: `s17-[competition-short-name]-module_[letter]-[short-description]`. Example: `s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering`
2. Put the original task in `project-description.md`.
3. Update `metadata.json` with the following base fields:

   | Field         | Description                                                                                                                                                        |
   | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | `name`        | Module name referencing the competition and module letter. E.g. `ES2025 TRAINING HU S17 - Module B`                                                                |
   | `displayName` | Descriptive project name including the topic. E.g. `SkillShare Academy - Dynamic Website with Server-Side Rendering`                                               |
   | `competition` | Full competition name. E.g. `EuroSkills 2025 Training Competition - Hungary`                                                                                       |
   | `url`         | GitHub URL of the repo                                                                                                                                             |
   | `authors`     | Names and LinkedIn URLs of those who submitted the original task. E.g. `"authors": [{"name": "Zoltan Sisak", "url": "https://www.linkedin.com/in/zoltan-sisak/"}]` |

4. Put original assets in `assets/`.
5. Instruct the agent to start the update with a prompt such as `update the project content`. If more than one project is in `staging/`, include the project name: `update the project content for s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering`.
6. The agent reviews the content and creates an update plan first. Review and approve the plan.
7. After you approve the plan, the agent updates `project-description.md`, `metadata.json`, and `README.md`.

### Process 2 — Convert and update the marking scheme

1. Put the original marking scheme Excel file in `marking/` (`.xlsx`). If the spreadsheet contains marking aspects for other modules, delete those rows before continuing.
2. Instruct the agent with a prompt such as `update the marking scheme`. If more than one project is in `staging/`, include the project name: `update the marking scheme for s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering`.

### Process 3 — Review the project task (optional)

1. Instruct the agent with a prompt such as `review the project task`. If more than one project is in `staging/`, include the project name: `review the project task for s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering`.
2. The agent performs a compliance check, creates `review.md`, and cleans up working files.

## Submit your updated project task to MITS

When the agent has finished all update processes, review the whole project manually. If everything looks good, you can contribute your project task to MITS. For submission, follow the steps in the [MITS Contribution Guide](https://github.com/marketable-it-skills/.github/blob/main/CONTRIBUTING.md).

## Documentation

- [MITS Project Task Standardization Guide](guides/MITS_PROJECT_TASK_STANDARDIZATION_GUIDE.md)
- [Updater skill (SKILL.md)](.claude/skills/mits-project-task-updater/SKILL.md)
- [MITS Contribution Guide](https://github.com/marketable-it-skills/.github/blob/main/CONTRIBUTING.md)

## Example reference projects

- `s17-es2023-module_a-design_and_implementation`
- `s17-ws2024-module_b-product-management`
- `s17-ws2024-module_c-lyon-heritage-site`
- `s17-ws2024-module_d-lyon-mobile-web-service`

## Contributing

For questions about contributing project tasks or tutorials, see the [MITS Contribution Guide](https://github.com/marketable-it-skills/.github/blob/main/CONTRIBUTING.md).

## License

Part of the Erasmus+ funded MITS initiative. See individual project task repositories for licensing details.

---

**Note**: This tool is designed to work with Claude Code and Cursor. The `mits-project-task-updater` skill and its workflows are optimized for AI-assisted project task standardization.

## Troubleshooting: file encoding

If `README.md` shows spaces between every character, it was saved as **UTF-16**. Workspace `files.encoding` alone does not fix files that are already UTF-16 — the editor keeps that encoding until you change it once.

1. Close `README.md` without saving (discard the broken buffer), or run from the repo root:

   ```powershell
   .\scripts\fix-utf8.ps1 README.md
   ```

2. Reopen `README.md`. In the status bar (bottom right), click the encoding label. Choose **Reopen with Encoding** → **UTF-8**, then **Save with Encoding** → **UTF-8**.

3. Confirm the status bar says **UTF-8** (not UTF-16 LE) before editing again.

This repo includes `.editorconfig` and `[markdown]` → `files.encoding: utf8` in `.vscode/settings.json` to reduce recurrence. Cursor agents should use `scripts/fix-utf8.ps1` after editing `README.md` on Windows.
