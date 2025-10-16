import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PATHS } from "constants/navigation";
import { Footer } from "components/Footer";
import {
  PageWrapper,
  MainContent,
  ErrorCode,
  ErrorMessage,
  HomeButton,
} from "./styles";

interface ErrorPageTemplateProps {
  errorCode: string;
  message: string;
  redirectPath?: string;
}

export const ErrorPageTemplate = ({
  errorCode,
  message,
  redirectPath = PATHS.DEFAULT,
}: ErrorPageTemplateProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(redirectPath);
  };

  return (
    <PageWrapper>
      <MainContent>
        <ErrorCode>{errorCode}</ErrorCode>
        <ErrorMessage>{message}</ErrorMessage>
        <HomeButton onClick={handleGoHome}>
          {t("authCallback.backToHome")}
        </HomeButton>
      </MainContent>
      <Footer variant="compact" />
    </PageWrapper>
  );
};
