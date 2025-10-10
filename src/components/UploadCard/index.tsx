import { useTranslation } from "react-i18next";
import { useSignInForm } from "@/hooks/useSignInForm";
import heart from "locals/heart.svg";
import download from "locals/download.svg";
import {
  Upload,
  UploadContainer,
  PreTitleBox,
  PreTitle,
  Title,
  Description,
  UploadBox,
  DropText,
  CLickText,
  SupportsText,
  UploadButton,
} from "./styles";

function UploadCard() {
  const { t } = useTranslation();
  const { handleButtonSignIn } = useSignInForm();

  return (
    <>
      <Upload>
        <UploadContainer>
          <PreTitleBox>
            <img src={heart} alt="heart" width={18} height={18} />
            <PreTitle variant="subtitle2">{t("card.preTitle")}</PreTitle>
          </PreTitleBox>
          <Title variant="h1">{t("card.title")}</Title>
          <Description variant="subtitle1">{t("card.description")}</Description>
          <UploadBox>
            <img src={download} alt="heart" />
            <DropText variant="subtitle2">{t("card.drop")}</DropText>
            <CLickText variant="subtitle2">{t("card.click")}</CLickText>
            <SupportsText variant="subtitle2">
              {t("card.supports")}
            </SupportsText>
          </UploadBox>
          <UploadButton
            variant="contained"
            color="primary"
            onClick={handleButtonSignIn}
          >
            {t("card.button")}
          </UploadButton>
        </UploadContainer>
      </Upload>
    </>
  );
}
export default UploadCard;
