import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./index.css";

const MainNavbar = () => {
  return (
    <Container>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "16px" }}>
            Jennet Hydyrova
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default MainNavbar;
