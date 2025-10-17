import { useTranslation } from "react-i18next";
import { STEPS, type Steper } from "constants/steps";
import {
  StepsContainer,
  StepWrapper,
  StepIcon,
  StepLabel,
  StepConnector,
} from "./styles";

interface StepperProps {
  currentStep: Steper;
}

export const Stepper = ({ currentStep }: StepperProps) => {
  const { t } = useTranslation();
  const currentIndex = STEPS.indexOf(currentStep);

  return (
    <StepsContainer>
      {STEPS.map((step, index) => {
        let status: "completed" | "active" | "upcoming";
        if (index < currentIndex) {
          status = "completed";
        } else if (index === currentIndex) {
          status = "active";
        } else {
          status = "upcoming";
        }

        return (
          <StepWrapper key={step}>
            <StepIcon status={status}>{index + 1}</StepIcon>
            <StepLabel status={status}>{t(`steps.${step}`)}</StepLabel>
            {index < STEPS.length - 1 && <StepConnector />}
          </StepWrapper>
        );
      })}
    </StepsContainer>
  );
};
