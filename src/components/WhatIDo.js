
import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiVisualstudio,
  DiBootstrap,
  DiNodejsSmall,
  DiMongodb,
} from 'react-icons/di';
import { FaGithub, FaCheckCircle } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiSupabase,
  SiExpress,
} from 'react-icons/si';

const technologies = [
  { name: 'React.js', icon: <DiReact size={26} color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={22} color="#000000" /> },
  { name: 'TypeScript', icon: <SiTypescript size={22} color="#3178C6" /> },
  { name: 'JavaScript', icon: <DiJavascript1 size={26} color="#F0DB4F" /> },
  { name: 'HTML5', icon: <DiHtml5 size={26} color="#E44D26" /> },
  { name: 'CSS3', icon: <DiCss3 size={26} color="#1572B6" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={22} color="#06B6D4" /> },
  { name: 'Bootstrap', icon: <DiBootstrap size={26} color="#563D7C" /> },
  { name: 'Redux Toolkit', icon: <SiRedux size={22} color="#764ABC" /> },
  { name: 'Node.js', icon: <DiNodejsSmall size={26} color="#8CC84B" /> },
  { name: 'Express.js', icon: <SiExpress size={22} color="#000000" /> },
  { name: 'MongoDB', icon: <DiMongodb size={26} color="#47A248" /> },
  { name: 'Supabase', icon: <SiSupabase size={22} color="#3ECF8E" /> },
  { name: 'GitHub', icon: <FaGithub size={22} color="#211F1F" /> },
  { name: 'VS Code', icon: <DiVisualstudio size={26} color="#007ACC" /> },
];

const specialities = [
  'Full Stack Web Application Development',
  'Frontend Development with React.js and Next.js',
  'Responsive UI Development and State Management',
  'REST API Development and Backend Integration',
  'Database Management and Authentication',
];

const WhatIDo = () => {
  return (
    <section className="mt-5 grid items-center gap-8 sm:mt-16 sm:gap-10 md:grid-cols-2">

      <div className="flex justify-center">
        <img
          src="/images/image2.jpg"
          alt="What I do"
          className="block h-auto w-full scale-110"
        />
      </div>

      <div className="min-w-0">
        <h2 className="m-0 text-3xl font-bold text-slate-900">
          What I Do ?
        </h2>

        <div className="mt-2 h-1 w-12 rounded-full bg-[#001f3f]" />

        <h3 className="m-0 mt-6 text-lg font-semibold text-slate-800">
          Technologies &amp; Tools
        </h3>

        <div className="mt-3 grid grid-cols-3 gap-2.5 sm:flex sm:flex-wrap">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex min-w-0 items-center justify-center gap-1 rounded-xl border border-solid border-sky-200 bg-white px-1 py-2 text-center text-xs font-medium leading-tight text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md sm:gap-2 sm:px-3 sm:text-sm"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>

        <h3 className="m-0 mt-8 text-lg font-semibold text-slate-800">
          I specialize in
        </h3>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {specialities.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-solid border-sky-200 bg-white p-3 shadow-sm sm:p-4"
            >
              <FaCheckCircle className="mt-0.5 shrink-0 text-sky-600" />
              <span className="text-sm font-medium text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
