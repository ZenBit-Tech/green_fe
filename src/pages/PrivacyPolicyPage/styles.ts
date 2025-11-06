import { styled, Box } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.customSpacing.XL,
  paddingBottom: theme.customSpacing.XL,
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.customSpacing.MD,
  marginBottom: theme.customSpacing.XL,

  "& .MuiTypography-body1": {
    color: theme.palette.text.primary,
  },
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.customSpacing.XL,
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingTop: theme.customSpacing.MD,

  "& .MuiTypography-body2": {
    fontSize: theme.fontSizes.fontSize14,
    color: theme.palette.text.secondary,
  },
}));

export const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: theme.customSpacing.XXL,

  "& .MuiTypography-body2": {
    fontSize: theme.fontSizes.fontSize14,
    color: theme.palette.text.secondary,
  },
}));
