import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <section id="services" className="section">
      <Container>
        <h2 className="section-title">Our Services</h2>
        <Row>
          <Col md={4}>
            <div className="service-card">
              <i className="fas fa-home"></i>
              <h4>Home Relocation</h4>
              <p>Safe packing and transport of household items.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-card">
              <i className="fas fa-building"></i>
              <h4>Office Relocation</h4>
              <p>Professional office and IT equipment moving.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-card">
              <i className="fas fa-warehouse"></i>
              <h4>Storage</h4>
              <p>Secure short & long-term storage solutions.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
