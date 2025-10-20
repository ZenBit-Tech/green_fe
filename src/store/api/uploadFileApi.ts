import { apiSlice } from "./apiSlice";
import Cookies from "js-cookie";

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

export const uploadFileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendParsedData: builder.mutation<ParsedDataResponse, ParsedDataPayload>({
      query: (data) => {
        const token = Cookies.get("accessToken");
        return {
          url: "/upload/parsed-data",
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSendParsedDataMutation } = uploadFileApi;
