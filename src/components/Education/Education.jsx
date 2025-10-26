import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-down">
          Education
        </h2>
        <div className="education-container">
          {education.map((item, index) => (
            <div
              key={index}
              className="education-card"
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
