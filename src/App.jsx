import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import KeywordAnalysis from "./pages/KeywordAnalysis.jsx";
import BacklinkChecker from "./pages/BacklinkChecker.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/keyword-analysis" element={<KeywordAnalysis />} />
          <Route exact path="/backlink-checker" element={<BacklinkChecker />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;