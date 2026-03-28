import { describe, expect, it } from "vitest";
import { resolveText } from "../i18n";
import { trellisDraftCase } from "./draftCases";

describe("draft case data", () => {
  it("contains a Trellis draft skeleton for the next formal expansion step", () => {
    expect(trellisDraftCase.id).toBe("trellis");
    expect(trellisDraftCase.state).toBe("draft");
    expect(resolveText(trellisDraftCase.title, "en")).toMatch(/trellis/i);
  });

  it("captures the platform-over-core structure in nodes and steps", () => {
    expect(trellisDraftCase.nodes.map((node) => node.id)).toEqual([
      "task",
      "workflow-core",
      "spec-memory",
      "platform-wiring",
      "host-surface",
      "execution-loop",
      "review-memory-return",
      "update-migration",
    ]);

    expect(trellisDraftCase.steps.map((step) => step.id)).toEqual([
      "s1-intake",
      "s2-inject",
      "s3-dispatch",
      "s4-review-return",
      "s5-platform-sync",
    ]);
  });

  it("keeps open questions attached to the draft skeleton", () => {
    expect(trellisDraftCase.openQuestions).toHaveLength(3);
    expect(resolveText(trellisDraftCase.openQuestions[0]!, "en")).toMatch(/adapter/i);
  });

  it("records evidence notes tied to official Trellis materials", () => {
    expect(trellisDraftCase.evidenceNotes).toHaveLength(3);
    expect(resolveText(trellisDraftCase.evidenceNotes[0]!, "en")).toMatch(/\.trellis/i);
    expect(trellisDraftCase.sources.length).toBeGreaterThanOrEqual(2);
  });
});
