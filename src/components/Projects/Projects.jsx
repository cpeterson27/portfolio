import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container-wide">
        <div className="section-header">
          <div className="section-kicker">Selected Work</div>
          <h2 className="section-title">Projects that show both technical range and product thinking.</h2>
          <p className="section-description">
            A mix of full-stack builds, interface-driven work, and practical tools designed around real user needs.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
