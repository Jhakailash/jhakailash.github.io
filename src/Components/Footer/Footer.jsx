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

        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">          
          </div>

        </a>
      </div>
    </>
  );
};
