import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import {BsFillTelephoneFill,BsTwitter } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";
import { FaLinkedin } from "react-icons/fa";




export const Contact = () => {

  const [{ themename }] = React.useContext(ThemeContext);

  

  return (
    <>
      <div className="section">

        <br />
        <br />
        <br />
        <br />
        
        <h2 className="section__title" data-aos="fade-left">
          <span className="different">CONTACT 📱</span>
        </h2>
        
        <div className="contactMain" data-aos="fade-right">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/kailash-jha-ba4325214"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/Jhakailash"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:kailashjhaji7@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a
              href="https://twitter.com/Kailash66380956"
              target="_blank"
              rel="noreferrer"
            >
              < BsTwitter className="github" />
            </a>
           

            <a href="tel:+91 8210810223" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>

          <br />
          
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p style={{fontSize:"18px"}}>kailashjhaji7@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p style={{fontSize:"18px"}}>+91 8210810223</p>
              </span>
            </div>
          </div>
        </div>


          {/* twilio se vi ho jayega send mail*/}

        <div className="emailsender">
          <h3>Send me an email</h3>
          <form action="https://formspree.io/f/xyyagpge" method="POST" className="contact-inputs" data-aos="fade-right">
            
            <input className="input1" type="text" placeholder="username" name="username" autoComplete="off"  required />
            <input className="input2" type="email" placeholder="Enter Email" name="email" autoComplete="off"  required/>
            <textarea className="input3" name="message" cols="30" rows="10" required autoComplete="off" placeholder="Enter Your Message Here"></textarea>
            
            <button className="input4" type="submit" value="Send" >Send Email</button>
          </form>
        </div>


      </div>
    </>
  );
};
