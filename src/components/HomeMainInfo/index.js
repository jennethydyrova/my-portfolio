import React from "react";
import { Container, Button } from "react-bootstrap";
import myPhoto from "./images/myPhoto.jpeg";
import greenyLeaf from "./images/greenyLeaf.png";
import greenyLine from "./images/greenyLine.png";
import jennetResume from "./file/jennetResume.pdf";
import "./index.scss";

const HomeMainInfo = () => {
  return (
    <div>
      <div className="greeny">
        <img src={greenyLeaf} alt="Greeny leaf" className="greenyLeaf" />
        <img src={greenyLine} alt="Greeny line" className="greenyLine" />
      </div>
      <Container className="aboutMe">
        <div className="imageTextAboutMe justify-content-center">
          <div className="aboutMeInfo">
            <h1>Hello! My name is Jennet</h1>
            <p>
              I am a Junior Frontend Web Developer based in Istanbul, who is
              passionate about building user-friendly websites. I am a graduate
              of Re:Coded Web Development bootcamp, with certificates from both{" "}
              <a
                href="https://www.re-coded.com/"
                target="_blank"
                rel="noreferrer"
              >
                Re:Coded
              </a>{" "}
              and{" "}
              <a
                href="https://flatironschool.com/"
                target="_blank"
                rel="noreferrer"
              >
                Flatiron School
              </a>{" "}
              , the New York-based coding school. I have keen interest in
              backend development and experience working with databases.
            </p>
            <Button>
              <a href={jennetResume} target="_blank" rel="noreferrer">
                More about me
              </a>
            </Button>
          </div>
          <div>
            <img src={myPhoto} alt="Jennet Hydyrova" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeMainInfo;
