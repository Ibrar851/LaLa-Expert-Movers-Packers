import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>LaLa Expert Movers</h5>
            <p>Professional movers & packers in UAE.</p>
          </Col>

          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Contact</h6>
            <p>📞 055 1864943</p>
            <p>📧 info@lalaexpertmovers.com</p>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <small>© 2024 LaLa Expert Movers & Packers. All Rights Reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
