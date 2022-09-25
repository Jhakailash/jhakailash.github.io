import React from "react";
import "./Timeline.css";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import { ThemeContext } from "../../Context/theme";








export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);



  return (
    <>
      <div className="section mainsection">

        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 🕙</span>
        </h2>

        <VerticalTimeline lineColor={linecolor}>
          
          <VerticalTimelineElement
            date={"Jan 2021 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              borderRadius:"15px",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School (Remote)
            </h4>
            <p data-aos="fade-right">
              Joined the Military coding school to learn Full Stack Development
              and DSA. Also get to learn lot more other skills as well.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2017 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              borderRadius:"15px",
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Work Experience
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              I Joined crpf in march 2017
            </h4>
            <p data-aos="fade-right">
              My force no was -175311918, 
              and I resigned in January 2018 for some reasons but I learned 
              their time management, patience, and maintaining discipline.
               I have a total of one year of training experience in crpf. 
               I completed my training in Chennai Avadi. I am also good 
               at physical activities.
            </p>
          </VerticalTimelineElement>
          
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"April 2015"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              borderRadius:"15px",
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [B.com ("Account")]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Vinoba Bhave University, Hazaribagh (Jharkhand)
            </h4>
            <p data-aos="fade-right">
              Studied B.com "Account" and Passed with 62 Percentage.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};
