// src/components/WhatIDo.js
import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiVisualstudio, DiBootstrap, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';
import './WhatIDo.css'; // Import the CSS file

const WhatIDo = () => {
  return (
    <div className="what-i-do-container">
      <div className="left-section">
        <img src="/images/image2.jpg" alt="Your Image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      </div>
      <div className="right-section">
        <h1>What I Do?</h1>
        <h2>Technologies & Tools:</h2>
        <div className="tech-icons">
          <DiHtml5 size={56} color="#E44D26" title="HTML5" />
          <DiCss3 size={56} color="#1572B6" title="CSS3" />
          <DiJavascript1 size={56} color="#F0DB4F" title="JavaScript" />
          <DiReact size={56} color="#61DAFB" title="React.js" />
          <DiBootstrap size={56} color="#563D7C" title="Bootstrap" />
          <DiNodejsSmall size={56} color="#8CC84B" title="Node.js" />
          <DiMongodb size={56} color="#47A248" title="MongoDB" />
          <FaGithub size={48} color="#211F1F" title="GitHub" />
          <DiVisualstudio size={56} color="#007ACC" title="VS Code" />
          {/* Add more icons as needed */}
        </div>
        <h2>I specialize in:</h2>
        <ul>
          <li>Full-Stack Web Development</li>
          <li>Frontend Development with React.js</li>
          <li>Backend Development with Node.js</li>
          <li>Building responsive and user-friendly web applications</li>
          {/* Add more items based on what you do */}
        </ul>
      </div>
    </div>
  );
};

export default WhatIDo;
