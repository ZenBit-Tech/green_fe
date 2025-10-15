import { styled, Box, Button, Typography, alpha } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  background: `linear-gradient(100.41deg, ${alpha(theme.palette.primary.contrastText, 0.09)} 0%, ${alpha(theme.palette.primary.light, 0.3)} 100%)`,
  width: "100%",
}));

export const ErrorCode = styled(Typography)(({ theme }) => ({
  fontSize: "400px",
  fontWeight: theme.typography.fontWeightRegular,
  fontFamily: theme.typography.h1.fontFamily,
  color: theme.palette.primary.main,
  lineHeight: "100%",
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: theme.typography.fontWeightLight,
  fontFamily: theme.typography.subtitle1.fontFamily,
  color: theme.palette.primary.main,
  marginBottom: "25px",
  textAlign: "center",
}));

export const HomeButton = styled(Button)({
  padding: "12px 40px",
  fontSize: "18px",
});

export const MainContent = styled(Box)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
