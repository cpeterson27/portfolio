// src/data/portfolio.js
import React, { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";

export const portfolioData = {
  personalInfo: {
    name: "Cassandra Peterson",
    title: "Software Engineer",
    subtitle: "React Enthusiast | Problem Solver",
    bio: [
      "I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With experience in modern web technologies, I specialize in building responsive, user-friendly applications that make a difference.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.",
    ],
    email: "cgdesigns93@gmail.com",
    github: "https://github.com/cpeterson27",
    linkedin:
      "https://www.linkedin.com/in/cassandrapeterson-software-engineer/",
    resume: "/assets/Resume - Cassandra Peterson.pdf",
    image: "/images/cassandra-peterson.png",
  },
  projects: [
    {
      id: 1,
      title: "About Me Portfolio",
      image: "images/cassie-peterson.jpg",
      alt: "Cassandra Peterson's Portfolio",
      description:
        "Portfolio showcasing a little about me and a few things I like to do",
      tags: ["HTML", "CSS"],
      link: "https://cpeterson27.github.io/1st-Tripleten-Portfolio-Page/",
      code: "https://github.com/cpeterson27/1st-Tripleten-Portfolio-Page.git",
    },
    {
      id: 2,
      title: "Triple Peaks Coffee Shop",
      image: "images/triple-peaks-library.jpg",
      alt: "Triple Peaks Coffee Shop",
      description:
        "Coffee shop landing page with a modern design and responsive layout",
      tags: ["HTML5", "CSS", "BEM Structure"],
      link: "https://cpeterson27.github.io/se_project_coffeeshop",
      code: "https://github.com/cpeterson27/se_project_coffeeshop.git",
    },
    {
      id: 3,
      title: "Spots",
      image: "images/spots.jpg",
      alt: "Spots",
      description:
        "Interactive web application that allows users to add and remove photos, like photos of other users, and make a few minor adjustments to their profile",
      tags: ["HTML5", "CSS3", "Javascript"],
      link: "https://cpeterson27.github.io/se_project_spots",
      code: "https://github.com/cpeterson27/se_project_spots.git",
    },
    {
      id: 4,
      title: "Simple To Do App",
      image: "images/todo-app.png",
      alt: "Simple To Do App",
      description:
        " A minimalist, user-friendly to-do list application designed to help users manage daily tasks efficiently. Built using HTML, CSS, and JavaScript.",
      tags: ["HTML5", "CSS", "Javascript"],
      link: "https://cpeterson27.github.io/se_project_todo-app",
      code: "https://github.com/cpeterson27/se_project_todo-app.git",
    },
    {
      id: 6,
      title: "What to Wear?",
      image: "images/wtwr.png",
      alt: "What to Wear",
      description:
        "The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user",
      tags: ["Node.js", "React", "HTML", "CSS", "Javascript"],
      link: "https://cpeterson27.github.io/se_project_react/",
      code: "https://github.com/cpeterson27/se_project_react.git",
    },
    {
      id: 7,
      title: "Starlight University",
      image: "images/starlight.png",
      alt: "Starlight University",
      description:
        "A modern, interactive web application designed to help new students navigate university life. Built with vanilla JavaScript, modular CSS, and webpack for optimal performance and maintainability",
      tags: ["Node.js", "HTML", "CSS", "Javascript"],
      link: "https://cpeterson27.github.io/Campus-Guide/",
      code: "https://github.com/cpeterson27/Campus-Guide.git",
    },
    {
      id: 8,
      title: "Emoji Critic",
      image: "images/emoji.png",
      alt: "Emoji Critic",
      description:
        "This is a small React application built with Vite, used as a React Router demonstration by TripleTen's Software Engineering bootcamp",
      tags: ["Node.js", "HTML", "CSS", "Javascript", "React"],
      link: "https://cpeterson27.github.io/react-router-demo/",
      code: "git clone https://github.com/cpeterson27/react-router-demo.git",
    },
  ],
  education: [
    {
      degree: "Software Engineering Certificate",
      school: "TripleTen",
      date: "2023 - 2024",
      description:
        "Full-stack software engineering program covering web development, React, Node.js, and MongoDB.",
    },
    {
      degree: "Bachelors Degree",
      school: "Miami Art Institute",
      date: "2021 - 2023",
      description:
        "Art Institute focusing on user interface (UI) and user experience (UX) design, proficiency in industry-standard tools like Adobe XD, Photoshop, Illustrator, and InDesign.",
    },
    {
      degree: "Associates Degree",
      school: "Independence University",
      date: "2016 - 2017",
      description:
        "Institution addressing proficiency in visual communication, mastering industry-standard tools like Adobe Photoshop, Illustrator, and InDesign to create compelling designs across print and digital media.",
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Node.js",
    "Git",
    "Sass",
    "REST APIs",
    "MongoDB",
  ],
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
        {showFullBio ? (
          personalInfo.bio.map((line, idx) => <p key={idx}>{line}</p>)
        ) : (
          <p>{personalInfo.bio[0]}</p>
        )}
        <button onClick={() => setShowFullBio(!showFullBio)}>
          {showFullBio ? <X size={20} /> : <Menu size={20} />}
          {showFullBio ? "Show Less" : "Read More"}
        </button>
      </div>

      <div className="contact-icons">
        <a href={`mailto:${personalInfo.email}`} title="Email">
          <Mail size={24} />
        </a>
        <a
          href={personalInfo.github}
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a
          href={personalInfo.linkedin}
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
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
      {projects.map((proj) => (
        <div key={proj.id} className="project-item">
          <h4>{proj.title}</h4>
          <p>{proj.description}</p>
          <div className="tags">
            {proj.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {proj.link && (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              View Demo <ExternalLink size={16} />
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
