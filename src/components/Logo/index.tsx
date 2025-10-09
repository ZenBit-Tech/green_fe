import { useTranslation } from "react-i18next";
import logoDark from "locals/logoDark.svg";
import logoLight from "locals/logo.svg";
import { LogoContainer, LogoImage, LogoText } from "./styles";

interface LogoProps {
  light?: boolean;
  variant?: "default" | "hero";
}

export const Logo = ({ light = false, variant = "default" }: LogoProps) => {
  const { t } = useTranslation();

  const logoSrc = light ? logoLight : logoDark;

  return (
    <LogoContainer>
      <LogoImage src={logoSrc} alt={t("logo.alt")} />
      <LogoText $light={light} $variant={variant} variant="h3">
        {t("logo.title")}
      </LogoText>
    </LogoContainer>
  );
};
