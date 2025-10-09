import { createTheme, alpha } from "@mui/material/styles";
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
  SECONDARY_RED: "#BC0003",
  FOOTER_BG: "#05184D",
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
      paper: COLORS.FOOTER_BG,
    },
    action: {
      disabledBackground: COLORS.SECONDARY_GRAY,
      disabled: COLORS.WHITE,
    },
    error: {
      main: COLORS.SECONDARY_RED,
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
    h3: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: "36px",
      lineHeight: "100%",
    },
    h6: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: "22px",
      lineHeight: "25px",
      marginBottom: "14px",
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
      letterSpacing: "1%",
      fontSize: "16px",
      lineHeight: "35px",
      textAlign: "center",
      color: COLORS.PRIMARY_DARK,
    },
    body1: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "20px",
      lineHeight: "25px",
      color: alpha(COLORS.WHITE, 0.75),
    },
    body2: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "32px",
      lineHeight: "25px",
      color: alpha(COLORS.WHITE, 0.75),
    },
    caption: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "16px",
      lineHeight: "25px",
      color: alpha(COLORS.WHITE, 0.75),
      textAlign: "center",
      display: "block",
      marginTop: "20px",
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "160px",
          minHeight: "44px",
          padding: "10px",
          borderRadius: 15,
          fontFamily: FONT_FAMILY.DM_SANS,
          fontWeight: FONT_WEIGHT.MEDIUM,
          fontSize: "20px",
          lineHeight: "24px",
          textTransform: "none",
          color: COLORS.WHITE,
          backgroundColor: COLORS.PRIMARY_DARK,
          boxShadow: `0px 4px 4px ${alpha(COLORS.PRIMARY_DARK, 0.25)}`,
          transition: "all 0.3s cubic-bezier(0.45, 1.45, 0.8, 1)",
          "&:hover": {
            backgroundColor: alpha(COLORS.PRIMARY_LIGHT, 0.55),
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: alpha(COLORS.PRIMARY_LIGHT, 0.5),
            boxShadow: `0px 4px 4px ${alpha(COLORS.PRIMARY_DARK, 0.25)}`,
            transition: "all 0.4s ease-in",
          },
          "&.Mui-focusVisible": {
            outline: "none",
            border: `3px solid ${COLORS.PRIMARY_LIGHT}`,
            boxShadow: "none",
            color: COLORS.WHITE,
          },
          "&.Mui-disabled": {
            backgroundColor: COLORS.SECONDARY_GRAY,
            color: COLORS.WHITE,
            boxShadow: "none",
            opacity: 1,
          },
        },
      },
    },
  },
});
export default theme;
