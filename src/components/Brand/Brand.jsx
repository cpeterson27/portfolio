import React from "react";
import { Code2, Eye, Handshake } from "lucide-react";
import "./Brand.css";

const Brand = () => {
  const pillars = [
    {
      icon: Eye,
      title: "Clarity First",
      text: "I shape sites around what visitors need to understand, trust, and do next.",
    },
    {
      icon: Code2,
      title: "Built to Hold Up",
      text: "I care about maintainable React, clean structure, and interfaces that do not collapse after launch.",
    },
    {
      icon: Handshake,
      title: "Human and Useful",
      text: "I bring design sensitivity without losing sight of the business goal behind the screen.",
    },
  ];

  return (
    <section className="brand-strip" aria-label="Cassandra Peterson brand promise">
      <div className="brand-container">
        <div className="brand-statement" data-aos="fade-up">
          <div className="section-kicker">The Brand</div>
          <h2>Clean code. Clear design. A calmer path from idea to launch.</h2>
          <p>
            My brand is practical polish: digital work that feels considered, trustworthy, and easy
            to move through. I am not here to make noise. I am here to make the product, business,
            and user experience feel aligned.
          </p>
        </div>

        <div className="brand-pillars" data-aos="fade-up" data-aos-delay="150">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article className="brand-pillar" key={pillar.title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brand;
