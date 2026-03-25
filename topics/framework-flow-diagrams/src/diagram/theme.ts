import type {
  DiagramEdgeKind,
  DiagramNodeKind,
  HostKind,
  VisibilityState,
} from "../data/types";

export const palette = {
  text: "#111827",
  subtext: "#374151",
  blue: "#2563eb",
  blueDark: "#1d4ed8",
  blueSoft: "#dbeafe",
  green: "#16a34a",
  greenSoft: "#dcfce7",
  orange: "#ea580c",
  orangeSoft: "#ffedd5",
  yellow: "#ca8a04",
  yellowSoft: "#fef9c3",
  red: "#dc2626",
  redSoft: "#fee2e2",
  gray: "#6b7280",
  graySoft: "#e5e7eb",
  shellSoft: "#eceaf7",
};

export const visibilityOpacity: Record<VisibilityState, number> = {
  active: 1,
  past: 0.5,
  future: 0.16,
  ambient: 0.32,
};

export const hostLabels: Record<HostKind, string> = {
  opencode: "OC",
  "claude-code": "CC",
  codex: "CX",
  "multi-host": "MH",
};

export const nodeKindStyles: Record<
  DiagramNodeKind,
  {
    background: string;
    borderColor: string;
    color: string;
    borderStyle?: "solid" | "dashed";
    borderWidth?: number;
  }
> = {
  entry: {
    background: palette.blueSoft,
    borderColor: palette.blue,
    color: palette.text,
    borderWidth: 1.5,
  },
  control: {
    background: palette.blueDark,
    borderColor: "#173ea6",
    color: "#ffffff",
    borderWidth: 2.5,
  },
  execution: {
    background: "#ffffff",
    borderColor: "#94a3b8",
    color: palette.text,
    borderWidth: 1.5,
  },
  verification: {
    background: palette.greenSoft,
    borderColor: palette.green,
    color: palette.text,
    borderWidth: 1.5,
  },
  memory: {
    background: palette.orangeSoft,
    borderColor: palette.orange,
    color: palette.text,
    borderWidth: 1.5,
  },
  shell: {
    background: palette.shellSoft,
    borderColor: palette.gray,
    color: palette.text,
    borderStyle: "dashed",
    borderWidth: 1.5,
  },
  decision: {
    background: palette.yellowSoft,
    borderColor: palette.yellow,
    color: palette.text,
    borderWidth: 1.5,
  },
  terminal: {
    background: palette.green,
    borderColor: "#15803d",
    color: "#ffffff",
    borderWidth: 2,
  },
  failure: {
    background: palette.redSoft,
    borderColor: palette.red,
    color: palette.text,
    borderWidth: 1.5,
  },
};

export const edgeKindStyles: Record<
  DiagramEdgeKind,
  {
    stroke: string;
    strokeWidth: number;
    strokeDasharray?: string;
  }
> = {
  main: {
    stroke: palette.blue,
    strokeWidth: 2,
  },
  feedback: {
    stroke: palette.green,
    strokeWidth: 2.4,
  },
  failure: {
    stroke: palette.red,
    strokeWidth: 2.2,
  },
  implicit: {
    stroke: palette.gray,
    strokeWidth: 1.6,
    strokeDasharray: "6 6",
  },
};
