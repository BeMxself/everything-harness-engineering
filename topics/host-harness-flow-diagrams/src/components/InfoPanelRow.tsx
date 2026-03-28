import { useId, useState, type ReactNode } from "react";

type InfoPanelRowProps = {
  title: string;
  hint: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function InfoPanelRow({
  title,
  hint,
  children,
  defaultOpen = false,
}: InfoPanelRowProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section className={`info-row${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="info-row__toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="info-row__heading">
          <span className="info-row__title">{title}</span>
          <span className="info-row__hint">{hint}</span>
        </span>
        <span className="info-row__chevron" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen ? (
        <div id={panelId} className="info-row__body">
          <div className="info-row__grid">{children}</div>
        </div>
      ) : null}
    </section>
  );
}
