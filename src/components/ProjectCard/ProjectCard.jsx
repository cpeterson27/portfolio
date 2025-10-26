import React from "react";
import { ExternalLink } from "lucide-react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-delay={project.id * 100}
    >
      <h3 className="project-title">{project.title}</h3>
      <img alt={project.alt} className="project-img" src={project.image} />
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="tag"
            data-aos="fade-up"
            data-aos-delay={i * 50}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.link} className="project-link">
          View Project <ExternalLink size={16} className="link-icon" />
        </a>
        <div>
          <a href={project.code} className="project-code">
            View Code <ExternalLink size={16} className="link-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
