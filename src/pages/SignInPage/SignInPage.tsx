import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSignInForm } from "hooks/useSignInForm";
import { PATHS } from "constants/navigation";
import { authService } from "@/api/authService";
import { Logo } from "@/components/Logo";
import google from "locals/google.svg";
import linkedin from "locals/linkedin.svg";
import errorIcon from "locals/error.svg";
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
  InputContainer,
  FormAlert,
} from "./styles";

export const SignInPage = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, isLoading, isSuccess } =
    useSignInForm();

  return (
    <PageWrapper>
      <Logo variant="hero" />
      <Subtitle>{t("logo.subtitle")}</Subtitle>
      <DividerPage />
      <FormContainer>
        <FormTitle>{t("signIn.title")}</FormTitle>
        <FormSubtitle>{t("signIn.subtitle")}</FormSubtitle>

        <SocialButtonContainer>
          <SocialButton
            startIcon={<img src={google} alt={t("icons.googleAlt")} />}
            onClick={() => authService.initiateGoogleLogin()}
          >
            {t("signIn.google")}
          </SocialButton>
          <SocialButton
            startIcon={<img src={linkedin} alt={t("icons.linkedinAlt")} />}
            onClick={() => authService.initiateLinkedInLogin()}
          >
            {t("signIn.linkedin")}
          </SocialButton>
        </SocialButtonContainer>

        <DividerForm>{t("signIn.divider")}</DividerForm>

        {isSuccess ? (
          <FormAlert severity="success">
            {t("signIn.emailSentSuccess")}
          </FormAlert>
        ) : (
          <InputContainer>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <LabelMail>{t("signIn.emailLabel")}</LabelMail>
              <EmailInput
                id="email-input"
                placeholder={t("signIn.emailPlaceholder")}
                {...register("email")}
                error={!!errors.email}
                helperText={
                  errors.email ? (
                    <>
                      <img src={errorIcon} alt={t("icons.errorAlt")} />
                      {t(errors.email.message as string)}
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
              >
                {t("signIn.button")}
              </Button>
            </Box>
          </InputContainer>
        )}

        <FormSubtitle>
          {t("signIn.legal")}
          <LegalLink href={PATHS.DEFAULT}>{t("signIn.terms")}</LegalLink>
          {t("signIn.and")}
          <LegalLink href={PATHS.DEFAULT}>{t("signIn.privacy")}</LegalLink>
        </FormSubtitle>
      </FormContainer>
    </PageWrapper>
  );
};
