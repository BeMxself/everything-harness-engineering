import { useViewport } from "@xyflow/react";
import type { DiagramStepAnnotation } from "../data/types";
import { resolveText, useI18n } from "../i18n";

type StepAnnotationsProps = {
  annotations: DiagramStepAnnotation[];
  positionsByNode: Record<string, { x: number; y: number }>;
};

export function StepAnnotations({
  annotations,
  positionsByNode,
}: StepAnnotationsProps) {
  const { lang, messages } = useI18n();
  const viewport = useViewport();

  if (!annotations.length) {
    return null;
  }

  return (
    <div className="step-annotations">
      {annotations.map((annotation) => {
        const position = positionsByNode[annotation.nodeId];

        if (!position) {
          return null;
        }

        return (
          <div
            key={annotation.id}
            className="step-annotation"
            style={{
              transform: `translate(${(position.x + annotation.dx) * viewport.zoom + viewport.x}px, ${(position.y + annotation.dy) * viewport.zoom + viewport.y}px) scale(${viewport.zoom})`,
              transformOrigin: "top left",
            }}
          >
            {annotation.evidenceStatus ? (
              <div className="step-annotation__eyebrow">
                <span
                  className={`step-annotation__status step-annotation__status--${annotation.evidenceStatus}`}
                >
                  {annotation.evidenceStatus === "stable"
                    ? messages.annotationStableBadge
                    : messages.annotationHypothesisBadge}
                </span>
              </div>
            ) : null}
            <div className="step-annotation__title">{resolveText(annotation.title, lang)}</div>
            <div className="step-annotation__chips">
              {annotation.participants.map((participant) => (
                <span key={participant} className="step-annotation__chip">
                  {participant}
                </span>
              ))}
            </div>
            {annotation.note ? (
              <p className="step-annotation__note">{resolveText(annotation.note, lang)}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
