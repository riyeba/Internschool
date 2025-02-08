import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FiAward, FiUser } from "react-icons/fi";
import { TbTargetArrow } from "react-icons/tb";
import "aos/dist/aos.css";

import Aos from "aos";
import { useEffect } from "react";

function Footer1() {
   useEffect(() => {
      Aos.init();
    }, []);
  return (
    <div style={{ padding: "10px 20px", backgroundColor: "#0b132b" }}>
      <Row className="gy-3">
        {/* First Column: Single Card (Higher Height) */}
        <Col xs={12} md={6} >
          <div className="p-2">
            <Card.Body>
              <p className="fs-6 fw-bold text-warning">ACADEMIC</p>
              <Card.Title className="fs-1 fw-bold text-white mb-4">
                Academic Programmes :
              </Card.Title>
              <Card.Text className="fs-5 p-2 text-white text-opacity-50">
                The Scientific Research long back established that, ‘universe is
                expanding’ which holds true even today. And now we say ‘world is
                shrinking’- this also is True! The introduction of global
                network of internet has turned the whole globe into a village. <br />
                Rapid progress in the area of Info-Tech and Management has
                brought about huge Leaps in socio-economic and cultural changes
                and consequently changed education system. The changing
                educational needs in the last decade have demanded the
                introduction of various employable courses at graduation and
                post graduation level. We at our institute focus our attention
                on overall personality development of the student and provide
                sound platform to be a successful I.T. / Management professional
                and a responsible Indian citizen. I am sure that, future will be
                ours as I.T. is India's Tomorrow.
              </Card.Text>
              <Button variant="primary" className="bg-warning fs-5 fw-bold" style={{ borderRadius: "0", border: "0", width: "100%", height: "4rem", marginTop: "1.2rem" }} data-aos="fade-right">
                APPLY NOW
              </Button>
            </Card.Body>
          </div>
        </Col>

        {/* Second Column: Two Stacked Cards (Equal Width) */}
        <Col xs={12} md={3} data-aos="fade-right">
          <Row className="gy-3">
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  minHeight: "19rem",
                  padding: "2.5rem",
                  backgroundColor: "white",
                }}
                className="border"
              >
                <Card.Body style={{ padding: "" }}>
                  <Card.Title className="fs-2 fw-bold mb-2" style={{ color: "white" }}>
                    <FiAward className="fs-1 text-warning" />
                  </Card.Title>
                  <Card.Text className="fs-2 fw-bold text-black">
                    Bachelor of Business Administration (B. B. A.)
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  minHeight: "12rem",
                  padding: "2.5rem",
                  transition: "background-color 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                className="border"
              >
                <Card.Body>
                  <Card.Title className="fs-2 fw-bold mb-2 " style={{ color: "white" }}>
                    <FiUser className="fs-1 text-warning" />
                  </Card.Title>
                  <Card.Text className="fs-2 fw-bold text-white">
                    B. Sc. (Computer Science)
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Third Column: One Card */}
        <Col xs={12} md={3} data-aos="fade-right">
          <Row className="gy-3">
            <Col xs={12}>
              <div
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  minHeight: "19rem",
                  padding: "2.6rem",
                  transition: "background-color 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                className="border"
              >
                <Card.Body>
                  <Card.Title className="fs-2 fw-bold d-flex mb-2 align-items-center gap-3">
                    <TbTargetArrow className="fs-1 text-warning" />
                  </Card.Title>
                  <Card.Text className="fs-2 fw-bold text-white">
                    Bachelor of Computer Application <br /> (B. C. A.)
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer1;
