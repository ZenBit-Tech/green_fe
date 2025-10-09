import { Typography, Box, Alert, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSignInForm } from "hooks/useSignInForm";
import { PATHS } from "constants/navigation";
import { LogoDark } from "@/components/LogoDark";
import {
  PageWrapper,
  FormContainer,
  SocialButton,
  EmailInput,
  DividerForm,
  LegalLink,
  SocialButtonContainer,
  LabelMail,
  Subtitle,
  FormTitle,
  FormSubtitle,
  DividerPage,
} from "./styles";
import google from "locals/google.svg";
import facebook from "locals/facebook.svg";
import errorIcon from "locals/error.svg";

export const SignInPage = () => {
  const { t } = useTranslation();
  const {
    email,
    error,
    isLoading,
    isSuccess,
    handleEmailChange,
    handleSubmit,
  } = useSignInForm();

  return (
    <PageWrapper>
      <LogoDark />
      <Subtitle>{t("logo.subtitle")}</Subtitle>
      <DividerPage />
      <FormContainer>
        <FormTitle>{t("signIn.title")}</FormTitle>
        <FormSubtitle>{t("signIn.subtitle")}</FormSubtitle>

        <SocialButtonContainer>
          <SocialButton startIcon={<img src={google} alt="Google" />}>
            {t("signIn.google")}
          </SocialButton>
          <SocialButton startIcon={<img src={facebook} alt="Facebook" />}>
            {t("signIn.facebook")}
          </SocialButton>
        </SocialButtonContainer>

        <DividerForm>{t("signIn.divider")}</DividerForm>

        {isSuccess ? (
          <Alert severity="success">{t("signIn.emailSentSuccess")}</Alert>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <LabelMail>{t("signIn.emailLabel")}</LabelMail>
            <EmailInput
              id="email-input"
              value={email}
              onChange={handleEmailChange}
              placeholder={t("signIn.emailPlaceholder")}
              error={!!error}
              helperText={
                error ? (
                  <>
                    <img src={errorIcon} alt="Error" />
                    {t(error.key, error.params)}
                  </>
                ) : (
                  " "
                )
              }
              disabled={isLoading}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isLoading}
              sx={{ mt: 1, py: 1.5 }}
            >
              {t("signIn.button")}
            </Button>
          </Box>
        )}

        <Typography variant="subtitle1" fontSize={"16px"} mt={7}>
          {t("signIn.legal")}
          <LegalLink href={PATHS.DEFAULT}>{t("signIn.terms")}</LegalLink>
          {t("signIn.and")}
          <LegalLink href={PATHS.DEFAULT}>{t("signIn.privacy")}</LegalLink>
        </Typography>
      </FormContainer>
    </PageWrapper>
  );
};
