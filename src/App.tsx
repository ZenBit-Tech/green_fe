import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Landing from "pages/LandingPage/Landing";
import { PATHS } from "constants/navigation";
import UploadPage from "pages/UploadPage/UploadPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path={PATHS.DEFAULT} element={<Landing />} />
            <Route path={PATHS.UPLOAD} element={<UploadPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
