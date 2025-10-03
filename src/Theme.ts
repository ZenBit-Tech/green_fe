import { createTheme } from "@mui/material/styles";

const FONT_FAMILY = {
  DM_SANS: '"DM Sans", sans-serif',
  POPPINS: '"Poppins", sans-serif',
};

const FONT_WEIGHT = {
  BOLD: 700,
  LIGHT: 300,
};

const COLORS = {
  PRIMARY_BUTTON: "#0B1F56",
  PRIMARY_BUTTON_HOVER: "#6997ED8C",
  BUTTON_DISABLED: "#878F9E",
  WHITE: "#FFFFFF",
  TEXT: "#0B1F56",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_BUTTON,
    },
    action: {
      disabledBackground: COLORS.BUTTON_DISABLED,
      disabled: COLORS.WHITE,
    },
  },
  typography: {
    h1: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: "48px",
      lineHeight: "70px",
      textAlign: "center",
      color: COLORS.TEXT,
    },
    subtitle1: {
      fontFamily: FONT_FAMILY.POPPINS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "24px",
      lineHeight: "35px",
      textAlign: "center",
      color: COLORS.TEXT,
    },
    button: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.BOLD,
      textTransform: "none",
      fontSize: "18px",
    },
  },
});
