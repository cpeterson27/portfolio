import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { portfolioData } from "./data/portfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo, projects, skills, education } = portfolioData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="app-container">
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
        resume={personalInfo.resume}
      />

      <About bio={personalInfo.bio} image={personalInfo.image} />

      <Projects projects={projects} />

      <Skills skills={skills} />

      <Education education={education} />

      <Contact
        email={personalInfo.email}
        github={personalInfo.github}
        linkedin={personalInfo.linkedin}
      />

      <Footer name={personalInfo.name} />
    </div>
  );
}
