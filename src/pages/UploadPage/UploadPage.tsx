import { STEPS } from "constants/steps";
import { AnalysLayout } from "components/AnalysLayout";
import UploadCard from "components/UploadCard";

function UploadPage() {
  return (
    <AnalysLayout currentStep={STEPS[0]}>
      <UploadCard mode="full" />
    </AnalysLayout>
  );
}

export default UploadPage;
