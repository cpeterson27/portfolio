import React from "react";
import { ArrowRight, Download } from "lucide-react";
import "./Hero.css";

const Hero = ({ name, title, subtitle, bio, resume }) => {
  const highlights = [
    "Business websites and web apps",
    "Full-stack product builds",
    "UI polish with practical engineering",
  ];

  const services = [
    {
      value: "Web Presence",
      label: "Modern sites that make your brand feel credible and clear",
    },
    {
      value: "Product Builds",
      label: "React interfaces, dashboards, ecommerce, and admin tools",
    },
    {
      value: "Design to Code",
      label: "Visual direction translated into responsive, maintainable UI",
    },
  ];

  return (
    <section id="top" className="hero">
      <div className="hero-container">
        <div className="hero-copy" data-aos="fade-up">
          <div className="hero-kicker">Cassandra Peterson Studio</div>
          <h1 className="hero-title">
            Websites and web apps for brands that need to look credible and work beautifully.
          </h1>
          <p className="hero-subtitle">
            <span className="hero-name">{name}</span>
            <span className="hero-divider" />
            <span>{title} & Product-Minded Web Developer</span>
          </p>
          <p className="hero-description">
            I help small businesses, founders, and product teams turn ideas into responsive digital
            experiences with clean code, thoughtful UX, and a polished visual finish.
          </p>

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
              Book a Project Conversation
            </a>
            <a
              href="https://cgdesigns93.wixsite.com/cassandra-peterson"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Web Design Work
            </a>
            <a href={resume} download className="resume-button">
              <Download size={18} /> Resume
            </a>
          </div>
        </div>

        <div className="hero-panel surface-card" data-aos="fade-left" data-aos-delay="150">
          <div className="hero-panel-label">What I Help With</div>
          <div className="hero-panel-role">{subtitle}</div>
          <div className="hero-stats">
            {services.map((service) => (
              <div className="hero-stat" key={service.value}>
                <span className="hero-stat-value">{service.value}</span>
                <span className="hero-stat-label">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
