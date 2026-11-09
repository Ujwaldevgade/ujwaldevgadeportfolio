// src/components/Contact.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import AnimatedWrapper from './AnimatedWrapper';

const RESUME_LINK = 'https://drive.google.com/file/d/1zdymQCfpI9hjLIUAjeuC57XhO0Vae0OY/view?usp=drive_link';

const contactCards = [
  {
    icon: <FaEnvelope size={22} color="#D44638" />,
    label: 'Email',
    value: 'ujwaldevgade@gmail.com',
    href: 'mailto:ujwaldevgade@gmail.com',
  },
  {
    icon: <FaLinkedin size={22} color="#2867B2" />,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/ujwal-devgade-6a935b242',
  },
  {
    icon: <FaGithub size={22} color="#211F1F" />,
    label: 'GitHub',
    value: 'github.com/Ujwaldevgade',
    href: 'https://github.com/Ujwaldevgade',
  },
  // Add more contact links as needed
];

const primaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-solid border-[#001f3f] bg-[#001f3f] px-5 py-3 text-sm font-semibold text-white no-underline shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#001f3f] hover:shadow-lg';
const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-solid border-[#001f3f] bg-transparent px-5 py-3 text-sm font-semibold text-[#001f3f] no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-[#001f3f] hover:text-white';

const Contact = () => {
  return (
    <AnimatedWrapper>
      <div className="mx-auto max-w-6xl">
        {/* Intro + photo */}
        <section className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
              Get in touch
            </span>
            <h1 className="m-0 mt-3 text-4xl font-bold text-slate-900">Contact Me</h1>
            <p className="m-0 mt-4 leading-relaxed text-slate-700">
              Feel free to reach out to me on any of the social media platforms mentioned below. I'm
              always open to collaboration, engaging in discussions, and exploring new opportunities.
              Let's work together to create something amazing and make a positive impact! Whether you
              have a project in mind, want to discuss the latest trends in technology, or explore
              potential collaborations, I'm excited to connect and contribute to innovative and
              meaningful ventures.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="mailto:ujwaldevgade@gmail.com" className={primaryButton}>
                <FaEnvelope /> Email Me
              </a>
              <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                <FaFileAlt /> See My Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/images/self2.jpg"
              alt="Ujwal Devgade"
              className="box-border block aspect-[4/5] w-full max-w-[340px] rounded-3xl border-4 border-solid border-white object-cover object-top shadow-xl"
            />
          </div>
        </section>

        {/* Contact cards */}
        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-solid border-sky-200 bg-white p-5 text-inherit no-underline shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                {card.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {card.label}
                </span>
                <span className="mt-0.5 block break-words text-sm font-semibold text-slate-900">
                  {card.value}
                </span>
              </span>
            </a>
          ))}
        </section>

        {/* Business inquiries */}
        <section className="mt-14 grid items-center gap-8 md:grid-cols-2">
          <img src="/images/resume.jpg" alt="Business inquiries" className="block h-auto w-full" />
          <div>
            <h2 className="m-0 text-2xl font-bold text-slate-900">Contact Me for Business Inquiries</h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[#001f3f]" />
            <p className="m-0 mt-4 leading-relaxed text-slate-700">
              You can email me for any business requirements and queries. I'm eager to discuss
              potential collaborations and contribute to your projects.
            </p>
            <a href="mailto:ujwaldevgade@gmail.com" className={`${primaryButton} mt-6`}>
              Click to Email Me <FaArrowRight className="text-xs" />
            </a>
          </div>
        </section>
      </div>
    </AnimatedWrapper>
  );
};

export default Contact;