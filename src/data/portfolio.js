// src/data/portfolio.js
import React, { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";

export const portfolioData = {
  personalInfo: {
    name: "Cassandra Peterson",
    title: "Software Engineer",
    subtitle: "Full-Stack Developer with a UI/UX Background",
    bio: [
      "I build responsive, user-centered web applications with a strong focus on clarity, usability, and maintainable code. My background in both software engineering and design helps me translate ideas into polished digital products that feel intentional from the first interaction to the last detail.",
      "I enjoy working across the stack, collaborating closely with teams, and solving real product problems with practical, thoughtful solutions. Whether I am refining an interface or building application logic, I care deeply about creating experiences that are reliable, accessible, and easy to use.",
    ],
    email: "cpeterson.dev@gmail.com",
    github: "https://github.com/cpeterson27",
    linkedin:
      "https://www.linkedin.com/in/cassandrapeterson-software-engineer/",
    resume: "assets/ResumeCassandraPeterson.pdf",
    image: process.env.PUBLIC_URL + "/images/cassandra-peterson.png",
  },
  projects: [
     {
      id: 13,
      title: "Interactive Media Dashboard",
      image: process.env.PUBLIC_URL + "/images/mrbeast.png",
      alt: "Interactive Media Dashboard",
      description:
        "An interactive dashboard built from a Figma concept to demonstrate design accuracy, reusable component architecture, accessibility, and polished motion across responsive breakpoints.",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "shadcn/ui",
        "Framer Motion",
      ],
      link: "https://mrbeast-dashboard.vercel.app/",
      code: "https://github.com/cpeterson27/mrbeast-dashboard.git",
    },
    {
      id: 1,
      title: "Standing Break Reminder",
      image: process.env.PUBLIC_URL + "/images/standing-break-reminder.jpg",
      alt: "Standing Break Reminder",
      description:
        "A lightweight Chrome extension, contracted and published by Sabi Ventures LLC, that encourages healthier work habits with timely reminders to stand, stretch, and move throughout the day.",
      tags: [
        "Javascript",
        "React",
        "Chrome Extensions API",
        "Local Storage API",
        "Service Workers",
      ],
      link: "https://chromewebstore.google.com/detail/standing-break-reminder/lidfpoljnclliodaaboebnkkpemobmfm?pli=1",
    },
    {
      id: 2,
      title: "News Explorer App",
      image: process.env.PUBLIC_URL + "/images/newsexplorer.png",
      alt: "News Explorer App",
      description:
        "A full-stack news application that lets users search current stories, save articles, and manage a personalized reading list through an organized account experience.",
      tags: [
        "Node.js",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "REST APIs",
        "MongoDB",
        "Express.js",
        "Google Cloud",
      ],
      link: "https://github.com/cpeterson27/News-Explorer-Frontend",
      code: "https://github.com/cpeterson27/News-Explorer-Frontend",
    },

    {
      id: 3,
      title: "BudgetBlox Balances",
      image: process.env.PUBLIC_URL + "/images/budgetblox.png",
      alt: "BudgetBlox Balances",
      description:
        "A budgeting application designed to help users track expenses, monitor balances, and build healthier financial habits through a clean and approachable dashboard experience.",
      tags: [
        "Node.js",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vite",
        "MongoDB",
        "Cookie-parser",
        "CORS",
        "Vercel",
      ],
      link: "https://budgetblox-rxr8z03sm-cassies-projects-67fd5d41.vercel.app/dashboard",
      code: "https://github.com/cpeterson27/budgetblox.git",
    },
    {
      id: 4,
      title: "Simple To Do App",
      image: process.env.PUBLIC_URL + "/images/todo-app.png",
      alt: "Simple To Do App",
      description:
        "A streamlined to-do list application focused on simplicity, clear interactions, and efficient day-to-day task management.",
      tags: ["HTML5", "CSS", "JavaScript"],
      link: "https://cpeterson27.github.io/se_project_todo-app",
      code: "https://github.com/cpeterson27/se_project_todo-app.git",
    },
    {
      id: 6,
      title: "What to Wear?",
      image: process.env.PUBLIC_URL + "/images/wtwr.png",
      alt: "What to Wear",
      description:
        "A weather-based application that fetches forecast data, processes conditions, and recommends clothing choices based on the day’s expected temperature and environment.",
      tags: [
        "Node.js",
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "REST APIs",
        "Vite",
        "MongoDB",
        "Google Cloud",
      ],
      link: "https://cpeterson27.github.io/se_project_react/",
      code: "https://github.com/cpeterson27/se_project_react.git",
    },
    {
      id: 7,
      title: "Starlight University",
      image: process.env.PUBLIC_URL + "/images/starlight.png",
      alt: "Starlight University",
      description:
        "A campus guide web application created to help new students navigate university life through an organized, interactive, and responsive interface.",
      tags: ["Node.js", "HTML", "CSS", "JavaScript"],
      link: "https://cpeterson27.github.io/Campus-Guide/",
      code: "https://github.com/cpeterson27/Campus-Guide.git",
    },
    {
      id: 8,
      title: "Emoji Critic",
      image: process.env.PUBLIC_URL + "/images/emoji.png",
      alt: "Emoji Critic",
      description:
        "A small React and Vite application built as a React Router demonstration, showcasing client-side navigation and structured component composition.",
      tags: ["Node.js", "HTML", "CSS", "JavaScript", "React"],
      link: "https://cpeterson27.github.io/react-router-demo/",
      code: "https://github.com/cpeterson27/react-router-demo",
    },
    {
      id: 9,
      title: "Spots",
      image: process.env.PUBLIC_URL + "/images/spots.jpg",
      alt: "Spots",
      description:
        "An interactive social-style photo app where users can add and remove images, like posts, and update profile details through a dynamic interface.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "https://cpeterson27.github.io/se_project_spots",
      code: "https://github.com/cpeterson27/se_project_spots.git",
    },
    {
      id: 10,
      title: "Triple Peaks Coffee Shop",
      image: process.env.PUBLIC_URL + "/images/triple-peaks-library.jpg",
      alt: "Triple Peaks Coffee Shop",
      description:
        "A responsive landing page for a coffee shop brand, designed to balance visual appeal with clean layout structure and strong front-end fundamentals.",
      tags: ["HTML5", "CSS", "BEM Structure"],
      link: "https://cpeterson27.github.io/se_project_coffeeshop",
      code: "https://github.com/cpeterson27/se_project_coffeeshop.git",
    },
    {
      id: 11,
      title: "About Me Portfolio",
      image: process.env.PUBLIC_URL + "/images/cassie-peterson.jpg",
      alt: "Cassandra Peterson's Portfolio",
      description:
        "An early personal portfolio project created to introduce my background, interests, and design sensibility through a simple web presence.",
      tags: ["HTML", "CSS"],
      link: "https://cpeterson27.github.io/1st-Tripleten-Portfolio-Page/",
      code: "https://github.com/cpeterson27/1st-Tripleten-Portfolio-Page.git",
    },
  ],
  education: [
    {
      degree: "Software Engineering Certificate",
      school: "TripleTen",
      date: "2023 - 2024",
      description:
        "Completed a full-stack software engineering program focused on modern web development, including React, Node.js, Express, APIs, databases, and collaborative development practices.",
    },
    {
      degree: "Bachelor's Degree",
      school: "Miami Art Institute",
      date: "2021 - 2023",
      description:
        "Studied user interface and user experience design with hands-on experience in Adobe XD, Photoshop, Illustrator, and InDesign, strengthening my foundation in visual communication and product presentation.",
    },
    {
      degree: "Associate Degree",
      school: "Independence University",
      date: "2016 - 2017",
      description:
        "Built a foundation in visual communication and digital design, developing proficiency in Adobe creative tools for both print and digital media work.",
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "Sass",
    "REST APIs",
    "MongoDB",
    "Express.js",
    "Responsive Design",
    "UI/UX Design",
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
