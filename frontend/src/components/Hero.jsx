import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          S&SMK Multispecialty Hospital is a trusted hub of excellence, 
          offering advanced medical care across diverse specialties.
           With state-of-the-art facilities, compassionate professionals, 
           and patient-centric services, we ensure holistic healing, prioritizing health,
            comfort, and recovery for every individual.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
