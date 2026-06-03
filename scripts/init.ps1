Set-Location ..

npm --prefix ./.claude/skills/mits-project-task-updater/scripts/xlsx-to-json install
npm --prefix ./.claude/skills/mits-project-task-updater/scripts/json-to-xlsx install

Set-Location project-tasks/references

git clone https://github.com/marketable-it-skills/s17-es2023-module_a-design_and_implementation.git
git clone https://github.com/marketable-it-skills/s17-ws2024-module_b-product-management.git
git clone https://github.com/marketable-it-skills/s17-ws2024-module_c-lyon-heritage-site.git
git clone https://github.com/marketable-it-skills/s17-ws2024-module_d-lyon-mobile-web-service.git

Write-Host "Done."