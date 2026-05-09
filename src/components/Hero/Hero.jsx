import React from "react";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import "./Hero.css";

const Hero = ({ name, title, subtitle, bio, resume }) => {
  const highlights = [
    "Brand-aware websites",
    "Full-stack product builds",
    "Design polish with practical engineering",
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
            Practical polish for businesses ready to look real online.
          </h1>
          <p className="hero-subtitle">
            <span className="hero-name">{name}</span>
            <span className="hero-divider" />
            <span>{title} & Product-Minded Web Developer</span>
          </p>
          <p className="hero-description">
            I build brand-aware websites and full-stack web apps that feel trustworthy, easy to use,
            and ready for real customers. My sweet spot is the place where clean code, thoughtful UX,
            and visual credibility meet.
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
          <div className="hero-signature">
            <div className="hero-signature-mark">CP</div>
            <div>
              <div className="hero-panel-label">Brand Promise</div>
              <div className="hero-panel-role">{subtitle}</div>
            </div>
          </div>
          <p className="hero-panel-copy">
            Websites should not just exist. They should make people feel like they are in capable
            hands.
          </p>
          <div className="hero-stats">
            {services.map((service) => (
              <div className="hero-stat" key={service.value}>
                <CheckCircle2 size={19} />
                <div>
                <span className="hero-stat-value">{service.value}</span>
                <span className="hero-stat-label">{service.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
