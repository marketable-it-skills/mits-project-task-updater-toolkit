# Process 2: Update the marking scheme

This is a **separate process** from the content update
([01-update-content.md](01-update-content.md)). Run it on its own — typically
after the project content has been standardized and approved, but it does not
depend on that process.

## Assumptions

The **original marking scheme already exists as an Excel file in the project's
`marking/` folder** (`/project-tasks/staging/[project-task-name]/marking/`, file
name includes "marking" and has a `.xlsx` extension). That Excel file is the
**source of truth**. The default operation is therefore to convert it to
`marking-scheme.json`.

This process covers three operations. Pick the one that matches the task:

- **A. Convert the existing Excel marking scheme to JSON** — the default.
- **B. Convert JSON to Excel** — export an existing `marking-scheme.json` back to
  the competition Excel template.
- **C. Generate from the project description** — fallback only when no Excel
  source exists in the `marking/` folder.

In all cases the target project folder is
`/project-tasks/staging/[project-task-name]/`. All relative paths below are
within that folder unless they start with `/`.

Reference guideline: `/.claude/guide/marking-scheme-creation-guideline.md`.
Reference schemes: `/.claude/guide/marking-scheme-references/`.

---

## A. Convert the existing Excel marking scheme to JSON

The Excel file in the project's `marking/` folder is the source of truth.

1. Locate the Excel marking scheme in the project's `marking/` folder (file name
   includes "marking" and has a `.xlsx` extension).
2. From the skill's converter folder, run the conversion scripts in order,
   passing the path to that Excel file to `convert.js`:

   ```bash
   cd .claude/skills/mits-project-task-updater/scripts/xlsx-to-json
   node convert.js ../../../../../project-tasks/staging/[project-task-name]/marking/[marking-file].xlsx
   node create-final-marking-scheme.js
   ```

   - `convert.js` reads the Excel file you pass as the argument and generates
     `marking-scheme-raw.json` and `marking-scheme-structured.json`.
   - `create-final-marking-scheme.js` reads `marking-scheme-structured.json` and
     generates `new-marking-scheme.json`.

3. **Copy** the generated `new-marking-scheme.json` to
   `/project-tasks/staging/[project-task-name]/marking/marking-scheme.json`.

   - Use the exact content generated from the Excel file.
   - **DO NOT** create custom content or write your own marking scheme based on
     assumptions.
   - **DO NOT** change aspect descriptions, sub-criterion names, or their
     meaning.
   - **DO NOT** add, remove, or modify aspects unless they are in the Excel file.
   - **YOU MAY** fix spelling, grammar, or formatting issues in descriptions.
   - **YOU MAY** fix the `totalMark` value if it shows floating-point precision
     issues (e.g. `80.00000000000001` → `80`).
   - Always preserve the original meaning and content from the Excel file.

4. Verify that the marking scheme was copied correctly:
   - Sub-criterion names match the Excel file.
   - Aspect descriptions match the Excel content (spelling/grammar may be
     corrected, but meaning must be preserved).
   - The structure is correct (`wsosSections`, `subCriterions` array, etc.).
   - All aspects and their marks correspond to the Excel file.

---

## B. Convert JSON marking scheme to Excel

Export an existing `marking-scheme.json` to the competition Excel template.

1. From the skill's converter folder, install dependencies once:

   ```bash
   cd .claude/skills/mits-project-task-updater/scripts/json-to-xlsx
   npm install
   ```

2. Run the converter, passing the input JSON and optional output path and day:

   ```bash
   node convert-marking-scheme-to-xlsx.js <input.json> [output.xlsx] [--day=N]
   ```

   - `input.json` (required): path to `marking-scheme.json`.
   - `output.xlsx` (optional): defaults to the input basename with `.xlsx`.
   - `--day=N` (optional): day of marking (integer); defaults to `2`.

   Example, converting the target project's scheme:

   ```bash
   node convert-marking-scheme-to-xlsx.js ../../../../../project-tasks/staging/[project-task-name]/marking/marking-scheme.json
   ```

The script validates the JSON (totalMark, WSOS sections 1-5, measurement
`calculation.type` of `pass-or-fail`, and exactly 4 `judgementScoreDescription`
entries for judgement aspects) and writes a single "Marking Scheme" worksheet
matching the competition import template.

---

## C. Fallback: generate a marking scheme from the project description

Use this **only when no Excel source exists** in the project's `marking/` folder.
Create or update `marking/marking-scheme.json` following the process below.

### Phase 1: Project analysis and understanding

1. **Project context analysis**:
   - Read `project-description.md` thoroughly to understand requirements, scope,
     and technical specifications.
   - Review files in `assets/` for additional requirements, content
     specifications, or visual guidelines.
   - Check `metadata.json` for module type, duration, and point totals.
2. **Reference framework study**:
   - Use `/.claude/guide/marking-scheme-creation-guideline.md` as the primary
     guideline for structure and standards.
   - Analyze similar marking schemes from
     `/.claude/guide/marking-scheme-references/` that match the module type:
     - Static websites: Module A schemes
     - Dynamic websites: Module B schemes
     - REST APIs: Module C schemes
     - Interactive frontends: Module D schemes

### Phase 2: Requirements extraction and organization

3. **Comprehensive requirements list**:
   - Extract ALL testable requirements from the project description (these become
     individual aspects).
   - **Prioritize manual testing**: focus on functionality verifiable through
     direct manual testing.
   - **Break down complex tasks** into smaller, granular aspects to prevent
     competitors from losing all points on difficult tasks.
   - Categorize requirements by type:
     - **Measurement aspects**: binary pass/fail items that can be manually
       tested (specific API endpoints, expected responses, error codes).
     - **Judgement aspects**: qualitative assessments (code quality, design
       creativity, user experience).
   - **Avoid generic criteria**: replace vague aspects like "input validation"
     with specific testable scenarios.
   - Review for overlapping items and consolidate duplicates while preserving
     distinct evaluation criteria.
4. **Logical grouping and hierarchy**:
   - Group related requirements into logical categories (these become
     `subCriterions`).
   - Typical groupings by module type:
     - **Module A**: Project Structure, Content Communication, Visual Design,
       Technical Implementation
     - **Module B**: Database Design, Authentication/Security, Administrative
       Interface, Server-Side Rendering
     - **Module C**: Authentication, API Endpoints, Error Handling, External
       Integration
     - **Module D**: Frontend Design, User Interface, API Integration, Advanced
       Features
   - Order subCriterions from foundational to advanced (structure →
     functionality → quality).

### Phase 3: Scoring and weight assignment

5. **WSOS section mapping** — assign each aspect to the appropriate WSOS section
   (1-5):
   - **Section 1**: Work organization and self-management (project structure,
     deliverables)
   - **Section 2**: Communication and interpersonal skills (user feedback, error
     handling)
   - **Section 3**: Design Implementation (visual design, layout, UX)
   - **Section 4**: Front-End Development (client-side functionality,
     responsiveness)
   - **Section 5**: Back-End Development (server logic, security, database)
6. **Strategic point distribution**:
   - **Total points**: check the "Mark distribution" section in
     `project-description.md` first. If not found, follow module standards
     (Module A: 17, Module B: 20, Module C: 15-17, Module D: 22).
   - **Weight assignment**: rate each aspect 1-10 based on complexity/skill
     required, time investment, impact on overall success, and learning
     objective importance.
   - **Point allocation**: distribute total points proportionally to weights.
   - **Standard values**: use common point values (0.25, 0.5, 0.75, 1.0, 1.5,
     2.0).
   - **WSOS balance**: ensure balanced distribution across sections per the
     guidelines.

### Phase 4: Quality assurance and validation

7. **Content quality review**:
   - **Measurement aspects**: clear, objective, testable criteria verifiable
     through manual testing.
   - **Include specific test instructions**: each aspect should specify exactly
     what to test (e.g. "Test: POST with valid data returns 201", "Test: Invalid
     ID returns 404 with error message").
   - **Focus on functional verification**: prioritize aspects that test actual
     functionality over generic code quality checks.
   - **Judgement aspects**: create a 4-level progression (0-3) with distinct,
     actionable descriptions.
   - **Language**: precise, unambiguous terminology applied consistently through
     direct testing.
   - **Completeness**: verify all project requirements are covered without gaps.
   - **Straightforward marking**: each aspect can be evaluated quickly and
     objectively by following the test instructions.
8. **Structural validation**:
   - Verify the JSON structure matches the required schema.
   - Confirm total points sum correctly across all aspects.
   - Check WSOS distribution follows recommended percentages.
   - Validate point values align with complexity and module standards.

### Phase 5: Implementation and documentation

9. **JSON structure creation** — build the complete marking scheme following the
   standard format:

   ```json
   {
     "totalMark": 0,
     "wsosSections": { "1": "Work organization..." },
     "subCriterions": []
   }
   ```

   - Include all required fields for each aspect type.
   - Add specific test instructions in `extraDescription` for measurement
     aspects (e.g. "Test: GET /api/users without header returns 401").
   - Use functional descriptions specifying exact endpoints, HTTP methods,
     expected status codes, and response formats.
   - Provide detailed `judgementScoreDescription` arrays for judgement aspects.
   - Ensure every measurement aspect is verifiable through direct manual testing.
10. **Final validation and testing**:
    - Cross-check against similar reference schemes for consistency.
    - Verify the scheme covers all project deliverables.
    - Validate manual testability of every measurement aspect.
    - Confirm complex tasks are split into smaller aspects to prevent total point
      loss.
    - Assess marking efficiency (each aspect evaluable quickly and objectively).
    - Ensure point distribution reflects project priorities.

### Output requirements

- Generate `marking/marking-scheme.json` with a complete, validated structure.
- Prioritize functional testing; enable straightforward marking with specific
  test instructions.
- Break down complex functionality; avoid generic criteria.
- Ensure the scheme is immediately usable for assessment without additional
  interpretation.

### Key principles for manual-testing focus

1. **Specific over generic**: "POST /api/v1/users/login returns 401 for invalid
   credentials" instead of "Authentication system validates users".
2. **Testable instructions**: include exact test steps in the `extraDescription`
   field.
3. **Granular breakdown**: split complex features into 3-5 smaller aspects.
4. **Functional verification**: priority on what works, not how it's coded.
5. **Quick assessment**: each aspect verifiable in under 2 minutes.
