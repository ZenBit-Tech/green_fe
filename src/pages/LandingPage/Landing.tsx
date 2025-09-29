import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";

function LandingPage() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("landing.description")}</h1>
      <Button label={t("button.increment")} />
    </>
  );
}

export default LandingPage;
