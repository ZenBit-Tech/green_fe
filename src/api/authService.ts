import Cookies from "js-cookie";
import { COOKIE_EXPIRY, BACKEND_URL } from "@/constants/auth";
import { ENV } from "@/config/env";

const API_BASE_URL = ENV.API_BASE_URL;

export const authService = {
  getGoogleAuthUrl: (): string => {
    return `${API_BASE_URL}/api/auth/google`;
  },

  getLinkedInAuthUrl: (): string => {
    return `${API_BASE_URL}/api/auth/linkedin`;
  },

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

  getAccessTokenFromCookie: (): string | null => {
    return Cookies.get("accessToken") || null;
  },

  getRefreshTokenFromCookie: (): string | null => {
    return Cookies.get("refreshToken") || null;
  },

  clearTokens: (): void => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  },

  isAuthenticated: (): boolean => {
    return !!authService.getAccessTokenFromCookie();
  },
};

export const logout = async (): Promise<void> => {
  try {
    await fetch(`${BACKEND_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};
