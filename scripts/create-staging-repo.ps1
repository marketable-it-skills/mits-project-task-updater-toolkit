# Create a GitHub repo from the MITS project task template and clone it into project-tasks/staging/.
param(
    [Parameter(Mandatory = $false, Position = 0)]
    [string]$RepoName,

    [switch]$Private
)

$ErrorActionPreference = 'Stop'

# gh writes expected 404s to stderr; do not treat those as terminating errors (PowerShell 7+).
if ($null -ne (Get-Variable -Name PSNativeCommandUseErrorActionPreference -Scope Global -ErrorAction SilentlyContinue)) {
    $PSNativeCommandUseErrorActionPreference = $false
}

function Invoke-GhApi {
    param(
        [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
        [string[]]$GhArgs
    )

    $previousErrorAction = $ErrorActionPreference
    $ErrorActionPreference = 'SilentlyContinue'
    try {
        $output = & gh @GhArgs 2>$null
        return [PSCustomObject]@{
            ExitCode = $LASTEXITCODE
            Output   = $output
        }
    }
    finally {
        $ErrorActionPreference = $previousErrorAction
    }
}

function Test-RepoExists([string]$FullName) {
    $result = Invoke-GhApi api "repos/$FullName" --jq '.name'
    return $result.ExitCode -eq 0
}

function Get-GhUser {
    $result = Invoke-GhApi api user --jq .login
    if ($result.ExitCode -ne 0 -or [string]::IsNullOrWhiteSpace($result.Output)) {
        throw 'Could not determine GitHub user. Run: gh auth login'
    }
    return $result.Output.Trim()
}

$TemplateOwner = 'marketable-it-skills'
$TemplateRepo = 'mits-project-task-template'
$Template = "$TemplateOwner/$TemplateRepo"
$RepoRoot = Split-Path -Parent $PSScriptRoot
$StagingRoot = Join-Path $RepoRoot 'project-tasks\staging'
$MarkerFile = 'project-description.md'

function Assert-GhReady {
    if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
        throw 'GitHub CLI (gh) is required. Install from https://cli.github.com/ and run: gh auth login'
    }
    gh auth status 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw 'GitHub CLI is not authenticated. Run: gh auth login'
    }
}

function Assert-RepoName([string]$Name) {
    if ([string]::IsNullOrWhiteSpace($Name)) {
        throw 'Repository name is required.'
    }
    if ($Name.Length -gt 100) {
        throw 'Repository name must be 100 characters or fewer.'
    }
    if ($Name -notmatch '^[a-zA-Z0-9._-]+$') {
        throw "Invalid repository name '$Name'. Use letters, numbers, dots, hyphens, and underscores only."
    }
}

function New-RepoFromTemplate([string]$Owner, [string]$Name, [bool]$IsPrivate, [string]$FullName) {
    Write-Host "Creating $FullName from template $Template (GitHub generate API) ..."

    if ($IsPrivate) {
        gh api -X POST "repos/$Template/generate" `
            -f owner="$Owner" `
            -f name="$Name" `
            -F private=true | Out-Null
    }
    else {
        gh api -X POST "repos/$Template/generate" `
            -f owner="$Owner" `
            -f name="$Name" `
            -F private=false | Out-Null
    }

    if ($LASTEXITCODE -ne 0) {
        throw 'Failed to create repository from template.'
    }
}

function Wait-RepoHasCommits([string]$FullName, [int]$MaxSeconds = 90) {
    $deadline = (Get-Date).AddSeconds($MaxSeconds)

    while ((Get-Date) -lt $deadline) {
        $result = Invoke-GhApi api "repos/$FullName/commits" --jq 'length'
        if ($result.ExitCode -eq 0 -and $result.Output -and [int]$result.Output -gt 0) {
            return
        }
        Write-Host 'Waiting for GitHub to finish generating the repository from template ...'
        Start-Sleep -Seconds 2
    }

    throw "Timed out after ${MaxSeconds}s waiting for template content in $FullName."
}

function Invoke-GitClone([string]$FullName, [string]$ClonePath) {
    if (Test-Path -LiteralPath $ClonePath) {
        Remove-Item -LiteralPath $ClonePath -Recurse -Force
    }

    git clone "https://github.com/$FullName.git" $ClonePath

    if ($LASTEXITCODE -ne 0) {
        throw 'git clone failed.'
    }
}

function Test-StagingHasTemplateContent([string]$ClonePath) {
    return Test-Path -LiteralPath (Join-Path $ClonePath $MarkerFile)
}

function Push-TemplateContent([string]$FullName, [string]$ClonePath) {
    Write-Host "Repository is empty on GitHub. Seeding from template and pushing to $FullName ..."

    if (Test-Path -LiteralPath $ClonePath) {
        Remove-Item -LiteralPath $ClonePath -Recurse -Force
    }

    git clone --depth 1 "https://github.com/$Template.git" $ClonePath

    if ($LASTEXITCODE -ne 0) {
        throw 'Failed to clone template repository for fallback seeding.'
    }

    Remove-Item -LiteralPath (Join-Path $ClonePath '.git') -Recurse -Force

    Push-Location $ClonePath
    try {
        git init
        git add .
        git commit -m "Initial commit from $Template"
        git branch -M main
        git remote add origin "https://github.com/$FullName.git"
        git push -u origin main --force
    }
    finally {
        Pop-Location
    }

    if ($LASTEXITCODE -ne 0) {
        throw 'Failed to push template content to the new repository.'
    }
}

Assert-GhReady
$Owner = Get-GhUser
Write-Host "Creating repository under GitHub user: $Owner"

if (-not $RepoName) {
    $RepoName = Read-Host 'Repository name (e.g. s17-es2025-training-hu-module_b-dynamic-website-with-server-side-rendering)'
}

$RepoName = $RepoName.Trim()
Assert-RepoName $RepoName

$FullName = "$Owner/$RepoName"
$ClonePath = Join-Path $StagingRoot $RepoName

if (-not (Test-Path -LiteralPath $StagingRoot)) {
    New-Item -ItemType Directory -Path $StagingRoot -Force | Out-Null
}

if (Test-Path -LiteralPath $ClonePath) {
    throw "Target already exists: $ClonePath"
}

if (Test-RepoExists $FullName) {
    throw "GitHub repository already exists: https://github.com/$FullName. Delete it first or choose another name."
}

New-RepoFromTemplate -Owner $Owner -Name $RepoName -IsPrivate $Private.IsPresent -FullName $FullName

try {
    Wait-RepoHasCommits -FullName $FullName
}
catch {
    Write-Warning $_.Exception.Message
    Push-TemplateContent -FullName $FullName -ClonePath $ClonePath

    if (-not (Test-StagingHasTemplateContent $ClonePath)) {
        throw 'Template content is still missing after fallback push.'
    }

    Write-Host "Done. Staging project at: $ClonePath"
    exit 0
}

Write-Host "Cloning into $ClonePath ..."
Invoke-GitClone -FullName $FullName -ClonePath $ClonePath

if (-not (Test-StagingHasTemplateContent $ClonePath)) {
    Push-TemplateContent -FullName $FullName -ClonePath $ClonePath
}

if (-not (Test-StagingHasTemplateContent $ClonePath)) {
    throw "Clone succeeded but '$MarkerFile' is missing. Check https://github.com/$FullName"
}

Write-Host "Done. Staging project at: $ClonePath"
