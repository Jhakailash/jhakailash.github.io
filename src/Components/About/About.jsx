import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";






export const About = () => {
  return (
    <>
      <div className="about center">

        <h1 data-aos="fade-right" className="mobileHead">

        <br />
        <br />
        <br />
        
          Hello, I am <span className="about__name">Kailash Jha</span>
        </h1>

        <Type />

        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer and learning in Masai School. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>

        <div className="about__contact center">

          <a
            href="https://github.com/Jhakailash"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
         
          <a
            href="https://www.linkedin.com/in/kailash-jha-ba4325214"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          
          <a
            href="https://twitter.com/Kailash66380956"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1BsG9ZxBvAco-8TkAEnkHF2JtFLI7SNT_/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
