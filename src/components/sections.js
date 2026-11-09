// src/components/sections.js
// One place that maps every URL to its section on the page.
export const sections = [
  { id: 'home', path: '/' },
  { id: 'education', path: '/education' },
  { id: 'experience', path: '/experience' },
  { id: 'projects', path: '/projects' },
  { id: 'contact', path: '/contact' },
];

export const idForPath = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const match = sections.find((s) => s.path === clean);
  return match ? match.id : 'home';
};

export const scrollToPath = (pathname, behavior = 'smooth') => {
  const el = document.getElementById(idForPath(pathname));
  if (!el) return;
  if (el.id === 'home') {
    window.scrollTo({ top: 0, behavior });
  } else {
    el.scrollIntoView({ behavior, block: 'start' });
  }
};