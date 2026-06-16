#!/usr/bin/env node
/**
 * Validates a MITS marking scheme (marking/marking-scheme.json) against the
 * technical specifications in references/marking-scheme-creation-guideline.md.
 *
 * The validator distinguishes two severities:
 *   - ERROR   : a hard structural/schema rule is violated (script exits 1).
 *   - WARNING : a "guideline"-level recommendation is not met (script exits 0).
 *
 * This mirrors the language of the guideline: required schema rules are
 * enforced strictly, while distribution targets and standard point values are
 * reported as advisory warnings.
 *
 * Usage:
 *   node validate-marking-scheme.js <marking-scheme.json> [--module-type=<type>] [--strict]
 *
 * Options:
 *   --module-type=<type>  Expected module type, used to check the recommended
 *                         total. One of: static, dynamic, rest-api-backend,
 *                         rest-api-frontend, interactive-frontend, mini.
 *   --strict              Treat warnings as errors (exit 1 if any warning).
 */

const fs = require("fs");

// ---------------------------------------------------------------------------
// Specification constants (taken verbatim from the guideline — do not change)
// ---------------------------------------------------------------------------

// The 5 standard WSOS sections used across modules.
const WSOS_SECTIONS = {
  1: "Work organization and self-management",
  2: "Communication and interpersonal skills",
  3: "Design Implementation",
  4: "Front-End Development",
  5: "Back-End Development",
};

// Maximum allowed mark for a single aspect ("The maximum value is 2.0!").
const MAX_ASPECT_MARK = 2.0;

// Common point values (advisory — non-standard values trigger a warning).
const STANDARD_POINT_VALUES = [0.25, 0.5, 0.75, 1.0, 1.5, 2.0];

// Typical total points by module type.
const MODULE_TOTALS = {
  static: 18,
  dynamic: 18,
  "rest-api-backend": 18,
  "rest-api-frontend": 18,
  "interactive-frontend": 18,
  mini: 10,
};

// Recommended share of total points per WSOS section (inclusive ranges, %).
const WSOS_BALANCE = {
  1: { min: 10, max: 15, label: "Work Organization" },
  2: { min: 5, max: 10, label: "Communication" },
  3: { min: 25, max: 35, label: "Design" },
  4: { min: 30, max: 40, label: "Frontend" },
  5: { min: 20, max: 30, label: "Backend" },
};

// Number of judgement levels (0-3).
const JUDGEMENT_LEVELS = 4;

// ---------------------------------------------------------------------------
// Collector
// ---------------------------------------------------------------------------

const errors = [];
const warnings = [];

/** Record a hard error against a JSON path. */
function error(path, message) {
  errors.push(`${path}: ${message}`);
}

/** Record an advisory warning against a JSON path. */
function warn(path, message) {
  warnings.push(`${path}: ${message}`);
}

/** Round to 2 decimals to avoid floating-point noise when summing marks. */
function round2(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

/**
 * Validate the root object: totalMark, wsosSections, subCriterions.
 */
function validateRoot(scheme) {
  if (typeof scheme !== "object" || scheme === null || Array.isArray(scheme)) {
    error("(root)", "marking scheme must be a JSON object");
    return false;
  }

  if (typeof scheme.totalMark !== "number" || !Number.isFinite(scheme.totalMark)) {
    error("totalMark", "must be a number (total possible points)");
  }

  if (
    typeof scheme.wsosSections !== "object" ||
    scheme.wsosSections === null ||
    Array.isArray(scheme.wsosSections)
  ) {
    error("wsosSections", "must be an object mapping section numbers (1-5) to names");
  } else {
    for (const key of Object.keys(scheme.wsosSections)) {
      const num = Number(key);
      if (!Number.isInteger(num) || num < 1 || num > 5) {
        error(`wsosSections["${key}"]`, "section key must be an integer 1-5");
      } else if (typeof scheme.wsosSections[key] !== "string" || !scheme.wsosSections[key].trim()) {
        error(`wsosSections["${key}"]`, "section name must be a non-empty string");
      }
    }
  }

  if (!Array.isArray(scheme.subCriterions) || scheme.subCriterions.length === 0) {
    error("subCriterions", "must be a non-empty array of criterion objects");
    return false;
  }

  return true;
}

/**
 * Validate a single aspect. Returns its (numeric) maxMark and wsosSection
 * for downstream aggregation, or null values when unusable.
 */
function validateAspect(aspect, path, referencedSections) {
  if (typeof aspect !== "object" || aspect === null || Array.isArray(aspect)) {
    error(path, "aspect must be an object");
    return { maxMark: 0, wsosSection: null };
  }

  // type
  if (aspect.type !== "measurement" && aspect.type !== "judgement") {
    error(`${path}.type`, 'must be "measurement" or "judgement"');
  }

  // description
  if (typeof aspect.description !== "string" || !aspect.description.trim()) {
    error(`${path}.description`, "must be a non-empty string");
  }

  // maxMark
  let maxMark = 0;
  if (typeof aspect.maxMark !== "number" || !Number.isFinite(aspect.maxMark)) {
    error(`${path}.maxMark`, "must be a number");
  } else {
    maxMark = aspect.maxMark;
    if (maxMark <= 0) {
      error(`${path}.maxMark`, "must be greater than 0");
    }
    if (maxMark > MAX_ASPECT_MARK) {
      error(`${path}.maxMark`, `must not exceed ${MAX_ASPECT_MARK} (the maximum value is ${MAX_ASPECT_MARK}!)`);
    }
    if (maxMark > 0 && maxMark <= MAX_ASPECT_MARK && !STANDARD_POINT_VALUES.includes(maxMark)) {
      warn(
        `${path}.maxMark`,
        `value ${maxMark} is not a standard point value (${STANDARD_POINT_VALUES.join(", ")})`
      );
    }
  }

  // wsosSection
  let wsosSection = null;
  if (!Number.isInteger(aspect.wsosSection) || aspect.wsosSection < 1 || aspect.wsosSection > 5) {
    error(`${path}.wsosSection`, "must be an integer 1-5");
  } else {
    wsosSection = aspect.wsosSection;
    referencedSections.add(wsosSection);
  }

  // type-specific rules
  if (aspect.type === "measurement") {
    if (!aspect.calculation || typeof aspect.calculation !== "object") {
      error(`${path}.calculation`, 'measurement aspect must define calculation { type: "pass-or-fail" }');
    } else if (aspect.calculation.type !== "pass-or-fail") {
      error(`${path}.calculation.type`, 'must be "pass-or-fail" for measurement aspects');
    }
    if (Array.isArray(aspect.judgementScoreDescription)) {
      warn(`${path}`, "measurement aspect should not define judgementScoreDescription");
    }
  } else if (aspect.type === "judgement") {
    const descs = aspect.judgementScoreDescription;
    if (!Array.isArray(descs)) {
      error(`${path}.judgementScoreDescription`, `must be an array of exactly ${JUDGEMENT_LEVELS} level descriptions (0-3)`);
    } else {
      if (descs.length !== JUDGEMENT_LEVELS) {
        error(
          `${path}.judgementScoreDescription`,
          `must contain exactly ${JUDGEMENT_LEVELS} entries (levels 0-3), found ${descs.length}`
        );
      }
      descs.forEach((d, i) => {
        if (typeof d !== "string" || !d.trim()) {
          error(`${path}.judgementScoreDescription[${i}]`, "level description must be a non-empty string");
        }
      });
    }
    if (aspect.calculation !== undefined) {
      warn(`${path}`, "judgement aspect should not define a pass-or-fail calculation");
    }
  }

  return { maxMark, wsosSection };
}

/**
 * Validate the subCriterions array and aggregate marks per WSOS section.
 */
function validateSubCriterions(scheme, referencedSections) {
  let sumMarks = 0;
  const marksBySection = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  scheme.subCriterions.forEach((sc, i) => {
    const scPath = `subCriterions[${i}]`;

    if (typeof sc !== "object" || sc === null || Array.isArray(sc)) {
      error(scPath, "sub-criterion must be an object");
      return;
    }
    if (typeof sc.name !== "string" || !sc.name.trim()) {
      error(`${scPath}.name`, "must be a non-empty string");
    }
    if (!Array.isArray(sc.aspects) || sc.aspects.length === 0) {
      error(`${scPath}.aspects`, "must be a non-empty array of aspect objects");
      return;
    }

    sc.aspects.forEach((aspect, j) => {
      const { maxMark, wsosSection } = validateAspect(aspect, `${scPath}.aspects[${j}]`, referencedSections);
      sumMarks += maxMark;
      if (wsosSection !== null) {
        marksBySection[wsosSection] += maxMark;
      }
    });
  });

  return { sumMarks: round2(sumMarks), marksBySection };
}

/**
 * Cross-checks that depend on aggregated totals: total reconciliation,
 * referenced sections being declared, module total, and WSOS balance.
 */
function validateTotals(scheme, sumMarks, marksBySection, referencedSections, moduleType) {
  // Sum of aspect marks must reconcile with totalMark.
  if (typeof scheme.totalMark === "number" && Number.isFinite(scheme.totalMark)) {
    if (Math.abs(sumMarks - scheme.totalMark) > 0.01) {
      error(
        "totalMark",
        `declared total (${scheme.totalMark}) does not match the sum of aspect maxMarks (${sumMarks})`
      );
    }

    // Recommended total for the given module type.
    if (moduleType) {
      const expected = MODULE_TOTALS[moduleType];
      if (expected === undefined) {
        warn("(module-type)", `unknown module type "${moduleType}" (expected one of: ${Object.keys(MODULE_TOTALS).join(", ")})`);
      } else if (scheme.totalMark !== expected) {
        warn("totalMark", `typical total for "${moduleType}" modules is ${expected} points, found ${scheme.totalMark}`);
      }
    }
  }

  // Every WSOS section referenced by an aspect must be declared in wsosSections.
  if (scheme.wsosSections && typeof scheme.wsosSections === "object") {
    for (const section of referencedSections) {
      if (!(String(section) in scheme.wsosSections)) {
        error("wsosSections", `section ${section} is used by an aspect but not declared in wsosSections`);
      } else if (scheme.wsosSections[String(section)] !== WSOS_SECTIONS[section]) {
        warn(
          `wsosSections["${section}"]`,
          `name differs from the standard label "${WSOS_SECTIONS[section]}"`
        );
      }
    }
  }

  // WSOS balance: each represented section should fall within its target band.
  const total = sumMarks;
  if (total > 0) {
    for (const section of Object.keys(WSOS_BALANCE)) {
      const marks = marksBySection[section] || 0;
      if (marks === 0) continue; // unrepresented sections are not flagged here
      const pct = round2((marks / total) * 100);
      const band = WSOS_BALANCE[section];
      if (pct < band.min || pct > band.max) {
        warn(
          `WSOS balance`,
          `Section ${section} (${band.label}) holds ${marks} pts = ${pct}% of total; recommended ${band.min}-${band.max}%`
        );
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Reporting
// ---------------------------------------------------------------------------

function printSummary(scheme, sumMarks, marksBySection) {
  if (!scheme || !Array.isArray(scheme.subCriterions)) return;
  const aspectCount = scheme.subCriterions.reduce(
    (n, sc) => n + (Array.isArray(sc.aspects) ? sc.aspects.length : 0),
    0
  );
  console.log("Marking scheme summary");
  console.log(`  Sub-criteria : ${scheme.subCriterions.length}`);
  console.log(`  Aspects      : ${aspectCount}`);
  console.log(`  Total marks  : ${sumMarks}${typeof scheme.totalMark === "number" ? ` (declared ${scheme.totalMark})` : ""}`);
  const dist = Object.keys(WSOS_BALANCE)
    .filter((s) => (marksBySection[s] || 0) > 0)
    .map((s) => `S${s}=${round2(marksBySection[s])}`)
    .join("  ");
  if (dist) console.log(`  WSOS marks   : ${dist}`);
  console.log("");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const args = process.argv.slice(2);
  const strict = args.includes("--strict");
  const moduleArg = args.find((a) => a.startsWith("--module-type="));
  const moduleType = moduleArg ? moduleArg.split("=")[1].trim().toLowerCase() : null;
  const inputPath = args.find((a) => !a.startsWith("--"));

  if (!inputPath) {
    console.error("Usage: node validate-marking-scheme.js <marking-scheme.json> [--module-type=<type>] [--strict]");
    process.exit(2);
  }

  let raw;
  try {
    raw = fs.readFileSync(inputPath, "utf8");
  } catch (e) {
    console.error(`Cannot read input file: ${inputPath}`);
    process.exit(2);
  }

  let scheme;
  try {
    scheme = JSON.parse(raw);
  } catch (e) {
    console.error(`Invalid JSON in ${inputPath}: ${e.message}`);
    process.exit(1);
  }

  const referencedSections = new Set();
  let sumMarks = 0;
  let marksBySection = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  if (validateRoot(scheme)) {
    const agg = validateSubCriterions(scheme, referencedSections);
    sumMarks = agg.sumMarks;
    marksBySection = agg.marksBySection;
    validateTotals(scheme, sumMarks, marksBySection, referencedSections, moduleType);
  }

  printSummary(scheme, sumMarks, marksBySection);

  warnings.forEach((w) => console.warn(`WARN  ${w}`));
  errors.forEach((e) => console.error(`ERROR ${e}`));

  console.log("");
  console.log(`Result: ${errors.length} error(s), ${warnings.length} warning(s).`);

  if (errors.length > 0 || (strict && warnings.length > 0)) {
    process.exit(1);
  }
  process.exit(0);
}

main();
