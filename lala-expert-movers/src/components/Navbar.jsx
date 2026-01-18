import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      scrollToSection(id);
    }
  };

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={`main-navbar shadow-sm ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => scrollToSection("home")}
          style={{
            color: "blue", // text color
            fontWeight: "bold", // bold text
            fontSize: "1.8rem", // text size (adjust as needed)
          }}
        >
          <i className="fas fa-truck-moving me-2"></i>
          LaLa Expert Movers & Packers
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <Nav.Link onClick={() => handleClick("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleClick("about")}>About</Nav.Link>
            <Nav.Link onClick={() => handleClick("services")}>
              Services
            </Nav.Link>
            <Nav.Link onClick={() => handleClick("why")}>
              Why Choose Us
            </Nav.Link>
            <Nav.Link onClick={() => handleClick("areas")}>Areas</Nav.Link>
            <Nav.Link
              onClick={() => handleClick("contact")}
              className="contact-btn"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
