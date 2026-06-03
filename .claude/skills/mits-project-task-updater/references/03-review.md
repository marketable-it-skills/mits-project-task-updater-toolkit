# Process 3: Review the project task (optional)

Optional step. Review an updated MITS project task to ensure it complies with all
standardization requirements in `mits-project-task-creation-guide.md`. Run this
after Process 1, after Process 2, or after both — only when the user requests it.

## Input

The target project folder under `/project-tasks/staging/`, e.g.
`/project-tasks/staging/s17-es2025-module_a-static-website-design`.

## Process

### 1. Read the guide

Read `/.claude/guide/mits-project-task-creation-guide.md` to understand all
requirements and standards.

### 2. Review required files

Thoroughly review the following files in the specified project folder:

- `README.md`
- `project-description.md`
- `metadata.json`
- `marking/marking-scheme.json`

### 3. Check against standards

#### README.md

- Contains project title and short description
- Lists skill domain(s)
- Includes task origin (competition name, year, module, authors)
- Has links to important documents
- Includes MITS project description with Erasmus+ funding and partner
  information

#### project-description.md

- Follows exact header hierarchy (`#` title, `##` main sections, `###`
  subsections, `####` details)
- Contains all required sections in order: Competition time, Introduction,
  General Description of Project and Tasks, Requirements, Assessment, Mark
  distribution
- Mark distribution table is properly formatted
- All images referenced exist in `assets/project-description-images/`

#### metadata.json

- Contains all required fields: name, displayName, description, url,
  skillDomainIds, competition, estTime, authors, technologies, tags
- Data types are correct (arrays, numbers, strings)
- URLs are valid
- Authors have proper structure with name and url

#### marking/marking-scheme.json

- Valid JSON structure
- Consistent with project requirements
- Points align with the mark distribution in `project-description.md`

#### Content quality checks

**Duplicate content detection:**

- Review all files (especially `project-description.md` and `README.md`) for
  unnecessary duplicate descriptions
- Identify sections where the same information appears multiple times
- Suggest removal of duplicates while preserving unique information
- Ensure no information loss when consolidating duplicates

**Language and clarity:**

- Check for linguistic errors (grammar, spelling, punctuation)
- Identify unclear or confusing sentences
- Flag inconsistent terminology or styling
- Suggest improvements for readability and professionalism
- Verify technical accuracy of descriptions

### 4. Generate the review report

Create a `review.md` file in the project folder with this structure:

```markdown
# Project Review: [Project Name]

## Summary

[Brief overview of review findings]

## Issues Found

### Critical Issues

[Issues that must be fixed before integration]

### Important Issues

[Issues that should be addressed but don't block integration]

### Minor Issues

[Nice-to-have improvements and suggestions]

## Content Quality Issues

### Duplicate Content

[List any duplicate descriptions found and suggest consolidation]

### Language and Clarity

[Grammar errors, unclear sentences, styling inconsistencies]

## Compliance Checklist

- [ ] README.md structure
- [ ] project-description.md header hierarchy
- [ ] All required sections present
- [ ] metadata.json valid and complete
- [ ] marking-scheme.json valid
- [ ] Assets properly organized
- [ ] No broken links or references
- [ ] No unnecessary duplicate content
- [ ] Clear and grammatically correct language

## Recommendations

[Overall suggestions for improvement]
```

#### Issue categorization

- **Critical**: missing required files/sections, invalid JSON, broken structure,
  incorrect file names, duplicate Level 1 headers, incorrect totalMark values
- **Important**: incomplete metadata, formatting inconsistencies, missing
  information, significant duplicate content that causes confusion, unclear
  technical requirements
- **Minor**: grammar improvements, style suggestions, optimization
  opportunities, minor duplicate content, small clarity improvements

**Content quality issues** (separate category):

- **Duplicate content**: consolidate repeated information while preserving unique
  details
- **Language and clarity**: fix grammar, spelling, unclear sentences, and improve
  readability

### 5. Final clean-up

Once the review report is generated and the project is confirmed compliant,
remove the unnecessary working files so the staging project contains only the
standardized deliverables.

**List the files to be deleted and ask the user to confirm before removing
anything.** Then delete, when present:

- The working planning file:
  `/project-tasks/staging/[project-task-name]/projectplan.md`
- The original Excel marking scheme in the project's `marking/` folder (any
  `*.xlsx`), once it has been converted to `marking-scheme.json`
- Temporary converter outputs left in the skill's converter folder
  `.claude/skills/mits-project-task-updater/scripts/xlsx-to-json/`:
  `marking-scheme-raw.json`, `marking-scheme-structured.json`,
  `new-marking-scheme.json`, `marking-scheme-converted.json`

Do **not** delete the standardized deliverables: `project-description.md`,
`metadata.json`, `README.md`, `marking/marking-scheme.json`, the `assets/`
folder, `LICENSE`, or the `review.md` report itself.

## Output

`review.md` in the project folder, containing structural compliance issues
(critical, important, minor), duplicate content analysis with consolidation
suggestions, language and clarity improvements, a comprehensive compliance
checklist, and overall recommendations.

After the report, the project folder is cleaned of working files (see
[Final clean-up](#5-final-clean-up)), leaving only the standardized deliverables.
