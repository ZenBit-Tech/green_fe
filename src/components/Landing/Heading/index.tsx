import { Button, Link, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Logo from "@/components/Logo";
import CheckIcon from "locals/check.svg";
import {
  StyledAppBar,
  StyledToolbar,
  NavBox,
  Background,
  BgTextContainer,
  Criteria,
} from "./styles";

function Heading() {
  const { t } = useTranslation();
  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Logo />
          <NavBox>
            <Link href="/use" underline="none" color="text.primary">
              {t("navLanding.use")}
            </Link>
            <Link href="/about" underline="none" color="text.primary">
              {t("navLanding.about")}
            </Link>
            <Button variant="contained" color="primary">
              {t("navLanding.button")}
            </Button>
          </NavBox>
        </StyledToolbar>
      </StyledAppBar>

      <Background>
        <BgTextContainer>
          <Typography variant="h1">{t("bg.heading")}</Typography>
          <Typography variant="subtitle1">{t("bg.text")}</Typography>

          <Criteria>
            {[t("bg.criteria1"), t("bg.criteria2"), t("bg.criteria3")].map(
              (text, i) => (
                <Box
                  key={i}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <img src={CheckIcon} alt="check" width={20} height={20} />
                  <Typography variant="subtitle2">{text}</Typography>
                </Box>
              ),
            )}
          </Criteria>
        </BgTextContainer>
        <div className="card"></div>
      </Background>
    </>
  );
}

export default Heading;
