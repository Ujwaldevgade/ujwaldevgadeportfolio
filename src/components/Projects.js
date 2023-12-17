// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file
import AnimatedWrapper from './AnimatedWrapper';

const projectsData = [
  {
    name: 'Entertainment App',
    description: 'Comming Soon',
    duration: 'February 2024',
    technologies: 'Technologies: React, Node.js, MongoDB',
    githubLink: '#', // Replace with the actual GitHub link
  },
  {
    name: 'My Portfolio Website',
    description: 'My Portfolio Website serves as a digital showcase of my skills, projects, and experiences. Explore my journey in technology through a curated collection of projects and discover the diverse range of skills I bring to the table.',
    duration: 'September 2023',
    technologies: 'Technologies: React, HTML, CSS, JavaScript',
    githubLink: '#', // Replace with the actual GitHub link
  },
  
  {
    name: 'Book Movie Ticket',
    description: 'Book Movie Ticket is a web application that allows users to browse and book movie tickets of films. The application provides a user-friendly interface to select movies, choose show timings, and pick seats for an enjoyable cinema experience.',
    duration: 'June 2023',
    technologies: 'Technologies: Node.js, MongoDB, Express.js, React, Bootstrap',
    githubLink: 'https://github.com/Ujwaldevgade/BookMovieTicket', // Replace with the actual GitHub link
  },
  {
    name: 'Resume Builder',
    description: 'Developed a user-friendly web application for creating professional resumes effortlessly. Users can input information through a modern and responsive interface, and the application generates a polished resume ready for export as a PDF.',
    duration: 'March 2023',
    technologies: 'Technologies: React, HTML, CSS, JavaScript Redux, jsPDF, Material-UI',
    githubLink: 'https://github.com/Ujwaldevgade/Almabetter-Resume-Builder', // Replace with the actual GitHub link
  },
  {
    name: 'BlackCart.in',
    description: 'BlackCart.in is a futuristic e-commerce website. Explore a unique shopping experience where superhero enthusiasts can purchase high-quality costumes with ease.',
    duration: 'December 2022',
    technologies: 'Technologies: HTML, CSS, JavaScript',
    githubLink: '#', // Replace with the actual GitHub link
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <AnimatedWrapper>
    <div className="projects-container">
      <div className="projects-header">
        <div className="image-container">
          <img src="/images/project.jpg" alt="project" className="project-image" />
        </div>
        <div className="experience-title">
          <h1>Projects</h1>
          <p>
            Explore my dynamic portfolio featuring projects that seamlessly integrate the latest technologies. Each project reflects a commitment to innovation and user-centric experiences. My best experience is creating Full Stack projects and deploying them to web applications using cloud infrastructure and web servers.{' '}
            <br />
            <br />
            Discover the seamless fusion of innovation and technology in my portfolio, where each project is a testament to my commitment to pushing the boundaries of what's achievable in the digital landscape.
          </p>
        </div>
      </div>
      <div className="projects-content">
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`project-item ${selectedProject === index ? 'selected' : ''}`}
              onClick={() => handleProjectClick(index)}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {selectedProject === index && (
                <div className="project-details">
                  <p>{project.duration}</p>
                  <p>{project.technologies}</p>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <a href="https://github.com/Ujwaldevgade" target="_blank" rel="noopener noreferrer" className="more-projects-button">
          More Projects
        </a>
      </div>
    </div>
    </AnimatedWrapper>
  );
};

export default Projects;
