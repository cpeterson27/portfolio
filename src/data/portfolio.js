import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

export const portfolioData = {
  personalInfo: {
    name: "Your Name",
    title: "Full Stack Developer",
    subtitle: "React Enthusiast | Problem Solver",
    bio: [
      "I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With experience in modern web technologies, I specialize in building responsive, user-friendly applications that make a difference.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends."
    ],
    email: "your.email@example.com",
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