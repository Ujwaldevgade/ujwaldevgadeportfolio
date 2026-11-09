// src/components/Portfolio.js
import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import { sections, scrollToPath } from './sections';

const content = {
  home: <Home />,
  education: <Education />,
  experience: <Experience />,
  projects: <Projects />,
  contact: <Contact />,
};

const Portfolio = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const pathRef = useRef(pathname);
  const locked = useRef(false); // true while we are scrolling because of a click / URL change
  const lockTimer = useRef(null);
  const skipScrollFor = useRef(null); // URL change that came from scrolling, so don't scroll again
  const firstRender = useRef(true);

  pathRef.current = pathname;

  const lock = () => {
    locked.current = true;
    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      locked.current = false;
    }, 150);
  };

  // URL changed (nav click, direct visit, back/forward) -> scroll to that section
  useEffect(() => {
    if (skipScrollFor.current === pathname) {
      skipScrollFor.current = null;
      return;
    }
    lock();
    if (firstRender.current) {
      firstRender.current = false;
      if (pathname === '/') return;
      scrollToPath(pathname, 'auto');
      // images above the section can shift the layout, so align once more after load
      const realign = () => scrollToPath(pathRef.current, 'auto');
      if (document.readyState === 'complete') {
        setTimeout(realign, 300);
      } else {
        window.addEventListener('load', realign, { once: true });
      }
      return;
    }
    scrollToPath(pathname, 'smooth');
  }, [pathname]);

  // keep the lock alive while the smooth scroll is still running
  useEffect(() => {
    const onScroll = () => {
      if (locked.current) lock();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(lockTimer.current);
    };
  }, []);

  // user scrolls -> update the URL to the section in view
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (locked.current) return;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const section = sections.find((s) => s.id === entry.target.id);
          if (section && section.path !== pathRef.current) {
            skipScrollFor.current = section.path;
            navigate(section.path, { replace: true });
          }
        });
      },
      // thin band across the middle of the screen
      { rootMargin: '-45% 0px -54% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [navigate]);

  return (
    <>
      {sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={
            s.id === 'home'
              ? ''
              : 'mt-12 scroll-mt-16 border-0 border-t border-solid border-sky-200 pt-12'
          }
        >
          {content[s.id]}
        </section>
      ))}
    </>
  );
};

export default Portfolio;