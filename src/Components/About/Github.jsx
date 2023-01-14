import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";



function Github() {
  return (
    <>
    <Row  style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="section__title" data-aos="fade-right">

        <br />
        <br />
        
          Days I  <span className="different">Code 🖥️</span>
        </h2>
      
      <GitHubCalendar
        username="jhakailash"
        blockSize={15}
        blockMargin={10}
        color="green"
        fontSize={18}
      />
   </Row>

    </>
    
   
  );
}

export default Github;