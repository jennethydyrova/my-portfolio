import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card } from "react-bootstrap";
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
import Slider from "react-slick";
import "./index.scss";

const TechnologiesHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="technologies">
      <Container>
        <Row className="justify-content-md-center tech">
          <Col>
            <h2>Technologies</h2>
          </Col>
        </Row>
        <Slider {...settings} className="slider">
          <Col className="techDetails">
            <Card>
              <FontAwesomeIcon
                icon={faReact}
                className="icon"
                style={{ color: "#61DAFB" }}
              />
              <Card.Text>React</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <FontAwesomeIcon
                icon={faSass}
                className="icon"
                style={{ color: "#C76493" }}
              />
              <Card.Text>Sass</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <FontAwesomeIcon
                icon={faJs}
                className="icon"
                style={{ color: "#F7DF1B" }}
              />
              <Card.Text>JavaScript</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <FontAwesomeIcon
                icon={faBootstrap}
                className="icon"
                style={{ color: "#6C429D" }}
              />
              <Card.Text>Bootstrap</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <FontAwesomeIcon
                icon={faCss3}
                className="icon"
                style={{ color: "#2191EC" }}
              />
              <Card.Text>CSS</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <FontAwesomeIcon
                icon={faHtml5}
                className="icon"
                style={{ color: "#2191EC" }}
              />
              <Card.Text>HTML</Card.Text>
            </Card>
          </Col>

          <Col className="techDetails">
            <Card>
              <img
                src={figmaSvg}
                alt="Figma icon"
                style={{ width: "80px", height: "80px" }}
              />
              <Card.Text>Figma</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <img
                src={firebaseSvg}
                alt="Firebase icon"
                style={{ width: "80px", height: "80px" }}
              />
              <Card.Text>Firebase</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <img
                src={antDesignSvg}
                alt="Firebase icon"
                style={{ width: "80px", height: "80px" }}
              />
              <Card.Text>Ant Design</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <img
                src={posgresSvg}
                alt="PostgreSQL icon"
                style={{ width: "80px", height: "80px" }}
              />
              <Card.Text>PostgreSQL</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <img
                src={jestSvg}
                alt="Jest Testing icon"
                style={{ width: "80px", height: "80px" }}
              />
              <Card.Text>Jest Tests</Card.Text>
            </Card>
          </Col>
          <Col className="techDetails">
            <Card>
              <img
                src={gitSvg}
                alt="Git icon"
                style={{ width: "80px", height: "80px" }}
              />
              <Card.Text>Git Version Control</Card.Text>
            </Card>
          </Col>
        </Slider>
      </Container>
    </div>
  );
};

export default TechnologiesHome;
