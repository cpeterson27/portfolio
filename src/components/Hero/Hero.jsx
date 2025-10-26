import React from "react";
import { Download } from "lucide-react";
import "./Hero.css";

const Hero = ({ name, title, subtitle, bio, resume }) => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">{name}</span>
        </h1>
        <p className="hero-subtitle">
          {title} | {subtitle}
        </p>
        <p className="hero-description">{bio[0]}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
          <a href="#projects" className="btn btn-secondary">
            View Work
          </a>
          <a href={resume} download className="resume-button">
            <Download size={20} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
