import React from "react";
import { useImageModal } from "../../contexts/ImageModalContext";
import { ExternalLink } from "lucide-react";
import "./ProjectCard.css";

const ProjectCard = ({ project, featured = false }) => {
  const { openModal } = useImageModal();
  const isSparkleBows = project.id === 14;

  return (
    <div
      className={`project-card${featured ? " project-card-featured" : ""}`}
      data-aos="fade-up"
      data-aos-delay={project.id * 100}
    >
      <img
        alt={project.alt}
        className="project-img"
        src={project.images?.[0] || project.image}
        onClick={() => openModal(project.id, 0)}
        style={{ cursor: "pointer" }}
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
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
          {project.link && (
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project <ExternalLink size={16} className="link-icon" />
            </a>
          )}
          {!isSparkleBows && project.code && (
            <a
              href={project.code}
              className="project-code"
              target="_blank"
              rel="noreferrer"
            >
              View Code <ExternalLink size={16} className="link-icon" />
            </a>
          )}
          {isSparkleBows && project.code && (
            <a
              href={project.code}
              className="project-code"
              target="_blank"
              rel="noreferrer"
            >
              View Frontend <ExternalLink size={16} className="link-icon" />
            </a>
          )}
          {isSparkleBows && project.backendCode && (
            <a
              href={project.backendCode}
              className="project-backend"
              target="_blank"
              rel="noreferrer"
            >
              View Backend <ExternalLink size={16} className="link-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
