$ErrorActionPreference = "Stop"

Set-Location ..

$npmDirs = @(
    ".claude/skills/mits-project-task-updater/scripts/xlsx-to-json",
    ".claude/skills/mits-project-task-updater/scripts/json-to-xlsx",
    ".claude/skills/mits-marking-scheme-json-to-xlsx/scripts",
    ".claude/skills/mits-marking-scheme-creator/scripts/convert-marking.scheme-json-to-xlsx"
)

foreach ($dir in $npmDirs) {
    Write-Host "npm install: $dir"
    Push-Location $dir
    try {
        npm install
    } finally {
        Pop-Location
    }
}

Set-Location project-tasks/references

$repos = @(
    "https://github.com/marketable-it-skills/s17-es2023-module_a-design_and_implementation.git",
    "https://github.com/marketable-it-skills/s17-ws2024-module_b-product-management.git",
    "https://github.com/marketable-it-skills/s17-ws2024-module_c-lyon-heritage-site.git",
    "https://github.com/marketable-it-skills/s17-ws2024-module_d-lyon-mobile-web-service.git"
)

foreach ($repo in $repos) {
    $name = [System.IO.Path]::GetFileNameWithoutExtension($repo)
    if (Test-Path $name) {
        Write-Host "Skip clone (already exists): $name"
    } else {
        git clone $repo
    }
}

Write-Host "Done."
