import { describe, expect, it } from "vitest";
import { insertControlPoint, removeControlPoint } from "./edgeControls";

describe("edgeControls", () => {
  it("adds the first control point to an edge with none", () => {
    const next = insertControlPoint(
      [],
      { x: 50, y: 40 },
      {
        source: { x: 0, y: 0 },
        target: { x: 100, y: 0 },
      },
    );

    expect(next).toEqual([{ x: 50, y: 40 }]);
  });

  it("inserts a control point into the nearest segment", () => {
    const next = insertControlPoint(
      [
        { x: 20, y: 40 },
        { x: 80, y: 40 },
      ],
      { x: 50, y: 45 },
      {
        source: { x: 0, y: 0 },
        target: { x: 100, y: 0 },
      },
    );

    expect(next).toEqual([
      { x: 20, y: 40 },
      { x: 50, y: 45 },
      { x: 80, y: 40 },
    ]);
  });

  it("removes the selected control point", () => {
    const next = removeControlPoint(
      [
        { x: 20, y: 40 },
        { x: 50, y: 45 },
        { x: 80, y: 40 },
      ],
      1,
    );

    expect(next).toEqual([
      { x: 20, y: 40 },
      { x: 80, y: 40 },
    ]);
  });
});
