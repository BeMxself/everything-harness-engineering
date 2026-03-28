import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function assertExists(relativePath) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing expected file: ${relativePath}`);
  }
}

function assertIncludes(relativePath, expected) {
  const fullPath = path.join(root, relativePath);
  const content = fs.readFileSync(fullPath, "utf8");
  if (!content.includes(expected)) {
    throw new Error(`Expected "${expected}" in ${relativePath}`);
  }
}

assertExists("dist/index.html");
assertExists("dist/definition/index.html");
assertExists("dist/distinction/index.html");
assertExists("dist/timeline/index.html");
assertExists("dist/community/index.html");
assertExists("dist/landscape/index.html");
assertExists("dist/topics/index.html");

assertIncludes("dist/index.html", "Everything Harness Engineering");
assertIncludes("dist/index.html", "Harness Engineering");
assertIncludes("dist/topics/index.html", "host-harness-flow-diagrams");
assertIncludes("dist/definition/index.html", "harness engineering");

console.log("Starlight migration assertions passed.");
