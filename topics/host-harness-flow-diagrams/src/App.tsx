import { useMemo, useState } from "react";
import { AgentCollaborationPanel } from "./components/AgentCollaborationPanel";
import { DiagramCanvas } from "./components/DiagramCanvas";
import { ComparisonSwitcher } from "./components/ComparisonSwitcher";
import { ExpansionPreview } from "./components/ExpansionPreview";
import { InfoPanels } from "./components/InfoPanels";
import { diagrams } from "./data/diagrams";
import { I18nProvider, type Language, useI18n } from "./i18n";

function AppShell({
  activeId,
  setActiveId,
  lang,
  setLang,
}: {
  activeId: string;
  setActiveId: (id: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}) {
  const { messages } = useI18n();

  const activeDiagram = useMemo(
    () => diagrams.find((diagram) => diagram.id === activeId) ?? diagrams[0],
    [activeId],
  );

  return (
    <main className="app-shell">
      <header className="hero">
        <div className="hero__copy">
          <p className="hero__eyebrow">{messages.heroEyebrow}</p>
          <h1>{messages.heroTitle}</h1>
          <p className="hero__summary">{messages.heroSummary}</p>
        </div>
        <div className="language-switcher" aria-label="Language switcher">
          <button
            type="button"
            className={lang === "en" ? "is-active" : ""}
            onClick={() => setLang("en")}
          >
            English
          </button>
          <button
            type="button"
            className={lang === "zh" ? "is-active" : ""}
            onClick={() => setLang("zh")}
          >
            中文
          </button>
        </div>
      </header>

      <section className="topic-guide" aria-label={messages.topicGuideTitle}>
        <article className="topic-guide__card">
          <h2>{messages.topicGuideQuestion}</h2>
          <p>{messages.topicGuideQuestionBody}</p>
        </article>
        <article className="topic-guide__card">
          <h2>{messages.topicGuideMethod}</h2>
          <p>{messages.topicGuideMethodBody}</p>
        </article>
        <article className="topic-guide__card">
          <h2>{messages.topicGuideBoundary}</h2>
          <p>{messages.topicGuideBoundaryBody}</p>
        </article>
      </section>

      <ExpansionPreview />

      <ComparisonSwitcher
        diagrams={diagrams}
        activeId={activeDiagram.id}
        onSelect={setActiveId}
      />

      <DiagramCanvas diagram={activeDiagram} />
      {activeDiagram.agentCollaboration ? (
        <section className="collaboration-section">
          <div className="collaboration-section__header">
            <p className="hero__eyebrow">{messages.supplementalView}</p>
            <h2>{messages.agentCollaborationTitle}</h2>
          </div>
          <AgentCollaborationPanel graph={activeDiagram.agentCollaboration} />
        </section>
      ) : null}
      <InfoPanels diagram={activeDiagram} />
    </main>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(diagrams[0].id);
  const [lang, setLang] = useState<Language>("zh");

  return (
    <I18nProvider lang={lang}>
      <AppShell activeId={activeId} setActiveId={setActiveId} lang={lang} setLang={setLang} />
    </I18nProvider>
  );
}
