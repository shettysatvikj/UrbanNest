import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileStickyFooter from "./components/MobileStickyFooter";
import ExitIntentPopup from "./components/ExitIntentPopup";
import Home from "./pages/Home";
import ModularKitchenMumbai from "./pages/ModularKitchenMumbai";
import Estimate from "./pages/Estimate";


import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Interiors from "./pages/Interiors";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modular-kitchen-mumbai" element={<ModularKitchenMumbai />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/portfolio" element={<Portfolio />} />
      
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interiors" element={<Interiors />} />
      </Routes>

      <Footer />
      <MobileStickyFooter />
      <ExitIntentPopup />
    </>
  );
}

export default App;