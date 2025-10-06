import { styled, alpha } from "@mui/material/styles";
import { AppBar, Toolbar, Box, Typography, Link, Divider } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  background: "transparent",
  boxShadow: "none",
  margin: "1% 0",
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "90%",
  margin: "0 auto",
});

export const NavBox = styled(Box)({
  display: "flex",
  gap: "24px",
  alignItems: "center",
});

export const Background = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4%",
  height: "604px",
  background: `linear-gradient(99.53deg, ${theme.palette.common.white} 30%, ${theme.palette.primary.light}55 100%)`,
}));

export const BgTextContainer = styled(Box)({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
});

export const LeftHeading = styled(Typography)({
  textAlign: "left",
});

export const LeftSubtitle = styled(Typography)({
  textAlign: "left",
});

export const Criteria = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const CriteriaItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const CriteriaIcon = styled("img")({
  width: "20px",
  height: "20px",
});

export const CriteriaText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.subtitle2.fontFamily,
  fontSize: theme.typography.subtitle2.fontSize,
  color: theme.palette.text.primary,
}));

export const NavLink = styled(Link)(({ theme }) => ({
  background: "none",
  border: "none",
  boxShadow: "none",
  padding: 0,
  minWidth: "auto",
  textTransform: "none",
  transition: "all 0.3s ease",

  fontFamily: theme.typography.button.fontFamily,
  fontWeight: theme.typography.button.fontWeight,
  fontSize: theme.typography.button.fontSize,
  lineHeight: theme.typography.button.lineHeight,
  color: theme.palette.primary.main,

  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.light,
    boxShadow: "none",
  },

  "&:active": {
    backgroundColor: "transparent",
    color: theme.palette.primary.light,
    boxShadow: `0px 2px 4px 0px ${alpha(theme.palette.primary.main, 0.25)}`,
    transition: "all 0.3s ease-out",
  },

  "&.Mui-focusVisible": {
    outline: `2px solid ${theme.palette.primary.light}`,
    outlineOffset: "3px",
    boxShadow: "none",
    backgroundColor: "transparent",
  },

  "&.Mui-disabled": {
    color: alpha(theme.palette.primary.main, 0.4),
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

export const StatContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "5% 0 3% 0",
});

export const StatBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Stat = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
}));

export const Line = styled(Divider)(({ theme }) => ({
  display: "flex",
  justifySelf: "center",
  width: "82%",
  backgroundColor: alpha(theme.palette.primary.dark, 0.1),
}));
