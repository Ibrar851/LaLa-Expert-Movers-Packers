import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHome, FaBuilding, FaBoxes, FaCouch, FaShippingFast, FaWarehouse } from "react-icons/fa";


const servicesData = [
  {
    icon: <FaHome className="service-icon" />,
    title: "Home Relocation",
    points: [
      "Professional packing of household items",
      "Safe transportation of furniture",
      "Complete unpacking and setup",
    ],
  },
  {
    icon: <FaBuilding className="service-icon" />,
    title: "Office Relocation",
    points: [
      "IT equipment handling and setup",
      "Minimal business interruption",
      "Secure document transportation",
    ],
  },
  {
    icon: <FaBoxes className="service-icon" />,
    title: "Packing & Unpacking",
    points: [
      "Professional packing materials",
      "Fragile items specialist care",
      "Systematic unpacking service",
    ],
  },
  {
    icon: <FaCouch className="service-icon" />,
    title: "Furniture Assembly",
    points: [
      "Expert furniture dismantling",
      "Professional re-assembly",
      "Damage-free handling",
    ],
  },
  {
    icon: <FaShippingFast className="service-icon" />,
    title: "Local Moving",
    points: [
      "Within Dubai and other Emirates",
      "Fast and efficient service",
      "Competitive local rates",
    ],
  },
  {
    icon: <FaWarehouse className="service-icon" />,
    title: "Storage Solutions",
    points: [
      "Climate-controlled facilities",
      "Short and long-term storage",
      "Secure 24/7 monitored",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section mt-5">
      <Container>
        <div className="text-center mb-5 fade-in">
          <h2 className="section-title">Comprehensive Services</h2>
          <p className="section-subtitle">
            From packing to final setup, we handle every aspect of your move
          </p>
        </div>
        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="service-card fade-in">
                <Card.Body>
                  <div className="icon-wrapper">{service.icon}</div>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <ul className="service-points">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
