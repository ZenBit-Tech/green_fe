import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  width: "fitContent",
});

export const LogoImage = styled("img")({
  width: "40px",
  height: "40px",
  objectFit: "contain",
  display: "block",
});

export const LogoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.h3.fontFamily,
  fontWeight: theme.typography.h3.fontWeight,
  fontSize: theme.typography.h3.fontSize,
  lineHeight: theme.typography.h3.lineHeight,
  paddingBottom: "8px",
}));
