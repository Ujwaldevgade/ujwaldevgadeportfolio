// src/components/AnimatedWrapper.js
import React, { useEffect, useRef, useState } from 'react';

// Fades/slides the section in the first time it scrolls into view
const AnimatedWrapper = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-1000 ease-[ease-in-out] ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[12%] opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;