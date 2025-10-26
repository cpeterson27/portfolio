import React from 'react';
import { ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <a href={project.link} className="project-link">
        View Project <ExternalLink size={16} className="link-icon" />
      </a>
    </div>
  );
};

export default ProjectCard;