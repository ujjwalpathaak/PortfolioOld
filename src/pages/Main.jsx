import React from "react";
// import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Parallax from "../components/Parallax";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import "./Main.css";

const HomePage = () => {
  return (
    <div id="HomePage">
      <Parallax />
      <Hero />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default HomePage;
