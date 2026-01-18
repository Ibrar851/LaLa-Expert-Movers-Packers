import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const testimonialsData = [
  {
    rating: 5,
    text: `"LaLa Expert Movers made our office relocation seamless. Professional team and excellent service!"`,
    name: "Ahmed Khan",
    location: "Dubai",
  },
  {
    rating: 5,
    text: `"The best movers in Abu Dhabi! Our villa move was stress-free and completed on time."`,
    name: "Sarah Wilson",
    location: "Abu Dhabi",
  },
  {
    rating: 5,
    text: `"Highly recommend their packing services. Everything arrived safely and perfectly organized."`,
    name: "Fatima Al-Mansoori",
    location: "Sharjah",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section py-20 bg-light">
      <Container>
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Trusted by thousands of satisfied customers across the UAE
          </p>
        </div>
        <Row className="g-4">
          {testimonialsData.map((testimonial, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="testimonial-card fade-in">
                <Card.Body>
                  {/* Star rating */}
                  <div className="mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-warning">&#9733;</span>
                    ))}
                  </div>
                  {/* Testimonial text */}
                  <p className="testimonial-text">{testimonial.text}</p>
                  {/* User info */}
                  <div className="d-flex align-items-center mt-4">
                    <FaUserCircle className="user-icon me-3" />
                    <div>
                      <strong>{testimonial.name}</strong>
                      <div className="text-muted">{testimonial.location}</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
