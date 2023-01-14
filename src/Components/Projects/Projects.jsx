import React from "react";
import "./Projects.css";
import { DiCss3 } from "react-icons/di";
import { FaReact} from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiChakraui,
} from "react-icons/si";



export const Projects = () => {
  return (
    <>
      <div className="section">

      <br />
      <br />
      <br />
      <br />
      
        <h2 className="section__title different">Projects 📄</h2>
        <p className="section__title different">recently worked on:-</p>
        <div className="allProjects">

{/* 1st */}

<div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="http://markjames.ca/wp-content/uploads/2021/09/Nord_MensYC_TrendReport_DesktopMock-1280x720.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Nord Strom Clone </h2>
                <p>"Nord Strom" is an online shopping website, which mainly focused on shoes, accessories handbags, home accents, and other accessories for women, men, young adults, and children.</p>

                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript/>
                  <FaReact/>
                  <SiChakraui/>
                </div>

                <div>
                  <a
                    href="https://nordstrom-one.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Jhakailash/defiant-existence-329"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* 2nd */}


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://static1.squarespace.com/static/55f22835e4b0d22b9060e802/55f228cae4b0def78c695cf4/55f228dce4b0def78c69f44e/1249054720987/1000w/bobbi_brown_new_website.jpg"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Bobbi Brown Clone</h2>
                <p>"Bobbi Brown" is an online cosmetic shopping website, which mainly focused on "Lips, Eyes and Face" related products for girls.</p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript/>
                  
                </div>
                <div>
                  <a
                    href="https://lucid-kilby-2ad2ec.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Jhakailash/Bobbi_Brown_Cosmetics?organization=Jhakailash&organization=Jhakailash"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* 3rd */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://files.1solutions.biz/wp-content/uploads/2021/04/22190320/SportsJam.webp"
                    alt="kfc-india-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Sportsjam Clone</h2>
                <p>"Sportsjam" is a company that develops an online Sports Goods shop. It showcases numerous products like sports, fitness, and leisure sports equipment, shoes, clothing, accessories, fan gear, etc.</p>
                <div>
                  <SiHtml5/>
                  <DiCss3/>
                  <SiJavascript/>
                  
                </div>
                <div>
                  <a
                    href="https://bespoke-daifuku-c2e116.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Jhakailash/sportsjam_clone?organization=Jhakailash&organization=Jhakailash"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
