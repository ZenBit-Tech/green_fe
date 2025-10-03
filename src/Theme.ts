import { createTheme } from "@mui/material/styles";

const FONT_FAMILY = {
  DM_SANS: '"DM Sans", sans-serif',
  POPPINS: '"Poppins", sans-serif',
};

const FONT_WEIGHT = {
  BOLD: 700,
  SEMIBOLD: 600,
  MEDIUM: 500,
  LIGHT: 300,
};

const COLORS = {
  PRIMARY_DARK: "#0B1F56",
  PRIMARY_LIGHT: "#6997ED",
  WHITE: "#FFFFFF",
  SECONDARY_TEAL: "#4EB9BE",
  SECONDARY_GRAY: "#878F9E",
  SECONDARY_BEIGE: "#DBD69D",
  SECONDARY_GREEN: "#45A76A80",
  SECONDARY_RED: "#BC000380",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_DARK,
      light: COLORS.PRIMARY_LIGHT,
      contrastText: COLORS.WHITE,
    },
    secondary: {
      main: COLORS.SECONDARY_TEAL,
      dark: COLORS.SECONDARY_GRAY,
      light: COLORS.SECONDARY_BEIGE,
    },
    text: {
      primary: COLORS.PRIMARY_DARK,
      secondary: COLORS.SECONDARY_GRAY,
    },
    background: {
      default: COLORS.WHITE,
    },
    action: {
      disabledBackground: COLORS.SECONDARY_GRAY,
      disabled: COLORS.WHITE,
    },
  },
  typography: {
    h1: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: "64px",
      lineHeight: "70px",
      textAlign: "center",
      color: COLORS.PRIMARY_DARK,
    },
    h2: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: "48px",
      lineHeight: "56px",
      color: COLORS.PRIMARY_DARK,
    },
    subtitle1: {
      fontFamily: FONT_FAMILY.POPPINS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "24px",
      lineHeight: "35px",
      textAlign: "center",
      color: COLORS.PRIMARY_DARK,
    },
    subtitle2: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "16px",
      lineHeight: "35px",
      textAlign: "center",
      color: COLORS.PRIMARY_DARK,
    },
    button: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.MEDIUM,
      fontSize: "20px",
      lineHeight: "24px",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 15,
  },
});

export default theme;
