import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  return (
    <div>
      <div className="socialIcons">
        <div className="icon">
          <a
            href="https://github.com/jennethydyrova"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="mediaIcon" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/jennet-hydyrova-a60685122/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mediaIcon" />
          </a>
        </div>

        <div className="icon">
          <a href="mailto:jennethydyrovaa@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="mediaIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
