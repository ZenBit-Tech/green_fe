import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface MagicLinkSuccessResponse {
  success: boolean;
}

interface MagicLinkRequest {
  email: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    requestMagicLink: builder.mutation<
      MagicLinkSuccessResponse,
      MagicLinkRequest
    >({
      query: (credentials) => ({
        url: "/auth/magic-link/request",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRequestMagicLinkMutation } = apiSlice;
