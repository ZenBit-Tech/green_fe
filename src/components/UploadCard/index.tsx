import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";
import heart from "locals/heart.svg";
import download from "locals/download.svg";
import arrow from "locals/arrow.svg";
import { FILE_INPUTS, UPLOAD_MODE } from "@/constants/fileUpload";
import { useUploadCard } from "./UploadCardHooks";
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
  HiddenInput,
  SupportsText,
  UploadButton,
  ErrorMessage,
  GreenBox,
  GreenText,
  TextBox,
  GreenUl,
  ButtonsBox,
  ContinueButton,
} from "./styles";

interface UploadCardProps {
  mode?: (typeof UPLOAD_MODE)[keyof typeof UPLOAD_MODE];
}

export const UploadCard = ({ mode = UPLOAD_MODE.PREVIEW }: UploadCardProps) => {
  const { t } = useTranslation();
  const uploadEnabled = mode === UPLOAD_MODE.FULL;

  const {
    fileInputRef,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleBrowseClick,
    handleUpload,
    selectedFileName,
    isProcessing,
    isUploading,
    isFileSelected,
    errorMessage,
  } = useUploadCard(uploadEnabled);

  const isButtonDisabled = !isFileSelected || isProcessing || isUploading;
  const buttonClassName = errorMessage ? "error" : "";

  return (
    <>
      <Upload wide={uploadEnabled}>
        {uploadEnabled ? (
          <UploadContainer wide={uploadEnabled}>
            <Title variant="h1" wide={uploadEnabled}>
              {t("card.title")}
            </Title>
            <Description variant="subtitle1" wide={uploadEnabled}>
              {t("card.description")}
            </Description>
            <UploadBox
              wide={uploadEnabled}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={handleBrowseClick}
            >
              <img src={download} alt="download" />
              {selectedFileName ? (
                <DropText wide={uploadEnabled} variant="subtitle2">
                  {selectedFileName}
                </DropText>
              ) : (
                <>
                  <DropText wide={uploadEnabled} variant="subtitle2">
                    {t("card.drop")}
                  </DropText>
                  <CLickText wide={uploadEnabled} variant="subtitle2">
                    {t("card.click")}
                  </CLickText>
                  <SupportsText wide={uploadEnabled} variant="subtitle2">
                    {t("card.supports")}
                  </SupportsText>
                </>
              )}
              {errorMessage && (
                <ErrorMessage variant="subtitle2">{errorMessage}</ErrorMessage>
              )}
              <HiddenInput
                ref={fileInputRef}
                type="file"
                accept={FILE_INPUTS}
                onChange={handleFileChange}
              />
            </UploadBox>
            <UploadButton
              wide={uploadEnabled}
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={isButtonDisabled}
              className={buttonClassName}
            >
              {t("card.button")}
            </UploadButton>
            <GreenBox>
              <TextBox>
                <GreenText>{t("card.list.title")}</GreenText>
                <GreenUl>
                  <li>
                    <GreenText>{t("card.list.line1")}</GreenText>
                  </li>
                  <li>
                    <GreenText>{t("card.list.line2")}</GreenText>
                  </li>
                  <li>
                    <GreenText>{t("card.list.line3")}</GreenText>
                  </li>
                  <li>
                    <GreenText>{t("card.list.line4")}</GreenText>
                  </li>
                </GreenUl>
              </TextBox>
            </GreenBox>
            <ButtonsBox>
              <IconButton>
                <img src={arrow} alt="arrow" />
              </IconButton>
              <ContinueButton variant="contained">
                {t("card.continue")}
              </ContinueButton>
            </ButtonsBox>
          </UploadContainer>
        ) : (
          <UploadContainer>
            <PreTitleBox>
              <img src={heart} alt="heart" width={18} height={18} />
              <PreTitle variant="subtitle2">{t("card.preTitle")}</PreTitle>
            </PreTitleBox>
            <Title variant="h1">{t("card.title")}</Title>
            <Description variant="subtitle1">
              {t("card.description")}
            </Description>
            <UploadBox>
              <img src={download} alt="heart" />
              <DropText variant="subtitle2">{t("card.drop")}</DropText>
              <CLickText variant="subtitle2">{t("card.click")}</CLickText>
              <SupportsText variant="subtitle2">
                {t("card.supports")}
              </SupportsText>
            </UploadBox>
            <UploadButton variant="contained" color="primary">
              {t("card.button")}
            </UploadButton>
          </UploadContainer>
        )}
      </Upload>
    </>
  );
};
export default UploadCard;
