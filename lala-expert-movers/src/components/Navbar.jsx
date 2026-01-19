import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      expand="md"
      fixed="top"
      className={`main-navbar shadow-sm ${scrolled ? "scrolled" : ""}`}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="navbar-brand-custom d-flex align-items-center"
        >
          <i className="fas fa-truck-moving me-2 text-primary"></i>

          <span className="brand-text">
            <span className="text-primary fw-bold">LaLa</span>{" "}
            <span className="text-danger fw-bold">Expert Movers</span>{" "}
            <span className="text-primary fw-bold">& Packers</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
