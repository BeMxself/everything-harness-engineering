import type { Node } from "@xyflow/react";
import type {
  ComparisonDiagram,
  DiagramAnchorId,
  DiagramNode,
  VisibilityState,
} from "../data/types";
import { nodeKindStyles, visibilityOpacity } from "./theme";

export type DiagramNodeData = {
  node: DiagramNode;
  visibility: VisibilityState;
  isEditable?: boolean;
  onAnchorSelect?: (nodeId: string, anchorId: DiagramAnchorId) => void;
};

type MapNodeOptions = {
  draggable?: boolean;
  isEditable?: boolean;
  onAnchorSelect?: (nodeId: string, anchorId: DiagramAnchorId) => void;
  positions?: Record<string, { x: number; y: number }>;
};

export function mapNodes(
  diagram: ComparisonDiagram,
  getVisibility: (nodeId: string) => VisibilityState,
  options: MapNodeOptions = {},
): Node<DiagramNodeData>[] {
  return diagram.nodes.map((node) => {
    const visibility = getVisibility(node.id);
    const kindStyle = nodeKindStyles[node.kind];
    const position = options.positions?.[node.id] ?? node.position;

    return {
      id: node.id,
      type: "frameworkNode",
      position,
      draggable: options.draggable ?? false,
      selectable: false,
      data: {
        node,
        visibility,
        isEditable: options.isEditable,
        onAnchorSelect: options.onAnchorSelect,
      },
      style: {
        width: 230,
        minHeight: 82,
        opacity: visibilityOpacity[visibility],
        background: kindStyle.background,
        color: kindStyle.color,
        borderColor: kindStyle.borderColor,
        borderStyle: kindStyle.borderStyle ?? "solid",
        borderWidth: kindStyle.borderWidth ?? 1.5,
        borderRadius: 16,
        padding: 0,
        boxShadow:
          node.kind === "control" && visibility === "active"
            ? "0 0 0 4px rgba(37,99,235,0.14)"
            : "0 10px 24px rgba(15,23,42,0.06)",
      },
    };
  });
}
