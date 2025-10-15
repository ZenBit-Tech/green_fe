import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { SignInPage } from "pages/SignInPage/SignInPage";
import Landing from "pages/LandingPage/Landing";
import { PATHS } from "constants/navigation";
import UploadPage from "pages/UploadPage/UploadPage";
import { theme } from "./theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path={PATHS.DEFAULT} element={<Landing />} />
            <Route path={PATHS.UPLOAD} element={<UploadPage />} />
            <Route path={PATHS.SIGNIN} element={<SignInPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
