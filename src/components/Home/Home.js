import React, {useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import About from "../About/About";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact";
// import { Link } from "react-scroll";



function Home() {
  const bottomRef = useRef(null);
  const setscrool = ()=>{
    console.log(bottomRef.current)
  }
  return (
    <section>

      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KAILASH JHA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "430px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
      <About  />
      <Projects />
      <Contact />
    </section>
  );
}

export default Home;



