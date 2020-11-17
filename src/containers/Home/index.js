import React, { useState } from "react";
import { Container, Row, Col, Collapse, Button } from "react-bootstrap";
import myPhoto from "./images/myPhoto.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSass,
  faJs,
  faBootstrap,
  faCss3,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import firebaseSvg from "./images/firebase.svg";
import antDesignSvg from "./images/antDesign.svg";
import figmaSvg from "./images/figma.svg";
import posgresSvg from "./images/posgres.png";
import jestSvg from "./images/jest.svg";
import gitSvg from "./images/git.png";
import "./index.scss";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container className="aboutMe">
      <Row md={12}>
        <Col md={5} style={{ marginLeft: "2rem" }}>
          <img src={myPhoto} alt="Jennet Hydyrova" />
        </Col>
        <Col md={5} style={{ marginRight: "2rem" }}>
          <h1>Hello! My name is Jennet</h1>
          <p>
            I am Junior Front End Web Developer based in Istanbul, who is
            passionate about building user-friendly websites.
          </p>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            More about me
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </Col>
      </Row>
      <Row className="justify-content-md-center tech">
        <Col>
          <h2>Knowledge of:</h2>
        </Col>
      </Row>

      <Row className="icons justify-content-md-center" md={12}>
        <Col className="techDetails">
          <FontAwesomeIcon
            icon={faReact}
            className="icon"
            style={{ color: "#61DAFB" }}
          />
          <p>React</p>
        </Col>
        <Col className="techDetails">
          <FontAwesomeIcon
            icon={faSass}
            className="icon"
            style={{ color: "#C76493" }}
          />
          <p>Sass</p>
        </Col>
        <Col className="techDetails">
          <FontAwesomeIcon
            icon={faJs}
            className="icon"
            style={{ color: "#F7DF1B" }}
          />
          <p>JavaScript</p>
        </Col>
        <Col className="techDetails">
          <FontAwesomeIcon
            icon={faBootstrap}
            className="icon"
            style={{ color: "#6C429D" }}
          />
          <p>Bootstrap</p>
        </Col>
        <Col className="techDetails">
          <FontAwesomeIcon
            icon={faCss3}
            className="icon"
            style={{ color: "#2191EC" }}
          />
          <p>CSS</p>
        </Col>
        <Col className="techDetails">
          <FontAwesomeIcon
            icon={faHtml5}
            className="icon"
            style={{ color: "#2191EC" }}
          />
          <p>HTML</p>
        </Col>
      </Row>
      <Row className="icons justify-content-md-center" md={12}>
        <Col className="techDetails">
          <img
            src={figmaSvg}
            alt="Figma icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>Figma</p>
        </Col>
        <Col className="techDetails">
          <img
            src={firebaseSvg}
            alt="Firebase icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>Firebase</p>
        </Col>
        <Col className="techDetails">
          <img
            src={antDesignSvg}
            alt="Firebase icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>Ant Design</p>
        </Col>
        <Col className="techDetails">
          <img
            src={posgresSvg}
            alt="PostgreSQL icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>PostgreSQL</p>
        </Col>
        <Col className="techDetails">
          <img
            src={jestSvg}
            alt="Jest Testing icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>Jest Testing</p>
        </Col>
        <Col className="techDetails">
          <img
            src={gitSvg}
            alt="Git icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>Git Version Control</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
