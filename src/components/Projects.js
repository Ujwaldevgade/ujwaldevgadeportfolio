
import React from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaCalendarAlt,
  FaChevronDown,
} from 'react-icons/fa';
import AnimatedWrapper from './AnimatedWrapper';

const projectsData = [

  {
    name: 'Fashion E-commerce Platform',
    description:
      'A full-stack fashion e-commerce platform featuring product listings, product details, shopping cart, wishlist, search, and category filtering. Includes secure authentication, order management, and an admin dashboard for product and inventory management, powered by Supabase.',
    duration: 'January 2027',
    technologies: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Supabase',
    ],
    githubLink: '#',
    status: 'In Progress · Private Project',
  },

{
    name: 'SellMate – Inventory & Sales Management System',
    description:
      'A full-stack inventory and sales management application featuring inventory tracking, sales management, customer records, payment status, and responsive dashboards. Includes search, filtering, authentication, CRUD operations, role-based access, and real-time data synchronization.',
    duration: 'August 2026',
    technologies: [
      'Next.js',
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Supabase',
    ],
    githubLink: '#',
    status: 'Private Project',
  },
  {
  name: 'Entertainment App',
  description:
  'A modern, user-friendly entertainment platform inspired by Netflix, allowing users to explore, search, and discover available movies through an intuitive interface. Features an engaging multimedia experience with movie browsing and detailed content discovery, built for a smooth and enjoyable user experience.',
  duration: 'February 2024',
  technologies: ['React', 'JavaScript', 'Bootstrap', 'Material UI'],
  githubLink: 'https://github.com/Ujwaldevgade/Entertainment_App',
  liveLink: 'https://entertainment-app-green.vercel.app/',
},
  {
    name: 'Book Movie Ticket',
    description:
      'A web application that allows users to browse movies and book movie tickets. Users can explore available films, select show timings, and choose seats through a user-friendly interface.',
    duration: 'June 2023',
    technologies: ['Node.js', 'MongoDB', 'Express.js', 'React', 'Bootstrap'],
    githubLink: 'https://github.com/Ujwaldevgade/BookMovieTicket',
    liveLink: 'https://book-movie-ticket-main.vercel.app/',
  },
  {
    name: 'Resume Builder',
    description:
      'A responsive web application for creating professional resumes. Users can enter their information through an interactive interface and generate a polished resume ready for PDF export.',
    duration: 'March 2023',
    technologies: [
      'React',
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'jsPDF',
      'Material UI',
    ],
    githubLink: 'https://github.com/Ujwaldevgade/Almabetter-Resume-Builder',
    liveLink: 'https://almabetter-resume-builder.vercel.app/',
  },
  {
    name: 'BlackCart.in',
    description:
      'A futuristic e-commerce website where superhero enthusiasts can explore and purchase costumes through a simple and user-friendly shopping experience.',
    duration: 'December 2022',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
  },
];

const SectionTitle = ({ children }) => (
  <div className="mb-6">
    <h2 className="m-0 text-2xl font-bold text-slate-900">{children}</h2>
    <div className="mt-2 h-1 w-12 rounded-full bg-[#001f3f]" />
  </div>
);

const Projects = () => {
  return (
    <AnimatedWrapper>
      <div className="mx-auto max-w-6xl">

        {/* Intro: image + paragraph */}
        <section className="grid items-center gap-8 md:grid-cols-2">
          <img
            src="/images/project.jpg"
            alt="Projects"
            className="block h-auto w-full"
          />

          <div>
            <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
              My Work
            </span>

            <h1 className="m-0 mt-3 text-4xl font-bold text-slate-900">
              Projects
            </h1>

            <p className="m-0 mt-4 leading-relaxed text-slate-700">
  Explore my projects showcasing my experience in building modern,
  responsive, and user-friendly web applications. Each project
  demonstrates my ability to turn ideas into practical solutions
  using modern web technologies and development practices.
</p>

<p className="m-0 mt-4 leading-relaxed text-slate-700">
  I enjoy working across the frontend and backend, building
  interactive user interfaces, developing application features,
  and creating seamless digital experiences using technologies
  like React.js, Next.js, JavaScript, TypeScript, and Node.js.
</p>
          </div>
        </section>

        {/* Project Cards */}
        <section className="mt-14">
          <SectionTitle>My Projects</SectionTitle>

          <div className="grid gap-5 md:grid-cols-2">
            {projectsData.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-2xl border border-solid border-sky-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#001f3f] text-white">
                    <FaCode size={21} />
                  </div>

                  {project.comingSoon && (
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="m-0 mt-4 text-lg font-bold text-slate-900">
                  {project.name}
                </h3>

                <p className="m-0 mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <FaCalendarAlt className="shrink-0 text-sky-600" />
                  {project.duration}
                </p>

                <details className="group mt-4 flex-1">
  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-slate-700">
    <span className="text-sm">View Description</span>
    <FaChevronDown className="shrink-0 text-sky-600 transition-transform duration-300 group-open:rotate-180" />
  </summary>

  <p className="mt-3 leading-relaxed text-slate-700">
    {project.description}
  </p>
</details>

                <div className="mt-4">
                  <h4 className="m-0 mb-3 text-sm font-bold text-slate-900">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
  {project.githubLink !== '#' && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#001f3f] px-4 py-2.5 text-sm font-semibold text-white no-underline transition duration-300 hover:bg-sky-700"
    >
      <FaGithub size={16} />
      View on GitHub
      <FaExternalLinkAlt size={11} />
    </a>
  )}

  {project.liveLink && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit items-center gap-2 rounded-lg border-2 border-solid border-[#001f3f] bg-white px-4 py-2.5 text-sm font-semibold text-[#001f3f] no-underline transition duration-300 hover:bg-[#001f3f] hover:text-white"
    >
      Live Demo
      <FaExternalLinkAlt size={11} />
    </a>
  )}
</div>
              </div>
            ))}
          </div>
        </section>

        {/* More Projects */}
        <div className="mt-8 mb-10 text-center">
          <a
            href="https://github.com/Ujwaldevgade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#001f3f] bg-[#001f3f] px-6 py-3 text-sm font-semibold text-white no-underline transition duration-300 hover:bg-white hover:text-[#001f3f]"
          >
            <FaGithub size={18} />
            Explore More Projects
          </a>
        </div>

      </div>
    </AnimatedWrapper>
  );
};

export default Projects;
