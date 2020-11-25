import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faFolder } from "@fortawesome/free-regular-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import greenyLine2 from "../../components/HomeMainInfo/images/greenyLine2.png";
import greenyLine from "../../components/HomeMainInfo/images/greenyLine.png";
import "./index.scss";

const ResumePage = () => {
  return (
    <div>
      <div className="greenyRes">
        <img src={greenyLine2} alt="Greeny line" className="greenyLine2" />
        <img src={greenyLine} alt="Greeny line" className="greenyLine" />
      </div>
      <div className="resumePage">
        <h2>My Journey</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work resumeCard "
            contentStyle={{ background: "fff", color: "#1f2421" }}
            contentArrowStyle={{ borderRight: "7px solid  fff" }}
            date="July - November 2020"
            iconStyle={{
              background: "#6c9a8b",
              color: "#fff",
              paddingLeft: "5px",
            }}
            icon={<FontAwesomeIcon icon={faReact} />}
          >
            <h3 className="vertical-timeline-element-title">
              Junior Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle"> Re:Coded</h4>
            <h6>Istanbul, TR</h6>
            <p>Web Development Bootcamp</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work resumeCard"
            contentStyle={{ background: "fff", color: "#1f2421" }}
            contentArrowStyle={{ borderRight: "7px solid  fff" }}
            date="2019 - 2020"
            iconStyle={{
              background: "#6c9a8b",
              color: "#fff",
              paddingLeft: "10px",
            }}
            icon={<FontAwesomeIcon icon={faBookmark} />}
          >
            <h3 className="vertical-timeline-element-title">Student</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bilgi University
            </h4>
            <h6>Istanbul, TR</h6>
            <p>MA International Relations</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work resumeCard"
            contentStyle={{ background: "fff", color: "#1f2421" }}
            contentArrowStyle={{ borderRight: "7px solid  fff" }}
            date="September 2019 - August 2020"
            iconStyle={{
              background: "#6c9a8b",
              color: "#fff",
              paddingLeft: "5px",
            }}
            icon={<FontAwesomeIcon icon={faFolder} />}
          >
            <h3 className="vertical-timeline-element-title">HR Coordinator</h3>
            <h4 className="vertical-timeline-element-subtitle"> Istanbul&I</h4>
            <h6>Istanbul, TR</h6>
            <p>
              Volunteer work in non-profit organization Istanbul&I as HR
              Coordinator
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work resumeCard"
            contentStyle={{ background: "fff", color: "#1f2421" }}
            contentArrowStyle={{ borderRight: "7px solid  fff" }}
            date="July - August 2018"
            iconStyle={{
              background: "#6c9a8b",
              color: "#fff",
              paddingLeft: "10px",
            }}
            icon={<FontAwesomeIcon icon={faBookmark} />}
          >
            <h3 className="vertical-timeline-element-title">Student</h3>
            <h4 className="vertical-timeline-element-subtitle">
              LSE Summer school
            </h4>
            <h6>London, UK</h6>
            <p>Business Strategy in International Markets</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work resumeCard"
            contentStyle={{ background: "fff", color: "#1f2421" }}
            contentArrowStyle={{ borderRight: "7px solid  fff" }}
            date="2016-2018"
            iconStyle={{
              background: "#6c9a8b",
              color: "#fff",
              paddingLeft: "10px",
            }}
            icon={<FontAwesomeIcon icon={faBookmark} />}
          >
            <h3 className="vertical-timeline-element-title">Student</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Yeditepe University
            </h4>
            <h6>Istanbul, TR</h6>
            <p>BA Business Administration </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work resumeCard"
            contentStyle={{ background: "fff", color: "#1f2421" }}
            contentArrowStyle={{ borderRight: "7px solid  fff" }}
            date="June - August 2017"
            iconStyle={{
              background: "#6c9a8b",
              color: "#fff",
              paddingLeft: "5px",
            }}
            icon={<FontAwesomeIcon icon={faFolder} />}
          >
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Merkur Group Company
            </h4>
            <h6>Istanbul, TR</h6>
            <p>
              Sabiha Gokcen Airport’s branch. Summer Intern in Operations
              Department{" "}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work resumeCard"
            contentStyle={{ background: "fff", color: "#1f2421" }}
            contentArrowStyle={{ borderRight: "7px solid  fff" }}
            date="June - August 2016"
            iconStyle={{
              background: "#6c9a8b",
              color: "#fff",
              paddingLeft: "5px",
            }}
            icon={<FontAwesomeIcon icon={faFolder} />}
          >
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Ibrakom</h4>
            <h6>Ashgabat, Turkmenistan</h6>
            <p>Summer Intern in Operations Department </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work resumeCard"
            contentStyle={{ background: "fff", color: "#1f2421" }}
            contentArrowStyle={{ borderRight: "7px solid  fff" }}
            date="2014-2018"
            iconStyle={{
              background: "#6c9a8b",
              color: "#fff",
              paddingLeft: "10px",
            }}
            icon={<FontAwesomeIcon icon={faBookmark} />}
          >
            <h3 className="vertical-timeline-element-title">Student</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Yeditepe University
            </h4>
            <h6>Istanbul, TR</h6>
            <p>BA International Logististics and Transportation</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default ResumePage;
