// src/components/Education.js
import React, { useState } from 'react';
import './Education.css'; // Import the CSS file
import Certifications from './Certifications';
import AnimatedWrapper from './AnimatedWrapper';

const Education = () => {
  const [selectedDegree, setSelectedDegree] = useState(null);

  const educationDetails = [
    {
      degree: 'MCA',
      fullForm: 'Master of Computer Applications',
      university: 'Sinhgad Institute of Management, Pune',
      duration: 'December 2021 – September 2023',
      percentage: 'Percentage: 70.11',
    },
    {
      degree: 'BCA',
      fullForm: 'Bachelor of Computer Applications',
      university: 'Vidya Bhavan College of Management, Yavatmal',
      duration: 'June 2018 – September 2021',
      percentage: 'Percentage: 70.35',
    },
    {
      degree: 'HSC',
      fullForm: '12th',
      university: 'Amolakchand Mahavidyalaya, Yavatmal',
      duration: 'March 2017 – April 2018',
    },
    {
      degree: 'SSC',
      fullForm: '10th',
      university: 'Vivekanand Vidyalaya, Yavatmal',
      duration: 'June 2015 – May 2016',
    },
  ];

  const handleDegreeClick = (index) => {
    setSelectedDegree(selectedDegree === index ? null : index);
  };

  return (
    <AnimatedWrapper>
    <div>
      <div className="education-header">
        <div className="image-container">
          <img src="/images/Education.jpg" alt="Education" className="education-image" />
        </div>
        <div className="experience-title">
          <h1>Education</h1>
          <p>I hold a Master of Computer Applications (MCA) from Sinhgad Institute of Management, Pune, with a noteworthy achievement of 70.11%. Prior to this, I completed a Bachelor of Computer Applications (BCA) from Vidya Bhavan College of Management, Yavatmal, securing a percentage of 70.35%. My educational journey also includes completing 12th (HSC) from Amolakchand Mahavidyalaya, Yavatmal, and 10th (SSC) from Vivekanand Vidyalaya, Yavatmal.<br/>
          <br/>
          Certified by Almabetter, Udemy, PHN Technology, and DevTown Bootcamp, I've solidified my web development skills. These certifications uniquely position me to tackle the challenges of full-stack web development with confidence and expertise.</p>
        </div>
      </div>
      <div className="education-container">
        <h1>Degrees Received</h1>
        {educationDetails.map((item, index) => (
          <div
            className={`education-item ${selectedDegree === index ? 'selected' : ''}`}
            key={index}
            onClick={() => handleDegreeClick(index)}
          >
            <h2>{item.degree}</h2>
            <div className="details">
              <p className="university">{item.university}</p>
              <p className="duration">{item.duration}</p>
              {item.percentage && <p className="percentage">{item.percentage}</p>}
              {selectedDegree === index && (
                <p className="full-form">{item.fullForm}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <Certifications />
    </div>
    </AnimatedWrapper>
  );
};

export default Education;
