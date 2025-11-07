import { styled, Box } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.colors.WHITE,
  padding: 0,

  "& > div": {
    paddingLeft: 0,
    paddingRight: 0,
    maxWidth: "1020px",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  marginTop: 0,
  marginBottom: 0,

  "& .MuiTypography-body1": {
    color: theme.colors.PRIMARY_DARK,
  },
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.customSpacing.XL,

  "&:last-child": {
    marginBottom: 0,
  },

  "& h2": {
    marginBottom: "10px",
  },
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginTop: "73px",
  marginBottom: "42px",

  [theme.breakpoints.down("md")]: {
    marginTop: "32px",
    marginBottom: "24px",
  },

  "& .MuiTypography-body2": {
    fontSize: theme.fontSizes.fontSize14,
    color: theme.colors.SECONDARY_GRAY,
  },

  "& h1": {
    marginTop: 0,
    marginBottom: "10px",
  },

  "& > div": {
    marginBottom: "42px",
  },
}));

export const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: theme.customSpacing.XXL,
  marginBottom: "73px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "32px",
  },

  "& .MuiTypography-root": {
    fontSize: theme.fontSizes.fontSize14,
    color: theme.colors.SECONDARY_GRAY,
    margin: "0 auto",
    display: "block",
    textAlign: "center",
    width: "fit-content",
  },
}));

export const TopDivider = styled(Box)(({ theme }) => ({
  height: "1px",
  width: "1020px",
  maxWidth: "1020px",
  backgroundColor: "#0B1F561A",
  marginTop: "26px",
  marginRight: "auto",
  marginBottom: "87px",
  marginLeft: "auto",
  opacity: 1,

  [theme.breakpoints.down("md")]: {
    width: "calc(100% - 32px)",
    maxWidth: "100%",
    marginTop: "16px",
    marginBottom: "32px",
  },
}));

export const BottomDivider = styled(Box)(({ theme }) => ({
  height: "1px",
  width: "100%",
  maxWidth: "1020px",
  backgroundColor: "#0B1F561A",
  marginTop: "100px",
  marginRight: "auto",
  marginBottom: "23px",
  marginLeft: "auto",
  opacity: 1,

  [theme.breakpoints.down("md")]: {
    width: "calc(100% - 32px)",
    maxWidth: "100%",
    marginTop: "48px",
    marginBottom: "16px",
  },
}));
