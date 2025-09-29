import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Landing from "./pages/LandingPage/Landing";
import About from "./pages/ExampleAboutPage/About";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Router>
        <h1>{t("nav.h1")}</h1>
        <nav>
          <Link to="/">{t("nav.landing")}</Link> |{" "}
          <Link to="/about">{t("nav.about")}</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
