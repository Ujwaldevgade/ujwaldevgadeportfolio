// src/components/Certifications.js
import React, { useState } from 'react';
import './Certifications.css'; // Import the CSS file

const certificationsData = [
  {
    name: 'PHN Technology',
    googleDriveLink: 'https://drive.google.com/file/d/1iGZrQr11zzmKHrDhMMUHOZzk9Jsopl1H/view?usp=sharing',
    details: 'Details about Certification 1.',
  },
  {
    name: 'Udemy',
    googleDriveLink: 'https://drive.google.com/file/d/1lA05Qc9LlzGZ4UUhBo2W39mH8MXLdBLi/view?usp=sharing',
    details: 'Details about Certification 2.',
  },
  {
    name: 'DevTown',
    googleDriveLink: 'https://drive.google.com/file/d/1wEPuC0VHGAgFGcFIBXdqVdNAS6Hz-NxE/view?usp=sharing',
    details: 'Details about Certification 3.',
  },
  // Add more certifications as needed
];

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const handleCertificationClick = (index) => {
    const certification = certificationsData[index];
    window.open(certification.googleDriveLink, '_blank');
  };

  return (
    <div className="certifications-container">
      <h1>Certifications</h1>
      <div className="certification-list">
        {certificationsData.map((certification, index) => (
          <div
            className={`certification-item ${selectedCertification === index ? 'selected' : ''}`}
            key={index}
            onClick={() => handleCertificationClick(index)}
          >
            <h2>{certification.name}</h2>
          </div>
        ))}
      </div>
      {selectedCertification !== null && (
        <div className="certification-details">
          <p>{certificationsData[selectedCertification].details}</p>
        </div>
      )}
    </div>
  );
};

export default Certifications;
