import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import projectData from "./projectData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

import "./index.scss";

const ProjectCards = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {projectData.projects.map((project) => (
          <Card className="cardStyle">
            <Card.Body>
              <Card.Title>{project.projectName}</Card.Title>
              <div className="hoverContent">
                <Card.Text>{project.description}</Card.Text>
              </div>
              <div className="projectDetails">
                <div>
                  <Card.Link href={project.githubLink} target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </Card.Link>
                  <Card.Link href={project.demoLink} target="_blank">
                    <FontAwesomeIcon icon={faEye} className="icon" />
                  </Card.Link>
                  {project.youtubeLink && (
                    <Card.Link href={project.youtubeLink} target="_blank">
                      <FontAwesomeIcon icon={faYoutube} className="icon" />
                    </Card.Link>
                  )}
                </div>
                <div className="techInfo">
                  {project.techUsed.map((tech) => (
                    <p>{tech}</p>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectCards;
