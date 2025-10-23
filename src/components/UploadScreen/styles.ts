import { alpha, styled, Typography } from "@mui/material";
import { Box } from "@mui/material";

export const GradientBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "1304px",
  background: `linear-gradient(100.17deg, ${alpha(theme.palette.background.default, 0.09)} 0.19%, ${alpha(theme.palette.primary.light, 0.3)} 100%)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const HeadingContainer = styled(Box)({
  width: "55%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
}));

export const StepsContainer = styled(Box)({
  width: "900px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "6% 0",
});

export const StepBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10%",
});

export const StepDark = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
  fontWeight: theme.typography.button.fontWeight,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  letterSpacing: 0,
  textAlign: "center",
  verticalAlign: "middle",
  color: theme.palette.primary.main,
}));

export const StepLight = styled(StepDark)(({ theme }) => ({
  color: alpha(theme.palette.primary.main, 0.3),
}));

export const HorizontalDivider = styled(Box)(({ theme }) => ({
  width: "57px",
  height: "1px",
  backgroundColor: alpha(theme.palette.primary.main, 0.3),
}));
