import React from "react";
import { ArrowRight, Download } from "lucide-react";
import "./Hero.css";

const Hero = ({ name, title, subtitle, bio, resume }) => {
  const highlights = [
    "Full-stack product development",
    "Responsive UI and design systems",
    "Clean, maintainable React architecture",
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-copy" data-aos="fade-up">
          <div className="hero-eyebrow">Portfolio 2026</div>
          <h1 className="hero-title">
            Building digital experiences that feel thoughtful, polished, and reliable.
          </h1>
          <p className="hero-subtitle">
            <span className="hero-name">{name}</span>
            <span className="hero-divider" />
            <span>{title}</span>
          </p>
          <p className="hero-description">{bio[0]}</p>

          <div className="hero-highlights">
            {highlights.map((item) => (
              <span key={item} className="hero-highlight">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Start a Conversation
            </a>
            <a
              href="https://cgdesigns93.wixsite.com/cassandra-peterson"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View UI/UX Work
            </a>
            <a href={resume} download className="resume-button">
              <Download size={18} /> Resume
            </a>
          </div>
        </div>

        <div className="hero-panel surface-card" data-aos="fade-left" data-aos-delay="150">
          <div className="hero-panel-label">Professional Snapshot</div>
          <div className="hero-panel-role">{subtitle}</div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">Full Stack</span>
              <span className="hero-stat-label">Frontend-first development mindset</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">UI + Code</span>
              <span className="hero-stat-label">Bridging visual design and implementation</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">React Focused</span>
              <span className="hero-stat-label">Modern component-driven product work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
