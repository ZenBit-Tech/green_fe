import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import logo from "locals/logo.svg";

export const Logo = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <Box component="img" src={logo} alt={t("logo.alt")} />
      <Typography variant="h3" color="primary.contrastText">
        {t("logo.title")}
      </Typography>
    </Box>
  );
};
