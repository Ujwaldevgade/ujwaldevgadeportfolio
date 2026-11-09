// src/components/Education.js
import React from 'react';
import { FaUniversity, FaRegCalendarAlt } from 'react-icons/fa';
import Certifications from './Certifications';
import AnimatedWrapper from './AnimatedWrapper';

const educationDetails = [
  {
    degree: 'MCA',
    fullForm: 'Master of Computer Applications',
    university: 'Sinhgad Institute of Management, Pune',
    duration: 'December 2021 – September 2023',
    percentage: '70.11%',
  },
  {
    degree: 'BCA',
    fullForm: 'Bachelor of Computer Applications',
    university: 'Vidya Bhavan College of Management, Yavatmal',
    duration: 'June 2018 – September 2021',
    percentage: '70.35%',
  },
  {
    degree: 'HSC',
    fullForm: 'Higher Secondary Certificate (12th)',
    university: 'Amolakchand Mahavidyalaya, Yavatmal',
    duration: 'March 2017 – April 2018',
  },
  {
    degree: 'SSC',
    fullForm: 'Secondary School Certificate (10th)',
    university: 'Vivekanand Vidyalaya, Yavatmal',
    duration: 'June 2015 – May 2016',
  },
];

// Small heading with a navy underline bar, used for each section
const SectionTitle = ({ children }) => (
  <div className="mb-6">
    <h2 className="m-0 text-2xl font-bold text-slate-900">{children}</h2>
    <div className="mt-2 h-1 w-12 rounded-full bg-[#001f3f]" />
  </div>
);

const Education = () => {
  return (
    <AnimatedWrapper>
      <div className="mx-auto max-w-6xl">
        {/* Intro: image + paragraph */}
        <section className="grid items-center gap-8 md:grid-cols-2">
          <img src="/images/Education.jpg" alt="Education" className="block h-auto w-full" />
          <div>
            <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
              Academic background
            </span>
            <h1 className="m-0 mt-3 text-4xl font-bold text-slate-900">Education</h1>
            <div className="mt-4 space-y-3 leading-relaxed text-slate-700">
  <p>
    My academic background includes an MCA from Sinhgad Institute of
    Management, Pune (70.11%), and a BCA from Vidya Bhavan College,
    Yavatmal (70.35%), with a focus on computer applications and
    software development.
  </p>

  <p>
    I have also earned certifications in Full Stack Web Development
    from AlmaBetter and Web Development from Udemy, complementing
    my academic learning with practical development skills.
  </p>
</div>
          </div>
        </section>

        {/* Degrees */}
        <section className="mt-14">
          <SectionTitle>Degrees Received</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {educationDetails.map((item) => (
              <div
                key={item.degree}
                className="flex gap-4 rounded-2xl border border-solid border-sky-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#001f3f] text-sm font-bold tracking-wide text-white">
                  {item.degree}
                </div>
                <div className="min-w-0">
                  <h3 className="m-0 text-lg font-bold text-slate-900">{item.fullForm}</h3>
                  <p className="m-0 mt-2 flex items-start gap-2 text-sm text-slate-600">
                    <FaUniversity className="mt-0.5 shrink-0 text-sky-600" />
                    <span>{item.university}</span>
                  </p>
                  <p className="m-0 mt-1 flex items-center gap-2 text-sm text-slate-500">
                    <FaRegCalendarAlt className="shrink-0 text-sky-600" />
                    <span>{item.duration}</span>
                  </p>
                  {item.percentage && (
                    <span className="mt-3 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                      {item.percentage}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Certifications />
      </div>
    </AnimatedWrapper>
  );
};

export default Education;