import { styled, alpha } from "@mui/material/styles";
import { Card, Box, Typography, Button } from "@mui/material";

export const Upload = styled(Card)(({ theme }) => ({
  width: "43%",
  height: "84%",
  background: "transparent",
  borderRadius: "20px",
  backgroundColor: `${theme.palette.common.white}`,
  boxshadow: `0px 4px 4px 0px ${theme.palette.primary.dark}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const UploadContainer = styled(Box)({
  height: "88%",
  display: "flex",
  flexDirection: "column",
  justifySelf: "center",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "88%",
});

export const PreTitleBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1%",
});

export const PreTitle = styled(Typography)({
  marginLeft: "1%",
});

export const Title = styled(Typography)({
  fontSize: "24px",
  lineHeight: "35px",
  letterSpacing: "1%",
  marginLeft: "5%",
});

export const Description = styled(Typography)({
  fontSize: "16px",
  lineHeight: "20px",
  letterSpacing: "1%",
  marginLeft: "5%",
  textAlign: "left",
});

export const UploadBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "190px",
  borderRadius: "20px",
  borderWidth: "1px",
  borderStyle: "dashed",
  dashes: "4, 4",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  gap: "4px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.dark, 0.1),
  },
}));

export const DropText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "28px",
  color: alpha(theme.palette.primary.dark, 0.8),
}));

export const CLickText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "0px",
  color: alpha(theme.palette.primary.dark, 0.5),
}));

export const SupportsText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "41px",
  color: alpha(theme.palette.primary.dark, 0.4),
}));

export const UploadButton = styled(Button)(({ theme }) => ({
  width: 151,
  height: 34,
  padding: "10px",
  justifySelf: "flex-end",
  alignSelf: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: "0px 4px 4px 0px #00000040",
  opacity: 1,
  textTransform: "none",
  fontFamily: theme.typography.button.fontFamily,
  fontWeight: theme.typography.button.fontWeight,
  fontSize: theme.typography.button.fontSize,
  lineHeight: theme.typography.button.lineHeight,
  transition: "all 0.4s ease-out",

  "&:not(:disabled)": {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0px 4px 4px 0px #00000040",
  },

  "&:active": {
    backgroundColor: alpha(theme.palette.primary.light, 0.55),
    boxShadow: "0px 4px 4px 0px #00000040",
    transition: "all 0.4s ease-out",
  },

  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.55),
  },

  "&.Mui-focusVisible": {
    backgroundColor: theme.palette.primary.main,
    border: `3px solid ${theme.palette.primary.light}`,
    boxShadow: "none",
    outline: "none",
  },

  "&.Mui-disabled": {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.contrastText,
    boxShadow: "none",
    opacity: 1,
  },

  "&.error": {
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderColor: "#BC0003",
    boxShadow: "none",
  },
}));
