import axios from "axios";
import { MOCK_DELAY_MS, MOCK_ID } from "@/constants/fileUpload";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface ParsedDataPayload {
  fileName: string;
  fileType: string;
  extractedText: string;
}

export interface ParsedDataResponse {
  message: string;
  saved: boolean;
  id?: string;
}

export async function sendParsedDataToServer(
  data: ParsedDataPayload,
): Promise<ParsedDataResponse> {
  if (!API_BASE_URL) {
    console.warn(" No backend service is active.");
    await new Promise((res) => setTimeout(res, MOCK_DELAY_MS));

    return {
      message: "Simulated data submission successful",
      saved: true,
      id: MOCK_ID,
    };
  }

  try {
    const response = await axios.post<ParsedDataResponse>(
      `${API_BASE_URL}/api/upload/parsed-data`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Failed to send parsed data:", error);
    throw new Error("Failed to send parsed data to server");
  }
}
