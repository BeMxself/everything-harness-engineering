import {
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  useReactFlow,
  type Edge,
  type EdgeProps,
} from "@xyflow/react";
import { buildEdgePath, getEdgeLabelPosition } from "../diagram/edgePath";
import type { DiagramEdgeData } from "../diagram/mapEdges";
import { resolveText, useI18n } from "../i18n";

export function FrameworkEdge(props: EdgeProps<Edge<DiagramEdgeData>>) {
  const { lang } = useI18n();
  const { screenToFlowPosition } = useReactFlow();
  const controlPoints = props.data?.edge.controlPoints;
  const edgePath = buildEdgePath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    targetX: props.targetX,
    targetY: props.targetY,
    controlPoints,
  });
  const { x: labelX, y: labelY } = getEdgeLabelPosition({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    targetX: props.targetX,
    targetY: props.targetY,
    controlPoints,
  });
  const label = props.data?.edge.label ? resolveText(props.data.edge.label, lang) : undefined;
  const isEditable = Boolean(props.data?.isEditable);

  function handleControlPointPointerDown(pointIndex: number) {
    return (event: ReactPointerEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const handlePointerMove = (moveEvent: PointerEvent) => {
        const nextPosition = screenToFlowPosition({
          x: moveEvent.clientX,
          y: moveEvent.clientY,
        });

        props.data?.onControlPointChange?.(props.id, pointIndex, {
          x: Math.round(nextPosition.x),
          y: Math.round(nextPosition.y),
        });
      };

      const handlePointerUp = () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    };
  }

  function handleAddControlPoint() {
    props.data?.onAddControlPoint?.(props.id, {
      x: Math.round(labelX),
      y: Math.round(labelY),
    });
  }

  function handleRemoveControlPoint(pointIndex: number) {
    return (event: ReactMouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      props.data?.onRemoveControlPoint?.(props.id, pointIndex);
    };
  }

  return (
    <>
      <BaseEdge id={props.id} path={edgePath} style={props.style} />
      {isEditable && controlPoints?.length ? (
        <EdgeLabelRenderer>
          <>
            {controlPoints.map((point, index) => (
              <div
                key={`${props.id}-control-${index}`}
                className="framework-edge__control-group"
                style={{
                  transform: `translate(-50%, -50%) translate(${point.x}px, ${point.y}px)`,
                }}
              >
                <button
                  type="button"
                  className="framework-edge__control"
                  aria-label={`Adjust ${props.id} control point ${index + 1}`}
                  onPointerDown={handleControlPointPointerDown(index)}
                />
                <button
                  type="button"
                  className="framework-edge__control-remove"
                  aria-label={`Remove ${props.id} control point ${index + 1}`}
                  onClick={handleRemoveControlPoint(index)}
                >
                  ×
                </button>
              </div>
            ))}
          </>
        </EdgeLabelRenderer>
      ) : null}
      {label || isEditable ? (
        <EdgeLabelRenderer>
          <div
            className="framework-edge__label framework-edge__toolbar"
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            }}
          >
            {label ? <span>{label}</span> : null}
            {isEditable ? (
              <>
                <button
                  type="button"
                  className="framework-edge__anchor-mode"
                  aria-label={`Set source anchor for ${props.id}`}
                  onClick={() => props.data?.onArmAnchorSelection?.(props.id, "source")}
                >
                  S
                </button>
                <button
                  type="button"
                  className="framework-edge__anchor-mode"
                  aria-label={`Set target anchor for ${props.id}`}
                  onClick={() => props.data?.onArmAnchorSelection?.(props.id, "target")}
                >
                  T
                </button>
              </>
            ) : null}
            {isEditable ? (
              <button
                type="button"
                className="framework-edge__add"
                aria-label={`Add control point to ${props.id}`}
                onClick={handleAddControlPoint}
              >
                +
              </button>
            ) : null}
          </div>
        </EdgeLabelRenderer>
      ) : null}
    </>
  );
}
