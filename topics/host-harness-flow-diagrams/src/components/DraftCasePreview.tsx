import { draftCases } from "../data/draftCases";
import { resolveText, useI18n } from "../i18n";

const copyByLanguage = {
  en: {
    eyebrow: "Draft Case",
    title: "Trellis Draft",
    state: "Draft skeleton",
    steps: "Proposed steps",
    questions: "Open questions",
    evidence: "Evidence notes",
  },
  zh: {
    eyebrow: "Draft Case",
    title: "Trellis Draft",
    state: "Draft skeleton",
    steps: "Proposed steps",
    questions: "Open questions",
    evidence: "Evidence notes",
  },
} as const;

export function DraftCasePreview() {
  const { lang } = useI18n();
  const copy = copyByLanguage[lang];

  return (
    <>
      {draftCases.map((draft) => (
        <section key={draft.id} className="draft-case-preview" aria-label={resolveText(draft.title, lang)}>
          <div className="draft-case-preview__header">
            <div>
              <p className="hero__eyebrow">{copy.eyebrow}</p>
              <h2>{resolveText(draft.title, lang)}</h2>
              <p>{resolveText(draft.summary, lang)}</p>
            </div>
            <span className="expansion-preview__chip expansion-preview__chip--tier">{copy.state}</span>
          </div>

          <div className="draft-case-preview__grid">
            <article className="draft-case-card">
              <h3>Skeleton nodes</h3>
              <div className="draft-case-card__chips">
                {draft.nodes.map((node) => (
                  <span key={`${draft.id}-${node.id}`} className="expansion-preview__chip">
                    {resolveText(node.label, lang)}
                  </span>
                ))}
              </div>
            </article>

            <article className="draft-case-card">
              <h3>{copy.steps}</h3>
              <ol className="draft-case-card__list">
                {draft.steps.map((step) => (
                  <li key={step.id}>
                    <strong>{resolveText(step.label, lang)}</strong>
                    <p>{resolveText(step.summary, lang)}</p>
                  </li>
                ))}
              </ol>
            </article>

            <article className="draft-case-card">
              <h3>{copy.questions}</h3>
              <ul className="draft-case-card__list">
                {draft.openQuestions.map((question, index) => (
                  <li key={`${draft.id}-question-${index}`}>
                    <p>{resolveText(question, lang)}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="draft-case-card">
              <h3>{copy.evidence}</h3>
              <ul className="draft-case-card__list">
                {draft.evidenceNotes.map((note, index) => (
                  <li key={`${draft.id}-note-${index}`}>
                    <p>{resolveText(note, lang)}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      ))}
    </>
  );
}
