import { useTranslation } from "react-i18next";
import logoDark from "locals/logoDark.svg";
import { LogoContainer, LogoImage, LogoText } from "./styles";

export const LogoDark = () => {
  const { t } = useTranslation();

  return (
    <LogoContainer>
      <LogoImage src={logoDark} alt={t("logo.alt")} />
      <LogoText variant="h3" color="primary.contrastText">
        {t("logo.title")}
      </LogoText>
    </LogoContainer>
  );
};
