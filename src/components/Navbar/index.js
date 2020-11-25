import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.scss";

const MainNavbar = () => {
  return (
    <Container>
      <Navbar expand="lg" collapseOnSelect>
        <Navbar.Brand
          href="/"
          style={{
            fontSize: "22px",
            fontWeight: "450",
            color: "#FBF7F4",
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
      </Navbar>
    </Container>
  );
};

export default MainNavbar;
