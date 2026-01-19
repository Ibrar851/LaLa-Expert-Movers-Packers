import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <Container>
        <h2 className="section-title text-center">Our Services</h2>
        <Row className="g-4">
          <Col md={4}>
            <div className="service-card text-center">
              <div className="icon-wrapper">
                <i className="fas fa-home"></i>
              </div>
              <h4 className="service-title">Home Relocation</h4>
              <p className="service-text">Safe packing and transport of household items.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-card text-center">
              <div className="icon-wrapper">
                <i className="fas fa-building"></i>
              </div>
              <h4 className="service-title">Office Relocation</h4>
              <p className="service-text">Professional office and IT equipment moving.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="service-card text-center">
              <div className="icon-wrapper">
                <i className="fas fa-warehouse"></i>
              </div>
              <h4 className="service-title">Storage</h4>
              <p className="service-text">Secure short & long-term storage solutions.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
