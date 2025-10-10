import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSignInForm } from "@/hooks/useSignInForm";
import { Wrapper, Subtitle, CtaButton } from "./styles";

export const CTA = () => {
  const { t } = useTranslation();
  const { handleButtonSignIn } = useSignInForm();

  return (
    <Wrapper>
      <Typography variant="h1">{t("CTA.title")}</Typography>

      <Subtitle>{t("CTA.subtitle")}</Subtitle>

      <CtaButton
        variant="contained"
        color="primary"
        onClick={handleButtonSignIn}
      >
        {t("CTA.buttonText")}
      </CtaButton>
    </Wrapper>
  );
};
