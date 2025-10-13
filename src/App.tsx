import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { PATHS } from "./constants/navigation";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import Landing from "pages/LandingPage/Landing";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path={PATHS.DEFAULT} element={<Landing />} />
            <Route path={PATHS.SIGNIN} element={<SignInPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
