// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToPath } from './sections';

const links = [
  { to: '/', label: 'Home' },
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact Me' },
];

// Desktop link: animated underline (slides in on hover, stays on the active page)
const desktopLinkClass = ({ isActive }) =>
  `relative px-4 py-2 text-[15px] font-semibold no-underline transition-colors duration-300
  after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px]
  after:origin-left after:rounded-full after:bg-[#001f3f] after:transition-transform after:duration-300
  ${
    isActive
      ? 'text-[#001f3f] after:scale-x-100'
      : 'text-slate-600 hover:text-[#001f3f] after:scale-x-0 hover:after:scale-x-100'
  }`;

// Mobile link: full-width row, highlighted when active
const mobileLinkClass = ({ isActive }) =>
  `block rounded-lg px-3 py-3 font-semibold no-underline transition-colors duration-300 ${
    isActive ? 'bg-sky-100 text-[#001f3f]' : 'text-slate-700 hover:bg-sky-50'
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Clicking the link of the section you're already on should still scroll to its top
  const handleClick = (to) => (e) => {
    if (pathname === to) {
      e.preventDefault();
      scrollToPath(to);
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-0 border-b border-solid border-sky-100 bg-[rgb(237,249,254)]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <Link to="/" className="shrink-0" onClick={handleClick('/')}>
          <img src="/images/sign.jpg" alt="Ujwal Devgade" className="block h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={desktopLinkClass}
              onClick={handleClick(link.to)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-solid border-sky-200 bg-white text-lg text-[#001f3f] md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <div className="border-0 border-t border-solid border-sky-100 bg-white px-5 py-3 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={mobileLinkClass}
              onClick={handleClick(link.to)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;