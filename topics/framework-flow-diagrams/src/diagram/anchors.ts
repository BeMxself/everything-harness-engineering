import type {
  DiagramAnchor,
  DiagramAnchorId,
  DiagramNode,
  DiagramPoint,
  FrameworkDiagram,
} from "../data/types";

const defaultAnchors: DiagramAnchor[] = [
  { id: "top", side: "top" },
  { id: "right", side: "right" },
  { id: "bottom", side: "bottom" },
  { id: "left", side: "left" },
];

export function getNodeAnchors(node: DiagramNode) {
  return node.anchors ?? defaultAnchors;
}

export function buildNodeAnchors(diagram: FrameworkDiagram) {
  return Object.fromEntries(
    diagram.nodes.map((node) => [node.id, getNodeAnchors(node)]),
  ) as Record<string, DiagramAnchor[]>;
}

function getDefaultAnchorPair(source: DiagramPoint, target: DiagramPoint) {
  const dx = target.x - source.x;
  const dy = target.y - source.y;

  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx >= 0
      ? { sourceAnchorId: "right" as DiagramAnchorId, targetAnchorId: "left" as DiagramAnchorId }
      : { sourceAnchorId: "left" as DiagramAnchorId, targetAnchorId: "right" as DiagramAnchorId };
  }

  return dy >= 0
    ? { sourceAnchorId: "bottom" as DiagramAnchorId, targetAnchorId: "top" as DiagramAnchorId }
    : { sourceAnchorId: "top" as DiagramAnchorId, targetAnchorId: "bottom" as DiagramAnchorId };
}

export function buildEdgeAnchorBindings(
  diagram: FrameworkDiagram,
  positions: Record<string, DiagramPoint>,
) {
  return Object.fromEntries(
    diagram.edges.map((edge) => {
      const source = positions[edge.source];
      const target = positions[edge.target];
      const defaults =
        source && target
          ? getDefaultAnchorPair(source, target)
          : {
              sourceAnchorId: "right" as DiagramAnchorId,
              targetAnchorId: "left" as DiagramAnchorId,
            };

      return [
        edge.id,
        {
          sourceAnchorId: edge.sourceAnchorId ?? defaults.sourceAnchorId,
          targetAnchorId: edge.targetAnchorId ?? defaults.targetAnchorId,
        },
      ];
    }),
  ) as Record<string, { sourceAnchorId: DiagramAnchorId; targetAnchorId: DiagramAnchorId }>;
}
