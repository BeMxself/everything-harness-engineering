import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const topicsDir = path.join(rootDir, "topics");
const distDir = path.join(rootDir, "dist");

if (!existsSync(topicsDir) || !existsSync(distDir)) {
  process.exit(0);
}

for (const entry of readdirSync(topicsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;

  const topicDir = path.join(topicsDir, entry.name);
  const preferredSourceDir = path.join(topicDir, "site");
  const fallbackSourceDir = path.join(topicDir, "dist");
  const sourceDir = existsSync(preferredSourceDir) ? preferredSourceDir : fallbackSourceDir;

  if (!existsSync(sourceDir)) continue;

  const targetDir = path.join(distDir, "topics", entry.name, "site");
  mkdirSync(path.dirname(targetDir), { recursive: true });
  cpSync(sourceDir, targetDir, { recursive: true });
}
