import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const BenefitsContainer = styled(Box)({
  margin: "2% 0",
  gap: "3%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "500px",
});

export const BenefitsText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const BenefitsHeading = styled(Typography)({
  fontSize: "48px",
});

export const CardsBox = styled(Box)({
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
});

export const Card = styled(Box)({
  width: "30%",
  height: "230px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const CardTitle = styled(Typography)({
  fontSize: "22px",
  lineHeight: "50px",
});

export const CardDescription = styled(Typography)({
  width: "85%",
  fontSize: "16px",
  lineHeight: "25px",
});
