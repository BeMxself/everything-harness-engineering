import { useEffect, useMemo, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { FrameworkDiagram as FrameworkDiagramType } from "../data/types";
import { buildEdgeAnchorBindings } from "../diagram/anchors";
import { mapEdges } from "../diagram/mapEdges";
import { mapNodes, type FrameworkNodeData } from "../diagram/mapNodes";
import { getEdgeVisibility, getNodeVisibility } from "../diagram/visibility";
import { insertControlPoint, removeControlPoint } from "../diagram/edgeControls";
import { resolveText, useI18n } from "../i18n";
import { FrameworkEdge } from "./FrameworkEdge";
import { FrameworkNode } from "./FrameworkNode";
import { PlaybackControls } from "./PlaybackControls";
import { StepAnnotations } from "./StepAnnotations";

const nodeTypes = { frameworkNode: FrameworkNode };
const edgeTypes = { frameworkEdge: FrameworkEdge };

type FrameworkDiagramProps = {
  diagram: FrameworkDiagramType;
};

function buildLayoutPositions(diagram: FrameworkDiagramType) {
  return Object.fromEntries(
    diagram.nodes.map((node) => [node.id, node.position]),
  ) as Record<string, { x: number; y: number }>;
}

function buildEdgeControlPoints(diagram: FrameworkDiagramType) {
  return Object.fromEntries(
    diagram.edges
      .filter((edge) => edge.controlPoints?.length)
      .map((edge) => [edge.id, edge.controlPoints!.map((point) => ({ ...point }))]),
  ) as Record<string, { x: number; y: number }[]>;
}

function roundPosition(value: number) {
  return Math.round(value);
}

function buildEditableNodes(
  diagram: FrameworkDiagramType,
  positions: Record<string, { x: number; y: number }>,
  options: {
    onAnchorSelect?: (nodeId: string, anchorId: "top" | "right" | "bottom" | "left") => void;
  } = {},
) {
  return mapNodes(diagram, () => "active", {
    draggable: true,
    isEditable: true,
    onAnchorSelect: options.onAnchorSelect,
    positions,
  });
}

function extractLayoutPositions(nodes: Node<FrameworkNodeData>[]) {
  return Object.fromEntries(
    nodes.map((node) => [
      node.id,
      {
        x: roundPosition(node.position.x),
        y: roundPosition(node.position.y),
      },
    ]),
  ) as Record<string, { x: number; y: number }>;
}

function FrameworkDiagramInner({ diagram }: FrameworkDiagramProps) {
  const { lang, messages } = useI18n();
  const [stepIndex, setStepIndex] = useState(0);
  const [isLayoutEditMode, setIsLayoutEditMode] = useState(false);
  const [layoutPositions, setLayoutPositions] = useState(() => buildLayoutPositions(diagram));
  const [edgeControlPoints, setEdgeControlPoints] = useState(() => buildEdgeControlPoints(diagram));
  const [edgeAnchorBindings, setEdgeAnchorBindings] = useState(() =>
    buildEdgeAnchorBindings(diagram, buildLayoutPositions(diagram)),
  );
  const [anchorSelection, setAnchorSelection] = useState<{
    edgeId: string;
    endpoint: "source" | "target";
  } | null>(null);
  const handleAnchorSelect = (nodeId: string, anchorId: "top" | "right" | "bottom" | "left") => {
    if (!anchorSelection) {
      return;
    }

    const targetEdge = diagram.edges.find((edge) => edge.id === anchorSelection.edgeId);

    if (!targetEdge) {
      return;
    }

    const expectedNodeId =
      anchorSelection.endpoint === "source" ? targetEdge.source : targetEdge.target;

    if (expectedNodeId !== nodeId) {
      return;
    }

    setEdgeAnchorBindings((current) => ({
      ...current,
      [anchorSelection.edgeId]: {
        ...current[anchorSelection.edgeId],
        [anchorSelection.endpoint === "source"
          ? "sourceAnchorId"
          : "targetAnchorId"]: anchorId,
      },
    }));
    setAnchorSelection(null);
  };

  const [editableNodes, setEditableNodes, onEditableNodesChange] = useNodesState<
    Node<FrameworkNodeData>
  >(buildEditableNodes(diagram, buildLayoutPositions(diagram), {
    onAnchorSelect: handleAnchorSelect,
  }));

  useEffect(() => {
    setStepIndex(0);
    const initialPositions = buildLayoutPositions(diagram);
    const initialEdgeControlPoints = buildEdgeControlPoints(diagram);
    const initialEdgeAnchorBindings = buildEdgeAnchorBindings(diagram, initialPositions);

    setIsLayoutEditMode(false);
    setLayoutPositions(initialPositions);
    setEdgeControlPoints(initialEdgeControlPoints);
    setEdgeAnchorBindings(initialEdgeAnchorBindings);
    setAnchorSelection(null);
    setEditableNodes(buildEditableNodes(diagram, initialPositions, {
      onAnchorSelect: handleAnchorSelect,
    }));
  }, [diagram, setEditableNodes]);

  useEffect(() => {
    if (!isLayoutEditMode) {
      return;
    }

    setEditableNodes((current) =>
      buildEditableNodes(diagram, extractLayoutPositions(current), {
        onAnchorSelect: handleAnchorSelect,
      }),
    );
  }, [anchorSelection, diagram, isLayoutEditMode, setEditableNodes]);

  const viewNodes = useMemo(
    () =>
      mapNodes(
        diagram,
        (nodeId) => getNodeVisibility(diagram, nodeId, stepIndex),
        {
          isEditable: isLayoutEditMode,
          onAnchorSelect: handleAnchorSelect,
          positions: layoutPositions,
        },
      ),
    [diagram, isLayoutEditMode, layoutPositions, stepIndex],
  );
  const editNodePositions = useMemo(
    () =>
      Object.fromEntries(
        editableNodes.map((node) => [
          node.id,
          {
            x: roundPosition(node.position.x),
            y: roundPosition(node.position.y),
          },
        ]),
      ) as Record<string, { x: number; y: number }>,
    [editableNodes],
  );

  const edges = useMemo(
    () =>
      mapEdges(
        diagram,
        (edgeId) =>
          isLayoutEditMode ? "active" : getEdgeVisibility(diagram, edgeId, stepIndex),
        {
          controlPointsByEdge: edgeControlPoints,
          anchorBindingsByEdge: edgeAnchorBindings,
          isEditable: isLayoutEditMode,
          onArmAnchorSelection: (edgeId, endpoint) => {
            setAnchorSelection({ edgeId, endpoint });
          },
          onAddControlPoint: (edgeId, nextPoint) => {
            setEdgeControlPoints((current) => {
              const targetEdge = diagram.edges.find((edge) => edge.id === edgeId);

              if (!targetEdge) {
                return current;
              }

              const currentPoints = current[edgeId] ?? [];
              const sourceNode = editNodePositions[targetEdge.source];
              const targetNode = editNodePositions[targetEdge.target];

              if (!sourceNode || !targetNode) {
                return current;
              }

              return {
                ...current,
                [edgeId]: insertControlPoint(currentPoints, nextPoint, {
                  source: sourceNode,
                  target: targetNode,
                }),
              };
            });
          },
          onControlPointChange: (edgeId, pointIndex, nextPoint) => {
            setEdgeControlPoints((current) => {
              const currentPoints = current[edgeId];

              if (!currentPoints || !currentPoints[pointIndex]) {
                return current;
              }

              const nextPoints = currentPoints.map((point, index) =>
                index === pointIndex ? nextPoint : point,
              );

              return {
                ...current,
                [edgeId]: nextPoints,
              };
            });
          },
          onRemoveControlPoint: (edgeId, pointIndex) => {
            setEdgeControlPoints((current) => {
              const currentPoints = current[edgeId];

              if (!currentPoints) {
                return current;
              }

              return {
                ...current,
                [edgeId]: removeControlPoint(currentPoints, pointIndex),
              };
            });
          },
        },
      ),
    [diagram, edgeAnchorBindings, edgeControlPoints, editNodePositions, isLayoutEditMode, stepIndex],
  );

  const nodes = isLayoutEditMode ? editableNodes : viewNodes;
  const positionsByNode = useMemo(
    () =>
      Object.fromEntries(
        nodes.map((node) => [
          node.id,
          {
            x: roundPosition(node.position.x),
            y: roundPosition(node.position.y),
          },
        ]),
      ) as Record<string, { x: number; y: number }>,
    [nodes],
  );
  const step = diagram.steps[stepIndex];
  const layoutSnapshot = useMemo(
    () => {
      const nodeLines = nodes.map((node) => {
        const position = {
          x: roundPosition(node.position.x),
          y: roundPosition(node.position.y),
        };
        return `${node.id}: x=${position.x}, y=${position.y}`;
      });
      const edgeLines = Object.entries(edgeControlPoints).flatMap(([edgeId, points]) =>
        points.map((point, index) => `${edgeId}[${index + 1}]: x=${point.x}, y=${point.y}`),
      );
      const anchorLines = Object.entries(edgeAnchorBindings).map(
        ([edgeId, binding]) =>
          `${edgeId}: source anchor=${binding.sourceAnchorId}, target anchor=${binding.targetAnchorId}`,
      );

      return [...nodeLines, ...edgeLines, ...anchorLines];
    },
    [edgeAnchorBindings, edgeControlPoints, nodes],
  );

  function toggleLayoutEditMode() {
    if (isLayoutEditMode) {
      setLayoutPositions(extractLayoutPositions(editableNodes));
      setIsLayoutEditMode(false);
      return;
    }

    setEditableNodes(buildEditableNodes(diagram, layoutPositions, {
      onAnchorSelect: handleAnchorSelect,
    }));
    setIsLayoutEditMode(true);
  }

  async function copyLayoutSnapshot() {
    await navigator.clipboard.writeText(layoutSnapshot.join("\n"));
  }

  return (
    <section className="diagram-panel">
      <div className="diagram-panel__header">
          <div>
            <h2>{resolveText(diagram.title, lang)}</h2>
            <p>{resolveText(diagram.summary, lang)}</p>
          </div>
          <div className="diagram-panel__step-note">
            {step.note ? <div>{resolveText(step.note, lang)}</div> : null}
          </div>
        </div>

      <div className="diagram-panel__canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={isLayoutEditMode ? onEditableNodesChange : undefined}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          proOptions={{ hideAttribution: true }}
          nodesDraggable={isLayoutEditMode}
          nodesConnectable={false}
          elementsSelectable={isLayoutEditMode}
          panOnDrag
        >
          <Background gap={20} size={1} color="#e5e7eb" />
          <MiniMap pannable zoomable />
          <Controls showInteractive={false} />
        </ReactFlow>
        {!isLayoutEditMode && step.mode !== "panorama" ? (
          <StepAnnotations
            annotations={step.annotations ?? []}
            positionsByNode={positionsByNode}
          />
        ) : null}
      </div>

      <PlaybackControls
        steps={diagram.steps}
        stepIndex={stepIndex}
        onSelectStep={setStepIndex}
      />

      <section className="layout-editor" aria-label="Layout editor">
        <div className="layout-editor__header">
          <div>
            <h3>{messages.layoutEditTitle}</h3>
            <p>
              {isLayoutEditMode
                ? messages.layoutEditBody
                : messages.layoutEditOffBody}
            </p>
          </div>
          <button
            type="button"
            className={`layout-editor__toggle${isLayoutEditMode ? " is-active" : ""}`}
            aria-pressed={isLayoutEditMode}
            onClick={toggleLayoutEditMode}
          >
            {isLayoutEditMode ? messages.layoutEditOn : messages.layoutEditOff}
          </button>
        </div>

        {isLayoutEditMode ? (
          <div className="layout-editor__body">
            <div className="layout-editor__actions">
              <button
                type="button"
                className="layout-editor__copy"
                onClick={copyLayoutSnapshot}
              >
                {messages.copyLayoutSnapshot}
              </button>
            </div>
            <div className="layout-editor__note">
              {messages.layoutEditNote}
            </div>
            <pre className="layout-editor__snapshot">{layoutSnapshot.join("\n")}</pre>
          </div>
        ) : null}
      </section>
    </section>
  );
}

export function FrameworkDiagram({ diagram }: FrameworkDiagramProps) {
  return (
    <ReactFlowProvider>
      <FrameworkDiagramInner diagram={diagram} />
    </ReactFlowProvider>
  );
}
