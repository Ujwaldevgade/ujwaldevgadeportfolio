// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import WhatIDo from './WhatIDo';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`home-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="intro-big-image-container move-animation">
        {/* Intro Section */}
        <div className="intro-container">
          {/* Increased font size for the name */}
          <h1 className="name-title">Ujwal Devgade</h1>
          {/* Web Developer title under the name */}
          <h3 className="web-developer-title">(Web Developer)</h3>
          <p>Hi, Welcome to my portfolio! I'm a Web Developer passionate about crafting seamless online experiences. Proficient in React.js and Node.js, I thrive on turning innovative ideas into reality. Eager to embrace new challenges and committed to lifelong learning, I bring a dynamic approach to every project. Let's build something amazing together!</p>

          {/* Add your social media links with icons */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ujwal-devgade-6a935b242" target="_blank" rel="noopener noreferrer" title="Linkedin">
              <FaLinkedin size={40} color="#2867B2" />
            </a>
            <a href="https://github.com/Ujwaldevgade" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub size={40} color="#211F1F" />
            </a>
            <a href="mailto:ujwaldevgade@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              <FaEnvelope size={40} color="#D44638" />
            </a>
            <a href="https://x.com/Ujwaldevgade?t=BtHWUtWj1ZYPpVFUjf89fw&s=09" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaTwitter size={40} color="#1DA1F2" />
            </a>
          </div>
          
          {/* GitHub Star button */}
          <a href="https://github.com/Ujwaldevgade" target="_blank" rel="noopener noreferrer" className="star-button">
            <span className="star-symbol">&#9733;</span> Star Me On Github
          </a>
        </div>

        {/* Big Image Section */}
        <div className="big-image-container">
          <img src="/images/image1.jpg" alt="Big Image" />
        </div>
      </div>

      {/* What I Do Section */}
      <WhatIDo />
    </div>
  );
};

export default Home;
