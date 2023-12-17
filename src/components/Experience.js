// src/components/Experience.js
import React, { useState } from 'react';
import './Experience.css'; // Import the CSS file
import AnimatedWrapper from './AnimatedWrapper';

const Experience = () => {
  const [showInternshipDetails, setShowInternshipDetails] = useState(false);

  const handleInternshipClick = () => {
    setShowInternshipDetails(!showInternshipDetails);
  };

  return (
    <AnimatedWrapper>
    <div className="experience-container">
      <div className="experience-header">
        <div className="image-container">
          <img src="/images/mirror.jpg" alt="Internship" className="experience-image" />
        </div>
        <div className="experience-title">
          <h1>Experience</h1>
          <p>I bring hands-on experience in React.js, HTML, CSS and JavaScript, gained through my involvement in a variety of web development projects. As a Full Stack Developer and Designer, I've contributed to startups and established companies, refining my skills and problem-solving approach in web development.<br/>
          <br/>
          During my role as a web developer at PHN Technology, I actively contributed to web application development. Working with a skilled team, we implemented robust features, enhancing my expertise in React.js, HTML, CSS, and web development projects.</p>
        </div>
      </div>

      <div className="internship-container" onClick={handleInternshipClick}>
        <h3>Internship</h3>
        {showInternshipDetails && (
          <div className="internship-details">
            <p>
              <strong>Web Developer</strong><br/>  
              PHN Technology Pvt. Ltd., Pune
              <br/>
              April 2023 - June 2023
            </p>
          </div>
        )}
      </div>
    </div>
    </AnimatedWrapper>
  );
};

export default Experience;
