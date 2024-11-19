import React from "react";
import Navbar from "./components/Navbar/navbar.js";
import About from "./components/About/about.js";
import Experience from "./components/Experience/experience.js";
import Education from "./components/Education/education.js";
import Skills from "./components/Skills/skills.js";
import Interests from "./components/Interests/interests.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
      </div>
    </>
  );
};

export default App;
