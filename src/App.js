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
import HamburgerNav from "./components/HamburgerNav";
import TopArrow from "./components/TopArrow";

function App() {
  return (
    <div id="app" className="bg-gradient-to-b from-bl to-lbl font-inter h-max">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <HamburgerNav />
      </div>
      <EmailSection />
      <TopArrow />
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
