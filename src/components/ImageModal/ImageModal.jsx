import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { useImageModal } from "../../contexts/ImageModalContext";
import "./ImageModal.css";

const ImageModal = () => {
  const { isOpen, projectId, currentIndex, closeModal, nextImage, prevImage } =
    useImageModal();

  const project = portfolioData.projects.find((p) => p.id === projectId);
  const images = project?.images || (project?.image ? [project.image] : []);
  const hasMultiple = images.length > 1;

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    },
    [isOpen, closeModal, nextImage, prevImage],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images.length) return null;

  return (
    <div className="image-modal-overlay" onClick={closeModal}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        {hasMultiple && (
          <button
            className="nav-button prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}
{images[currentIndex].endsWith(".html") ? (
          <a
            href={images[currentIndex]}
            target="_blank"
            rel="noopener noreferrer"
            className="html-preview-container"
          >
            <div className="html-preview-card modal-image">
              <div className="html-icon">📄</div>
              <div className="html-filename">
                {images[currentIndex].split('/').pop()}
              </div>
              <div className="open-html-btn">Open Design File</div>
            </div>
          </a>
        ) : (
          <img
            src={images[currentIndex]}
            alt={`${project?.title} - Image ${currentIndex + 1}`}
            className="modal-image"
          />
        )}
        {hasMultiple && (
          <button
            className="nav-button next"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}
        <button
          className="close-button"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <X size={28} />
        </button>
        {hasMultiple && (
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}
        <h3 className="modal-title">{project?.title}</h3>
      </div>
    </div>
  );
};

export default ImageModal;
