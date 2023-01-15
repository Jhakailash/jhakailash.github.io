import React from "react";
import "./Statistics.css";



export const Statistics = () => {
  return (
    <>
    
      <div className="section main">
      
        <br />
        <br />
        <br />
        <br />
                  
        <h2 className="section__title" data-aos="fade-left">
          My <span className="different">Statistics 💻</span>


          <div className="gitStatistics_main" data-aos="fade-right">

          <div className="gitStatistics">      
                  
                  <img className="gitStatistics_img" alt="Jhakailash Top Languages" 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=JhaKailash&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117" />
                  
              </div>      
                  
              <div className="gitStatistics">
                  
                  <img className="gitStatistics_img" title="🔥 Get streak stats for your profile at git.io/streak-stats" 
                  alt="JhaKailash streak" 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=JhaKailash&hide_border=true&theme=react&hide_border=true&bg_color=0D1117"/>
                  
              </div>   

              <div className="gitStatistics">                                                                                                 
                  
                  <img className="gitStatistics_img" alt="JhaKailash Github Stats"
                   src="https://github-readme-stats.vercel.app/api?username=jhakailash&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117"/>
                  
              </div>    

          </div>

                 


        </h2>
        <div className="my_statistics" data-aos="fade-right">
          <div>
            
            <h4 className="statistics_number">1200+</h4>
            <h5>Hours of Coding</h5>
          </div>

          <div>
            
            <h4 className="statistics_number">200+</h4>
            <h5>DSA Problems</h5>
          </div>

          <div>
            
            <h4 className="statistics_number">300+</h4>
            <h5>Git Commits</h5>
          </div>

          <div>
            
            <h4 className="statistics_number">10+</h4>
            <h5>Projects</h5>
          </div>

          <div>
            
            <h4 className="statistics_number">100+</h4>
            <h5>Assignment</h5>
          </div>
          
        </div>
        
      </div>

      
    </>
  );
};
