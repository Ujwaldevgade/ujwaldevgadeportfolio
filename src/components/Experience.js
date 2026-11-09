import React from "react";
import { FaBriefcase, FaRegCalendarAlt, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import AnimatedWrapper from "./AnimatedWrapper";

const experienceDetails = [
  {
    role: "Software Engineer (React Developer)",
    company: "Sagitta Consulting Solutions",
    duration: "November 2024 – Present",
    location: "Pune, Maharashtra",
    type: "Full-time",
    description:
  "Developing modern, responsive web applications using React.js and Next.js, building reusable UI components with Tailwind CSS, and implementing efficient frontend solutions with a focus on performance, usability, and maintainable code.",
  },
  {
    role: "Web Developer",
    company: "PHN Technology Pvt. Ltd., Pune",
    duration: "April 2023 – June 2023",
    location: "Pune, Maharashtra",
    type: "Internship",
    description:
      "Contributed to web application development using React.js, HTML, CSS, and JavaScript. Worked with a skilled team to implement features and improve application functionality.",
  },
];

const SectionTitle = ({ children }) => (
  <div className="mb-6">
    <h2 className="m-0 text-2xl font-bold text-slate-900">{children}</h2>
    <div className="mt-2 h-1 w-12 rounded-full bg-[#001f3f]" />
  </div>
);

const Experience = () => {
  return (
    <AnimatedWrapper>
      <div className="mx-auto max-w-6xl">
        {/* Intro: image + paragraph */}
        <section className="grid items-center gap-8 md:grid-cols-2">
          <img
            src="/images/mirror.jpg"
            alt="Professional Experience"
            className="block h-auto w-full"
          />

          <div>
            <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
              Professional Journey
            </span>

            <h1 className="m-0 mt-3 text-4xl font-bold text-slate-900">
              Experience
            </h1>

            <div className="mt-4 space-y-3 leading-relaxed text-slate-700">
              <p>
  Currently working as a Software Engineer (React Developer) at
  Sagitta Consulting Solutions, Pune, developing modern and responsive
  web applications using React.js, Next.js, TypeScript, and Tailwind CSS,
  with a focus on reusable components, performance, and user experience.
</p>

              <p>
                Previously, I worked as a Web Developer Intern at PHN Technology
                Pvt. Ltd., Pune, gaining hands-on experience in React.js,
                frontend development, and collaborative software development.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
<section className="mt-14">
  <SectionTitle>Work Experience</SectionTitle>

  <div className="grid gap-5 md:grid-cols-2">
    {experienceDetails.map((item) => (
     <div
  key={item.company}
  className="rounded-2xl border border-solid border-sky-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg"
>
        <div className="flex items-center gap-4">
  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#001f3f] text-white">
    <FaBriefcase size={23} />
  </div>

  <div className="min-w-0 flex-1">
    <h3 className="m-0 text-lg font-bold text-slate-900">
      {item.role}
    </h3>

    <p className="m-0 mt-1 text-sm font-semibold text-sky-700">
      {item.company}
    </p>
  </div>
</div>

        <div className="mx-5 border-t border-sky-100 pt-4 pb-5">
          <p className="m-0 flex items-start gap-2 text-sm text-slate-600">
            <FaRegCalendarAlt className="mt-0.5 shrink-0 text-sky-600" />
            <span>{item.duration}</span>
          </p>

          <p className="m-0 mt-2 flex items-center gap-2 text-sm text-slate-600">
            <FaMapMarkerAlt className="shrink-0 text-sky-600" />
            <span>{item.location}</span>
          </p>

          <span className="mt-3 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
            {item.type}
          </span>

          <details className="group mt-2 border-t border-sky-100 pt-2">
  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-sky-700 [&::-webkit-details-marker]:hidden">
    <span className="group-open:hidden">View Description</span>
    <span className="hidden group-open:inline">Hide Description</span>

    <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
  </summary>

  <p className="m-0 mt-3 text-sm leading-relaxed text-slate-700">
    {item.description}
  </p>
</details>
        </div>
      </div>
    ))}
  </div>
</section>
      </div>
    </AnimatedWrapper>
  );
};

export default Experience;
