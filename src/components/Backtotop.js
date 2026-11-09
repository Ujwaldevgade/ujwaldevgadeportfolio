// src/components/BackToTop.js
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

// Round "back to top" button, appears once the visitor has scrolled down a bit
const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-[#001f3f] bg-[#001f3f] text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#001f3f] ${
  show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
}`}
    >
      <FaArrowUp size={26} />
    </button>
  );
};

export default BackToTop;