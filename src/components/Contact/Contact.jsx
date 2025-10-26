import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Contact.css';

const Contact = ({ email, github, linkedin }) => {
  const socialLinks = [
    { href: `mailto:${email}`, icon: Mail, label: "Email" },
    { href: github, icon: Github, label: "GitHub" },
    { href: linkedin, icon: Linkedin, label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="social-links">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.label}
                href={link.href}
                className="social-link"
                aria-label={link.label}
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;