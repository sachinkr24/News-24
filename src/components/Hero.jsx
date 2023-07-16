import React from "react";
import YouTube from "react-youtube";
import "./Hero.css"; // Import the CSS file for Hero component

const Hero = () => {
  const videoId = "-waQcKRu6Eo";

  return (
    <div className="banner">
      <div className="banner-video">
        <YouTube videoId={videoId} className="video" opts={{ playerVars: { autoplay: 1, loop: 1, mute: 1 } }} />
      </div>
      
      <div className="banner-content">
        
        <h1 className="banner-title" style={{marginTop:"410px",color:" red"}}>News 24</h1>
        <p className="banner-subtitle" style={{color:"red", marginTop: "-10px"}}>Explore The World<br/> <p style={{color:"red", marginTop: "-20px"}}>_______________________</p></p>
      </div>
    </div>
  );
};

export default Hero;
