import { useState, useRef, useCallback } from "react";
import Tesseract from "tesseract.js";
import { FILE_TYPE_PDF, OCR_LANGUAGES } from "@/constants/fileUpload";
import { sendParsedData } from "@/api/uploadService";
import { validateFile } from "./utils/fileUtils";
import { extractTextFromPDF } from "./utils/pdfUtils";
import { t } from "i18next";

export const useUploadCard = (uploadEnabled: boolean = true) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [ocrText, setOcrText] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedFileName = selectedFile?.name ?? null;

  const handleBrowseClick = useCallback(() => {
    if (!uploadEnabled) return;
    fileInputRef.current?.click();
  }, [uploadEnabled]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const extractTextFromFile = useCallback(async (file: File) => {
    try {
      setIsProcessing(true);

      let text = "";

      if (file.type === FILE_TYPE_PDF) {
        text = await extractTextFromPDF(file);
      } else {
        const result = await Tesseract.recognize(file, OCR_LANGUAGES);
        text = result.data.text;
      }

      setOcrText(text);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : t("error.unknownError");
      setErrorMessage(message);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const handleFile = useCallback(
    (file: File) => {
      const error = validateFile(file);
      if (error) {
        setErrorMessage(error);
        setSelectedFile(null);
        setOcrText(null);
        return;
      }

      setErrorMessage(null);
      setSelectedFile(file);
      extractTextFromFile(file);
    },
    [extractTextFromFile],
  );

  const handleUpload = useCallback(async () => {
    if (!selectedFile || !ocrText) {
      setErrorMessage(t("error.noFile"));
      return;
    }

    try {
      setIsUploading(true);
      setErrorMessage(null);

      await sendParsedData({
        fileName: selectedFile.name,
        fileType: selectedFile.type,
        extractedText: ocrText,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t("error.uploadFailed");
      setErrorMessage(message);
    } finally {
      setIsUploading(false);
    }
  }, [selectedFile, ocrText]);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (!file) return;
      handleFile(file);
    },
    [handleFile],
  );
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      handleFile(file);
      e.target.value = "";
    },
    [handleFile],
  );

  return {
    fileInputRef,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleBrowseClick,
    handleUpload,
    isDragging,
    selectedFileName,
    isUploading,
    ocrText,
    isProcessing,
    isFileSelected: !!selectedFile,
    errorMessage,
  };
};
