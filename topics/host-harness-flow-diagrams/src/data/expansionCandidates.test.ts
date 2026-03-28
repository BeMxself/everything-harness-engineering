import { describe, expect, it } from "vitest";
import { expansionCandidateFamilies, expansionCandidates } from "./expansionCandidates";
import { resolveText } from "../i18n";

describe("expansion candidate metadata", () => {
  it("tracks the current next-wave comparison candidates", () => {
    expect(expansionCandidates.map((candidate) => candidate.id)).toEqual([
      "trellis",
      "oh-my-codex",
      "get-shit-done",
      "oh-my-claudecode",
      "goose",
    ]);
  });

  it("separates core additions from boundary, reference, and control cases", () => {
    const byId = new Map(expansionCandidates.map((candidate) => [candidate.id, candidate]));

    expect(byId.get("trellis")?.tier).toBe("core");
    expect(byId.get("oh-my-codex")?.tier).toBe("core");
    expect(byId.get("get-shit-done")?.tier).toBe("boundary");
    expect(byId.get("oh-my-claudecode")?.tier).toBe("family-reference");
    expect(byId.get("goose")?.tier).toBe("control-group");
  });

  it("captures the shared orchestration family between oh-my-codex and oh-my-claudecode", () => {
    const family = expansionCandidateFamilies.find((item) => item.id === "omx-orchestration");

    expect(family).toBeDefined();
    expect(family?.members).toEqual(["oh-my-codex", "oh-my-claudecode"]);
    expect(family?.recommendedRepresentativeId).toBe("oh-my-codex");
  });

  it("flags get-shit-done as a boundary workflow-protocol case", () => {
    const gsd = expansionCandidates.find((candidate) => candidate.id === "get-shit-done");

    expect(gsd).toBeDefined();
    expect(gsd?.hostPattern).toBe("cross-host-overlay");
    expect(gsd?.readiness).toBe("needs-boundary-decision");
    expect(resolveText(gsd!.diagramFocus, "en")).toMatch(/workflow/i);
  });
});
