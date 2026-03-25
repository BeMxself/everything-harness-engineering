import { describe, expect, it } from "vitest";
import { buildEdgePath, getEdgeLabelPosition } from "./edgePath";

describe("edgePath", () => {
  it("falls back to a bezier path when no control points are provided", () => {
    const path = buildEdgePath({
      sourceX: 0,
      sourceY: 0,
      targetX: 100,
      targetY: 100,
    });

    expect(path).toMatch(/^M0,0 C/);
  });

  it("builds a smooth path through explicit control points", () => {
    const path = buildEdgePath({
      sourceX: 100,
      sourceY: 100,
      targetX: 500,
      targetY: 100,
      controlPoints: [
        { x: 180, y: 220 },
        { x: 420, y: 220 },
      ],
    });

    expect(path).toMatch(/^M100,100 C/);
    expect(path).not.toContain(" L");
    expect((path.match(/C/g) ?? []).length).toBeGreaterThanOrEqual(2);
  });

  it("places the edge label near the middle of a controlled path", () => {
    const labelPosition = getEdgeLabelPosition({
      sourceX: 100,
      sourceY: 100,
      targetX: 500,
      targetY: 100,
      controlPoints: [
        { x: 180, y: 220 },
        { x: 420, y: 220 },
      ],
    });

    expect(labelPosition).toEqual({ x: 300, y: 220 });
  });
});
