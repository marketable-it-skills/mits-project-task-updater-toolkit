# Marking scheme JSON → XLSX

Node.js CLI that converts MITS marking schemes from `marking-scheme.json` to a
single-sheet Excel workbook (`.xlsx`) aligned with the competition import template.

## Prerequisites

- **Node.js** 18+ recommended (16+ usually works).
- **Dependency:** [SheetJS `xlsx`](https://www.npmjs.com/package/xlsx). It is
  already vendored in `node_modules/`, so no install is normally needed. If
  `node_modules` is missing, reinstall from this directory:

  ```bash
  npm install xlsx
  ```

## Usage

```bash
node convert-marking-scheme-to-xlsx.js <input.json> <subcriterionPrefix> [output.xlsx] [--day=N]
```

| Argument | Required | Description |
| -------- | -------- | ----------- |
| `input.json` | Yes | Path to `marking-scheme.json`. |
| `subcriterionPrefix` | Yes | Single letter (A–Z) for the Sub Criterion IDs in column A — e.g. `B` produces `B1, B2, …`. |
| `output.xlsx` | No | Output path. Default: same basename as the input with `.xlsx`. |
| `--day=N` | No | Integer for the Day of Marking column (C). Default: `1`. |

**WSOS Section** (column I) is taken from each aspect's `wsosSection` (fallback
`1`); judgement level rows leave column I empty.

### Examples

```bash
node convert-marking-scheme-to-xlsx.js marking/marking-scheme.json C
node convert-marking-scheme-to-xlsx.js marking/marking-scheme.json B output/marking.xlsx --day=2
```

## Output

One worksheet: header row (exact column titles for import tools), then subcriterion
group rows (`B1`, `B2`, … using the chosen prefix) and aspect rows — measurement
`M` (one row each) and judgement `J` (a main row plus four 0–3 level rows). UTF-8
input is preserved.

## Validation

The script validates before writing and exits non-zero (writing nothing) if any
`wsosSection` is outside 1–5, a measurement aspect lacks
`calculation.type: "pass-or-fail"`, or a judgement aspect doesn't have exactly four
`judgementScoreDescription` entries. It prints a non-fatal warning if the aspect
`maxMark` values don't sum to `totalMark`.

## Files in this folder

| File | Role |
| ---- | ---- |
| `convert-marking-scheme-to-xlsx.js` | CLI implementation |
| `marking-scheme-xlsx-template.csv` | Flattened reference of the column titles and row layout |
| `package-lock.json` | Locked dependency tree for `npm install` |
| `node_modules/` | Vendored `xlsx` dependency (runs without install) |
