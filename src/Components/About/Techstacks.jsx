import React from "react";
import "./Techstacks.css";
import { FaReact } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { DiCss3, DiVisualstudio, DiNodejs } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import {
  SiRedux,
  SiHtml5,
  SiTypescript,
  SiChakraui,
  SiPostman,
  
} from "react-icons/si";





export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
      
        <br />
        <br />
        <br />
        <br />
                          
        <h2 className="section__title different">Skills 📜</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>

          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>

          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>

          <div>
            <FaReact />
            <h5>React</h5>
          </div>

          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>

          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>

          <div>
            <GiSettingsKnobs />
            <h5>DSA</h5>
          </div>

          <div>
            <DiNodejs />
            <h5>Nodejs</h5>
          </div>

          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>

          <div>
            <SiChakraui />
            <h5>Chakra UI</h5>
          </div>

          <div>
            <DiVisualstudio />
            <h5>Visualstudio</h5>
          </div>

          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
  
};
