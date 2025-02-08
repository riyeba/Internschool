import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { TbFocus2, TbTargetArrow } from "react-icons/tb";
import "aos/dist/aos.css";

import Aos from "aos";

function Mission() {

  useEffect(() => {
      Aos.init();
    }, []);
  return (
    <div style={{ padding: "40px" }} className="px-3 px-sm-4">
      <Row className="gy-3">
        <Col xs={12} md={4}>
          <div
            style={{
              height: "40rem",
              width: "100%",
              minHeight: "30rem",
            }}
          >
            <Card.Img
              variant="top"
              src="https://plus.unsplash.com/premium_photo-1729038880769-80c51e4c509a?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ width: "100%", height: "100%" }}
              className="object-fit-cover"
            />
          </div>
        </Col>

        <Col xs={12} md={4} data-aos="fade-left">
          <Row className="gy-3">
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  height: "20rem",
                  minHeight: "18rem",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ width: "100%", height: "100%" }}
                  className="object-fit-cover"
                />
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  backgroundColor: "#0b132b",
                  width: "100%",
                  minHeight: "18rem",
                  padding: "2.5rem",
                }}
              >
                <Card.Body>
                  <Card.Title
                    className="fs-2 fw-bold d-flex mb-2 align-items-center gap-3"
                    style={{ color: "white" }}
                  >
                    <TbFocus2 className="fs-1 text-warning" /> Vision
                  </Card.Title>
                  <Card.Text className="fs-5" style={{ color: "#d1d5db" }}>
                    Providing quality education to socially and economically
                    backward class. Bringing about educational and cultural
                    development of rural people.
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={4} data-aos="fade-left">
          <Row className="gy-3">
            <Col xs={12}>
              <div
                style={{
                  backgroundColor: "#99a2b0",
                  width: "100%",
                  minHeight: "18rem",
                  padding: "2.5rem",
                }}
              >
                <Card.Body>
                  <Card.Title
                    className="fs-2 fw-bold d-flex mb-2 align-items-center gap-3"
                    style={{ color: "" }}
                  >
                    <TbTargetArrow className="fs-1 text-warning" /> Mission
                  </Card.Title>
                  <Card.Text className="fs-5" style={{ color: "" }}>
                    Eliminating the darkness of ignorance from the lives of
                    people living in age-long poverty and helping them advance
                    towards knowledge for all-round development.
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  height: "21rem",
                  minHeight: "20rem",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ width: "100%", height: "100%" }}
                  className="object-fit-cover"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Mission;
