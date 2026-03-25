import { useI18n } from "../i18n";

export function Legend() {
  const { messages } = useI18n();

  return (
    <div className="legend">
      <div className="legend__items">
        <span className="legend__item legend__item--main">{messages.legendMain}</span>
        <span className="legend__item legend__item--feedback">{messages.legendFeedback}</span>
        <span className="legend__item legend__item--failure">{messages.legendFailure}</span>
        <span className="legend__item legend__item--shell">{messages.legendShell}</span>
      </div>
    </div>
  );
}
