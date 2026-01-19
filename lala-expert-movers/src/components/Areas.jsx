import { Container, Row, Col } from "react-bootstrap";

const Areas = () => {
  return (
    <section id="areas" className="section bg-light areas-section">
      <Container>
        <h2 className="section-title text-center mb-5">Service Areas</h2>
        <Row className="g-4">
          <Col md={4} xs={6} className="text-center">
            <i className="fas fa-map-marker-alt area-icon"></i>
            <h5>Dubai</h5>
            <p>All residential & commercial areas.</p>
          </Col>
          <Col md={4} xs={6} className="text-center">
            <i className="fas fa-map-marker-alt area-icon"></i>
            <h5>Abu Dhabi</h5>
            <p>Villa & office relocation services.</p>
          </Col>
          <Col md={4} xs={6} className="text-center">
            <i className="fas fa-map-marker-alt area-icon"></i>
            <h5>Sharjah</h5>
            <p>Affordable & fast moving solutions.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Areas;
