
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import WhatIDo from './WhatIDo';

const socialLinks = [
  {
    icon: <FaLinkedin size={18} color="#2867B2" />,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ujwal-devgade-6a935b242',
  },
  {
    icon: <FaGithub size={18} color="#211F1F" />,
    name: 'GitHub',
    link: 'https://github.com/Ujwaldevgade',
  },
  {
    icon: <FaEnvelope size={18} color="#D44638" />,
    name: 'Email',
    link: 'mailto:ujwaldevgade@gmail.com',
  },
];

const quickFacts = [
  { value: '2+', label: 'Years of experience' },
  { value: 'React - Next.js', label: 'Core stack' },
  { value: 'Pune, India', label: 'Based in' },
];

const primaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-solid border-[#001f3f] bg-[#001f3f] px-5 py-3 text-sm font-semibold text-white no-underline shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#001f3f] hover:shadow-lg';

const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-solid border-[#001f3f] bg-transparent px-5 py-3 text-sm font-semibold text-[#001f3f] no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-[#001f3f] hover:text-white';

const Home = () => {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <section className="grid animate-move items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">

        <div className="order-2 min-w-0 md:order-1">
          <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
            Welcome to my portfolio
          </span>

          <h1 className="m-0 mt-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Ujwal Devgade
          </h1>

          <h3 className="m-0 mt-2 text-base font-semibold text-slate-900 sm:text-lg md:text-xl">
            Full Stack Developer | React.js &amp; Next.js
          </h3>

          <p className="m-0 mt-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            I'm a Full Stack Developer with 2+ years of experience building
            responsive and scalable web applications using React.js, Next.js,
            TypeScript, Node.js, Express.js, MongoDB and Supabase. I enjoy
            transforming ideas into practical solutions and have built projects
            including an inventory and sales management system and an e-commerce
            platform. I focus on writing clean, maintainable code and creating
            seamless user experiences.
          </p>

          <div className="mt-6 flex flex-row flex-nowrap gap-2 sm:mt-7 sm:gap-3">
  <a
    href="https://drive.google.com/file/d/1zdymQCfpI9hjLIUAjeuC57XhO0Vae0OY/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className={`${primaryButton} min-w-0 flex-1 whitespace-nowrap px-2 text-xs sm:flex-none sm:px-5 sm:text-sm`}
  >
    <FaFileAlt /> View My Resume
  </a>

  <Link
    to="/projects"
    className={`${secondaryButton} min-w-0 flex-1 whitespace-nowrap px-2 text-xs sm:flex-none sm:px-5 sm:text-sm`}
  >
    View Projects <FaArrowRight className="text-xs" />
  </Link>
</div>

          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-solid border-sky-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 no-underline shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md sm:px-4 sm:text-sm"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <img
            src="/images/image1.jpg"
            alt="Developer working at a desk"
            className="block h-auto max-h-[280px] w-full object-contain sm:max-h-none"
          />
        </div>
      </section>

      <section className="mt-10 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
        {quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-xl border border-solid border-sky-200 bg-white px-5 py-4 text-center shadow-sm"
          >
            <p className="m-0 text-base font-bold text-[#001f3f] sm:text-xl">
              {fact.value}
            </p>
            <p className="m-0 mt-1 text-xs text-slate-500 sm:text-sm">
              {fact.label}
            </p>
          </div>
        ))}
      </section>
      <WhatIDo />
    </div>
  );
};

export default Home;
