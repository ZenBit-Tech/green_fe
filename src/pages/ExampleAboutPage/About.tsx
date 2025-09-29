import { useTranslation } from "react-i18next";
import Form from "../../components/ExampleContactForm/Form";

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("about.title")}</h1>
      <Form />
    </>
  );
}

export default AboutPage;
