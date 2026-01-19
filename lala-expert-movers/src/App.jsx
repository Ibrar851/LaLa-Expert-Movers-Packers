import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Areas from "./components/Areas";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <MainNavbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home"><Home /></div>
              <div id="services"><Services /></div>
              <div id="about"><About /></div>
              <div id="why"><WhyChoose /></div>
              <div id="areas"><Areas /></div>
              <div id="contact"><Contact /></div>
            </>
          }
        />
        {/* Optional direct links */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-choose-us" element={<WhyChoose />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
