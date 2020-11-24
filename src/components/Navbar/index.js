import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.scss";

const MainNavbar = () => {
  return (
    <Container>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              fontSize: "22px",
              fontWeight: "450",
              color: "#405952",
            }}
          >
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/resume">Resume</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default MainNavbar;
