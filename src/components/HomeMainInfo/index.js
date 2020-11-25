import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "./images/myPhoto.jpeg";
import "./index.scss";

const HomeMainInfo = () => {
  return (
    <Container className="aboutMe">
      <Row md={12} className="imageTextAboutMe">
        <Col md={6}>
          <h1>Hello! My name is Jennet</h1>
          <p>
            I am Junior Frontend Web Developer based in Istanbul, who is
            passionate about building user-friendly websites. I am graduate of
            Re:coded Web Development bootcamp, with certificates from both
            Re:coded and Flatiron New York-based coding school. I have keen
            interest in backend and have experience working with databases.
          </p>
        </Col>
        <Col md={6}>
          <img src={myPhoto} alt="Jennet Hydyrova" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeMainInfo;
