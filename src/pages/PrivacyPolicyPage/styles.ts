import { styled, Box } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.colors.WHITE,
  paddingTop: theme.customSpacing.XL,
  paddingBottom: theme.customSpacing.XL,
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.customSpacing.MD,
  marginBottom: theme.customSpacing.XL,

  "& .MuiTypography-body1": {
    color: theme.colors.PRIMARY_DARK,
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
    color: theme.colors.SECONDARY_GRAY,
  },
}));

export const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: theme.customSpacing.XXL,

  "& .MuiTypography-body2": {
    fontSize: theme.fontSizes.fontSize14,
    color: theme.colors.SECONDARY_GRAY,
  },
}));
