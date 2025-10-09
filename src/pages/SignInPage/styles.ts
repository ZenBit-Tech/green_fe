import {
  styled,
  Box,
  Button,
  TextField,
  Link,
  Paper,
  alpha,
  Typography,
  Divider,
  Alert,
} from "@mui/material";

export const PageWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "100vh",
  height: "100vh",
  paddingTop: "54px",
  paddingBottom: "79px",
  background:
    "linear-gradient(100.41deg, rgba(255, 255, 255, 0.09) 0%, rgba(105, 151, 237, 0.3) 100%)",
});

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
  fontWeight: theme.typography.subtitle1.fontWeight,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.subtitle1.lineHeight,
  letterSpacing: 0,
  color: theme.palette.text.primary,
}));

export const DividerPage = styled(Divider)(({ theme }) => ({
  marginTop: "20px",
  marginBottom: "40px",
  borderColor: theme.palette.primary.main,
  opacity: 0.1,
  width: "650px",
}));

export const FormContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "45px",
  borderRadius: "15px",
  maxWidth: "929px",
  width: "100%",
  boxShadow: "0px 4px 4px 0px #0B1F5640",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
});

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: theme.typography.h1.fontWeight,
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.h1.lineHeight,
  letterSpacing: 0,
  color: theme.palette.text.primary,
}));

export const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
  fontWeight: theme.typography.subtitle1.fontWeight,
  fontSize: theme.typography.subtitle2.fontSize,
  lineHeight: theme.typography.subtitle1.lineHeight,
  letterSpacing: 0,
  color: theme.palette.text.primary,
}));

export const SocialButtonContainer = styled(Box)({
  width: "344px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "20px",
  gap: "15px",
});

export const SocialButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "45px",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "15px",
  color: theme.palette.text.primary,
  justifyContent: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
  fontSize: theme.typography.subtitle2.fontSize,
  fontFamily: theme.typography.body1.fontFamily,
  fontWeight: 400,
  lineHeight: theme.typography.subtitle2.lineHeight,
  padding: "0",

  "&:hover": {
    boxShadow: `0px 3px 5px 0px ${alpha(theme.palette.primary.main, 0.4)}`,
    backgroundColor: "transparent",
  },
  "&:active": {
    border: "1px solid transparent",
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0px 4px 4px 0px ${alpha(theme.palette.primary.main, 0.4)}`,
    color: theme.palette.common.white,
  },
  "&:focus-visible": {
    border: `2px solid ${theme.palette.primary.light}`,
  },
  "&.Mui-disabled": {
    backgroundColor: alpha(theme.palette.secondary.dark, 0.1),
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  },
}));

export const InputContainer = styled(Box)({
  width: "344px",
  marginBottom: "60px",
});

export const EmailInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  padding: "0 ",
  marginBottom: "20px",
  input: {
    "&::placeholder": {
      color: alpha(theme.palette.primary.main, 0.9),
      fontSize: theme.typography.subtitle2.fontSize,
      fontFamily: theme.typography.subtitle2.fontFamily,
      fontWeight: 400,
      lineHeight: theme.typography.subtitle2.lineHeight,
      margin: "0",
    },
  },

  ".css-16wblaj-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 14px !important",
    height: "35px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: alpha(theme.palette.primary.main, 0.5),
    },
    "&:hover fieldset": {
      boxShadow: `0px 2px 4px ${alpha(theme.palette.secondary.dark, 0.1)}`,
      borderColor: theme.palette.secondary.dark,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    "&.Mui-error fieldset": {
      border: `2px solid ${theme.palette.error.main}`,
    },
    "&.Mui-disabled fieldset": {
      backgroundColor: alpha(theme.palette.secondary.dark, 0.1),
      boxShadow: "none",
    },
  },
}));

export const FormAlert = styled(Alert)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: theme.typography.button.fontWeight,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.h1.lineHeight,
  letterSpacing: 0,
}));

export const DividerForm = styled(Box)(({ theme }) => ({
  width: "344px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: alpha(theme.palette.primary.main, 0.3),
  margin: "35px 0 0px",
  fontFamily: theme.typography.subtitle1.fontFamily,
  fontWeight: theme.typography.subtitle2.fontWeight,
  fontSize: theme.typography.subtitle2.fontSize,

  "&::before, &::after": {
    content: '""',
    flex: 1,
    borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  },
  "&:not(:empty)::before": {
    marginRight: "12px",
  },
  "&:not(:empty)::after": {
    marginLeft: "12px",
  },
}));

export const LabelMail = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.body1.fontFamily,
  fontSize: "14px",
  lineHeight: theme.typography.subtitle2.lineHeight,
  fontWeight: 400,
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

export const LegalLink = styled(Link)(({ theme }) => ({
  textDecoration: "underline",
  color: theme.palette.primary.light,
  "&:hover": {
    textShadow: `0px 5px 4px #00000056`,
  },
  "&:active": {
    color: theme.palette.primary.main,
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.light}`,
  },
  "&.Mui-disabled": {
    color: theme.palette.text.disabled,
    textShadow: "none",
  },
}));
