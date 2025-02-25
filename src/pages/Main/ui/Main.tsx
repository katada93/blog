import { Counter } from "entities/Counter/ui/Counter";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation("main");

  return (
    <div>
      <span>{t("main")}</span>
      <Counter />
    </div>
  );
}

export default Main;
