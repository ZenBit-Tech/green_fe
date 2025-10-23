import { alpha, styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  width: "fitContent",
});

export const LogoImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "$variant",
})<{ $variant?: "default" | "hero" }>(({ $variant }) => ({
  width: "40px",
  height: "40px",
  objectFit: "contain",
  display: "block",

  ...($variant === "hero" && {
    width: "44px",
    height: "44px",
  }),
}));

export const LogoText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$light" && prop !== "$variant",
})<{ $light?: boolean; $variant?: "default" | "hero" }>(
  ({ theme, $light, $variant }) => ({
    color: $light
      ? theme.palette.primary.contrastText
      : theme.palette.primary.main,
    paddingBottom: "8px",
    ...($variant === "hero" && {
      fontSize: theme.customSizes.HERO_LOGO_FONT,
      textShadow: `0 4px 4px ${alpha(theme.palette.primary.main, 0.3)}`,
    }),
  }),
);
