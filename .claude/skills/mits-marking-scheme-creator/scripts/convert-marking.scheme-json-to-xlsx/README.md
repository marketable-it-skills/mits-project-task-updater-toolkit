# Marking scheme JSON → XLSX

Node.js CLI that converts MITS marking schemes from `marking-scheme.json` to a single-sheet Excel workbook (`.xlsx`) aligned with the competition import template.

## Prerequisites

- **Node.js** 18+ recommended (16+ usually works).
- **Dependency:** [SheetJS `xlsx`](https://www.npmjs.com/package/xlsx). From this directory install it once (a `package-lock.json` is present; if `npm install` fails, use):

  ```bash
  npm install xlsx
  ```

## Usage

```bash
node convert-marking-scheme-to-xlsx.js <input.json> [output.xlsx] [--day=N]
```

| Argument | Required | Description |
| -------- | -------- | ----------- |
| `input.json` | Yes | Path to `marking-scheme.json`. |
| `output.xlsx` | No | Output path. Default: same basename as the input with `.xlsx`. |
| `--day=N` | No | Day of marking (integer). Default: `2`. |

### Examples

```bash
node convert-marking-scheme-to-xlsx.js marking/marking-scheme.json
node convert-marking-scheme-to-xlsx.js marking/marking-scheme.json output/marking.xlsx
node convert-marking-scheme-to-xlsx.js marking-scheme.json --day=1
```

## Output

One worksheet: header row (exact column titles for import tools), then subcriterion group rows (`C1`, `C2`, …) and aspect rows (measurement `M` / judgement `J`). UTF-8 input is preserved.

## Documentation

- **[prd.md](./prd.md)** — Full product spec: JSON schema, column mapping, validation rules, acceptance criteria, and references to templates and sample inputs.

## Files in this folder

| File | Role |
| ---- | ---- |
| `convert-marking-scheme-to-xlsx.js` | CLI implementation |
| `prd.md` | Detailed specification |
| `package-lock.json` | Locked dependency tree for `npm install` |
