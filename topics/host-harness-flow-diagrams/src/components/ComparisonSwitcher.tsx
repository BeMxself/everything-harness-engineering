import type { ComparisonDiagram } from "../data/types";
import { resolveText, useI18n } from "../i18n";

type ComparisonSwitcherProps = {
  diagrams: ComparisonDiagram[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function ComparisonSwitcher({
  diagrams,
  activeId,
  onSelect,
}: ComparisonSwitcherProps) {
  const { lang } = useI18n();

  return (
    <div className="framework-switcher" aria-label="Comparison case switcher">
      {diagrams.map((diagram) => (
        <button
          key={diagram.id}
          className={diagram.id === activeId ? "is-active" : undefined}
          onClick={() => onSelect(diagram.id)}
        >
          {resolveText(diagram.title, lang)}
        </button>
      ))}
    </div>
  );
}
