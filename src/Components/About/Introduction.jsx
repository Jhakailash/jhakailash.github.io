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

        <div className="section" >

        <br />
        <br />
        <br />
        <br />
                
          <h2 className="section__title" data-aos="fade-left">

            About <span className="different">Me 👨‍💻</span>
            
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer" data-aos="fade-right">
              <img src={profilePic} alt="Images" />
            </div>

            <div className="introduction_datacontainer" data-aos="fade-right">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Kailash Jha </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Kolkata, West Bengal (India). 
                </span> A passionate Full stack aspiring Developer,
                My skill in tech stacks like{" "}                  
                <span className="different">
                HTML, CSS, JavaScript, React.js, Redux, Express.js, Node.js, MongoDB.
                </span> I am pursuing "Full Stack Web Development course (full time)" from{" "}                
                <span className="different"> @masai school ,Bangalore.</span> Always looking forward to learning something new to strengthen the skills learned.
              </h4>

              <br />
              <br />

              <h4>Apart from coding, some other activities that I love to do!</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Running {" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Drawing{" "}
              </h4>
              
             
                   <br/> 
                   <br/>
                   
        
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
