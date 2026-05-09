import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import "./Contact.css";

const Contact = ({ email, github, linkedin }) => {
  const projectTypes = [
    "Brand websites",
    "Full-stack web apps",
    "Ecommerce and admin tools",
    "UI redesigns and frontend polish",
  ];

  const socialLinks = [
    { href: `mailto:${email}`, icon: Mail, label: "Email" },
    { href: github, icon: Github, label: "GitHub" },
    { href: linkedin, icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="section">
      <div className="contact-container surface-card">
        <div className="section-kicker">Contact</div>
        <h2 className="section-title">
          Have something that almost works, but does not click yet?
        </h2>
        <p className="contact-description">
          I am open to software engineering roles, freelance builds, and collaborative product work.
          Send the goal, timeline, and what feels off. I will help turn the scattered pieces into a
          web experience with shape, function, and a reason to remember it.
        </p>
        <div className="contact-services" aria-label="Project types">
          {projectTypes.map((projectType) => (
            <span key={projectType}>{projectType}</span>
          ))}
        </div>
        <a href={`mailto:${email}`} className="contact-email">
          {email}
        </a>
        <div className="social-links">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="social-link"
                aria-label={link.label}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
              >
                <Icon size={28} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
