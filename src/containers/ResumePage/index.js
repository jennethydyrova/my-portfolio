import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faFolder } from "@fortawesome/free-regular-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const ResumePage = () => {
  return (
    <div className="resumePage">
      <VerticalTimeline>
        <h2>My journey</h2>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "fff", color: "#a66851" }}
          contentArrowStyle={{ borderRight: "7px solid  fff" }}
          date="July - November 2020"
          iconStyle={{
            background: "#405952",
            color: "#fff",
            paddingLeft: "5px",
          }}
          icon={<FontAwesomeIcon icon={faReact} />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
          <p>
            <a href="https://www.re-coded.com/" target="_blank">
              Re:Coded{" "}
            </a>
            Web Development Bootcamp
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "fff", color: "#a66851" }}
          contentArrowStyle={{ borderRight: "7px solid  fff" }}
          date="2019 - 2020"
          iconStyle={{
            background: "#405952",
            color: "#fff",
            paddingLeft: "10px",
          }}
          icon={<FontAwesomeIcon icon={faBookmark} />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
          <p>MA International Relations, Bilgi University</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          contentStyle={{ background: "fff", color: "#a66851" }}
          contentArrowStyle={{ borderRight: "7px solid  fff" }}
          date="2014-2018"
          iconStyle={{
            background: "#405952",
            color: "#fff",
            paddingLeft: "5px",
          }}
          icon={<FontAwesomeIcon icon={faFolder} />}
        >
          <h3 className="vertical-timeline-element-title">HR Coordinator</h3>
          <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
          <p>
            Volunteer work in non-profit organization Istanbul&I as HR
            Coordinator
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "fff", color: "#a66851" }}
          contentArrowStyle={{ borderRight: "7px solid  fff" }}
          date="July - August 2018"
          iconStyle={{
            background: "#405952",
            color: "#fff",
            paddingLeft: "10px",
          }}
          icon={<FontAwesomeIcon icon={faBookmark} />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
          <p>Business Strategy in International Markets, LSE Summer school</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          contentStyle={{ background: "fff", color: "#a66851" }}
          contentArrowStyle={{ borderRight: "7px solid  fff" }}
          date="2016-2018"
          iconStyle={{
            background: "#405952",
            color: "#fff",
            paddingLeft: "10px",
          }}
          icon={<FontAwesomeIcon icon={faBookmark} />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
          <p>BA Business Administration, Yeditepe University</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          contentStyle={{ background: "fff", color: "#a66851" }}
          contentArrowStyle={{ borderRight: "7px solid  fff" }}
          date="June - August 2017"
          iconStyle={{
            background: "#405952",
            color: "#fff",
            paddingLeft: "5px",
          }}
          icon={<FontAwesomeIcon icon={faFolder} />}
        >
          <h3 className="vertical-timeline-element-title">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
          <p>
            Merkur Group Company, Sabiha Gokcen Airport’s branch. Summer Intern
            in Operations Department{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          contentStyle={{ background: "fff", color: "#a66851" }}
          contentArrowStyle={{ borderRight: "7px solid  fff" }}
          date="2014-2018"
          iconStyle={{
            background: "#405952",
            color: "#fff",
            paddingLeft: "10px",
          }}
          icon={<FontAwesomeIcon icon={faBookmark} />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">Istanbul, TR</h4>
          <p>
            BA International Logististics and Transportation, Yeditepe
            University
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ResumePage;
