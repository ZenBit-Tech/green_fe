import {
  styled,
  Box,
  IconButton,
  Typography,
  alpha,
  Button,
} from "@mui/material";

export const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1284px",
  width: "100%",
  borderRadius: "15px",
  padding: "60px 50px",
  marginBottom: "20px",
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow: `0px 4px 4px 0px ${alpha(theme.palette.primary.main, 0.25)}`,
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.primary,
}));

export const FormSubtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.text.primary,
}));

export const OptionsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "31px",
  margin: "32px auto 0",
  maxWidth: "1070px",
});

interface OptionCardProps {
  isSelected: boolean;
}
export const OptionCard = styled(Box, {
  shouldForwardProp: (prop: PropertyKey) => prop !== "isSelected",
})<OptionCardProps>(({ theme, isSelected }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "43px 37px ",
  borderRadius: "16px",
  cursor: "pointer",
  border: `1px solid ${alpha(theme.palette.primary.light, 0.45)}`,
  backgroundColor: isSelected
    ? alpha(theme.palette.info.main, 0.25)
    : theme.palette.primary.contrastText,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    boxShadow: `1px 8px 10px 0px ${alpha(theme.palette.primary.main, 0.7)}`,
  },
}));

export const CardContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "375px",
  gap: "5px",
});

export const OptionTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  fontSize: theme.typography.subtitle1.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  textShadow: `0px 2px 4px ${alpha(theme.palette.primary.dark, 0.25)}`,
}));

export const OptionSubtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.text.primary,
  textAlign: "start",
  lineHeight: "25px",
}));

export const OptionIcon = styled(Box, {
  shouldForwardProp: (prop: PropertyKey) => prop !== "isSelected",
})<OptionCardProps>(({ theme, isSelected }) => ({
  width: "51px",
  height: "51px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease-in-out",
  backgroundColor: isSelected
    ? alpha(theme.palette.info.main, 0.45)
    : alpha(theme.palette.primary.light, 0.5),
}));

export const FooterActions = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "40px",
});

export const BackButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: "all 0.3s ease-in-out",
}));

export const ContinueButton = styled(Button)({
  padding: "10px 30px",
});
