import React from "react";
import "./About.css";

const About = ({ bio, image }) => {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="section-header" data-aos="fade-down">
          <div className="section-kicker">Brand Story</div>
          <h2 className="section-title">A developer for businesses that care about first impressions.</h2>
          <p className="section-description">
            I combine software engineering, UI/UX thinking, and visual polish to help digital products
            feel trustworthy from the first click.
          </p>
        </div>
        <div className="about-card surface-card" data-aos="fade-up">
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
            <div className="about-intro">
              Software engineer with a UI/UX background and a brand-minded approach to web development.
            </div>
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
