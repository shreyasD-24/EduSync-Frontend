import Home from "./Pages/Home";
import Learning from "./Pages/Learning";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Detection from "./Pages/Detection"
import Overalltest from "./Pages/Overalltest";
import Coursetest from "./Pages/Coursetest";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/detect/:number" element={<Detection />} />
        <Route path="/overall" element={<Overalltest />} />
        <Route path="/course" element={<Coursetest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
