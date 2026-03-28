import type { FrameworkDiagram } from "../data/types";
import { resolveText, useI18n } from "../i18n";

type FrameworkSwitcherProps = {
  diagrams: FrameworkDiagram[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function FrameworkSwitcher({
  diagrams,
  activeId,
  onSelect,
}: FrameworkSwitcherProps) {
  const { lang } = useI18n();

  return (
    <div className="framework-switcher" aria-label="Framework switcher">
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
