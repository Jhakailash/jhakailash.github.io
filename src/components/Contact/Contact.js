import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contactme from "../../Assets/contact_me.svg";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



function Contact() {
  return (
    <section>
      <br />
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Particle />
        <Row>
          
          <Col md={12} className="home-about-social">
          <h1 style={{color:"blue", fontWeight:"700",textDecoration: "underline"}}>Contact me</h1>
          <br />
          <br />
          
            <h1>FIND ME ON</h1>
            <p>
              My<span className="purple"> contacts </span>
            </p>
            <p>
              Mobile no. <span className="purple">  +91 8210810223</span>
            </p>
            <p>
              Email id. <span className="purple"> kailashjhaji7@gmail.com</span>
            </p>
            <br />
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Jhakailash"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://twitter.com/Kailash66380956"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kailash-jha-ba4325214"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <Col md={5} style={{ paddingBottom: "50px", marginTop:"-300px" }}>
              <img
                src={Contactme}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "220px" }}
              />
            </Col>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

          </Col>
        </Row>
      </Container>
    </Container>
 
    </section>
  );
}



export default Contact;



