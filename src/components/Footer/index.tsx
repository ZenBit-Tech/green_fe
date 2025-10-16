import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import { COMPANY_LINKS, SUPPORT_LINKS } from "constants/navigation";
import { Logo } from "components/Logo";
import {
  FooterWrapper,
  Description,
  FooterLink,
  FooterDivider,
  FooterLinkContainer,
  GridWrapper,
} from "./styles";

interface FooterProps {
  variant?: "full" | "compact";
}

export const Footer = ({ variant = "full" }: FooterProps) => {
  const { t } = useTranslation();

  return (
    <FooterWrapper $variant={variant}>
      <GridWrapper container spacing={5} $variant={variant}>
        <Grid size={6}>
          <Logo light />
          <Description variant="body1" $variant={variant}>
            {t("footer.description")}
          </Description>
        </Grid>

        {variant === "full" && (
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
        )}
        <Grid size={variant === "full" ? 3 : 4}>
          {variant === "full" && (
            <Typography variant="h6">{t("footer.supportTitle")}</Typography>
          )}
          <FooterLinkContainer $variant={variant}>
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
          </FooterLinkContainer>
        </Grid>
      </GridWrapper>
      {variant === "full" && (
        <>
          <FooterDivider />
          <Typography variant="caption">{t("footer.copyright")}</Typography>
        </>
      )}
    </FooterWrapper>
  );
};
