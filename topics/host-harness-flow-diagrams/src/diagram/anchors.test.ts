import { describe, expect, it } from "vitest";
import { diagrams } from "../data/diagrams";
import {
  buildEdgeAnchorBindings,
  buildNodeAnchors,
  getNodeAnchors,
} from "./anchors";

describe("anchors", () => {
  it("provides four default anchors for nodes without custom anchor data", () => {
    const node = diagrams[0].nodes[0];

    expect(getNodeAnchors(node)).toEqual([
      { id: "top", side: "top" },
      { id: "right", side: "right" },
      { id: "bottom", side: "bottom" },
      { id: "left", side: "left" },
    ]);
  });

  it("builds default edge anchor bindings from node layout", () => {
    const diagram = diagrams[0];
    const positions = Object.fromEntries(
      diagram.nodes.map((node) => [node.id, node.position]),
    );

    const bindings = buildEdgeAnchorBindings(diagram, positions);

    expect(bindings.e1).toEqual({
      sourceAnchorId: "right",
      targetAnchorId: "left",
    });
    expect(bindings.e10).toEqual({
      sourceAnchorId: "right",
      targetAnchorId: "left",
    });
  });

  it("builds editable anchor state for each node", () => {
    const diagram = diagrams[0];
    const anchorsByNode = buildNodeAnchors(diagram);

    expect(anchorsByNode.intent[1]).toEqual({
      id: "right",
      side: "right",
    });
  });
});
