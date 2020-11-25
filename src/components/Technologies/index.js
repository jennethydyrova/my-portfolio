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
import technologyData from "./technologies.json";
import "./index.scss";

const TechnologiesHome = () => {
  const techIconMap = {
    reactIcon: faReact,
    sassIcon: faSass,
    javaScriptIcon: faJs,
    bootstrapIcon: faBootstrap,
    htmlIcon: faHtml5,
    cssIcon: faCss3,
    figmaIcon: figmaSvg,
    firebaseImg: firebaseSvg,
    antDesignIcon: antDesignSvg,
    postgresIcon: posgresSvg,
    jestIcon: jestSvg,
    gitIcon: gitSvg,
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="technologies">
      <Container>
        <Row className="justify-content-center tech">
          <Col>
            <h2>Technologies</h2>
          </Col>
        </Row>
        <Slider {...settings} className="slider">
          {technologyData.technologies.map((tech) => {
            return (
              <Col>
                <Card>
                  <div className="techDetails">
                    {tech.isIcon ? (
                      <FontAwesomeIcon
                        icon={techIconMap[tech.icon]}
                        className="icon"
                        style={{ color: tech.color }}
                      />
                    ) : (
                      <img
                        src={techIconMap[tech.icon]}
                        alt={tech.name}
                        className="icon"
                      />
                    )}
                    <Card.Text>
                      <a href={tech.url}> {tech.name} </a>
                    </Card.Text>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default TechnologiesHome;
