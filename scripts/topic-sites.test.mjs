import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

import {
  findBuildableTopics,
  resolveTopicPublishSourceDir,
} from "./topic-sites.mjs";

test("findBuildableTopics discovers topic apps with package.json", () => {
  const rootDir = path.join(os.tmpdir(), `topic-sites-${Date.now()}-discover`);
  const topicsDir = path.join(rootDir, "topics");

  mkdirSync(path.join(topicsDir, "alpha"), { recursive: true });
  mkdirSync(path.join(topicsDir, "beta"), { recursive: true });
  mkdirSync(path.join(topicsDir, "docs-only"), { recursive: true });

  writeFileSync(
    path.join(topicsDir, "alpha", "package.json"),
    JSON.stringify({ name: "alpha", scripts: { build: "vite build" } }),
  );
  writeFileSync(
    path.join(topicsDir, "beta", "package.json"),
    JSON.stringify({ name: "beta", scripts: { build: "vite build" } }),
  );

  const topics = findBuildableTopics(rootDir);

  assert.deepEqual(
    topics.map((topic) => topic.name),
    ["alpha", "beta"],
  );
});

test("resolveTopicPublishSourceDir prefers dist over stale site output", () => {
  const topicDir = path.join(os.tmpdir(), `topic-sites-${Date.now()}-source`);

  mkdirSync(path.join(topicDir, "site"), { recursive: true });
  mkdirSync(path.join(topicDir, "dist"), { recursive: true });

  assert.equal(
    resolveTopicPublishSourceDir(topicDir),
    path.join(topicDir, "dist"),
  );
});

test("resolveTopicPublishSourceDir falls back to site when dist is missing", () => {
  const topicDir = path.join(os.tmpdir(), `topic-sites-${Date.now()}-fallback`);

  mkdirSync(path.join(topicDir, "site"), { recursive: true });

  assert.equal(
    resolveTopicPublishSourceDir(topicDir),
    path.join(topicDir, "site"),
  );
});
