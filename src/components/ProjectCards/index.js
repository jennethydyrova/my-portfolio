import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import projectData from "./projectData.json";
import githubSvg from "./images/github.svg";
import showSvg from "./images/show.svg";
import "./index.scss";

const ProjectCards = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {projectData.projects.map((el) => (
          <Card className="cardStyle">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{el.projectName}</Card.Title>
              <div className="hoverContent">
                <Card.Text>{el.description}</Card.Text>
              </div>
              <Card.Link href={el.githubLink} target="_blank">
                <img src={githubSvg} alt="GitHub icon" />
              </Card.Link>
              <Card.Link href={el.demoLink} target="_blank">
                <img src={showSvg} alt="Eye icon" />
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectCards;
