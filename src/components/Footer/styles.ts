import {
  styled,
  Box,
  Typography,
  Link,
  Divider,
  alpha,
  Grid,
} from "@mui/material";

interface FooterProps {
  $variant?: "full" | "compact";
}

const options = {
  shouldForwardProp: (prop: PropertyKey) => prop !== "$variant",
};

export const FooterWrapper = styled(
  Box,
  options,
)<FooterProps>(({ theme, $variant }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.contrastText,
  padding: "60px 78px 20px",
  width: "100%",
  ...($variant === "compact" && {
    paddingTop: "30px",
  }),
}));

export const GridWrapper = styled(
  Grid,
  options,
)<FooterProps>(({ $variant }) => ({
  ...($variant === "compact" && {
    justifyContent: "space-between",
    alignItems: "center",
  }),
}));

export const Description = styled(
  Typography,
  options,
)<FooterProps>(({ theme, $variant }) => ({
  marginTop: theme.spacing(2),
  maxWidth: "515px",
  ...($variant === "compact" && {
    display: "none",
  }),
}));

export const FooterLinkContainer = styled(
  Box,
  options,
)<FooterProps>(({ $variant }) => ({
  ...($variant === "compact" && {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  opacity: 0.7,
  transition: "all 0.2s ease-in-out",
  borderRadius: "4px",
  padding: "2px 4px",
  margin: "-2px -4px",

  "&:hover": {
    opacity: 1,
    textShadow: `0 0 8px ${alpha(theme.palette.common.white, 0.5)}`,
  },
  "&:active": {
    color: theme.palette.primary.light,
    transform: "translateY(1px)",
    textShadow: "none",
  },
  "&.Mui-disabled": {
    color: theme.palette.secondary.dark,
    opacity: 0.5,
    pointerEvents: "none",
    textShadow: "none",
  },
  "&:focus-visible": {
    opacity: 1,
    textShadow: "none",
    outline: "1px solid",
    outlineColor: theme.palette.background.default,
    outlineOffset: "0px",
    maxWidth: "fit-content",
  },
}));

export const FooterDivider = styled(Divider)(({ theme }) => ({
  marginTop: "90px",
  borderColor: theme.palette.background.default,
  opacity: 0.5,
}));
