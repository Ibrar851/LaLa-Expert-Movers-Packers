import { Container, Row, Col } from "react-bootstrap";
import TestimonialsSection from "./TestimonialsSection";
import ServicesSection from "./ServicesSection";

const WhyChoose = () => {
  return (
    <>
      <ServicesSection />
      <section id="why" className="section why-section">
        <Container>
          <h2 className="section-title text-white">
            Why Choose LaLa Expert Movers?
          </h2>
          <Row>
            <Col md={3} className="text-center">
              <i className="fas fa-users why-icon"></i>
              <h5>Trained Staff</h5>
              <p>Experienced professionals for safe handling.</p>
            </Col>
            <Col md={3} className="text-center">
              <i className="fas fa-dollar-sign why-icon"></i>
              <h5>Affordable Pricing</h5>
              <p>No hidden charges, best value service.</p>
            </Col>
            <Col md={3} className="text-center">
              <i className="fas fa-clock why-icon"></i>
              <h5>On-Time Delivery</h5>
              <p>We respect your time & schedule.</p>
            </Col>
            <Col md={3} className="text-center">
              <i className="fas fa-shield-alt why-icon"></i>
              <h5>Fully Insured</h5>
              <p>Your belongings are always protected.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <TestimonialsSection />
    </>
  );
};

export default WhyChoose;
