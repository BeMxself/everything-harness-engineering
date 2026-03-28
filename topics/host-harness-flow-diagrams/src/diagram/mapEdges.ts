import type { Edge } from "@xyflow/react";
import type {
  ComparisonDiagram,
  DiagramAnchorId,
  DiagramEdge,
  DiagramPoint,
  VisibilityState,
} from "../data/types";
import { edgeKindStyles, visibilityOpacity } from "./theme";

export type DiagramEdgeData = {
  edge: DiagramEdge;
  visibility: VisibilityState;
  anchorBinding?: {
    sourceAnchorId: DiagramAnchorId;
    targetAnchorId: DiagramAnchorId;
  };
  isEditable?: boolean;
  onArmAnchorSelection?: (
    edgeId: string,
    endpoint: "source" | "target",
  ) => void;
  onAddControlPoint?: (edgeId: string, nextPoint: DiagramPoint) => void;
  onControlPointChange?: (
    edgeId: string,
    pointIndex: number,
    nextPoint: DiagramPoint,
  ) => void;
  onRemoveControlPoint?: (edgeId: string, pointIndex: number) => void;
};

type MapEdgeOptions = {
  anchorBindingsByEdge?: Record<
    string,
    { sourceAnchorId: DiagramAnchorId; targetAnchorId: DiagramAnchorId }
  >;
  controlPointsByEdge?: Record<string, DiagramPoint[]>;
  isEditable?: boolean;
  onArmAnchorSelection?: (
    edgeId: string,
    endpoint: "source" | "target",
  ) => void;
  onAddControlPoint?: (edgeId: string, nextPoint: DiagramPoint) => void;
  onControlPointChange?: (
    edgeId: string,
    pointIndex: number,
    nextPoint: DiagramPoint,
  ) => void;
  onRemoveControlPoint?: (edgeId: string, pointIndex: number) => void;
};

export function mapEdges(
  diagram: ComparisonDiagram,
  getVisibility: (edgeId: string) => VisibilityState,
  options: MapEdgeOptions = {},
): Edge<DiagramEdgeData>[] {
  return diagram.edges.map((edge) => {
    const visibility = getVisibility(edge.id);
    const kindStyle = edgeKindStyles[edge.kind];
    const controlPoints = options.controlPointsByEdge?.[edge.id] ?? edge.controlPoints;
    const anchorBinding = options.anchorBindingsByEdge?.[edge.id] ?? {
      sourceAnchorId: edge.sourceAnchorId ?? "right",
      targetAnchorId: edge.targetAnchorId ?? "left",
    };
    const resolvedEdge = {
      ...edge,
      controlPoints,
      sourceAnchorId: anchorBinding.sourceAnchorId,
      targetAnchorId: anchorBinding.targetAnchorId,
    };

    return {
      id: edge.id,
      type: "frameworkEdge",
      source: edge.source,
      sourceHandle: anchorBinding.sourceAnchorId,
      target: edge.target,
      targetHandle: anchorBinding.targetAnchorId,
      animated: visibility === "active" && edge.kind !== "implicit",
      selectable: false,
      data: {
        edge: resolvedEdge,
        visibility,
        anchorBinding,
        isEditable: options.isEditable,
        onArmAnchorSelection: options.onArmAnchorSelection,
        onAddControlPoint: options.onAddControlPoint,
        onControlPointChange: options.onControlPointChange,
        onRemoveControlPoint: options.onRemoveControlPoint,
      },
      style: {
        ...kindStyle,
        opacity: visibilityOpacity[visibility],
      },
    };
  });
}
