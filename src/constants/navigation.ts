interface NavLink {
  key: string;
  path: string;
}

export const PATHS = {
  USE_CASES: "/use-cases",
  ABOUT: "/about",
  SIGNIN: "/sign-in",
  UPLOAD: "/upload",
  MAGIC_LINK: "/auth/magic-link/consume",
  DEFAULT: "/",
};

export const COMPANY_LINKS: NavLink[] = [
  { key: "footer.links.useCases", path: PATHS.USE_CASES },
  { key: "footer.links.aboutUs", path: PATHS.ABOUT },
];

export const SUPPORT_LINKS: NavLink[] = [
  { key: "footer.links.contactUs", path: PATHS.DEFAULT },
  { key: "footer.links.privacyPolicy", path: PATHS.DEFAULT },
  { key: "footer.links.termsOfService", path: PATHS.DEFAULT },
];
