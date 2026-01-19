import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <Container>
        <h2 className="section-title text-center mb-5">Contact Us</h2>
        <Row className="g-4">
          <Col md={6}>
            <p><i className="fas fa-phone me-2"></i> 055 1864943</p>
            <p><i className="fas fa-envelope me-2"></i> info@lalaexpertmovers.com</p>
            <p><i className="fas fa-map-marker-alt me-2"></i> Dubai, UAE</p>
          </Col>

          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} required />
              </Form.Group>

              <Button className="btn-primary-custom w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
