import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LogoDark } from "@/components/LogoDark";
import UploadCard from "@/components/UploadCard";
import { COMPANY_LINKS } from "@/constants/navigation";
import CheckIcon from "locals/check.svg";
import {
  StyledAppBar,
  StyledToolbar,
  NavBox,
  Background,
  BgTextContainer,
  LeftHeading,
  LeftSubtitle,
  Criteria,
  CriteriaIcon,
  CriteriaText,
  CriteriaItem,
  NavLink,
  StatContainer,
  StatBox,
  Stat,
  Line,
} from "./styles";

function Heading() {
  const { t } = useTranslation();
  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <LogoDark />
          <NavBox>
            {COMPANY_LINKS.map((link) => (
              <NavLink
                href={link.path}
                key={link.key}
                underline="none"
                color="text.primary"
              >
                {t(link.key)}
              </NavLink>
            ))}
            <Button variant="contained" color="primary">
              {t("navLanding.button")}
            </Button>
          </NavBox>
        </StyledToolbar>
      </StyledAppBar>

      <Background>
        <BgTextContainer>
          <LeftHeading variant="h1">{t("bg.heading")}</LeftHeading>
          <LeftSubtitle variant="subtitle1">{t("bg.text")}</LeftSubtitle>
          <Criteria>
            <CriteriaItem>
              <CriteriaIcon src={CheckIcon} alt="check" />
              <CriteriaText variant="subtitle2">
                {t("bg.criteria1")}
              </CriteriaText>
            </CriteriaItem>

            <CriteriaItem>
              <CriteriaIcon src={CheckIcon} alt="check" />
              <CriteriaText variant="subtitle2">
                {t("bg.criteria2")}
              </CriteriaText>
            </CriteriaItem>

            <CriteriaItem>
              <CriteriaIcon src={CheckIcon} alt="check" />
              <CriteriaText variant="subtitle2">
                {t("bg.criteria3")}
              </CriteriaText>
            </CriteriaItem>
          </Criteria>
        </BgTextContainer>
        <UploadCard />
      </Background>

      <StatContainer>
        <StatBox>
          <Typography variant="h1">{t("stats.name1")}</Typography>
          <Stat variant="subtitle1">{t("stats.desc1")}</Stat>
        </StatBox>
        <StatBox>
          <Typography variant="h1">{t("stats.name2")}</Typography>
          <Stat variant="subtitle1">{t("stats.desc2")}</Stat>
        </StatBox>
        <StatBox>
          <Typography variant="h1">{t("stats.name3")}</Typography>
          <Stat variant="subtitle1">{t("stats.desc3")}</Stat>
        </StatBox>
        <StatBox>
          <Typography variant="h1">{t("stats.name4")}</Typography>
          <Stat variant="subtitle1">{t("stats.desc4")}</Stat>
        </StatBox>
      </StatContainer>

      <Line />
    </>
  );
}

export default Heading;
