import { styled, alpha } from "@mui/material/styles";
import { Card, Box, Typography, Button } from "@mui/material";

export const Upload = styled(Card)<{ wide?: boolean }>(({ theme, wide }) => ({
  width: wide ? "1200px" : "43%",
  height: wide ? "911px" : "84%",
  background: "transparent",
  borderRadius: "20px",
  backgroundColor: `${theme.palette.common.white}`,
  boxShadow: `0px 4px 4px 0px ${theme.palette.primary.dark}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const UploadContainer = styled(Box)<{ wide?: boolean }>(({ wide }) => ({
  height: "88%",
  width: "88%",
  display: "flex",
  flexDirection: "column",
  justifySelf: "center",
  justifyContent: "space-between",
  alignItems: wide ? "center" : "flex-start",
}));

export const PreTitleBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1%",
});

export const PreTitle = styled(Typography)({
  marginLeft: "1%",
});

export const Title = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontSize: wide
      ? theme.typography.body2.fontSize
      : theme.typography.subtitle1.fontSize,
    lineHeight: wide
      ? theme.typography.h1.lineHeight
      : theme.typography.subtitle1.lineHeight,
    letterSpacing: "1%",
    marginLeft: "25px",
    textAlign: wide ? "center" : "left",
  }),
);

export const Description = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontSize: wide
      ? theme.typography.body1.fontSize
      : theme.typography.subtitle2.fontSize,
    lineHeight: wide ? theme.typography.subtitle2.lineHeight : "20px",
    letterSpacing: "1%",
    marginLeft: "25px",
    textAlign: wide ? "center" : "left",
  }),
);

export const UploadBox = styled(Box)<{ wide?: boolean }>(({ theme, wide }) => ({
  width: "100%",
  position: "relative",
  minHeight: wide ? "250px" : "190px",
  borderRadius: "20px",
  borderWidth: "1px",
  borderStyle: "dashed",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  gap: "4px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.dark, 0.1),
  },
}));

export const HiddenInput = styled("input")({
  display: "none",
});

export const LoaderBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "112px",
  borderRadius: "20px",
  border: `1px dashed ${theme.palette.primary.dark}`,
  backgroundColor: theme.palette.background.default,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  overflow: "hidden",
}));

export const LoaderText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

export const ProgressBar = styled(Box)<{ progress: number }>(
  ({ progress, theme }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: `${progress}%`,
    backgroundColor: alpha(theme.palette.primary.light, 0.2),
    borderRadius: "20px",
    transition: "width 0.4s ease",
    zIndex: 0,
  }),
);

export const ResultsBox = styled(Box)({
  height: "100%",
  width: "90%",
  display: "flex",
  gap: "15px",
  justifySelf: "flex-start",
  alignItems: "center",
});

export const DeleteIconBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "100px",
  display: "flex",
  alignItems: "center",
  top: "8px",
  right: "8px",
  color: theme.palette.error.main,
  zIndex: 2,
}));

export const DropText = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontSize: wide
      ? theme.typography.button.fontSize
      : theme.typography.subtitle2.fontSize,
    lineHeight: "28px",
    color: alpha(theme.palette.primary.dark, 0.8),
  }),
);

export const DropTextPrefix = styled(DropText)(({ theme }) => ({
  fontSize: theme.typography.subtitle2.fontSize,
}));

export const CLickText = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontSize: wide
      ? theme.customSizes.UPLOAD_CARD_MEDIUM_FONT
      : theme.customSizes.UPLOAD_CARD_SMALL_FONT,
    lineHeight: wide ? theme.typography.subtitle1.lineHeight : 0,
    color: alpha(theme.palette.primary.dark, 0.5),
  }),
);

export const SupportsText = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontSize: wide
      ? theme.typography.button.fontSize
      : theme.customSizes.UPLOAD_CARD_SMALL_FONT,
    lineHeight: "41px",
    color: alpha(theme.palette.primary.dark, 0.4),
  }),
);

export const UploadButton = styled(Button)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    width: wide ? "180px" : "150px",
    minHeight: "34px",
    padding: "10px",
    justifySelf: "flex-end",
    alignSelf: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: `0px 4px 4px ${alpha(theme.palette.primary.main, 0.25)}`,
    opacity: 1,
    textTransform: "none",
    transition: "all 0.4s ease-out",

    "&:not(:disabled)": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0px 4px 4px ${alpha(theme.palette.primary.main, 0.25)}`,
    },

    "&:active": {
      backgroundColor: alpha(theme.palette.primary.light, 0.55),
      boxShadow: `0px 4px 4px ${alpha(theme.palette.primary.main, 0.25)}`,
      transition: "all 0.4s ease-out",
    },

    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.light, 0.55),
    },

    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.primary.main,
      border: `3px solid ${theme.palette.primary.light}`,
      boxShadow: "none",
      outline: "none",
    },

    "&.Mui-disabled": {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.primary.contrastText,
      boxShadow: "none",
      opacity: 1,
    },

    "&.error": {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.error.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      borderColor: theme.palette.error.main,
      boxShadow: "none",
    },
  }),
);

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
  textAlign: "center",
  position: "absolute",
  marginTop: "8px",
  bottom: "-20px",
  backgroundColor: theme.palette.background.default,
  borderRadius: "20px",
  padding: "10px 20px",
  lineHeight: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  whiteSpace: "nowrap",
}));

export const GreenBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "200px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: alpha(theme.palette.info.main, 0.15),
}));

export const TextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  margin: "2% 0 0 3%",
});

export const GreenUl = styled("ul")(({ theme }) => ({
  color: theme.palette.info.main,
}));

export const GreenText = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.main,
  fontWeight: theme.typography.button.fontWeight,
}));

export const ButtonsBox = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ContinueButton = styled(Button)({
  width: "240px",
  height: "44px",
});
