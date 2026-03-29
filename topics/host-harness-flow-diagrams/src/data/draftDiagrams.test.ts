import { describe, expect, it } from "vitest";
import { resolveText } from "../i18n";
import { draftDiagrams, gsdDraftDiagram, omxDraftDiagram, trellisDraftDiagram } from "./draftDiagrams";

describe("draft diagram data", () => {
  it("keeps Trellis and oh-my-codex as the current renderable draft diagrams", () => {
    expect(draftDiagrams.map((diagram) => diagram.id)).toEqual([
      "trellis-draft",
      "oh-my-codex-draft",
      "get-shit-done-draft",
    ]);
  });

  it("contains a renderable Trellis formal draft diagram", () => {
    expect(trellisDraftDiagram.id).toBe("trellis-draft");
    expect(resolveText(trellisDraftDiagram.title, "en")).toMatch(/Trellis Draft/i);
    expect(trellisDraftDiagram.nodes).toHaveLength(8);
    expect(trellisDraftDiagram.edges.length).toBeGreaterThanOrEqual(8);
    expect(trellisDraftDiagram.steps).toHaveLength(5);
  });

  it("emphasizes the platform-over-core control shape", () => {
    expect(trellisDraftDiagram.emphasis.harness).toBe("high");
    expect(trellisDraftDiagram.emphasis.control).toBe("high");
    expect(trellisDraftDiagram.emphasis.hostDependency).toBe("medium");
    expect(resolveText(trellisDraftDiagram.readingGuide.keyQuestion, "en")).toMatch(/platform/i);
  });

  it("keeps workflow core, platform wiring, and host surface as distinct nodes", () => {
    const nodes = new Map(trellisDraftDiagram.nodes.map((node) => [node.id, node]));

    expect(resolveText(nodes.get("workflow-core")!.label, "en")).toMatch(/workflow core/i);
    expect(resolveText(nodes.get("platform-wiring")!.label, "en")).toMatch(/platform wiring/i);
    expect(resolveText(nodes.get("host-surface")!.label, "en")).toMatch(/host surface/i);
  });

  it("contains an oh-my-codex draft diagram centered on Codex remaining the execution engine", () => {
    expect(omxDraftDiagram.id).toBe("oh-my-codex-draft");
    expect(resolveText(omxDraftDiagram.title, "en")).toMatch(/OMX Draft Diagram/i);
    expect(omxDraftDiagram.emphasis.harness).toBe("high");
    expect(omxDraftDiagram.emphasis.hostDependency).toBe("high");
    expect(resolveText(omxDraftDiagram.notes.whyThisLoopMatters, "en")).toMatch(/Codex/i);
    expect(omxDraftDiagram.steps).toHaveLength(5);
  });

  it("contains a get-shit-done draft diagram centered on discuss-plan-execute-verify", () => {
    expect(gsdDraftDiagram.id).toBe("get-shit-done-draft");
    expect(resolveText(gsdDraftDiagram.title, "en")).toMatch(/GSD Workflow Protocol Draft/i);
    expect(gsdDraftDiagram.emphasis.automationLoop).toBe("high");
    expect(gsdDraftDiagram.emphasis.hostDependency).toBe("medium");
    expect(resolveText(gsdDraftDiagram.readingGuide.keyQuestion, "en")).toMatch(/protocol/i);
    expect(gsdDraftDiagram.steps).toHaveLength(5);
  });
});
