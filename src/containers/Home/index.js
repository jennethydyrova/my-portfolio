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
      <Row md={10} className="justify-content-md-center">
        <Col md={5}>
          <img src={myPhoto} alt="Photo of me" />
        </Col>
        <Col className="infoAboutMe" md={5}>
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
          <h3>Knowledge of:</h3>
        </Col>
      </Row>

      <Row className="icons justify-content-md-center" md={12}>
        <Col>
          <FontAwesomeIcon
            icon={faReact}
            className="icon"
            style={{ color: "#61DAFB" }}
          />
          <p>React</p>
        </Col>
        <Col>
          <FontAwesomeIcon
            icon={faSass}
            className="icon"
            style={{ color: "#C76493" }}
          />
          <p>Sass</p>
        </Col>
        <Col>
          <FontAwesomeIcon
            icon={faJs}
            className="icon"
            style={{ color: "#F7DF1B" }}
          />
          <p>JavaScript</p>
        </Col>
        <Col>
          <FontAwesomeIcon
            icon={faBootstrap}
            className="icon"
            style={{ color: "#6C429D" }}
          />
          <p>Bootstrap</p>
        </Col>
        <Col>
          <FontAwesomeIcon
            icon={faCss3}
            className="icon"
            style={{ color: "#2191EC" }}
          />
          <p>CSS</p>
        </Col>
        <Col>
          <FontAwesomeIcon
            icon={faHtml5}
            className="icon"
            style={{ color: "#2191EC" }}
          />
          <p>HTML</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={figmaSvg}
            alt="Figma icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>Figma</p>
        </Col>
        <Col>
          <img
            src={firebaseSvg}
            alt="Firebase icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>Firebase</p>
        </Col>
        <Col>
          <img
            src={antDesignSvg}
            alt="Firebase icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>Ant Design</p>
        </Col>
        <Col>
          <img
            src={posgresSvg}
            alt="PostgreSQL icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>PostgreSQL</p>
        </Col>
        <Col>
          <img
            src={jestSvg}
            alt="Jest Testing icon"
            style={{ width: "80px", height: "80px" }}
          />
          <p>Jest Testing</p>
        </Col>
        <Col>
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
