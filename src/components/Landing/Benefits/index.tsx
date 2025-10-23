import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import person from "locals/person.svg";
import potion from "locals/potion.svg";
import lightning from "locals/lightning.svg";
import {
  BenefitsContainer,
  BenefitsHeading,
  BenefitsText,
  CardsBox,
  Card,
  CardTitle,
  CardDescription,
} from "./styles";

function Benefits() {
  const { t } = useTranslation();
  return (
    <>
      <BenefitsContainer id="use-cases">
        <BenefitsText>
          <BenefitsHeading variant="h1">{t("benefits.title")}</BenefitsHeading>
          <Typography variant="subtitle1">
            {t("benefits.description")}
          </Typography>
        </BenefitsText>
        <CardsBox>
          <Card>
            <img src={person} alt="person" />
            <CardTitle variant="h2">{t("benefits.title1")}</CardTitle>
            <CardDescription variant="subtitle1">
              {t("benefits.description1")}
            </CardDescription>
          </Card>
          <Card>
            <img src={potion} alt="potion" />
            <CardTitle variant="h2">{t("benefits.title2")}</CardTitle>
            <CardDescription variant="subtitle1">
              {t("benefits.description2")}
            </CardDescription>
          </Card>
          <Card>
            <img src={lightning} alt="lightning" />
            <CardTitle variant="h2">{t("benefits.title3")}</CardTitle>
            <CardDescription variant="subtitle1">
              {t("benefits.description3")}
            </CardDescription>
          </Card>
        </CardsBox>
      </BenefitsContainer>
    </>
  );
}

export default Benefits;
