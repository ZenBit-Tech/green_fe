// Token expiration times (must match backend settings)
export const TOKEN_EXPIRY = {
  ACCESS_TOKEN_MINUTES: 15,
  REFRESH_TOKEN_DAYS: 7,
} as const;

// Convert to days for js-cookie
export const COOKIE_EXPIRY = {
  ACCESS_TOKEN: TOKEN_EXPIRY.ACCESS_TOKEN_MINUTES / (24 * 60), // 15 minutes in days
  REFRESH_TOKEN: TOKEN_EXPIRY.REFRESH_TOKEN_DAYS, // 7 days
} as const;
