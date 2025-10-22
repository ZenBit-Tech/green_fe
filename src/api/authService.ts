import Cookies from "js-cookie";
import { COOKIE_EXPIRY } from "@/constants/auth";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const authService = {
  // Redirect to Google OAuth (backend ready)
  initiateGoogleLogin: (): void => {
    window.location.href = `${API_BASE_URL}/api/auth/google`;
  },

  // Redirect to LinkedIn OAuth (backend in progress)
  initiateLinkedInLogin: (): void => {
    window.location.href = `${API_BASE_URL}/api/auth/linkedin`;
  },

  // Handle OAuth callback - extract tokens from URL and store them
  handleOAuthCallback: (searchParams: URLSearchParams): boolean => {
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");

    if (!accessToken || !refreshToken) {
      console.error("OAuth callback: Missing tokens in URL");
      return false;
    }

    const cookieOptions = {
      secure: true,
      sameSite: "strict" as const,
    };

    Cookies.set("accessToken", accessToken, {
      ...cookieOptions,
      expires: COOKIE_EXPIRY.ACCESS_TOKEN,
    });

    Cookies.set("refreshToken", refreshToken, {
      ...cookieOptions,
      expires: COOKIE_EXPIRY.REFRESH_TOKEN,
    });

    return true;
  },

  // Get access token from cookies
  getAccessToken: (): string | null => {
    return Cookies.get("accessToken") || null;
  },

  // Get refresh token from cookies
  getRefreshToken: (): string | null => {
    return Cookies.get("refreshToken") || null;
  },

  // Clear tokens (logout)
  clearTokens: (): void => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!authService.getAccessToken();
  },
};
