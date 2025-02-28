import React from "react";
import "../styles.css";
import project1 from "./assets/project1.webp";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";  // Image for Interactive Quiz Application

const projects = [
  {
    title: "Women Safety Device",
    description:
      "An IoT-based device for women's safety, featuring GPS tracking and an emergency alert system.",
    github: "https://github.com/yourgithub/women-safety-device",
    image: project1,
  },
  {
    title: "React Portfolio",
    description:
      "A sleek, modern portfolio built with React.js, showcasing my skills and projects.",
    github: "https://github.com/yourgithub/react-portfolio",
    image: project3,
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website built using React and Firebase authentication.",
    github: "https://github.com/yourgithub/e-commerce-site",
    image: project2,
  },
  {
    title: "Interactive Quiz Application",
    description:
      "A dynamic quiz app built with JavaScript, HTML, and CSS that provides instant feedback and scoring.",
    github: "https://github.com/yourgithub/interactive-quiz-app",
    image: project4,
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
