# Marking Scheme Creation Guideline

This guideline provides standards and best practices for creating marking schemes for EuroSkills / WorldSkills-style competition modules, based on analysis of existing marking schemes.

## Overview

Marking schemes are JSON files that define assessment criteria, point distributions, and evaluation methods for competition modules. They follow the WSOS (WorldSkills Occupational Standards) framework with 5 core sections.

**Module types vs competition letters.** Schemes and patterns are organised by
**stable module types** (`static`, `dynamic`, `rest-api-backend`,
`rest-api-frontend`, `interactive-frontend`, `mini`). Competition day labels
(Module A/B/C…) are **event-specific**: their order and meaning change
competition by competition. Never infer a technology stack from the letter
alone. Derive the type from `metadata.json`, the project description, and folder
naming (e.g. `…-rest-api-frontend`).

## JSON Structure Requirements

### Root Level Properties

```json
{
  "totalMark": 17,
  "wsosSections": {
    "1": "Work organization and self-management",
    "2": "Communication and interpersonal skills",
    "3": "Design Implementation",
    "4": "Front-End Development",
    "5": "Back-End Development"
  },
  "subCriterions": [...]
}
```

**Required Fields:**

- `totalMark`: Integer representing total possible points
- `wsosSections`: Object mapping section numbers (1-5) to descriptive names
- `subCriterions`: Array of criterion objects

### WSOS Section Definitions

The 5 standard WSOS sections used across modules:

1. **Work organization and self-management** - Project structure, file organization, deliverables
2. **Communication and interpersonal skills** - User feedback, error handling, documentation clarity
3. **Design Implementation** - Visual design, layout, user experience, accessibility
4. **Front-End Development** - Client-side functionality, responsiveness, standards compliance
5. **Back-End Development** - Server-side logic, security, database design, API implementation

### Sub-Criterion Structure

```json
{
  "name": "Project Structure and File Organization",
  "aspects": [...]
}
```

**Required Fields:**

- `name`: Descriptive name for the criterion category
- `aspects`: Array of individual assessment aspects

### Aspect Structure

#### Measurement Aspects (Pass/Fail)

```json
{
  "type": "measurement",
  "description": "All 4 required pages are implemented",
  "maxMark": 0.25,
  "wsosSection": 1,
  "extraDescription": "Detailed explanation of what is being measured",
  "calculation": {
    "type": "pass-or-fail"
  }
}
```

#### Judgement Aspects (Qualitative Assessment)

```json
{
  "type": "judgement",
  "description": "Code organization and maintainability",
  "maxMark": 0.5,
  "wsosSection": 1,
  "judgementScoreDescription": [
    "Level 0: Poor description",
    "Level 1: Basic description",
    "Level 2: Good description",
    "Level 3: Excellent description"
  ]
}
```

**Required Fields for All Aspects:**

- `type`: Either "measurement" or "judgement"
- `description`: Clear, concise description of what is being assessed
- `maxMark`: Point value (can be decimal: 0.25, 0.5, 0.75, 1, 1.5, 2.0). The maximum value is 2.0!
- `wsosSection`: Integer (1-5) indicating which WSOS section this belongs to

**Additional Fields:**

- `extraDescription`: (Optional) Detailed explanation for measurement aspects
- `calculation`: (For measurement) Object with `type: "pass-or-fail"`
- `judgementScoreDescription`: (For judgement) Array of 4 level descriptions (0-3)

## Point Distribution Guidelines

### Typical Total Points by Module Type

These are **typical** totals (aligned with `--module-type` on the validator), not hard caps. The project description or author may specify a different total when the task needs finer aspects.

- **`static`**: 18 points
- **`dynamic`**: 18 points
- **`rest-api-backend`**: 18 points
- **`rest-api-frontend`**: 18 points
- **`interactive-frontend`**: 18 points
- **`mini`**: 10 points

### Point Value Standards

**Common point values:**

- `0.25`: Small features or basic requirements
- `0.5`: Standard features or moderate requirements
- `0.75`: Important features requiring skill
- `1.0`: Major features or critical functionality
- `1.5`: Complex features requiring advanced skills
- `2.0`: Most complex features requiring advanced skills and significant time investment

### WSOS Section Balance

Aim for balanced distribution across WSOS sections (**recommended bands**):

- **Section 1 (Work Organization)**: 10-15% of total points
- **Section 2 (Communication)**: 5-10% of total points
- **Section 3 (Design)**: 25-35% of total points
- **Section 4 (Frontend)**: 30-40% of total points
- **Section 5 (Backend)**: 20-30% of total points (backend-heavy modules)

**Honesty over forced balance.** Map aspects to the section that describes what
they actually test. For **client-only** modules, omit Section 5; Section 4
often exceeds 40% on feature-dense SPAs — that is acceptable and may surface as
a validator WARN. Do **not** reclassify create/submit/API-integration behaviour
as Section 3 solely to hit the Frontend band.

## Writing Assessment Descriptions

### Progressive aspect layering

Within a feature area, split requirements into **ordered layers** so competitors
earn partial credit for basic implementation before advanced behaviour:

1. **Core functionality** — does the feature work at all? (e.g. theme toggle
   switches light/dark; calendar shows a monthly grid with month navigation)
2. **Expected content or behaviour** — does it show the right data or UI?
   (e.g. day cells display sequence, name, hours, badges)
3. **Defaults and startup state** — correct initial view? (e.g. current month on
   load; current Kanban week selected)
4. **Persistence and edge cases** — survives reload? (e.g. theme persists;
   export excludes runtime IDs)
5. **Polish and filtering** — refinements (e.g. MITS picker filters by type;
   statistics list only incomplete entries)

Use **separate measurement aspects** for layers that can be tested independently.
Do not merge "toggle works" and "persists after reload" into one aspect.
**One behaviour per aspect** — if the text needs “and” for two independent
checks, split them.

### Measurement Aspects

**Good practices:**

- Use clear, actionable language
- Specify exact requirements
- Include technical details in `extraDescription`
- Focus on objective, verifiable criteria
- Spell Network / throttle / tab-hide steps when the mark depends on them

**Examples:**

```json
{
  "description": "W3C HTML validation compliance",
  "extraDescription": "All HTML files pass W3C validation with no errors"
}
```

### Judgement Aspects

**4-Level Scale Requirements:**

- **Level 0**: Complete failure or absence
- **Level 1**: Basic/minimal implementation
- **Level 2**: Good/solid implementation
- **Level 3**: Excellent/exceptional implementation

**Good practices:**

- Use progressive language showing improvement
- Include specific technical criteria
- Avoid subjective terms without context
- Provide clear differentiation between levels

**Example:**

```json
"judgementScoreDescription": [
  "CSS code is unorganized with poor structure and no meaningful class names",
  "CSS code has basic organization but lacks consistent naming conventions",
  "CSS code is well-organized with good structure and meaningful class names",
  "CSS code is excellently organized with modular structure, meaningful class names, efficient use of modern CSS features, and easy maintainability"
]
```

## Calculation Types

### Standard Types

- `"pass-or-fail"`: Most common for measurement aspects
- `"judgement"`:

### Implementation Notes

- Measurement aspects typically use binary scoring (0 or full points)
- Judgement aspects use 4-level scale (0, 1, 2, 3) mapped to percentage of maxMark
- Final scores are calculated as: `(level / 3) * maxMark`

## Quality Assurance Checklist

### Structure Validation

- [ ] Total points add up correctly across all aspects
- [ ] WSOS sections used are appropriate for the module type (omit S5 when client-only)
- [ ] JSON syntax is valid
- [ ] Required fields are present for all aspects
- [ ] Mark distribution table in the project description matches final WSOS totals

### Content Quality

- [ ] Descriptions are clear and unambiguous
- [ ] Assessment criteria are objective and measurable
- [ ] **One behaviour per aspect** (no double-barrel “X and Y” measurements)
- [ ] Point values reflect relative importance
- [ ] Judgement levels show clear progression
- [ ] Technical requirements are specific
- [ ] Hard-to-observe tests include exact assessor steps in `extraDescription`

### Coverage Audit

- [ ] Main workflows and challenge features from the project description are marked
- [ ] Error-handling table rows are represented (401/404/422/network, duplicate submit, cleanup/stale where required)
- [ ] Design / accessibility / responsive requirements are covered without stealing Front-End points into Design dishonestly

### Module Alignment

- [ ] Module type identified from metadata/folder/description — not from competition letter alone
- [ ] Criteria match module learning objectives
- [ ] Point distribution reflects module complexity (total may differ from “typical 18”)
- [ ] Assessment covers all key competencies
- [ ] Difficulty level appropriate for competition timeframe
- [ ] Sub-criterion order matches assessor walk-order for the module type

## Anti-patterns

Avoid these recurring failures:

- **Double-barrel aspects** — one measurement that packs two independent pass/fail checks (“loading and retry and required selection”).
- **Structure-first for SPAs** — forcing routing/structure as the first sub-criterion when assessors already navigate those routes while marking workflows; put routing as a late confirmation pass unless the task is static markup.
- **Padding Section 3** — classifying create/submit/API behaviour as Design solely to satisfy Frontend % bands.
- **Challenge-only schemes** — over-weighting novel features while leaving the project description’s error-handling and cleanup rows unmarked.
- **Assuming “Module B” means a fixed stack** — competition letters are event-specific; use module types.
- **Duplicated depth** — fully marking polling/journey on the authenticated surface and again at full depth on a public track page; keep the secondary surface thin.

## Common Patterns by Module Type

### `static`

- Focus on HTML/CSS standards compliance
- Responsive design across multiple viewports
- Accessibility and SEO considerations
- File organization and project structure (structure early is appropriate)

### `dynamic`

- Server-side rendering implementation
- Database design and integration
- Authentication and security measures
- Administrative interface functionality

### `rest-api-backend`

- Authentication token handling
- Error response specifications
- Database operations and integrity
- External service integration

### `rest-api-frontend`

- Passenger/consumer SPA against a provided API
- Auth session, route guards, workflow screens
- Advanced client behaviour: URL state, stale responses, polling
- Assessor order tip: workflows → public surfaces → routing confirmation → design

### `interactive-frontend`

- Client-only app or game prototype (may not use a REST API)
- Core interaction loops and data handling
- Real-time or timer-driven behaviour where specified
- Error handling and user feedback

### `mini`

- Smaller total (typically 10); fewer, sharper aspects
- Still one behaviour per aspect and clear test steps

### Worked `rest-api-frontend` split examples

Prefer fine splits like:

- Confirmation modal: **summary + copyable reference** | **Create new claim resets wizard** | **Show my claims / dismiss navigates**
- Polling: **~15s interval** | **no overlapping requests** | **pause when hidden / refresh when visible** | **stop on terminal statuses**
- Claims URL workspace: **query stores status + page** | **reload/back/forward restore** | **status change resets to page 1**
- Terminals: **loading state** | **error + Retry** | **cannot continue without successful selection**

## Examples from Reference Schemes

### Well-Structured Measurement Aspect

```json
{
  "type": "measurement",
  "description": "Purple-orange-cyan color scheme implementation",
  "maxMark": 0.5,
  "wsosSection": 3,
  "extraDescription": "Uses specified vibrant purple (#7c3aed), orange (#f97316), cyan (#06b6d4) color palette consistently",
  "calculation": {
    "type": "pass-or-fail"
  }
}
```

### Well-Structured Judgement Aspect

```json
{
  "type": "judgement",
  "description": "Overall visual design quality and creativity",
  "maxMark": 0.75,
  "wsosSection": 3,
  "judgementScoreDescription": [
    "Design lacks creativity and visual appeal, poor use of color scheme and layout",
    "Design has basic visual appeal but limited creativity in layout and color usage",
    "Design is visually appealing with good use of color scheme and creative layout elements",
    "Excellent creative design with outstanding visual appeal, masterful use of color scheme, and innovative layout that effectively communicates the SkillShare Academy brand"
  ]
}
```

## Validation Tools

When creating marking schemes, validate using:

1. JSON syntax validators
2. Point total calculators
3. WSOS distribution analysis (bands are advisory; honesty first)
4. Peer review with other module creators
5. Test implementation with sample submissions
6. The bundled script:
   `node .claude/skills/mits-marking-scheme-creator/scripts/validate-marking-scheme.js marking/marking-scheme.json --module-type=<type>`

---

_This guideline should be updated as marking scheme standards evolve and new patterns emerge from competition implementation._
