import { useNavigate } from "react-router-dom";
import { STEP_PATHS } from "constants/steps";
import { toggleOption, selectSelectedOptions } from "store/slices/optionSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

export const useOptionsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedOptions = useAppSelector(selectSelectedOptions);
  const handleToggleOption = (optionId: string) => {
    dispatch(toggleOption(optionId));
  };

  const handleBack = () => {
    navigate(STEP_PATHS.upload);
  };

  const handleContinue = () => {
    navigate(STEP_PATHS.review);
  };

  return {
    selectedOptions,
    handleToggleOption,
    handleBack,
    handleContinue,
  };
};
