import { styled, Box, Typography, Button, alpha } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 20px",
  background: `linear-gradient(359.35deg, ${alpha(theme.palette.primary.light, 0.3)} -1.53%, ${alpha(theme.palette.primary.contrastText, 0.09)} 105.58%)`,
  minHeight: "50vh",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  maxWidth: "720px",
  marginTop: "20px",
  marginBottom: "40px",
  fontFamily: theme.typography.subtitle1.fontFamily,
  fontWeight: theme.typography.subtitle1.fontWeight,
  fontSize: theme.typography.subtitle1.fontSize,
  lineHeight: theme.typography.subtitle1.lineHeight,
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const CtaButton = styled(Button)(({ theme }) => ({
  padding: "15px 35px",
  borderRadius: "15px",
  color: theme.palette.primary.contrastText,
  boxShadow: "0px 8px 15px rgba(26, 46, 90, 0.4)",
  transition: "all 0.3s ease",
}));
