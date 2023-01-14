import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";






export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className={"section " + themename}>
     
        <hr className="hrfooter"/>
          <div className="footer">
            <div>👨‍💻 Made by Kailash Jha</div>
            <div style={{color:"#872894"}}>Thank your for visiting!</div>
            <div>© 2022 copyright all right reserved</div>
          </div>
        
      

        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">          
          </div>

        </a>
      </div>
    </>
  );
};
