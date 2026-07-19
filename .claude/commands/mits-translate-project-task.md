Translate a MITS project task under `/project-tasks/staging/`, or a single file within it.

## Parameters

1. **Project task path or file** (required)
   - **Folder** — e.g. `project-tasks/staging/s17-wsk2025-s17-module-a` → translate the full project task
   - **File** — e.g. `project-tasks/staging/s17-wsk2025-s17-module-a/project-description.md` → translate only that file
2. **Target language** (optional) — language name (e.g. `Hungarian`) or ISO 639-1 code (e.g. `HU`)
## Target language rules

- If the second parameter is provided, translate into that language.
- If it is missing:
  - when the source task is **not** in English, translate to **English**;
  - when the source task is already in English, **ask the user** which language to use.

## Files to translate

### When the first parameter is a folder

Translate human-readable content in:

- `project-description.md`
- `README.md`
- `metadata.json` — only translatable fields: `displayName`, `description`, and `tags` (when they are descriptive, not technical identifiers)
- `marking/marking-scheme.json` — `description`, `extraDescription`, `judgementScoreDescription`, and subcriterion `name` values
- `assets/texts/` — all text content files

### When the first parameter is a file

Translate only that file. Apply the same translation rules and field-level constraints for that file type (e.g. only translatable JSON fields in `metadata.json` or `marking-scheme.json`).
Do **not** translate:

- file or folder names
- URLs, email addresses, author names
- JSON keys and structural field names
- code snippets, HTML/CSS/JS examples, and attribute names
- technical terms and phrases that are standard in English in IT education and competitions

## Translation rules

- Preserve the original meaning, structure, and formatting (Markdown headings, lists, tables, links).
- Do not add, remove, or rewrite requirements.
- Keep technical vocabulary in English when it is commonly used that way in the target language (e.g. `HTML`, `CSS`, `JavaScript`, `OpenGraph`, `SEO`, `WCAG`, `README.md`, `data-type`, `range`, file paths, WSOS section names where appropriate).
- Use clear, professional language suitable for vocational students.
- Match the tone and style of existing MITS project tasks.

## Metadata update

After translation:

- **Folder mode** — update `metadata.json`: set `languages` to the target language code (e.g. `["HU"]` for Hungarian, `["EN"]` for English)
- **Single-file mode** — update `metadata.json` only when that file is `metadata.json`; otherwise leave metadata unchanged
## Process

1. Determine whether the first parameter is a folder or a file.
2. Read the target content and identify the source language.
3. Resolve the target language using the rules above.
4. Translate the folder contents or the single specified file.
5. Update `metadata.json` only when applicable (see Metadata update).
6. Briefly summarize what was translated and note any terms intentionally left in English.