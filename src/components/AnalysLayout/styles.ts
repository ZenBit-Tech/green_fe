import { alpha, styled, Typography } from "@mui/material";
import { Box } from "@mui/material";

export const GradientBox = styled(Box)(({ theme }) => ({
  width: "100%",
  background: `linear-gradient(100.17deg, ${alpha(theme.palette.background.default, 0.09)} 0.19%, ${alpha(theme.palette.primary.light, 0.3)} 100%)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "54px",
  paddingBottom: "79px",
}));

export const HeadingContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "50px",
});

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
}));
