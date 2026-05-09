import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container-wide">
        <div className="section-header">
          <div className="section-kicker">Proof of Polish</div>
          <h2 className="section-title">Real builds with the details a business actually needs.</h2>
          <p className="section-description">
            Ecommerce, dashboards, service business tools, and interface-driven projects that show how
            I think through structure, usability, and presentation together.
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
