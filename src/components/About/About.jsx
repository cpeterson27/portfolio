import React from 'react';
import './About.css';

const About = ({ bio }) => {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          {bio.map((paragraph, index) => (
            <p key={index} className="about-text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;