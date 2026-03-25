import type { FrameworkDiagram, VisibilityState } from "../data/types";

const shellNodeKinds = new Set(["shell"]);

function getFirstActiveStepIndex(
  idsByStep: string[][],
  id: string,
): number {
  const index = idsByStep.findIndex((ids) => ids.includes(id));
  return index === -1 ? Number.POSITIVE_INFINITY : index;
}

export function getNodeVisibility(
  diagram: FrameworkDiagram,
  nodeId: string,
  stepIndex: number,
): VisibilityState {
  const currentStep = diagram.steps[stepIndex];
  const node = diagram.nodes.find((item) => item.id === nodeId);
  if (!node) {
    throw new Error(`Unknown node id: ${nodeId}`);
  }

  if (currentStep?.mode === "panorama") {
    return "active";
  }

  if (shellNodeKinds.has(node.kind)) {
    return currentStep?.activeNodeIds.includes(nodeId)
      ? "active"
      : "ambient";
  }

  const firstIndex = getFirstActiveStepIndex(
    diagram.steps.map((step) => step.activeNodeIds),
    nodeId,
  );

  if (stepIndex === firstIndex) {
    return "active";
  }

  if (stepIndex > firstIndex) {
    return "past";
  }

  return "future";
}

export function getEdgeVisibility(
  diagram: FrameworkDiagram,
  edgeId: string,
  stepIndex: number,
): VisibilityState {
  const currentStep = diagram.steps[stepIndex];
  const edge = diagram.edges.find((item) => item.id === edgeId);
  if (!edge) {
    throw new Error(`Unknown edge id: ${edgeId}`);
  }

  if (currentStep?.mode === "panorama") {
    return "active";
  }

  if (edge.kind === "implicit") {
    return currentStep?.activeEdgeIds.includes(edgeId)
      ? "active"
      : "ambient";
  }

  const firstIndex = getFirstActiveStepIndex(
    diagram.steps.map((step) => step.activeEdgeIds),
    edgeId,
  );

  if (stepIndex === firstIndex) {
    return "active";
  }

  if (stepIndex > firstIndex) {
    return "past";
  }

  return "future";
}
