import { useTranslation } from "react-i18next";
import Logo from "@/components/Logo";
import "./styles.scss";

function Heading() {
  const { t } = useTranslation();
  return (
    <>
      <nav>
        <div className="navContainer">
          <Logo />
          <div className="navigation">
            <a href="/use" className="nav-link">
              {t("navLanding.use")}
            </a>
            <a href="/about" className="nav-link">
              {t("navLanding.about")}
            </a>
            <button className="nav-button">{t("navLanding.button")}</button>
          </div>
        </div>
      </nav>
      <div className="background">
        <div className="bg-text">
          <h1>{t("bg.heading")}</h1>
          <p>{t("bg.text")}</p>
          <div className="criteria">
            <span>{t("bg.criteria1")}</span>
            <span>{t("bg.criteria2")}</span>
            <span>{t("bg.criteria3")}</span>
          </div>
        </div>
        <div className="card"></div>
      </div>
    </>
  );
}

export default Heading;
