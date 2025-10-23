import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";
import step1 from "locals/step 1.svg";
import step2 from "locals/step 2.svg";
import step3 from "locals/step 3.svg";
import step4 from "locals/step 4.svg";
import {
  GradientBox,
  Heading,
  HeadingContainer,
  StepBox,
  StepDark,
  StepsContainer,
  StepLight,
  HorizontalDivider,
} from "./styles";
import UploadCard from "../UploadCard";

function UploadScreen() {
  const { t } = useTranslation();
  return (
    <>
      <GradientBox>
        <HeadingContainer>
          <Logo variant="hero" />
          <Heading variant="subtitle2">{t("logo.subtitle")}</Heading>
          <StepsContainer>
            <StepBox>
              <img src={step1} />
              <StepDark>{t("steps.upload")}</StepDark>
            </StepBox>
            <HorizontalDivider />
            <StepBox>
              <img src={step2} />
              <StepLight>{t("steps.options")}</StepLight>
            </StepBox>
            <HorizontalDivider />
            <StepBox>
              <img src={step3} />
              <StepLight>{t("steps.review")}</StepLight>
            </StepBox>
            <HorizontalDivider />
            <StepBox>
              <img src={step4} />
              <StepLight>{t("steps.result")}</StepLight>
            </StepBox>
          </StepsContainer>
        </HeadingContainer>
        <UploadCard mode="full" />
      </GradientBox>
    </>
  );
}

export default UploadScreen;
