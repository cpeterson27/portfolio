import React from "react";
import { Code2, MousePointerClick, Palette } from "lucide-react";
import "./Brand.css";

const Brand = () => {
  const pillars = [
    {
      icon: MousePointerClick,
      title: "Make It Clear",
      text: "I organize the message, layout, and user path so people instantly understand why they are there.",
    },
    {
      icon: Code2,
      title: "Make It Work",
      text: "I build with real product behavior in mind: authentication, dashboards, payments, admin flows, and maintainable React.",
    },
    {
      icon: Palette,
      title: "Make It Memorable",
      text: "I use color, rhythm, imagery, and small interaction details to make the experience feel intentional.",
    },
  ];

  return (
    <section className="brand-strip" aria-label="Cassandra Peterson brand system">
      <div className="brand-container">
        <div className="brand-statement" data-aos="fade-up">
          <div className="section-kicker">Brand System</div>
          <h2>Make it click is the rule.</h2>
          <p>
            My work lives between design instinct and engineering follow-through. The goal is not
            just a pretty screen. It is the moment when the message, flow, and build finally feel
            obvious in the best way.
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
