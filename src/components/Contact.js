// src/components/Contact.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import './Contact.css'; // Import the CSS file for styling
import AnimatedWrapper from './AnimatedWrapper';

const Contact = () => {
  return (
    <AnimatedWrapper>
    <div className="contact-container">
      <div className="top-section">
        <div className="right">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me on any of the social media platforms mentioned below. I'm always open to collaboration, engaging in discussions, and exploring new opportunities. Let's work together to create something amazing and make a positive impact! Whether you have a project in mind, want to discuss the latest trends in technology, or explore potential collaborations, I'm excited to connect and contribute to innovative and meaningful ventures.</p>
          {/* Add your social media links with icons */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ujwal-devgade-6a935b242" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} color="#2867B2" />
            </a>
            <a href="https://github.com/Ujwaldevgade" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} color="#211F1F" />
            </a>
            <a href="mailto:ujwaldevgade@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={40} color="#D44638" />
            </a>
            <a href="https://twitter.com/Ujwaldevgade" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={40} color="#1DA1F2" />
            </a>
          </div>
        </div>
        <div className="profile-container">
         <img src="/images/self2.jpg" alt="Your Name" className="profile-image" />
         </div>
      </div>
      <div className="bottom-section">
        <a href="https://drive.google.com/file/d/1YfEtU-WSzpWJhytqg31xWWQthf-RgubN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-button">
          Click to See My Resume
        </a>
        <img src="/images/resume.jpg" alt="Another Image" className="bottom-image" />
        
        {/* New section for business inquiries */}
        <div className="contact-me-section">
          <h2>Contact Me for Business Inquiries</h2>
          <p>You can email me for any business requirements and queries. I'm eager to discuss potential collaborations and contribute to your projects.</p>
          <a href="mailto:ujwaldevgade@gmail.com" className="email-button">
            Click to Email Me
          </a>
        </div>
      </div>
    </div>
    </AnimatedWrapper>
  );
};

export default Contact;
