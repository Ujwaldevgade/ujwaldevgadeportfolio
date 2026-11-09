// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// import Navbar from './components/Navbar';
// import Portfolio from './components/Portfolio';

// const footerLinks = [
//   { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ujwal-devgade-6a935b242' },
//   { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/Ujwaldevgade' },
//   { icon: <FaEnvelope />, label: 'Email', href: 'mailto:ujwaldevgade@gmail.com' },
// ];

// function App() {
//   return (
//     <Router>
//       <div className="flex min-h-screen flex-col">
//         <Navbar />
//         <main className="grow min-w-0 overflow-x-clip px-4 py-5 sm:px-5">
//           <Routes>
//             {/* Every URL shows the same one-page portfolio; the URL decides which section it scrolls to */}
//             <Route path="*" element={<Portfolio />} />
//           </Routes>
//         </main>
//         <footer className="mt-10 border-0 border-t border-solid border-sky-100 bg-white/60">
//           <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-slate-600 sm:flex-row sm:gap-4 sm:px-5 sm:text-left">
//             <p className="m-0">&copy; {new Date().getFullYear()} Ujwal Devgade. All rights reserved.</p>
//             <div className="flex items-center gap-5 text-lg">
//               {footerLinks.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={item.label}
//                   className="text-slate-500 no-underline transition-colors duration-300 hover:text-[#001f3f]"
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import BackToTop from './components/Backtotop';

const footerLinks = [
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ujwal-devgade-6a935b242' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/Ujwaldevgade' },
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:ujwaldevgade@gmail.com' },
];

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="grow min-w-0 overflow-x-clip px-4 py-5 sm:px-5">
          <Routes>
            {/* Every URL shows the same one-page portfolio; the URL decides which section it scrolls to */}
            <Route path="*" element={<Portfolio />} />
          </Routes>
        </main>
        <footer className="mt-10 border-0 border-t border-solid border-sky-100 bg-white/60">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-slate-600 sm:flex-row sm:gap-4 sm:px-5 sm:text-left">
            <p className="m-0">&copy; {new Date().getFullYear()} Ujwal Devgade. All rights reserved.</p>
            <div className="flex items-center gap-5 text-lg">
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-slate-500 no-underline transition-colors duration-300 hover:text-[#001f3f]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;