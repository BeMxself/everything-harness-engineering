import { draftCases } from "../data/draftCases";
import { draftDiagrams } from "../data/draftDiagrams";
import { resolveText, useI18n } from "../i18n";
import { DiagramCanvas } from "./DiagramCanvas";

export function DraftDiagramSection() {
  const { lang } = useI18n();

  return (
    <>
      {draftDiagrams.map((diagram) => {
        const relatedCase = draftCases.find((draft) => draft.id === diagram.id.replace("-draft", ""));

        return (
          <section key={diagram.id} className="draft-diagram-section" aria-label={resolveText(diagram.title, lang)}>
            <div className="draft-diagram-section__header">
              <div>
                <p className="hero__eyebrow">Draft Diagram</p>
                <p>{resolveText(relatedCase?.summary ?? diagram.summary, lang)}</p>
              </div>
            </div>

            <DiagramCanvas diagram={diagram} />

            {relatedCase ? (
              <div className="draft-diagram-section__notes">
                <article className="draft-case-card">
                  <h3>Open questions</h3>
                  <ul className="draft-case-card__list">
                    {relatedCase.openQuestions.map((question, index) => (
                      <li key={`${relatedCase.id}-draft-question-${index}`}>
                        <p>{resolveText(question, lang)}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ) : null}
          </section>
        );
      })}
    </>
  );
}
