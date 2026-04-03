import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker">Capabilities</div>
          <h2 className="section-title">Core tools I rely on to ship modern web experiences.</h2>
          <p className="section-description">
            Frontend craftsmanship, backend fundamentals, and the collaboration habits needed to move projects forward.
          </p>
        </div>
        <div className="skills-card surface-card">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
