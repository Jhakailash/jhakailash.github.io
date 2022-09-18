import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (

    <Container fluid className="project-section">
      <h1 style={{color:"blue", fontWeight:"700",textDecoration: "underline"}}>Projects</h1>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bobbi Brown"
              description="Bobbi Brown Cosmetic Collection for Flawless Skin Now At Sephora India.., i use html ,css ,local storage ,dom to make this site."
              ghLink="https://github.com/Rounak-09/Bobbi_Brown_Cosmetics"
              demoLink="https://lucid-kilby-2ad2ec.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sports Jam"
              description="Buy Sports Goods Online India at best prices at Sportsjam.in India's leading Online Sports & Fitness Equipment Store.... i use html ,css ,local storage ,dom  to make this site "
              ghLink="https://github.com/CodeinIP/U3_sportsman_clone/tree/homePage"
              demoLink="https://bespoke-daifuku-c2e116.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nord Strom"
              description="We're a fashion specialty retailer pinning women's fashion & men's style. See our favorite dresses, handbags, shoes, cosmetics, jewelry, home decor & more..., i use react js ,chakra ui ,css ,json server to make this site"
              ghLink="https://github.com/Jhakailash/defiant-existence-329/tree/main/nordstrom"
              demoLink="https://nordstrom-one.vercel.app/"              
            />
          </Col>          
        </Row>
      </Container>
    </Container>
    
  );
}

export default Projects;
