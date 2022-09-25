import React from "react";
import Typewriter from "typewriter-effect";








export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [

            "Full Stack Web Developer",
             "Open Source Contributor",

            ],

        
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          
          
        }}
      />
    </>
  );
};
