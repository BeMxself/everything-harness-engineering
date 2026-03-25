import type { DiagramStep } from "../data/types";
import { resolveText, useI18n } from "../i18n";

type PlaybackControlsProps = {
  steps: DiagramStep[];
  stepIndex: number;
  onSelectStep: (stepIndex: number) => void;
};

export function PlaybackControls({
  steps,
  stepIndex,
  onSelectStep,
}: PlaybackControlsProps) {
  const { lang, messages } = useI18n();

  return (
    <div className="playback-controls" aria-label="Diagram playback controls">
      <div className="playback-controls__status">
        {messages.stepLabel} {stepIndex + 1} {lang === "zh" ? messages.stepOf : messages.stepOf}{" "}
        {steps.length}
      </div>
      <div className="playback-controls__steps">
        {steps.map((step, index) => (
          <button
            key={step.id}
            type="button"
            className={index === stepIndex ? "is-active" : ""}
            aria-current={index === stepIndex ? "step" : undefined}
            onClick={() => onSelectStep(index)}
          >
            {index + 1} {resolveText(step.label, lang)}
          </button>
        ))}
      </div>
    </div>
  );
}
