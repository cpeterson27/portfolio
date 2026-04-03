import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <div className="section-header" data-aos="fade-down">
          <div className="section-kicker">Background</div>
          <h2 className="section-title">Training that combines software engineering with visual design.</h2>
          <p className="section-description">
            My education has shaped both how I build products and how I think about usability, communication, and craft.
          </p>
        </div>
        <div className="education-container">
          {education.map((item, index) => (
            <div
              key={index}
              className="education-card surface-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="degree">{item.degree}</h3>
              <div className="school">{item.school}</div>
              <div className="date">{item.date}</div>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
