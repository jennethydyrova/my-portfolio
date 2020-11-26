import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import projectData from "./projectData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import movieProject from "./images/movieProject.png";
import taskManagerProject from "./images/taskManagerProject.png";
import madLibsProject from "./images/madLibsProject.png";
import safePlaceProject from "./images/safePlaceProject.png";
import myInventoryProject from "./images/myInventoryProject.png";
import greenyLeaf from "../HomeMainInfo/images/greenyLeaf.png";
import greenyLine from "../HomeMainInfo/images/greenyLine.png";
import "./index.scss";

const ProjectCards = () => {
  const projectImgMap = {
    movieProjectImg: movieProject,
    taskManagerProjectImg: taskManagerProject,
    madLibsProjectImg: madLibsProject,
    safePlaceProjectImg: safePlaceProject,
    myInventoryProjectImg: myInventoryProject,
  };

  return (
    <div>
      <div className="greenyPro">
        <img src={greenyLeaf} alt="Greeny leaf" className="greenyLeaf" />
        <img src={greenyLine} alt="Greeny line" className="greenyLine" />
      </div>

      <Container className="projects">
        <Row className="justify-content-center">
          <h2>Projects</h2>
        </Row>
        <Col className="projectCards">
          {projectData.projects.map((project) => (
            <Row className="justify-content-center">
              <Card className="cardStyle">
                <Card.Body>
                  <Row>
                    <Col lg={6} md={12} sm={12} className="projectInfo">
                      <Card.Title>{project.projectName}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>

                      <div className="projectDetails">
                        <div>
                          <Card.Link href={project.githubLink} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                          </Card.Link>
                          <Card.Link href={project.demoLink} target="_blank">
                            <FontAwesomeIcon icon={faEye} className="icon" />
                          </Card.Link>

                          {project.youtubeLink && (
                            <Card.Link
                              href={project.youtubeLink}
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                icon={faYoutube}
                                className="icon"
                              />
                            </Card.Link>
                          )}
                          <hr />
                        </div>
                        <Row className="techInfo">
                          {project.techUsed.map((tech) => (
                            <p>{tech}</p>
                          ))}
                        </Row>
                      </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                      <img
                        src={projectImgMap[project.projectImg]}
                        alt="Project cover"
                        onClick={() => window.open(project.demoLink, "_blank")}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          ))}
        </Col>
      </Container>
    </div>
  );
};

export default ProjectCards;
