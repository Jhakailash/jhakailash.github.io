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
            date={"Dec 2021 - Present"}
            contentStyle={{
              // boxShadow: `var(--shadow)`,
              // border: "3px solid var(--clr-primary)",
              borderRadius:"80px",
              // backgroundColor: `var(--clr-bg)`,
              backgroundColor: "white",
              color: "black",
  
              textAlign: "center",
              // color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "18px solid  var(--clr-primary)",
              backgroundColor: "white",
              
            }}
            iconStyle={{
              
              // border: ` 3px solid var(--clr-primary)`,
              // backgroundColor: `var(--clr-bg)`,
              backgroundColor: "white",
              color: "rgb(40, 162, 40)",
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
              Masai School (Bengaluru)
            </h4>
            <p data-aos="fade-right" className="timeline">
                Joined the Military coding school to learn Full Stack Development
                and DSA. Also, get to learn lots of other skills as well soft skills.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2017 - March 2018"}
            contentStyle={{
              // boxShadow: `var(--shadow)`,
              borderRadius:"80px",
              // border: "3px solid var(--clr-primary)",
              // backgroundColor: `var(--clr-bg)`,
              backgroundColor: "white",
              color: "black",
              textAlign: "center",
              // color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "18px solid  var(--clr-primary)",
              backgroundColor: "white",
            }}
            iconStyle={{
              // border: ` 3px solid var(--clr-primary)`,
              // backgroundColor: `var(--clr-bg)`,
              // color: `var(--clr-primary)`,
              backgroundColor: "white",
              color: "rgb(40, 162, 40)",
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
              CRPF Soldier GD (SILIGURI)
            </h4>
            <p data-aos="fade-right" className="timeline">
                      
                      
                      Role :
                      <ul>
                        <li>Constable/general duties</li>
                        <li>Attended training and did night duty</li>
                      </ul>
                     
            </p>
          </VerticalTimelineElement>
          
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Apr 2012 - Apr 2015"}
            contentStyle={{
              // boxShadow: `var(--shadow)`,
              borderRadius:"80px",
              // border: "3px solid var(--clr-primary)",
              // backgroundColor: `var(--clr-bg)`,
              backgroundColor: "white",
              color: "black",
              textAlign: "center",
              // color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "18px solid  var(--clr-primary)",
              backgroundColor: "white",
            }}
            iconStyle={{
              // border: ` 3px solid var(--clr-primary)`,
              // backgroundColor: `var(--clr-bg)`,
              // color: `var(--clr-primary)`,
              backgroundColor: "white",
              color: "rgb(40, 162, 40)",
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student (B.com)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Vinoba Bhave University (Hazaribagh) 
            </h4>
            <p data-aos="fade-right" className="timeline">
              Studied B.com "Account" and Passed with 62 Percentage.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};
