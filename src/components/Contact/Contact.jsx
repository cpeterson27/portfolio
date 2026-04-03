import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Contact.css';

const Contact = ({ email, github, linkedin }) => {
  const socialLinks = [
    { href: `mailto:${email}`, icon: Mail, label: "Email" },
    { href: github, icon: Github, label: "GitHub" },
    { href: linkedin, icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="section">
      <div className="contact-container surface-card">
        <div className="section-kicker">Contact</div>
        <h2 className="section-title">Let’s build something thoughtful together.</h2>
        <p className="contact-description">
          I’m open to full-time roles, freelance projects, and collaborative product work. If you have an idea, a team, or a problem worth solving, I’d love to hear about it.
        </p>
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
