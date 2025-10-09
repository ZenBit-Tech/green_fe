import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Landing from "pages/LandingPage/Landing";
import { SignInPage } from "./pages/SignInPage/SignInPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
