import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <section id="home" className="hero-section hero-overlay">
        {/* BACKGROUND SLIDER */}
        <Carousel
          fade
          controls={false}
          indicators={true}
          interval={4000}
          pause={false}
          className="hero-bg-slider"
        >
          {["hero1", "hero2", "hero3", "hero4", "hero5"].map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 hero-bg-img"
                src={`/images/hero/${img}.jpg`}
                alt="Professional Movers UAE"
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* CONTENT OVER SLIDER */}
        <div className="hero-content">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col md={7} className="text-md-start text-center">
                <h1 className="hero-title">
                  <span className="text-warning fw-bold">
                    Reliable & Professional
                  </span>{" "}
                  <br />
                  <span>Movers and Packers in UAE</span>
                </h1>

                <p className="hero-text">
                  Safe, fast, and affordable relocation services across UAE.
                </p>

                <div className="d-flex gap-3 justify-content-md-start justify-content-center hero-buttons">
                  <Button className="btn-light-custom">Get Free Quote</Button>

                  <Button
                    className="btn-outline-custom"
                    as="a"
                    href="tel:0551864943"
                  >
                    <i className="fas fa-phone me-2"></i>
                    Call Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/055 1864943"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Home;
