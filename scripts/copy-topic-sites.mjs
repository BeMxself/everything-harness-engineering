import { cpSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { findBuildableTopics, resolveTopicPublishSourceDir } from "./topic-sites.mjs";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

if (!existsSync(distDir)) {
  process.exit(0);
}

for (const topic of findBuildableTopics(rootDir)) {
  const sourceDir = resolveTopicPublishSourceDir(topic.dir);

  if (!existsSync(sourceDir)) continue;

  const targetDir = path.join(distDir, "topics", topic.name, "site");
  mkdirSync(path.dirname(targetDir), { recursive: true });
  cpSync(sourceDir, targetDir, { recursive: true });
}
