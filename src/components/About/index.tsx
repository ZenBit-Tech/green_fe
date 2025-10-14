import { useTranslation } from "react-i18next";
import flask from "locals/flask.svg";
import heart2 from "locals/heart2.svg";
import check2 from "locals/check2.svg";
import bulb from "locals/bulb.svg";
import book from "locals/book.svg";
import {
  GradientBox,
  BgImage,
  Container1,
  Container2,
  Container3,
  Container4,
  ContainerName,
  ContainerTitle,
  ContainerText,
  ContainerIcon,
  AboutTitleBox,
  AboutTitle,
  AboutDescription,
  TextBox,
  AboutTextTitle,
  AboutText,
} from "./styles";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <GradientBox>
        <AboutTitleBox>
          <AboutTitle variant="h1">{t("aboutSection.title")}</AboutTitle>
          <AboutDescription variant="subtitle1">
            {t("aboutSection.description")}
          </AboutDescription>
        </AboutTitleBox>
        <BgImage src={flask} />
        <Container1>
          <ContainerTitle>
            <ContainerIcon src={heart2} />
            <ContainerName variant="h2">
              {t("aboutSection.name1")}
            </ContainerName>
          </ContainerTitle>
          <ContainerText variant="subtitle1">
            {t("aboutSection.text1")}
          </ContainerText>
        </Container1>
        <Container2>
          <ContainerTitle>
            <ContainerIcon src={check2} />
            <ContainerName variant="h2">
              {t("aboutSection.name2")}
            </ContainerName>
          </ContainerTitle>
          <ContainerText variant="subtitle1">
            {t("aboutSection.text2")}
          </ContainerText>
        </Container2>
        <Container3>
          <ContainerTitle>
            <ContainerIcon src={bulb} />
            <ContainerName variant="h2">
              {t("aboutSection.name3")}
            </ContainerName>
          </ContainerTitle>
          <ContainerText variant="subtitle1">
            {t("aboutSection.text3")}
          </ContainerText>
        </Container3>
        <Container4>
          <ContainerTitle>
            <ContainerIcon src={book} />
            <ContainerName variant="h2">
              {t("aboutSection.name4")}
            </ContainerName>
          </ContainerTitle>
          <ContainerText variant="subtitle1">
            {t("aboutSection.text4")}
          </ContainerText>
        </Container4>
        <TextBox>
          <AboutTextTitle variant="h1">
            {t("aboutSection.caption")}
          </AboutTextTitle>
          <AboutText variant="subtitle1">{t("aboutSection.text")}</AboutText>
        </TextBox>
      </GradientBox>
    </>
  );
}

export default About;
