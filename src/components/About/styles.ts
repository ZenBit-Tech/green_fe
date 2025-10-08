import { styled, alpha } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CONTAINER_POSITIONS } from "constants/about";

export const GradientBox = styled(Box)({
  width: "100%",
  height: "1280px",
  position: "relative",
  background: `linear-gradient(317.68deg, rgba(255, 255, 255, 0.09) 44.63%, rgba(105, 151, 237, 0.3) 102.47%)`,
});

export const BgImage = styled("img")(({ theme }) => ({
  position: "absolute",
  color: alpha(theme.palette.primary.dark, 0.5),
  top: CONTAINER_POSITIONS.IMAGE_TOP,
  left: CONTAINER_POSITIONS.IMAGE_LEFT,
}));

export const AboutTitleBox = styled(Box)({
  width: "56%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  justifySelf: "center",
  paddingTop: "2%",
});

export const AboutTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: theme.typography.h1.fontWeight,
  fontSize: theme.typography.h2.fontSize,
  lineHeight: theme.typography.h1.lineHeight,
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.palette.primary.main,
}));

export const AboutDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
  fontWeight: theme.typography.subtitle1.fontWeight,
  fontSize: theme.typography.subtitle1.fontSize,
  lineHeight: theme.typography.subtitle1.lineHeight,
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.palette.primary.main,
  textAlign: "center",
}));

export const Container = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "447px",
  height: "170px",
  borderRadius: "20px",
  gap: "10px",
  background: alpha(theme.palette.primary.light, 0.15),
  border: `1px solid ${alpha(theme.palette.primary.light, 0.45)}`,
  boxShadow: `0px 5px 4px 0px ${alpha(theme.palette.primary.dark, 0.25)}`,
}));

export const Container1 = styled(Container)({
  top: CONTAINER_POSITIONS.TOP_PRIMARY,
  left: CONTAINER_POSITIONS.LEFT_1,
});

export const Container2 = styled(Container)({
  top: CONTAINER_POSITIONS.TOP_PRIMARY,
  left: CONTAINER_POSITIONS.LEFT_2,
});

export const Container3 = styled(Container)({
  top: CONTAINER_POSITIONS.TOP_SECONDARY,
  left: CONTAINER_POSITIONS.LEFT_3,
});

export const Container4 = styled(Container)({
  top: CONTAINER_POSITIONS.TOP_SECONDARY,
  left: CONTAINER_POSITIONS.LEFT_4,
});

export const ContainerName = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h2.fontFamily,
  fontWeight: theme.typography.h2.fontWeight,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: "30px",
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.palette.primary.main,
}));

export const ContainerIcon = styled("img")({
  width: "22px",
  height: "22px",
});

export const ContainerTitle = styled(Box)({
  width: "90%",
  display: "flex",
  justifyContent: "flex-start",
  gap: "2%",
  alignItems: "center",
  margin: "1% 3% 0 1%",
});

export const ContainerText = styled(Typography)(({ theme }) => ({
  width: "90%",
  fontFamily: theme.typography.subtitle1.fontFamily,
  fontWeight: theme.typography.subtitle1.fontWeight,
  fontSize: theme.typography.subtitle2.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  letterSpacing: "0%",
  verticalAlign: "middle",
  color: theme.palette.primary.main,
}));

export const TextBox = styled(Box)({
  position: "absolute",
  bottom: "5%",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  justifySelf: "center",
});

export const AboutTextTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: theme.typography.h1.fontWeight,
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.h1.lineHeight,
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.palette.primary.main,
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
  fontWeight: theme.typography.subtitle1.fontWeight,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.subtitle1.lineHeight,
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.palette.primary.main,
  whiteSpace: "pre-line",
}));
