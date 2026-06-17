---
name: mits-marking-scheme-json-to-xlsx
description: Convert a MITS marking scheme from marking-scheme.json into a competition-import-ready Excel workbook (.xlsx) using the bundled Node.js converter. Use this skill whenever the user asks to convert, export, or turn a marking scheme JSON into Excel/XLSX, generate the import spreadsheet for a project task, or mentions converting marking-scheme.json to xlsx — even if they don't name the script. This is one-way (JSON → XLSX) only; for authoring or editing the marking scheme JSON itself use mits-marking-scheme-creator instead.
---

# MITS Marking Scheme JSON → XLSX

Convert a MITS marking scheme from its canonical `marking-scheme.json` form into a
single-sheet Excel workbook (`.xlsx`) whose columns and row layout match the
competition import template. The conversion is deterministic and handled entirely
by the bundled Node.js script — your job is to call it with the right arguments and
sanity-check the result, not to build the spreadsheet by hand.

## When to use this

Use this skill for the **one-way JSON → XLSX export** only. If the user wants to
*author* or *edit* the marking scheme content itself (add aspects, adjust marks,
WSOS sections), that's [mits-marking-scheme-creator]; come back here once the JSON
is final and they want the importable spreadsheet.

## Prerequisites

- **Node.js** 18+ (16+ usually works).
- The `xlsx` dependency is **already bundled** in `scripts/node_modules/`, so the
  script runs without any install step. Only if `node_modules` is missing or
  broken, reinstall from the script folder: `npm install xlsx`.

## How to run it

The converter lives at
`scripts/convert-marking-scheme-to-xlsx.js` (relative to this skill).

```bash
node <skill>/scripts/convert-marking-scheme-to-xlsx.js <input.json> <subcriterionPrefix> [output.xlsx] [--day=N]
```

| Argument | Required | Description |
| -------- | -------- | ----------- |
| `input.json` | Yes | Path to the `marking-scheme.json` to convert. |
| `subcriterionPrefix` | Yes | A **single letter** (A–Z) used to build the Sub Criterion IDs in column A — e.g. `B` produces `B1, B2, B3 …` (one per subCriterion). |
| `output.xlsx` | No | Output path. Defaults to the input path with `.xlsx` substituted for `.json`. |
| `--day=N` | No | Integer written into the Day of Marking column (C) for every subcriterion header row. Defaults to `1`. |

The prefix matters because a module's marking scheme is imported into a specific
column block (Module A → `A`, Module B → `B`, etc.). Pick the letter that matches
the module/section the scheme belongs to; if it isn't obvious from the project,
ask the user rather than guessing.

**WSOS Section (column I)** is taken from each aspect's own `wsosSection` value in
the JSON (falling back to `1` if absent). The judgement **level rows** (the 0–3
breakdown under a `J` aspect) intentionally leave column I empty — only the
aspect's own rows carry a WSOS value.

### Examples

```bash
# Convert in place next to the source, Module C → C1, C2, …, Day = 1
node <skill>/scripts/convert-marking-scheme-to-xlsx.js project-tasks/staging/foo/marking/marking-scheme.json C

# Explicit output path, Module B → B1, B2, …, Day = 2
node <skill>/scripts/convert-marking-scheme-to-xlsx.js marking/marking-scheme.json B output/marking.xlsx --day=2
```

## Input JSON shape (what the script reads)

The script expects the standard MITS marking-scheme schema:

```json
{
  "totalMark": 16.75,
  "wsosSections": { "1": "…", "2": "…", "3": "…", "4": "…", "5": "…" },
  "subCriterions": [
    {
      "name": "Authentication & Access Control",
      "aspects": [
        {
          "type": "measurement",
          "description": "POST /auth/login with valid credentials",
          "maxMark": 0.75,
          "wsosSection": 5,
          "extraDescription": "Assert: 200; JSON has token and role:\"admin\"",
          "calculation": { "type": "pass-or-fail" }
        },
        {
          "type": "judgement",
          "description": "Turbine map page design",
          "maxMark": 1,
          "wsosSection": 3,
          "judgementScoreDescription": ["level 0 …", "level 1 …", "level 2 …", "level 3 …"]
        }
      ]
    }
  ]
}
```

How it maps to rows:

- Each `subCriterion` becomes a header row: `<prefix><n>`, its `name`, and the
  Day of Marking (from `--day`, default 1).
- A **measurement** aspect (`type: "measurement"`) becomes one `M` row. Its
  `extraDescription` goes into the "Extra Aspect Description" column, and any
  `Assert:` / `Expect:` clause found inside it is extracted into the
  "Requirement (Measurement Only)" column.
- A **judgement** aspect (`type: "judgement"`) becomes one `J` row followed by
  **four** level rows carrying Judg Score `0`–`3` and the matching
  `judgementScoreDescription[i]` text.

`scripts/marking-scheme-xlsx-template.csv` is a flattened reference of the exact
column titles and the expected row layout — open it if you need to double-check
the output structure.

## Validation the script performs

Before writing, the script validates the JSON and **exits non-zero** (writing
nothing) if any of these fail:

- every `wsosSection` is between 1 and 5,
- each measurement aspect has `calculation.type` = `"pass-or-fail"`,
- each judgement aspect has exactly 4 `judgementScoreDescription` entries.

It also prints a **non-fatal warning** if the aspect `maxMark` values don't sum to
`totalMark` — surface that warning to the user (it usually means the JSON itself
needs fixing) but the `.xlsx` is still produced.

If the script errors out, the fix belongs in the JSON, not here — point the user at
[mits-marking-scheme-creator] to correct the scheme, then re-run.

## After running

- Confirm the output path the script printed (`Written: …`) actually exists.
- If there was a totalMark/sum mismatch warning, report it.
- Hand the `.xlsx` path back to the user; it's ready to import.
