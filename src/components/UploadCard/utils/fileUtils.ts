import { t } from "i18next";

export const validateFile = (file: File): string | null => {
  const validTypes = ["application/pdf", "image/png", "image/jpeg"];
  const maxSizeMB = 10;
  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  if (!validTypes.includes(file.type)) {
    return t("error.fileType");
  }

  if (file.size > maxSizeBytes) {
    return t("error.largeFile") + ` ${maxSizeMB}`;
  }

  return null;
};
