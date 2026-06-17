---
name: mits-marking-scheme-creator
description: Create or update the marking scheme (marking/marking-scheme.json) for a MITS project task (test project) by analyzing the project description and producing WSOS-aligned, manually-testable measurement and judgement aspects. Use this skill whenever the user asks to create, build, author, generate, write, or update a marking scheme for a MITS test project, or mentions marking-scheme.json, assessment aspects, WSOS sections, or point/mark distribution for a project task — even if they don't name the file explicitly. (To convert an existing marking scheme between JSON and Excel, use mits-project-task-updater instead.)
---

# MITS Marking Scheme Creator

Create or update the marking scheme in `marking/marking-scheme.json` for a MITS
project task (test project). A good marking scheme lets an assessor evaluate a
real submission quickly and objectively, mostly through direct manual testing,
with complex features broken into small aspects so competitors can earn partial
credit instead of losing everything on one hard task.

## Before you start

- Read `/current-project.md` to identify the project task (test project) folder
  you are working on. **All paths below are relative to that project folder**,
  except paths that begin with `/`, which are absolute.
- The deliverable is a single file: `marking/marking-scheme.json`.
- `references/marking-scheme-creation-guideline.md` is the **primary guideline**
  for the JSON schema, field rules, point values, and WSOS distribution. Read it
  alongside this file — it holds the full schema and worked examples that this
  document only summarizes.

Work through the five phases below in order.

---

## Phase 1 — Project analysis and understanding

**1. Analyze the project context.**

- Read `project-description.md` thoroughly to understand the requirements,
  scope, and technical specifications.
- Review the files in the `assets/` folder for additional requirements, content
  specifications, or visual guidelines.
- Check `metadata.json` for the module type, duration, and point totals.

**2. Study the reference framework.**

- Use `references/marking-scheme-creation-guideline.md` as the primary guideline
  for structure and standards.
- Analyze marking schemes from previously created project tasks in the
  `/project-tasks` folder. Each project folder keeps its scheme in
  `marking/marking-scheme.json`. Find the tasks whose module type matches the
  current one and use their schemes as references — this keeps scope, point
  values, and structure consistent across the task library.

---

## Phase 2 — Requirements extraction and organization

**3. Build a comprehensive requirements list.** Every testable requirement
becomes an individual aspect, so extract them all from the project description.

- **Prioritize manual testing.** Favor functionality you can verify through
  direct manual testing.
- **Break down complex tasks.** Split complex functionality into smaller,
  granular aspects so a competitor who struggles with one hard task doesn't lose
  all the related points at once.
- **Layer aspects from basic to advanced.** Within each feature area, order
  aspects so the **foundational behaviour is marked first**, then refinements.
  Test core functionality before persistence, polish, or edge cases. Examples:
  - theme **toggle works** → theme **persists after reload**
  - monthly calendar **grid with month navigation** → day cells show **expected
    content** → calendar opens on the **current month**
  - Kanban **board with week navigation** → **current week on startup** → card
    layout details
  - export **downloads JSON** → exported JSON has **no runtime-only IDs**
    Do not combine these into a single aspect if they can be tested independently.
- **Categorize each requirement by type:**
  - **Measurement aspects** — binary pass/fail items you can test manually
    (specific API endpoints, expected responses, error codes).
  - **Judgement aspects** — qualitative assessments (code quality, design
    creativity, user experience).
- **Avoid generic criteria.** Replace vague aspects like "input validation" with
  specific, testable scenarios.
- Review for overlapping items and consolidate duplicates, while preserving
  genuinely distinct evaluation criteria.

**4. Group requirements into a logical hierarchy.** Related requirements group
into logical categories, and each category becomes a `subCriterion`. The
groupings below are starting points by module type — treat them as references
and adapt creatively to the actual task. When grouping, consider a logical
evaluation order — for example on a webpage: first layout/structure, then
visual elements of the different parts, then basic functionalities, and finally
the most advanced functionalities.

- **Static websites** (design implementation, HTML, CSS): Project Structure,
  Content Communication, Visual Design, Technical Implementation.
- **Dynamic websites** (SSR, admin interface): Database Design,
  Authentication/Security, Administrative Interface, Server-Side Rendering.
- **REST API backend**: Authentication, API Endpoints, Error Handling, External
  Integration.
- **REST API interactive frontend**: Frontend Design, User Interface, API
  Integration, Advanced Features.
- **Non-REST API interactive frontend** (e.g. a JS game, web app prototype):
  Layout, Data Handling, User Experience, Clean Code.

Order the `subCriterions` from foundational to advanced
(structure → functionality → quality). Within each `subCriterion`, list
aspects in the same order: **basic implementation first, then persistence,
defaults, filtering, and polish**.

---

## Phase 3 — Scoring and weight assignment

**5. Map each aspect to a WSOS section.** Assign every aspect to the appropriate
WSOS section (1–5):

- **Section 1 — Work organization and self-management**: project structure,
  deliverables.
- **Section 2 — Communication and interpersonal skills**: user feedback, error
  handling.
- **Section 3 — Design Implementation**: visual design, layout, UX.
- **Section 4 — Front-End Development**: client-side functionality,
  responsiveness, client-side business rules and data handling.
- **Section 5 — Back-End Development**: server logic, security, database.
  **Do not use for client-only modules** — assign business-rule enforcement
  and data integrity to Section 4 instead, and omit Section 5 from the mark
  distribution table.

**6. Distribute points strategically.**

- **Total points.** Check the "Mark distribution" section of
  `project-description.md` first. If it isn't there, ask the user for the total.
  Module totals are guidelines (often 18); a project may specify a different
  total (e.g. 21) when the task scope warrants more granular aspects.
- **Weight each aspect 1–10** based on:
  - complexity and skill level required,
  - time investment needed,
  - impact on overall project success,
  - learning-objective importance.
- **Allocate points** proportionally to those weights.
- **Use standard point values:** 0.25, 0.5, 0.75, 1.0, 1.5, 2.0.
- **Balance the WSOS sections** so points are distributed across them per the
  recommended percentages in the guideline.

---

## Phase 4 — Quality assurance and validation

**7. Review content quality.**

- **Measurement aspects** must have clear, objective, testable criteria that can
  be verified through manual testing.
- **Include specific test instructions.** Each aspect should state exactly what
  to test — e.g. "Test: POST with valid data returns 201" or "Test: Invalid ID
  returns 404 with error message".
- **Focus on functional verification.** Prioritize aspects that test actual
  functionality over generic code-quality checks.
- **Judgement aspects** use a 4-level progression (0–3) with distinct,
  actionable level descriptions.
- **Language.** Use precise, unambiguous terminology that assessors can apply
  consistently through direct testing.
- **Completeness.** Verify that all project requirements are covered, with no
  gaps.
- **Straightforward marking.** Each aspect should be quick to evaluate by simply
  following its test instructions.

**8. Validate the structure.**

- Verify the JSON structure matches the required schema.
- Confirm the total points sum correctly across all aspects.
- Check that the WSOS distribution follows the recommended percentages.
- Validate that point values align with complexity and module standards.

---

## Phase 5 — Implementation and documentation

**9. Create the JSON structure.** Build the complete marking scheme in the
standard format:

```json
{
  "totalMark": [total],
  "wsosSections": { "1": "Work organization...", ... },
  "subCriterions": [...]
}
```

- Include every required field for each aspect type (see the guideline for the
  full schema of measurement and judgement aspects).
- **Add specific test instructions** in `extraDescription` for measurement
  aspects — e.g. "Test: GET /api/users without header returns 401".
- **Use functional descriptions** that name exact endpoints, HTTP methods,
  expected status codes, and response formats.
- Provide detailed `judgementScoreDescription` arrays for judgement aspects.
- **Ensure testability** — every measurement aspect must be verifiable through
  direct manual testing.

**10. Validate and finalize.**

- Run the validator script (see below) and resolve every error it reports.
- Cross-check against similar reference schemes for consistency.
- Verify the scheme covers all project deliverables.
- Confirm complex tasks are split into smaller aspects to prevent total point
  loss.
- Confirm each aspect can be evaluated quickly and objectively.
- Ensure the point distribution reflects the project's priorities.
- Confirm an assessor could use the scheme to evaluate a real submission through
  direct functional testing.

### Validate with the script

After writing `marking/marking-scheme.json`, validate it with the bundled
script. It checks the schema deterministically — required fields, the 2.0
maximum per aspect, the 4 judgement levels, `pass-or-fail` calculation on
measurement aspects, that the aspect marks sum to `totalMark`, and that the WSOS
distribution falls within the guideline's recommended bands.

```bash
node .claude/skills/mits-marking-scheme-creator/scripts/validate-marking-scheme.js marking/marking-scheme.json
```

Pass the module type to also check the recommended total, and `--strict` to fail
on warnings as well as errors:

```bash
node .claude/skills/mits-marking-scheme-creator/scripts/validate-marking-scheme.js \
  marking/marking-scheme.json --module-type=static --strict
```

The script prints a summary plus `ERROR`/`WARN` lines and exits non-zero when
there are errors. Treat every error as a blocker; warnings are advisory
guideline checks (e.g. a non-standard point value or a section outside its
recommended percentage band) — review them and fix where it makes sense.

---

## Output requirements

- Generate `marking/marking-scheme.json` with a complete, validated structure.
- **Prioritize functional testing** — favor aspects verified through manual API
  testing, file checks, or direct interaction.
- **Enable straightforward marking** — each aspect includes specific test
  instructions that remove guesswork.
- **Break down complex functionality** into smaller, testable components so
  partial credit is possible.
- **Avoid generic criteria** — replace vague assessments with concrete, testable
  requirements.
- Make the scheme immediately usable for assessment without further
  interpretation.
- Include clear aspect descriptions that remove assessor ambiguity.
- Follow all formatting and content standards from the guideline document.

## Key principles for a manual-testing focus

1. **Specific over generic** — "POST /api/v1/users/login returns 401 for invalid
   credentials", not "Authentication system validates users".
2. **Testable instructions** — put exact test steps in the `extraDescription`
   field.
3. **Granular breakdown** — split complex features into 3–5 smaller aspects.
4. **Progressive layering** — mark whether a feature works before marking
   persistence, defaults, or advanced behaviour on top of it.
5. **Functional verification** — prioritize what works over how it's coded.
6. **Quick assessment** — every aspect should be verifiable in under 2 minutes.
