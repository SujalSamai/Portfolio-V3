import Navbar from "./components/Navbar";
import "./App.css";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import MainProjects from "./components/MainProjects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import EmailSection from "./components/EmailSection";

function App() {
  return (
    <div className="bg-gradient-to-b from-bl to-lbl font-inter h-max">
      <Navbar />
      <EmailSection />
      <Hero />
      <Socials />
      <About />
      <Skills />
      <MainProjects />
      <Contact />
    </div>
  );
}

export default App;
