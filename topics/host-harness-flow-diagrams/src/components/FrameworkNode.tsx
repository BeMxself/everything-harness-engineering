import type { MouseEvent as ReactMouseEvent } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { DiagramAnchorId, DiagramNode, VisibilityState } from "../data/types";
import { getNodeAnchors } from "../diagram/anchors";
import { resolveText, useI18n } from "../i18n";
import { hostLabels } from "../diagram/theme";

type NodePayload = {
  node: DiagramNode;
  visibility: VisibilityState;
  isEditable?: boolean;
  onAnchorSelect?: (nodeId: string, anchorId: DiagramAnchorId) => void;
};

function toPosition(anchorId: DiagramAnchorId) {
  switch (anchorId) {
    case "top":
      return Position.Top;
    case "right":
      return Position.Right;
    case "bottom":
      return Position.Bottom;
    case "left":
      return Position.Left;
  }
}

function getAnchorStyle(anchorId: DiagramAnchorId) {
  switch (anchorId) {
    case "top":
      return { left: "50%", top: 0, transform: "translate(-50%, -50%)" };
    case "right":
      return { right: 0, top: "50%", transform: "translate(50%, -50%)" };
    case "bottom":
      return { left: "50%", bottom: 0, transform: "translate(-50%, 50%)" };
    case "left":
      return { left: 0, top: "50%", transform: "translate(-50%, -50%)" };
  }
}

export function FrameworkNode({ data }: NodeProps) {
  const { lang } = useI18n();
  const { node, isEditable, onAnchorSelect } = data as NodePayload;
  const anchors = getNodeAnchors(node);
  const isCompact = !node.description;
  const label = resolveText(node.label, lang);
  const description = node.description ? resolveText(node.description, lang) : null;

  return (
    <div
      className={`framework-node framework-node--${node.kind}${
        isCompact ? " framework-node--compact" : ""
      }`}
    >
      {node.host ? (
        <span className="framework-node__badge">{hostLabels[node.host]}</span>
      ) : null}
      <div className="framework-node__body">
        <div className="framework-node__title">{label}</div>
        {description ? (
          <div className="framework-node__description">{description}</div>
        ) : null}
      </div>
      {anchors.map((anchor) => (
        <Handle
          key={`${node.id}-${anchor.id}-target`}
          id={anchor.id}
          type="target"
          position={toPosition(anchor.side)}
          className="framework-node__handle"
          style={getAnchorStyle(anchor.side)}
        />
      ))}
      {anchors.map((anchor) => (
        <Handle
          key={`${node.id}-${anchor.id}-source`}
          id={anchor.id}
          type="source"
          position={toPosition(anchor.side)}
          className="framework-node__handle"
          style={getAnchorStyle(anchor.side)}
        />
      ))}
      {isEditable ? (
        <>
          {anchors.map((anchor) => (
            <button
              key={`${node.id}-${anchor.id}-button`}
              type="button"
              className={`framework-node__anchor framework-node__anchor--${anchor.side}`}
              aria-label={`Use ${anchor.id} anchor on ${label}`}
              style={getAnchorStyle(anchor.side)}
              onClick={(event: ReactMouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                event.stopPropagation();
                onAnchorSelect?.(node.id, anchor.id);
              }}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}
