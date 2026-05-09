import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container-wide">
        <div className="section-header">
          <div className="section-kicker">Click-Worthy Work</div>
          <h2 className="section-title">Case studies with color, function, and a reason to exist.</h2>
          <p className="section-description">
            A curated look at web products where I shaped the interface, the user path, and the
            engineering details behind the experience.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index < 2}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
