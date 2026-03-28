import type { FrameworkDiagram } from "../data/types";
import { InfoPanelRow } from "./InfoPanelRow";
import { Legend } from "./Legend";
import { resolveText, useI18n } from "../i18n";

type InfoPanelsProps = {
  diagram: FrameworkDiagram;
};

function formatLevel(level: "low" | "medium" | "high") {
  return level[0].toUpperCase() + level.slice(1);
}

export function InfoPanels({ diagram }: InfoPanelsProps) {
  const { lang, messages } = useI18n();

  return (
    <section className="info-rows" aria-label={messages.diagramContextPanels}>
      <InfoPanelRow title={messages.framingRowTitle} hint={messages.framingRowHint}>
        <article className="info-column">
          <div className="info-card__header">
            <h3>{messages.legendTitle}</h3>
            <p>{messages.legendHint}</p>
          </div>
          <Legend />
        </article>

        <article className="info-column">
          <div className="info-card__header">
            <h3>{messages.emphasisTitle}</h3>
            <p>{messages.emphasisHint}</p>
          </div>
          <dl className="emphasis-list">
            <div>
              <dt>{messages.automationLoop}</dt>
              <dd>{formatLevel(diagram.emphasis.automationLoop)}</dd>
            </div>
            <div>
              <dt>{messages.harness}</dt>
              <dd>{formatLevel(diagram.emphasis.harness)}</dd>
            </div>
            <div>
              <dt>{messages.control}</dt>
              <dd>{formatLevel(diagram.emphasis.control)}</dd>
            </div>
            <div>
              <dt>{messages.hostDependency}</dt>
              <dd>{formatLevel(diagram.emphasis.hostDependency)}</dd>
            </div>
          </dl>
        </article>

        <article className="info-column">
          <div className="info-card__header">
            <h3>{messages.readingGuideTitle}</h3>
            <p>{messages.readingGuideHint}</p>
          </div>
          <div className="note-block">
            <h4>{messages.keyQuestion}</h4>
            <p>{resolveText(diagram.readingGuide.keyQuestion, lang)}</p>
          </div>
          <div className="note-block">
            <h4>{messages.howToReadDiagram}</h4>
            <p>{resolveText(diagram.readingGuide.howToRead, lang)}</p>
          </div>
          <div className="note-block">
            <h4>{messages.evidenceBoundary}</h4>
            <p>{resolveText(diagram.readingGuide.evidenceBoundary, lang)}</p>
          </div>
          <div className="note-block">
            <h4>{messages.currentLimit}</h4>
            <p>{resolveText(diagram.readingGuide.currentLimit, lang)}</p>
          </div>
        </article>
      </InfoPanelRow>

      <InfoPanelRow title={messages.evidenceRowTitle} hint={messages.evidenceRowHint}>
        <article className="info-column">
          <div className="info-card__header">
            <h3>{messages.takeawaysTitle}</h3>
            <p>{messages.takeawaysHint}</p>
          </div>
          <ul className="takeaway-list">
            {diagram.takeaways.map((takeaway, index) => (
              <li key={`${diagram.id}-takeaway-${index}`}>{resolveText(takeaway, lang)}</li>
            ))}
          </ul>
        </article>

        <article className="info-column">
          <div className="info-card__header">
            <h3>{messages.researchNotesTitle}</h3>
            <p>{messages.researchNotesHint}</p>
          </div>
          <div className="note-block">
            <h4>{messages.whyThisLoopMatters}</h4>
            <p>{resolveText(diagram.notes.whyThisLoopMatters, lang)}</p>
          </div>
          <div className="note-block">
            <h4>{messages.whereTheHarnessLives}</h4>
            <p>{resolveText(diagram.notes.whereTheHarnessLives, lang)}</p>
          </div>
        </article>

        <article className="info-column">
          <div className="info-card__header">
            <h3>{messages.sourcesTitle}</h3>
            <p>{messages.sourcesHint}</p>
          </div>
          <ul className="source-list">
            {diagram.sources.map((source, index) => (
              <li key={`${diagram.id}-source-${index}`} className="source-list__item">
                <a href={source.href} target="_blank" rel="noreferrer">
                  {resolveText(source.label, lang)}
                </a>
                <p>{resolveText(source.note, lang)}</p>
              </li>
            ))}
          </ul>
        </article>
      </InfoPanelRow>
    </section>
  );
}
