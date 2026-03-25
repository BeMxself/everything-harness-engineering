import { describe, expect, it } from "vitest";
import { diagrams } from "../data/diagrams";
import { getEdgeVisibility, getNodeVisibility } from "./visibility";

describe("visibility helpers", () => {
  const diagram = diagrams[0];

  it("marks shell nodes as ambient before their step becomes active", () => {
    expect(getNodeVisibility(diagram, "shell", 0)).toBe("ambient");
  });

  it("marks active step nodes as active", () => {
    expect(getNodeVisibility(diagram, "runtime", 0)).toBe("active");
  });

  it("marks previous step nodes as past after they have been traversed", () => {
    expect(getNodeVisibility(diagram, "runtime", 2)).toBe("past");
  });

  it("marks future nodes as future before they are reached", () => {
    expect(getNodeVisibility(diagram, "verify", 0)).toBe("future");
  });

  it("marks current step edges as active", () => {
    expect(getEdgeVisibility(diagram, "e1", 0)).toBe("active");
  });

  it("marks all nodes and edges active in panorama mode", () => {
    const panoramaIndex = diagram.steps.length - 1;

    expect(getNodeVisibility(diagram, "failVerify", panoramaIndex)).toBe("active");
    expect(getEdgeVisibility(diagram, "e14", panoramaIndex)).toBe("active");
  });
});
