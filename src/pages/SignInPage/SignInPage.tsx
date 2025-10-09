import { Box, Button } from "@mui/material";
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
  InputContainer,
  FormAlert,
} from "./styles";
import google from "locals/google.svg";
import facebook from "locals/facebook.svg";
import errorIcon from "locals/error.svg";

export const SignInPage = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, isLoading, isSuccess } =
    useSignInForm();

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
                      <img src={errorIcon} alt="Error" />
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
