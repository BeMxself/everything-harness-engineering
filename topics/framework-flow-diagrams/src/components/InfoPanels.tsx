import type { FrameworkDiagram } from "../data/types";
import { CollapsibleInfoPanel } from "./CollapsibleInfoPanel";
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
    <section className="info-grid" aria-label={messages.diagramContextPanels}>
      <CollapsibleInfoPanel title={messages.legendTitle} hint={messages.legendHint}>
        <Legend />
      </CollapsibleInfoPanel>

      <CollapsibleInfoPanel title={messages.emphasisTitle} hint={messages.emphasisHint}>
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
      </CollapsibleInfoPanel>

      <CollapsibleInfoPanel title={messages.readingGuideTitle} hint={messages.readingGuideHint}>
        <div className="note-block">
          <h3>{messages.keyQuestion}</h3>
          <p>{resolveText(diagram.readingGuide.keyQuestion, lang)}</p>
        </div>
        <div className="note-block">
          <h3>{messages.howToReadDiagram}</h3>
          <p>{resolveText(diagram.readingGuide.howToRead, lang)}</p>
        </div>
        <div className="note-block">
          <h3>{messages.evidenceBoundary}</h3>
          <p>{resolveText(diagram.readingGuide.evidenceBoundary, lang)}</p>
        </div>
        <div className="note-block">
          <h3>{messages.currentLimit}</h3>
          <p>{resolveText(diagram.readingGuide.currentLimit, lang)}</p>
        </div>
      </CollapsibleInfoPanel>

      <CollapsibleInfoPanel title={messages.takeawaysTitle} hint={messages.takeawaysHint}>
        <ul className="takeaway-list">
          {diagram.takeaways.map((takeaway, index) => (
            <li key={`${diagram.id}-takeaway-${index}`}>{resolveText(takeaway, lang)}</li>
          ))}
        </ul>
      </CollapsibleInfoPanel>

      <CollapsibleInfoPanel title={messages.researchNotesTitle} hint={messages.researchNotesHint}>
        <div className="note-block">
          <h3>{messages.whyThisLoopMatters}</h3>
          <p>{resolveText(diagram.notes.whyThisLoopMatters, lang)}</p>
        </div>
        <div className="note-block">
          <h3>{messages.whereTheHarnessLives}</h3>
          <p>{resolveText(diagram.notes.whereTheHarnessLives, lang)}</p>
        </div>
      </CollapsibleInfoPanel>

      <CollapsibleInfoPanel title={messages.sourcesTitle} hint={messages.sourcesHint}>
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
      </CollapsibleInfoPanel>
    </section>
  );
}
