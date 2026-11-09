// src/components/Certifications.js
import React from "react";
import {
  FaCertificate,
  FaAward,
  FaGraduationCap,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
const certificationsData = [
  {
    name: "AlmaBetter",
    course: "Full Stack Web Development",
    icon: "AB",
    link: "https://certificates.almabetter.com/en/verify/97880560184173?ref=email",
  },
  {
    name: "Udemy",
    course: "Web Development Bootcamp",
    icon: <SiUdemy />,
    link: "https://drive.google.com/file/d/1lA05Qc9LlzGZ4UUhBo2W39mH8MXLdBLi/view?usp=sharing",
  },
  {
    name: "PHN Technology",
    course: "Web Developer Internship",
    icon: <FaAward />,
    link: "https://drive.google.com/file/d/1iGZrQr11zzmKHrDhMMUHOZzk9Jsopl1H/view?usp=sharing",
  },
  {
    name: "DevTown",
    course: "Bootcamp",
    icon: <FaGraduationCap />,
    link: "https://drive.google.com/file/d/1wEPuC0VHGAgFGcFIBXdqVdNAS6Hz-NxE/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section className="mt-14 pb-4">
      <div className="mb-6">
        <h2 className="m-0 text-2xl font-bold text-slate-900">
          Certifications
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-[#001f3f]" />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {certificationsData.map((certification) => (
          <a
            key={certification.name}
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-solid border-sky-200 bg-white p-5 text-inherit no-underline shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-xl font-bold text-sky-700">
              {certification.name === "AlmaBetter" ? "AB" : certification.icon}
            </span>
            <h3 className="m-0 mt-4 text-base font-bold text-slate-900">
              {certification.name}
            </h3>
            {certification.course && (
              <p className="m-0 mt-1 text-sm text-slate-600">
                {certification.course}
              </p>
            )}
            <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-sky-700 transition-colors duration-300 group-hover:text-[#001f3f]">
              View certificate <FaExternalLinkAlt className="text-xs" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
