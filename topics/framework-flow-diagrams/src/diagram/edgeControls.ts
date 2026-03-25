import type { DiagramPoint } from "../data/types";

type EdgeEndpoints = {
  source: DiagramPoint;
  target: DiagramPoint;
};

function getPathPoints(controlPoints: DiagramPoint[], endpoints: EdgeEndpoints) {
  return [endpoints.source, ...controlPoints, endpoints.target];
}

function distanceToSegment(point: DiagramPoint, start: DiagramPoint, end: DiagramPoint) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lengthSquared = dx * dx + dy * dy;

  if (lengthSquared === 0) {
    return Math.hypot(point.x - start.x, point.y - start.y);
  }

  const t = Math.max(
    0,
    Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared),
  );
  const projection = {
    x: start.x + t * dx,
    y: start.y + t * dy,
  };

  return Math.hypot(point.x - projection.x, point.y - projection.y);
}

export function insertControlPoint(
  controlPoints: DiagramPoint[],
  nextPoint: DiagramPoint,
  endpoints: EdgeEndpoints,
) {
  if (controlPoints.length === 0) {
    return [nextPoint];
  }

  const pathPoints = getPathPoints(controlPoints, endpoints);

  let insertAfterIndex = 0;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (let index = 0; index < pathPoints.length - 1; index += 1) {
    const distance = distanceToSegment(nextPoint, pathPoints[index], pathPoints[index + 1]);

    if (distance < bestDistance) {
      bestDistance = distance;
      insertAfterIndex = index;
    }
  }

  return [
    ...controlPoints.slice(0, insertAfterIndex),
    nextPoint,
    ...controlPoints.slice(insertAfterIndex),
  ];
}

export function removeControlPoint(controlPoints: DiagramPoint[], pointIndex: number) {
  return controlPoints.filter((_, index) => index !== pointIndex);
}
