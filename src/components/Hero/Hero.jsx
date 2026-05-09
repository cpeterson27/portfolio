import React from "react";
import { ArrowRight, CheckCircle2, Download, Sparkles } from "lucide-react";
import "./Hero.css";

const Hero = ({ name, title, subtitle, resume, image }) => {
  const highlights = [
    "Make it clear",
    "Make it useful",
    "Make it click",
  ];

  const services = [
    {
      value: "Brand Websites",
      label: "Clear, memorable web presences with enough polish to feel established",
    },
    {
      value: "Product Interfaces",
      label: "React dashboards, ecommerce flows, admin tools, and customer-facing apps",
    },
    {
      value: "Design-Led Development",
      label: "A bridge between visual taste, usability, and maintainable frontend systems",
    },
  ];

  return (
    <section id="top" className="hero">
      <div className="hero-container">
        <div className="hero-copy" data-aos="fade-up">
          <div className="hero-kicker">
            <Sparkles size={16} /> Cassandra Peterson / Make It Click
          </div>
          <h1 className="hero-title">
            I make websites, apps, and brands feel like they finally clicked.
          </h1>
          <p className="hero-subtitle">
            <span className="hero-name">{name}</span>
            <span className="hero-divider" />
            <span>{title} & Product-Minded Web Developer</span>
          </p>
          <p className="hero-description">
            I turn scattered ideas into digital experiences with a point of view: structured,
            expressive, usable, and built to hold up after launch.
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
              See the Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Make It Click
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

        <div className="hero-brand-stage" data-aos="fade-left" data-aos-delay="150">
          <div className="hero-portrait-frame">
            <img src={image} alt={name} className="hero-portrait" />
            <div className="hero-orbit hero-orbit-one">React</div>
            <div className="hero-orbit hero-orbit-two">UX</div>
            <div className="hero-orbit hero-orbit-three">Brand</div>
          </div>

          <div className="hero-panel">
            <div className="hero-signature">
              <div className="hero-signature-mark">CP</div>
              <div>
                <div className="hero-panel-label">Signature Mix</div>
                <div className="hero-panel-role">{subtitle}</div>
              </div>
            </div>
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
      </div>
    </section>
  );
};

export default Hero;
