import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/my_image.png";




export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);


  return (
    <>
      <section id="#about">

        <div className="section" data-aos="fade-right">

        <br />
        <br />
        <br />
        <br />
                
          <h2 className="section__title">

            About <span className="different">Me</span>
            
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Kailash Jha </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Kolkata, West Bengal (India)
                </span>
                . I have completed my graduation in B.com ("Acc")
                from{" "}
                <span className="different">
                Vinoba Bhave University (Hazaribagh, Jharkhand)

                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
              <br />
              <br />
              <h4>Apart from coding, some other activities that I love to do!</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Athletics Sports {" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Chess{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Songs{" "}
              </h4>
              
             
                   <br/> <br/>
              <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
