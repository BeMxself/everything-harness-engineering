import { existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

import { findBuildableTopics } from "./topic-sites.mjs";

const rootDir = process.cwd();
const topics = findBuildableTopics(rootDir);

for (const topic of topics) {
  const hasNodeModules = existsSync(path.join(topic.dir, "node_modules"));
  const hasLockfile = existsSync(path.join(topic.dir, "package-lock.json"));

  if (!hasNodeModules) {
    const installArgs = hasLockfile ? ["ci"] : ["install"];
    const install = spawnSync("npm", installArgs, {
      cwd: topic.dir,
      stdio: "inherit",
      shell: process.platform === "win32",
    });

    if (install.status !== 0) {
      process.exit(install.status ?? 1);
    }
  }

  const build = spawnSync("npm", ["run", "build"], {
    cwd: topic.dir,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (build.status !== 0) {
    process.exit(build.status ?? 1);
  }
}
