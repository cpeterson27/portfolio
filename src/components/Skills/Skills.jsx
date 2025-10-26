import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-card">
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