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
- **Identify the module type** from `metadata.json`, the project description, and
  folder naming (e.g. `…-rest-api-frontend`). Use stable types:
  `static`, `dynamic`, `rest-api-backend`, `rest-api-frontend`,
  `interactive-frontend`, `mini`. **Do not** map competition day labels
  (Module A/B/C…) to a technology stack — those letters are event-specific and
  change competition by competition.

**2. Study the reference framework.**

- Use `references/marking-scheme-creation-guideline.md` as the primary guideline
  for structure and standards.
- Analyze marking schemes from previously created project tasks in the
  `/project-tasks` folder. Each project folder keeps its scheme in
  `marking/marking-scheme.json`. Find the tasks whose **module type** matches
  the current one and use their schemes as references — this keeps scope, point
  values, and structure consistent across the task library.

---

## Phase 2 — Requirements extraction and organization

**3. Build a comprehensive requirements list.** Every testable requirement
becomes an individual aspect, so extract them all from the project description.

- **Prioritize manual testing.** Favor functionality you can verify through
  direct manual testing.
- **One behaviour per aspect.** If `description` or `extraDescription` needs
  “and” for two independently testable checks, split them. Use standard point
  values (0.25, 0.5, 0.75, 1.0, 1.5, 2.0) when dividing a budget across the
  split.
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
  - SPA wizard: **step shell** → **async prerequisites** (e.g. terminal loading)
    → **step validation** → **draft/score** → **create** → **confirmation
    actions**
  - claims list: **fields/links** → **URL query** → **history restore** →
    **page reset on filter** → **stale-response race**
  - claim detail: **fields** → **withdraw layers** → **poll interval** → **no
    overlap** → **visibility pause** → **stop on terminal status**
    Do not combine these into a single aspect if they can be tested independently.
- **Categorize each requirement by type:**
  - **Measurement aspects** — binary pass/fail items you can test manually
    (specific API endpoints, expected responses, error codes).
  - **Judgement aspects** — qualitative assessments (code quality, design
    creativity, user experience).
- **Avoid generic criteria.** Replace vague aspects like "input validation" with
  specific, testable scenarios.
- Review for overlapping items and consolidate duplicates, while preserving
  genuinely distinct evaluation criteria. Prefer a **thin** public/shared aspect
  when the same behaviour is already fully marked on the primary surface (e.g.
  public “same polling” vs a full authenticated polling suite).

**4. Group requirements into a logical hierarchy.** Related requirements group
into logical categories, and each category becomes a `subCriterion`. The
groupings below are starting points by **module type** — treat them as
references and adapt creatively to the actual task.

**Assessor walk-order (sub-criteria):** Prefer the order assessors will mark in,
not only “foundational first” on paper.

- **Default for behavioural / SPA tasks:** workflows first (auth → core features
  → advanced client behaviour → public surfaces), then **cross-cutting SPA
  structure/routing as a confirmation pass** (routes and guards are usually
  already exercised), then **design / UX / accessibility** last.
- **Exception:** Keep structure early when the task is mostly static HTML/CSS
  with little behavioural flow.

Within each `subCriterion`, still list aspects progressively: **basic
implementation first, then persistence, defaults, filtering, and polish**. Put
prerequisites before dependent behaviour (e.g. terminal loading before claim
submit / confirmation modal).

Starting templates by module type:

- **`static`**: Project Structure, Content Communication, Visual Design,
  Technical Implementation (structure early is fine).
- **`dynamic`**: Database Design, Authentication/Security, Administrative
  Interface, Server-Side Rendering.
- **`rest-api-backend`**: Authentication, API Endpoints, Error Handling,
  External Integration.
- **`rest-api-frontend`** (typical assessor order):
  1. Authentication and session
  2. Registration and profile (if in scope)
  3. Core feature workflows (wizards/lists/detail)
  4. Advanced client behaviour (URL state, races, polling)
  5. Public/unauthenticated surfaces
  6. SPA structure and routing (confirmation)
  7. Design, UX, accessibility
- **`interactive-frontend`**: Data Handling / core play or UI flows, Advanced
  behaviour, then structure/clean code and design as confirmation / qualitative
  wrap-up.

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

**Map honestly.** Do not reclassify front-end behaviour as Section 3 only to
hit percentage bands. For client-only SPAs, Section 4 above the recommended
band is expected; treat the validator WARN as advisory.

**6. Distribute points strategically.**

- **Total points.** Check the "Mark distribution" section of
  `project-description.md` first. If it isn't there, ask the user for the total.
  **Typical** module totals are often 18; that is a guideline, not a hard cap.
  A project may specify a different total (e.g. 22 or 33) when the task scope
  warrants more granular aspects. The project-description / user-specified total
  wins.
- **Weight each aspect 1–10** based on:
  - complexity and skill level required,
  - time investment needed,
  - impact on overall project success,
  - learning-objective importance.
- **Allocate points** proportionally to those weights.
- **Use standard point values:** 0.25, 0.5, 0.75, 1.0, 1.5, 2.0.
- **Balance WSOS sections** using the guideline’s recommended percentages as a
  target, not a mandate to mis-label aspects.
- After final totals, **sync the Mark distribution table** in
  `project-description.md` and `project-description_HU.md` when present.

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
- **Completeness — coverage audit.** Check the scheme against the project
  description for gaps (challenge features are easy to over-weight while globals
  are missed):
  - Auth/session, guards/routes, main CRUD/workflows
  - Every challenge paragraph (drafts, quality scores, races, polling, etc.)
  - Error-handling table rows (401/404/422/network, duplicate submit,
    stale/cleanup)
  - Design / accessibility / responsive
- **Assessor markability.** Each aspect should be verifiable in under ~2 minutes.
  If Network panel, throttling, or tab-hide is required, spell exact steps in
  `extraDescription`. Avoid double-barrel “X and Y” measurements.
- **Straightforward marking.** Each aspect should be quick to evaluate by simply
  following its test instructions.

**8. Validate the structure.**

- Verify the JSON structure matches the required schema.
- Confirm the total points sum correctly across all aspects.
- Check that the WSOS distribution is honest; review guideline-band WARNINGs but
  do not invent Design marks from Front-End behaviour.
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

- Workflow: **write → validate → rebalance → sync mark tables**.
- Run the validator script (see below) and resolve every error it reports.
- Treat WSOS-band and “typical total” warnings as advisory; fix where it makes
  sense without dishonest section mapping.
- When the user raises one aspect’s `maxMark`, **default to splitting** into
  one-behaviour aspects that sum to the new budget — do not keep a composite.
- Prefer assessor walk-order for SPA/behavioural tasks (routing near the end as
  confirmation). Adjust after review if the user prefers a different order.
- Cross-check against similar reference schemes for consistency.
- Verify the scheme covers all project deliverables (re-run the coverage audit).
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
- Sync Mark distribution tables in the project description(s) to the final WSOS
  totals.

## Key principles for a manual-testing focus

1. **Specific over generic** — "POST /api/v1/users/login returns 401 for invalid
   credentials", not "Authentication system validates users".
2. **Testable instructions** — put exact test steps in the `extraDescription`
   field.
3. **Granular breakdown** — split complex features into 3–5 smaller aspects;
   one behaviour per aspect.
4. **Progressive layering** — mark whether a feature works before marking
   persistence, defaults, or advanced behaviour on top of it.
5. **Functional verification** — prioritize what works over how it's coded.
6. **Quick assessment** — every aspect should be verifiable in under 2 minutes.
7. **Assessor walk-order** — for SPA tasks, mark workflows before a routing
   confirmation pass and design judgements.
