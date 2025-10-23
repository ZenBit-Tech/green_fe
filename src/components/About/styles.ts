import { styled, alpha } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const GradientBox = styled(Box)({
  width: "100%",
  height: "1280px",
  position: "relative",
  background: `linear-gradient(317.68deg, rgba(255, 255, 255, 0.09) 44.63%, rgba(105, 151, 237, 0.3) 102.47%)`,
});

export const BgImage = styled("img")(({ theme }) => ({
  display: "flex",
  justifySelf: "center",
  color: alpha(theme.palette.primary.dark, 0.5),
  alignSelf: "center",
  marginTop: "65px",
}));

export const AboutTitleBox = styled(Box)({
  width: "56%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  justifySelf: "center",
  paddingTop: "30px",
});

export const AboutTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h2.fontSize,
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.palette.primary.main,
}));

export const AboutDescription = styled(Typography)(({ theme }) => ({
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
  top: "50%",
  left: "50%",
  transform: "translate(-135%, -180%)",
});

export const Container2 = styled(Container)({
  top: "50%",
  left: "50%",
  transform: "translate(30%, -180%)",
});

export const Container3 = styled(Container)({
  top: "50%",
  left: "50%",
  transform: "translate(-150%, -20%)",
});

export const Container4 = styled(Container)({
  top: "50%",
  left: "50%",
  transform: "translate(45%, -30%)",
});

export const ContainerName = styled(Typography)(({ theme }) => ({
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
  fontSize: theme.typography.subtitle2.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  letterSpacing: "0%",
  verticalAlign: "middle",
  textAlign: "left",
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
  fontSize: theme.typography.body2.fontSize,
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.palette.primary.main,
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  letterSpacing: 0,
  verticalAlign: "middle",
  textAlign: "left",
  color: theme.palette.primary.main,
  whiteSpace: "pre-line",
}));
