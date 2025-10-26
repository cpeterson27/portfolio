import React from "react";
import "./About.css";

const About = ({ bio, image }) => {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-down">
          About Me
        </h2>
        <div className="about-card" data-aos="fade-up">
          <div
            className="about-image-container"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img src={image} alt="Cassandra Peterson" className="about-image" />
          </div>
          <div
            className="about-content"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {bio.map((paragraph, index) => (
              <p key={index} className="about-text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
