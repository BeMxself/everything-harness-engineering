import { describe, expect, it } from "vitest";
import { resolveText } from "../i18n";
import { trellisDraftDiagram } from "./draftDiagrams";

describe("draft diagram data", () => {
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
});
