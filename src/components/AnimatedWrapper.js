// src/components/AnimatedWrapper.js
import React, { useEffect, useState } from 'react';
import './AnimatedWrapper.css';

const AnimatedWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <div className={`animated-container ${isVisible ? 'fade-in' : ''} move-in`}>{children}</div>;
};

export default AnimatedWrapper;
