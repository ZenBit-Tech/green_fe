import { styled, Box, Typography, alpha } from "@mui/material";

export const CallbackWrapper = styled(Box)(({ theme }) => ({
  background: `linear-gradient(100.41deg, ${alpha(theme.palette.primary.contrastText, 0.09)} 0%, ${alpha(theme.palette.primary.light, 0.3)} 100%)`,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

export const CallbackMessage = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: theme.typography.fontWeightLight,
  fontFamily: theme.typography.subtitle1.fontFamily,
  color: theme.palette.primary.main,
  marginTop: "25px",
  textAlign: "center",
}));
