import { getBezierPath } from "@xyflow/react";

type DiagramPoint = {
  x: number;
  y: number;
};

type EdgePathInput = {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  controlPoints?: DiagramPoint[];
};

function buildPathPoints({
  sourceX,
  sourceY,
  targetX,
  targetY,
  controlPoints = [],
}: EdgePathInput) {
  return [
    { x: sourceX, y: sourceY },
    ...controlPoints,
    { x: targetX, y: targetY },
  ];
}

function getSmoothedControlPoints(
  previous: DiagramPoint,
  current: DiagramPoint,
  next: DiagramPoint,
  following: DiagramPoint,
) {
  return {
    startControl: {
      x: current.x + (next.x - previous.x) / 6,
      y: current.y + (next.y - previous.y) / 6,
    },
    endControl: {
      x: next.x - (following.x - current.x) / 6,
      y: next.y - (following.y - current.y) / 6,
    },
  };
}

export function buildEdgePath(input: EdgePathInput) {
  if (!input.controlPoints?.length) {
    const [path] = getBezierPath(input);
    return path;
  }

  const points = buildPathPoints(input);
  const segments = points.slice(0, -1).map((point, index) => {
    const previous = points[Math.max(0, index - 1)];
    const current = point;
    const next = points[index + 1];
    const following = points[Math.min(points.length - 1, index + 2)];
    const { startControl, endControl } = getSmoothedControlPoints(
      previous,
      current,
      next,
      following,
    );

    return `C${startControl.x},${startControl.y} ${endControl.x},${endControl.y} ${next.x},${next.y}`;
  });

  return `M${points[0].x},${points[0].y} ${segments.join(" ")}`;
}

export function getEdgeLabelPosition(input: EdgePathInput) {
  if (!input.controlPoints?.length) {
    const [, labelX, labelY] = getBezierPath(input);
    return { x: labelX, y: labelY };
  }

  const points = buildPathPoints(input);
  const segmentLengths = points.slice(0, -1).map((point, index) => {
    const nextPoint = points[index + 1];
    return Math.hypot(nextPoint.x - point.x, nextPoint.y - point.y);
  });
  const totalLength = segmentLengths.reduce((sum, length) => sum + length, 0);
  const halfwayLength = totalLength / 2;

  let traversed = 0;

  for (let index = 0; index < segmentLengths.length; index += 1) {
    const segmentLength = segmentLengths[index];
    const start = points[index];
    const end = points[index + 1];

    if (traversed + segmentLength >= halfwayLength) {
      const ratio = segmentLength === 0 ? 0 : (halfwayLength - traversed) / segmentLength;
      return {
        x: start.x + (end.x - start.x) * ratio,
        y: start.y + (end.y - start.y) * ratio,
      };
    }

    traversed += segmentLength;
  }

  return points[points.length - 1];
}
