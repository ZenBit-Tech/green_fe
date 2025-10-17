import { AnalysLayout } from "components/AnalysLayout";
import UploadCard from "components/UploadCard";

function UploadPage() {
  return (
    <AnalysLayout currentStep="upload">
      <UploadCard mode="full" />
    </AnalysLayout>
  );
}

export default UploadPage;
