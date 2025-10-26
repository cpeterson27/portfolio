// src/data/portfolio.js
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

export const portfolioData = {
  personalInfo: {
    name: "Cassandra Peterson",
    title: "Software Engineer",
    subtitle: "React Enthusiast | Problem Solver",
    bio: [
      "I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With experience in modern web technologies, I specialize in building responsive, user-friendly applications that make a difference.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends."
    ],
    email: "cgdesigns93@gmail.com",
    github: "https://github.com/cpeterson27",
    linkedin: "https://www.linkedin.com/in/cassandrapeterson-software-engineer/"
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack online shopping platform with cart functionality, payment integration, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, team collaboration features, and progress tracking.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with forecasts, interactive maps, and location-based alerts.",
      tags: ["React", "OpenWeather API", "Chart.js"],
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio Generator",
      description: "Tool that helps developers create beautiful portfolio websites with customizable templates.",
      tags: ["React", "TypeScript", "CSS Modules"],
      link: "#"
    }
  ],
  skills: [
    "JavaScript", "React", "TypeScript", "Node.js", 
    "HTML/CSS", "Tailwind CSS", "Git", "REST APIs",
    "MongoDB", "PostgreSQL", "Redux", "Next.js"
  ]
};

// A component to display your personal info + toggle full/short bio
export function PersonalInfoCard() {
  const { personalInfo } = portfolioData;
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <div className="personal-info-card">
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.title}</h2>
      <p>{personalInfo.subtitle}</p>

      <div className="bio">
        {showFullBio
          ? personalInfo.bio.map((line, idx) => <p key={idx}>{line}</p>)
          : <p>{personalInfo.bio[0]}</p>
        }
        <button onClick={() => setShowFullBio(!showFullBio)}>
          {showFullBio ? <X size={20} /> : <Menu size={20} />}
          {showFullBio ? "Show Less" : "Read More"}
        </button>
      </div>

      <div className="contact-icons">
        <a href={`mailto:${personalInfo.email}`} title="Email">
          <Mail size={24} />
        </a>
        <a href={personalInfo.github} title="GitHub" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
        <a href={personalInfo.linkedin} title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
}

// A component to display projects list
export function ProjectsList() {
  const { projects } = portfolioData;

  return (
    <section className="projects-list">
      <h3>My Projects</h3>
      {projects.map(proj => (
        <div key={proj.id} className="project-item">
          <h4>{proj.title}</h4>
          <p>{proj.description}</p>
          <div className="tags">
            {proj.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
          {proj.link && (
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="external-link">
              View Demo <ExternalLink size={16} />
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
