import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="w-100 mb-4" style={{ marginTop: "2rem" }}>
      <Container>
        {/* Offcanvas Toggle Button */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

        {/* Offcanvas Menu */}
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <div className="w-50">
                <Card.Img
                  variant="top"
                  src="\images\WhatsApp Image 2025-02-07 at 8.48.55 AM (1).jpeg"
                  className="w-25"
                />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column d-flex justify-content-between flex-wrap w-100 flex-lg-row w-100">
              <Link to="/" onClick={handleClose} className="text-decoration-none fw-bold fs-4 text-warning">Home</Link>
              <Link to="/trust" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">Trust</Link>
              <Link to="/management" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">Management</Link>
              <Link to="/director" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">Director <br /> Desk</Link>
              <Link to="/objective" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">Vision And <br /> Mission</Link>
              <Link to="/program" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">Programs</Link>
              <Link to="/faculty" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">Faculty</Link>
              <Link to="/form" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">Student <br /> Section</Link>
              <Link to="/contact" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">Contact <br /> Us</Link>
              <Link to="/" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">RTI</Link>
              <Link to="/" onClick={handleClose} className="text-black text-decoration-none fw-bold fs-4">Sport <br /> Admission</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar2;
