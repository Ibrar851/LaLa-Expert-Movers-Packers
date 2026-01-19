import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="section bg-light">
      <Container>
        <Row className="align-items-center">
          
          {/* LEFT CONTENT */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="section-title text-start">
              About LaLa Expert Movers
            </h2>
            <p>
              With over <strong>5+ years of experience</strong>, LaLa Expert
              Movers & Packers provides reliable and professional relocation
              services across the UAE.
            </p>
            <p>
              Our mission is to make your move stress-free with trained staff,
              modern equipment, and full insurance coverage.
            </p>
            <ul className="about-list">
              <li>✔ Trained & professional staff</li>
              <li>✔ Safe & insured moving</li>
              <li>✔ 24/7 customer support</li>
            </ul>
          </Col>

          {/* RIGHT CARD */}
          <Col md={6}>
            <Card className="trusted-card text-center shadow-sm">
              <Card.Body>
                <div className="trusted-icon">
                  <i className="fas fa-award"></i>
                </div>

                <h3 className="trusted-title">5+ Years</h3>
                <p className="trusted-subtitle">Of Trusted Service</p>

                <Row className="mt-4">
                  <Col xs={6} className="stat-box">
                    <h4>5000+</h4>
                    <span>Happy Customers</span>
                  </Col>
                  <Col xs={6} className="stat-box">
                    <h4>1000+</h4>
                    <span>Successful Moves</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default About;
