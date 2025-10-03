import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Box } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  background: "transparent",
  boxShadow: "none",
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
  height: "604px",
  background: `linear-gradient(99.53deg, ${theme.palette.common.white} 30%, ${theme.palette.primary.light}55 100%)`,
}));

export const BgTextContainer = styled(Box)({
  width: "45%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const Criteria = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "24px",
});
