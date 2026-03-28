import { useId, useState, type ReactNode } from "react";

type CollapsibleInfoPanelProps = {
  title: string;
  hint: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function CollapsibleInfoPanel({
  title,
  hint,
  children,
  defaultOpen = false,
}: CollapsibleInfoPanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section className={`info-panel${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="info-panel__toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="info-panel__heading">
          <span className="info-panel__title">{title}</span>
          <span className="info-panel__hint">{hint}</span>
        </span>
        <span className="info-panel__chevron" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen ? (
        <div id={panelId} className="info-panel__body">
          {children}
        </div>
      ) : null}
    </section>
  );
}
