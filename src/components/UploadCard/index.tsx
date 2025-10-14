import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import heart from "locals/heart.svg";
import download from "locals/download.svg";
import arrow from "locals/arrow.svg";
import deleteIcon from "locals/delete.svg";
import fileIcon from "locals/fileIcon.svg";
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
  LoaderBox,
  ProgressBar,
  DeleteIconBox,
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
  ResultsBox,
  LoaderText,
  DropTextPrefix,
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
    handleContinue,
    handleDeleteFile,
    isProcessing,
    isUploading,
    ocrProgress,
    ocrText,
    isFileSelected,
    errorMessage,
    showLoader,
    selectedFileName,
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
            {!isFileSelected || !showLoader ? (
              <UploadBox
                wide={uploadEnabled}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleBrowseClick}
              >
                <img src={download} alt="download" />
                <DropText wide={uploadEnabled} variant="subtitle2">
                  {t("card.drop")}
                </DropText>
                <CLickText wide={uploadEnabled} variant="subtitle2">
                  {t("card.click")}
                </CLickText>
                <SupportsText wide={uploadEnabled} variant="subtitle2">
                  {t("card.supports")}
                </SupportsText>
                <HiddenInput
                  ref={fileInputRef}
                  type="file"
                  accept={FILE_INPUTS}
                  onChange={handleFileChange}
                />
                {errorMessage && (
                  <ErrorMessage variant="subtitle2">
                    {errorMessage}
                  </ErrorMessage>
                )}
              </UploadBox>
            ) : (
              <LoaderBox>
                {isProcessing ? (
                  <>
                    <CircularProgress size={48} />
                    <DropText variant="subtitle2">{ocrProgress}%</DropText>
                  </>
                ) : (
                  <ResultsBox>
                    <img src={fileIcon}></img>
                    <LoaderText>
                      <DropTextPrefix variant="subtitle2">
                        {t("card.resultPrefix")} {selectedFileName}
                      </DropTextPrefix>
                      <DropText variant="subtitle2">{t("card.ready")}</DropText>
                    </LoaderText>
                    <DeleteIconBox>
                      <IconButton onClick={handleDeleteFile}>
                        <img src={deleteIcon}></img>
                      </IconButton>
                    </DeleteIconBox>
                  </ResultsBox>
                )}

                <ProgressBar progress={ocrProgress} />
              </LoaderBox>
            )}
            {!showLoader && (
              <UploadButton
                wide={uploadEnabled}
                variant="contained"
                color="primary"
                onClick={handleUpload}
                disabled={isButtonDisabled || isProcessing}
                className={buttonClassName}
              >
                {t("card.button")}
              </UploadButton>
            )}
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
              <ContinueButton
                variant="contained"
                disabled={!ocrText || isProcessing}
                onClick={handleContinue}
              >
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
