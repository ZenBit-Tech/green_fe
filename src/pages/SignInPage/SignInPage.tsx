import { Typography, Box, Alert, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSignInForm } from "hooks/useSignInForm";
import { Logo } from "components/Logo";
import {
  PageWrapper,
  FormContainer,
  SocialButton,
  EmailInput,
  Divider,
  LegalLink,
  SocialButtonContainer,
  LabelMail,
} from "./styles";
import { PATHS } from "constants/navigation";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

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
      <Logo />
      <Typography sx={{ mt: 1, color: "text.primary" }}>
        {t("logo.subtitle")}
      </Typography>

      <FormContainer sx={{ mt: 4 }}>
        <Typography variant="h3" fontSize={"32px"} lineHeight={"70px"}>
          {t("signIn.title")}
        </Typography>
        <Typography variant="subtitle1" lineHeight={"35px"} fontSize={"16px"}>
          {t("signIn.subtitle")}
        </Typography>

        <SocialButtonContainer>
          <SocialButton startIcon={<GoogleIcon />}>
            {t("signIn.google")}
          </SocialButton>
          <SocialButton startIcon={<FacebookRoundedIcon />}>
            {t("signIn.facebook")}
          </SocialButton>
        </SocialButtonContainer>

        <Divider>{t("signIn.divider")}</Divider>

        {isSuccess ? (
          <Alert severity="success">{t("signIn.emailSentSuccess")}</Alert>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "344px" }}>
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
                    <ErrorOutlineRoundedIcon fontSize="small" />{" "}
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
