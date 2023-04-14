import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Menu() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <Container>
        <Navbar.Brand href="/">FullStack-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="text-decoration-none text-white"
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>

            <Nav.Link
              className="text-decoration-none text-white"
              as={Link}
              to="/about"
            >
              About
            </Nav.Link>

            <Nav.Link
              className="text-decoration-none text-white"
              as={Link}
              to="/contact"
            >
              Contact Us
            </Nav.Link>

            <Nav.Link
              className="text-decoration-none text-white"
              as={Link}
              to="/admin"
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="gap-2">
            <Nav.Link className="btn btn-primary" href="#">
              Login
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              className="btn btn-light text-black"
              href="#"
            >
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
