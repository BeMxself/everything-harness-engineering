import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

export function findBuildableTopics(rootDir) {
  const topicsDir = path.join(rootDir, "topics");

  if (!existsSync(topicsDir)) {
    return [];
  }

  return readdirSync(topicsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const topicDir = path.join(topicsDir, entry.name);
      const packageJsonPath = path.join(topicDir, "package.json");

      if (!existsSync(packageJsonPath)) {
        return null;
      }

      const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

      return {
        name: entry.name,
        dir: topicDir,
        packageJson,
      };
    })
    .filter(Boolean)
    .filter((topic) => topic.packageJson?.scripts?.build);
}

export function resolveTopicPublishSourceDir(topicDir) {
  const distDir = path.join(topicDir, "dist");
  const siteDir = path.join(topicDir, "site");

  if (existsSync(distDir)) {
    return distDir;
  }

  if (existsSync(siteDir)) {
    return siteDir;
  }

  return null;
}
