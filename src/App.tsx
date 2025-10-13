import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Landing from "pages/LandingPage/Landing";
import UploadPage from "pages/UploadPage/UploadPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/upload" element={<UploadPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
