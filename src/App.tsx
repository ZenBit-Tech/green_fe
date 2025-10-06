import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "pages/LandingPage/Landing";
import About from "pages/ExampleAboutPage/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
