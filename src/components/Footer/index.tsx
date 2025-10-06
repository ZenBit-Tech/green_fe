import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import { COMPANY_LINKS, SUPPORT_LINKS } from "constants/navigation";
import { Logo } from "../Logo";
import {
  FooterWrapper,
  Description,
  FooterLink,
  FooterDivider,
} from "./styles";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Grid container spacing={5}>
        <Grid size={6}>
          <Logo />
          <Description variant="body1">{t("footer.description")}</Description>
        </Grid>

        <Grid size={3}>
          <Typography variant="h6">{t("footer.companyTitle")}</Typography>
          <Box component="nav">
            {COMPANY_LINKS.map((link) => (
              <FooterLink
                href={link.path}
                key={link.key}
                variant="body1"
                display="block"
                mb={"4px"}
              >
                {t(link.key)}
              </FooterLink>
            ))}
          </Box>
        </Grid>

        <Grid size={3}>
          <Typography variant="h6">{t("footer.supportTitle")}</Typography>
          <Box component="nav">
            {SUPPORT_LINKS.map((link) => (
              <FooterLink
                href={link.path}
                key={link.key}
                variant="body1"
                display="block"
                mb={"4px"}
              >
                {t(link.key)}
              </FooterLink>
            ))}
          </Box>
        </Grid>
      </Grid>

      <FooterDivider />
      <Typography variant="caption">{t("footer.copyright")}</Typography>
    </FooterWrapper>
  );
};
