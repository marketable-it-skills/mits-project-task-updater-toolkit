const XLSX = require("xlsx");
const fs = require("fs");

// The Excel file path is passed as the first CLI argument, e.g.
//   node convert.js ../../../../../project-tasks/staging/<repo-name>/marking_scheme.xlsx
const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Usage: node convert.js <path-to-marking_scheme.xlsx>");
  process.exit(1);
}

if (!fs.existsSync(inputPath)) {
  console.error(`Excel file not found: ${inputPath}`);
  process.exit(1);
}

// Read the Excel file
const workbook = XLSX.readFile(inputPath);

// Get sheet names
const sheetNames = workbook.SheetNames;
console.log("Available sheets:", sheetNames);

// Process each sheet
const result = {};
sheetNames.forEach((sheetName) => {
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  console.log(`\n--- Sheet: ${sheetName} ---`);
  console.log("Columns:", data[0]);
  console.log("Rows:", data.length);

  // Display first few rows
  console.log("\nFirst 5 rows:");
  data.slice(0, 5).forEach((row, index) => {
    console.log(`Row ${index}:`, row);
  });

  result[sheetName] = data;
});

// Save the result to JSON
fs.writeFileSync("marking-scheme-raw.json", JSON.stringify(result, null, 2));
console.log("\nRaw data saved to marking-scheme-raw.json");

// Try to parse and structure the data
try {
  // Find the main sheet (usually the first one or one with "marking" in name)
  const mainSheetName = sheetNames.find(
    (name) =>
      name.toLowerCase().includes("marking") ||
      name.toLowerCase().includes("scheme") ||
      name === sheetNames[0]
  );

  if (mainSheetName) {
    const mainSheet = result[mainSheetName];
    console.log(`\nProcessing main sheet: ${mainSheetName}`);

    // Save structured data for manual review
    fs.writeFileSync(
      "marking-scheme-structured.json",
      JSON.stringify(
        {
          sheetName: mainSheetName,
          data: mainSheet,
          analysis: {
            totalRows: mainSheet.length,
            columns: mainSheet[0] || [],
            sampleData: mainSheet.slice(0, 10),
          },
        },
        null,
        2
      )
    );

    console.log("Structured data saved to marking-scheme-structured.json");
  }
} catch (error) {
  console.error("Error processing structured data:", error);
}
