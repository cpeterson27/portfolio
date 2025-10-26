import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { portfolioData } from "./data/portfolio";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo, projects, skills } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        name={personalInfo.name}
      />

      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        subtitle={personalInfo.subtitle}
        bio={personalInfo.bio}
      />

      <About bio={personalInfo.bio} />

      <Projects projects={projects} />

      <Skills skills={skills} />

      <Contact
        email={personalInfo.email}
        github={personalInfo.github}
        linkedin={personalInfo.linkedin}
      />

      <Footer name={personalInfo.name} />
    </div>
  );
}
