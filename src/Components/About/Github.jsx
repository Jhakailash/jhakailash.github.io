// import React from "react";

// export const Github = () => {
//   const colourTheme = {
//     background: "transparent",
//     text: "#ffffff",
//     grade4: "#8400b8",
//     grade3: "#b22ff4",
//     grade2: "#b265f6",
//     grade1: "#c084f5",
//     grade0: "#ecd9fc"
//   };
//   // const [{ themename }] = React.useContext(ThemeContext);

//   return (
//     <>
//       <div className={"section " + colourTheme} data-aos="fade-right">
//         <h2 className="section__title different">
//           Days I <span className="different"> Code</span>
//         </h2>
//         {/* <GitHubCalendar */}
//         // username="AWMprabhat"
//         // blockSize={15}
//         // blockMargin={5}
//         // color="#c084f5"
//         // fontSize={16}
    
//       {/* /> */}
      
//       </div>
//     </>
//   );
// };


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
          Days I  <span className="different">Code</span>
        </h2>
      {/* <h2 className="section__title different">Days I Code</h2> */}
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

