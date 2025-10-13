import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { Logo } from "@/components/Logo";
import UploadCard from "@/components/UploadCard";
import { COMPANY_LINKS } from "@/constants/navigation";
import { stats } from "@/constants/heading";
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
          <Logo />
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
        <UploadCard mode="preview" />
      </Background>
      <StatContainer>
        {stats.map((stat, i) => (
          <StatBox key={i}>
            <Typography variant="h1">
              <CountUp
                start={0}
                end={stat.value}
                duration={0.4}
                separator=" "
                decimals={stat.value % 1 !== 0 ? 1 : 0}
                suffix={stat.suffix ?? ""}
              />
            </Typography>
            <Stat variant="subtitle1">{stat.desc}</Stat>
          </StatBox>
        ))}
      </StatContainer>

      <Line />
    </>
  );
}

export default Heading;
