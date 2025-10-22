interface NavLink {
  key: string;
  path: string;
}

export const PATHS = {
  DEFAULT: "/",
  SIGN_IN: "/sign-in",
  UPLOAD: "/upload",
  OAUTH_CALLBACK: "/auth/callback",
  MAGIC_LINK: "/magic-link",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  USE_CASES: "/use-cases",
  ABOUT: "/about",
};

export const COMPANY_LINKS: NavLink[] = [
  { key: "footer.links.useCases", path: PATHS.USE_CASES },
  { key: "footer.links.aboutUs", path: PATHS.ABOUT },
];

export const SUPPORT_LINKS: NavLink[] = [
  { key: "footer.links.contactUs", path: PATHS.DEFAULT },
  { key: "footer.links.privacyPolicy", path: PATHS.PRIVACY },
  { key: "footer.links.termsOfService", path: PATHS.TERMS },
];
