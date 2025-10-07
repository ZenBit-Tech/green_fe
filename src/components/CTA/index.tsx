import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Wrapper, Subtitle, CtaButton } from "./styles";

export const CTA = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Typography variant="h1">{t("CTA.title")}</Typography>

      <Subtitle>{t("CTA.subtitle")}</Subtitle>

      <CtaButton variant="contained" color="primary">
        {t("CTA.buttonText")}
      </CtaButton>
    </Wrapper>
  );
};
