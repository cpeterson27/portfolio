import React, { useState } from "react";
import { useImageModal } from "../../contexts/ImageModalContext";
import { ExternalLink } from "lucide-react";
import "./ProjectCard.css";

const ProjectCard = ({ project, featured = false, index = 0 }) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const { openModal } = useImageModal();
  const isSparkleBows = project.id === 14;
  const tagLimit = featured ? 8 : 5;
  const visibleTags = showAllTags ? project.tags : project.tags.slice(0, tagLimit);
  const hiddenTagCount = project.tags.length - tagLimit;

  return (
    <div
      className={`project-card${featured ? " project-card-featured" : ""}${
        index % 2 === 1 ? " project-card-reverse" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 80}
    >
      <button
        className="project-media"
        type="button"
        onClick={() => openModal(project.id, 0)}
        aria-label={`Open ${project.title} gallery`}
      >
        <img
          alt={project.alt}
          className="project-img"
          src={project.images?.[0] || project.image}
        />
      </button>
      <div className="project-content">
        <div className="project-eyebrow">
          {featured ? "Featured Case Study" : "Selected Project"}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {visibleTags.map((tag, i) => (
            <span
              key={i}
              className="tag"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              {tag}
            </span>
          ))}
          {hiddenTagCount > 0 && (
            <button
              type="button"
              className="tag tag-more"
              onClick={() => setShowAllTags((isShowing) => !isShowing)}
              aria-expanded={showAllTags}
              aria-label={
                showAllTags
                  ? `Hide extra ${project.title} technologies`
                  : `Show ${hiddenTagCount} more ${project.title} technologies`
              }
            >
              {showAllTags ? "Show less" : `+${hiddenTagCount}`}
            </button>
          )}
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
