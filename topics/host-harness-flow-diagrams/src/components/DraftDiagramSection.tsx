import { trellisDraftCase } from "../data/draftCases";
import { trellisDraftDiagram } from "../data/draftDiagrams";
import { resolveText, useI18n } from "../i18n";
import { DiagramCanvas } from "./DiagramCanvas";

export function DraftDiagramSection() {
  const { lang } = useI18n();

  return (
    <section className="draft-diagram-section" aria-label="Trellis Draft diagram">
      <div className="draft-diagram-section__header">
        <div>
          <p className="hero__eyebrow">Draft Diagram</p>
          <p>{resolveText(trellisDraftCase.summary, lang)}</p>
        </div>
      </div>

      <DiagramCanvas diagram={trellisDraftDiagram} />

      <div className="draft-diagram-section__notes">
        <article className="draft-case-card">
          <h3>Open questions</h3>
          <ul className="draft-case-card__list">
            {trellisDraftCase.openQuestions.map((question, index) => (
              <li key={`draft-question-${index}`}>
                <p>{resolveText(question, lang)}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
