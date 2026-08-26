#!/usr/bin/env node
"use strict";

/**
 * Creates a new MITS project task repository from the mits-project-task-template,
 * clones it into project-tasks/staging/, and fills in the deterministic
 * metadata.json fields (name, competition, authors). See SKILL.md for usage.
 *
 * Usage:
 *   node create-project-task-repo.js <competitionShortName> <moduleLetter> [options]
 *
 * Options:
 *   --competition="Full Competition Name"   Optional, full competition/training name.
 *                                            If omitted, the script looks for another
 *                                            project task under the search dirs that
 *                                            shares the same competition short name
 *                                            and reuses its "competition" value.
 *   --authors="Name One,Name Two"           Optional, comma-separated author names
 *   --private                               Create a private repository (default: public)
 *   --owner=<user-or-org>                    Repository owner (default: authenticated user)
 *   --dry-run                               Preview repo name, metadata, and author/
 *                                            competition lookup without creating or
 *                                            cloning anything
 *   --repo-root=<path>                       Defaults to the current working directory
 *   --staging-dir=<path>                     Defaults to <repo-root>/project-tasks/staging
 *   --search-dirs=<path,path>                Where to look up existing author URLs and
 *                                            competition names; defaults to
 *                                            project-tasks/staging and
 *                                            project-tasks/references under repo-root
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const TEMPLATE_REPO = "marketable-it-skills/mits-project-task-template";
const SKILL_PREFIX = "s17";

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function usage() {
  return [
    "Usage:",
    "  node create-project-task-repo.js <competitionShortName> <moduleLetter> [options]",
    "",
    "Options:",
    '  --competition="Full Competition Name"   Optional. If omitted, reused from a',
    "                                           sibling module with the same short name",
    '  --authors="Name One,Name Two"           Optional, comma-separated author names',
    "  --private                               Create a private repository (default: public)",
    "  --owner=<user-or-org>                    Repository owner (default: authenticated user)",
    "  --dry-run                               Preview without creating/cloning anything",
    "  --repo-root=<path>                       Defaults to the current working directory",
    "  --staging-dir=<path>                     Defaults to <repo-root>/project-tasks/staging",
    "  --search-dirs=<path,path>                Defaults to project-tasks/staging and",
    "                                           project-tasks/references under repo-root",
  ].join("\n");
}

function parseArgs(argv) {
  const args = { authors: [] };
  const positional = [];
  for (const raw of argv) {
    if (raw === "--dry-run") {
      args.dryRun = true;
    } else if (raw === "--private") {
      args.isPrivate = true;
    } else if (raw.startsWith("--owner=")) {
      args.owner = raw.slice("--owner=".length).trim();
    } else if (raw.startsWith("--competition=")) {
      args.competition = raw.slice("--competition=".length).trim();
    } else if (raw.startsWith("--authors=")) {
      args.authors = raw
        .slice("--authors=".length)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    } else if (raw.startsWith("--repo-root=")) {
      args.repoRoot = raw.slice("--repo-root=".length);
    } else if (raw.startsWith("--staging-dir=")) {
      args.stagingDir = raw.slice("--staging-dir=".length);
    } else if (raw.startsWith("--search-dirs=")) {
      args.searchDirs = raw
        .slice("--search-dirs=".length)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    } else if (raw.startsWith("--")) {
      fail(`Unknown flag: ${raw}\n\n${usage()}`);
    } else {
      positional.push(raw);
    }
  }
  [args.competitionShortName, args.moduleLetter] = positional;
  return args;
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

function run(cmd, cmdArgs, opts = {}) {
  return execFileSync(cmd, cmdArgs, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    ...opts,
  });
}

/**
 * Looks for an existing metadata.json (under any of searchDirs/*) whose
 * authors[] contains a case-insensitive name match, and returns the url
 * already recorded for that author, so we don't ask the user to re-supply
 * URLs we already know from previous project tasks.
 */
function findAuthorUrl(name, searchDirs, excludeDir) {
  const needle = name.trim().toLowerCase();
  const excludeResolved = excludeDir ? path.resolve(excludeDir) : null;
  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const projectDir = path.join(dir, entry.name);
      if (excludeResolved && path.resolve(projectDir) === excludeResolved) continue;
      const metadataPath = path.join(projectDir, "metadata.json");
      if (!fs.existsSync(metadataPath)) continue;
      let data;
      try {
        data = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
      } catch {
        continue;
      }
      const authors = Array.isArray(data.authors) ? data.authors : [];
      for (const author of authors) {
        if (
          author &&
          typeof author.name === "string" &&
          author.name.trim().toLowerCase() === needle &&
          author.url
        ) {
          return { url: author.url, source: metadataPath };
        }
      }
    }
  }
  return null;
}

/**
 * Looks for an existing project task folder (under any of searchDirs/*) whose
 * name starts with the same "s17-<slug>-module-" prefix — i.e. a different
 * module of the same competition — and returns its metadata.json
 * "competition" value, so we don't ask the user to re-type the full
 * competition name when they've already given it for a sibling module.
 */
function findCompetitionByShortName(slug, searchDirs, excludeDir) {
  const prefix = `${SKILL_PREFIX}-${slug}-module-`;
  const excludeResolved = excludeDir ? path.resolve(excludeDir) : null;
  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      if (!entry.name.toLowerCase().startsWith(prefix)) continue;
      const projectDir = path.join(dir, entry.name);
      if (excludeResolved && path.resolve(projectDir) === excludeResolved) continue;
      const metadataPath = path.join(projectDir, "metadata.json");
      if (!fs.existsSync(metadataPath)) continue;
      let data;
      try {
        data = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
      } catch {
        continue;
      }
      if (typeof data.competition === "string" && data.competition.trim()) {
        return { competition: data.competition.trim(), source: metadataPath };
      }
    }
  }
  return null;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.competitionShortName || !args.moduleLetter) {
    console.error(usage());
    process.exit(1);
  }
  const moduleLetter = args.moduleLetter.trim();
  if (!/^[A-Za-z]$/.test(moduleLetter)) {
    fail(`moduleLetter must be a single letter (got "${args.moduleLetter}")`);
  }

  const repoRoot = path.resolve(args.repoRoot || process.cwd());
  const stagingDir = path.resolve(
    args.stagingDir || path.join(repoRoot, "project-tasks", "staging")
  );
  const searchDirs = (
    args.searchDirs && args.searchDirs.length
      ? args.searchDirs
      : ["project-tasks/staging", "project-tasks/references"]
  ).map((p) => path.resolve(repoRoot, p));

  const shortName = args.competitionShortName.trim();
  const shortNameSlug = slugify(shortName);
  const letterLower = moduleLetter.toLowerCase();
  const letterUpper = moduleLetter.toUpperCase();
  const repoName = `${SKILL_PREFIX}-${shortNameSlug}-module-${letterLower}`;
  const metadataName = `${shortName} S17 - Module ${letterUpper}`;
  const targetDir = path.join(stagingDir, repoName);

  let competitionValue = null;
  let competitionSource = null;
  if (args.competition) {
    competitionValue = args.competition;
    competitionSource = "explicit";
  } else {
    const match = findCompetitionByShortName(shortNameSlug, searchDirs, targetDir);
    if (match) {
      competitionValue = match.competition;
      competitionSource = path.relative(repoRoot, match.source);
      console.log(
        `Found competition "${competitionValue}" in ${competitionSource} (same competition short name) — reusing it.`
      );
    }
  }

  const resolvedAuthors = args.authors.map((name) => {
    const match = findAuthorUrl(name, searchDirs, targetDir);
    return {
      name,
      url: match ? match.url : "",
      source: match ? path.relative(repoRoot, match.source) : null,
    };
  });
  const unresolvedAuthorNames = resolvedAuthors.filter((a) => !a.url).map((a) => a.name);

  const preview = {
    repoName,
    owner: args.owner || null,
    visibility: args.isPrivate ? "private" : "public",
    metadataName,
    competition: competitionValue,
    competitionSource,
    targetDir,
    authors: resolvedAuthors,
    unresolvedAuthorNames,
  };

  if (args.dryRun) {
    console.log(JSON.stringify(preview, null, 2));
    return;
  }

  if (fs.existsSync(targetDir)) {
    fail(
      `Target folder already exists: ${targetDir}. Remove it or pick a different competition short name / module letter.`
    );
  }
  fs.mkdirSync(stagingDir, { recursive: true });

  console.log("Checking GitHub CLI authentication...");
  try {
    run("gh", ["auth", "status"]);
  } catch (e) {
    fail(`gh is not authenticated. Run "gh auth login" first.\n${e.stderr || e.message}`);
  }

  let owner = args.owner;
  if (!owner) {
    try {
      owner = run("gh", ["api", "user", "--jq", ".login"]).trim();
    } catch (e) {
      fail(`Could not determine the authenticated GitHub user.\n${e.stderr || e.message}`);
    }
  }

  console.log(`Checking whether ${owner}/${repoName} already exists on GitHub...`);
  let exists = true;
  try {
    run("gh", ["repo", "view", `${owner}/${repoName}`, "--json", "url"]);
  } catch {
    exists = false;
  }
  if (exists) {
    fail(
      `Repository ${owner}/${repoName} already exists on GitHub. Choose a different competition short name / module letter, or delete/reuse the existing repo.`
    );
  }

  console.log(
    `Creating ${owner}/${repoName} from template ${TEMPLATE_REPO} and cloning into ${stagingDir}...`
  );
  try {
    run(
      "gh",
      [
        "repo",
        "create",
        `${owner}/${repoName}`,
        args.isPrivate ? "--private" : "--public",
        "--template",
        TEMPLATE_REPO,
        "--clone",
      ],
      { cwd: stagingDir }
    );
  } catch (e) {
    fail(`gh repo create failed.\n${e.stderr || e.message}`);
  }

  if (!fs.existsSync(targetDir)) {
    fail(`Expected cloned repo at ${targetDir} but it was not found after gh repo create.`);
  }

  const metadataPath = path.join(targetDir, "metadata.json");
  if (!fs.existsSync(metadataPath)) {
    fail(`Cloned repo is missing metadata.json at ${metadataPath}.`);
  }
  const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
  metadata.name = metadataName;
  if (competitionValue) {
    metadata.competition = competitionValue;
  }
  if (args.authors.length > 0) {
    metadata.authors = resolvedAuthors.map((a) => ({ name: a.name, url: a.url }));
  }
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2) + "\n");

  const remoteUrl = `https://github.com/${owner}/${repoName}`;
  console.log("\nDone.");
  console.log(JSON.stringify({ ...preview, remoteUrl, targetDir }, null, 2));
}

main();
