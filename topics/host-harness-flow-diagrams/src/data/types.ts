export type DiagramNodeKind =
  | "entry"
  | "control"
  | "execution"
  | "verification"
  | "memory"
  | "shell"
  | "decision"
  | "terminal"
  | "failure";

export type DiagramEdgeKind = "main" | "feedback" | "failure" | "implicit";

export type HostKind = "opencode" | "claude-code" | "codex" | "multi-host";

export type EmphasisLevel = "low" | "medium" | "high";

export type DiagramPoint = {
  x: number;
  y: number;
};

export type LocalizedText =
  | string
  | {
      en: string;
      zh: string;
    };

export type DiagramAnchorId = "top" | "right" | "bottom" | "left";

export type DiagramAnchor = {
  id: DiagramAnchorId;
  side: DiagramAnchorId;
};

export type FrameworkDiagram = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  emphasis: {
    automationLoop: EmphasisLevel;
    harness: EmphasisLevel;
    control: EmphasisLevel;
    hostDependency: EmphasisLevel;
  };
  notes: {
    whyThisLoopMatters: LocalizedText;
    whereTheHarnessLives: LocalizedText;
  };
  readingGuide: {
    keyQuestion: LocalizedText;
    howToRead: LocalizedText;
    evidenceBoundary: LocalizedText;
    currentLimit: LocalizedText;
  };
  takeaways: LocalizedText[];
  sources: DiagramSource[];
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  steps: DiagramStep[];
  agentCollaboration?: AgentCollaborationGraph;
};

export type DiagramNode = {
  id: string;
  label: LocalizedText;
  kind: DiagramNodeKind;
  description?: string;
  host?: HostKind;
  position: DiagramPoint;
  anchors?: DiagramAnchor[];
  styleVariant?: "primary" | "secondary" | "muted";
};

export type DiagramEdge = {
  id: string;
  source: string;
  target: string;
  kind: DiagramEdgeKind;
  label?: LocalizedText;
  controlPoints?: DiagramPoint[];
  sourceAnchorId?: DiagramAnchorId;
  targetAnchorId?: DiagramAnchorId;
};

export type DiagramStep = {
  id: string;
  label: LocalizedText;
  activeNodeIds: string[];
  activeEdgeIds: string[];
  note?: LocalizedText;
  mode?: "sequence" | "panorama";
  annotations?: DiagramStepAnnotation[];
};

export type DiagramStepAnnotation = {
  id: string;
  nodeId: string;
  title: LocalizedText;
  participants: string[];
  note?: LocalizedText;
  dx: number;
  dy: number;
};

export type AgentCollaborationGraph = {
  summary: LocalizedText;
  nodes: {
    id: string;
    label: LocalizedText;
    role: LocalizedText;
    x: number;
    y: number;
  }[];
  edges: {
    source: string;
    target: string;
    label: LocalizedText;
  }[];
};

export type DiagramSource = {
  label: LocalizedText;
  href: string;
  note: LocalizedText;
};

export type VisibilityState = "active" | "past" | "future" | "ambient";
