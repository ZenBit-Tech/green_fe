import { styled, Box, Typography, alpha } from "@mui/material";
import type { Theme } from "@mui/material";

interface StepProps {
  status: "completed" | "active" | "upcoming";
}

const getStatusColor = (status: string, theme: Theme): string => {
  switch (status) {
    case "active":
      return theme.palette.primary.main;
    case "completed":
      return theme.palette.primary.light;
    default:
      return alpha(theme.palette.primary.main, 0.3);
  }
};

export const StepsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "40px",
  gap: "12px",
});

export const StepWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const StepIcon = styled(Box)<StepProps>(({ theme, status }) => ({
  width: "33px",
  height: "33px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.contrastText,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body1.fontSize,
  fontFamily: theme.typography.subtitle1.fontFamily,
  transition: "all 0.3s ease",
  backgroundColor: getStatusColor(status, theme),
}));

export const StepLabel = styled(Typography)<StepProps>(({ theme, status }) => ({
  marginLeft: "12px",
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.h6.fontSize,
  fontFamily: theme.typography.subtitle1.fontFamily,
  color: getStatusColor(status, theme),
}));

export const StepConnector = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  width: "57px",
  marginLeft: "12px",
}));
