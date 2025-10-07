import { useTranslation } from "react-i18next";
import logo from "locals/logo.svg";
import "./styles.scss";

function Logo() {
  const { t } = useTranslation();
  return (
    <>
      <div className="logoDiv">
        <img src={logo} alt={t("logo.alt")} />
        <span>{t("logo.title")}</span>
      </div>
    </>
  );
}

export default Logo;
