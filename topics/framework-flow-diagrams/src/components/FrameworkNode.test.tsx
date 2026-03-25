import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReactFlowProvider, type NodeProps } from "@xyflow/react";
import { FrameworkNode } from "./FrameworkNode";

function buildProps(description?: string): NodeProps {
  return {
    id: "intent",
    type: "frameworkNode",
    selected: false,
    dragging: false,
    zIndex: 0,
    isConnectable: true,
    positionAbsoluteX: 0,
    positionAbsoluteY: 0,
    data: {
      node: {
        id: "intent",
        label: "User Intent / Task",
        kind: "entry",
        ...(description ? { description } : {}),
        position: { x: 0, y: 0 },
      },
      visibility: "active",
    },
  } as unknown as NodeProps;
}

describe("FrameworkNode", () => {
  it("marks nodes without descriptions for centered body layout", () => {
    render(
      <ReactFlowProvider>
        <FrameworkNode {...buildProps()} />
      </ReactFlowProvider>,
    );

    expect(screen.getByText("User Intent / Task").closest(".framework-node")).toHaveClass(
      "framework-node--compact",
    );
  });

  it("does not use compact layout when a description is present", () => {
    render(
      <ReactFlowProvider>
        <FrameworkNode {...buildProps("Host runtime and plugin entrypoint")} />
      </ReactFlowProvider>,
    );

    expect(screen.getByText("User Intent / Task").closest(".framework-node")).not.toHaveClass(
      "framework-node--compact",
    );
  });
});
