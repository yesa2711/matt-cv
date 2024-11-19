import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import Experience from "./components/Experience/Experience.js";
import Education from "./components/Education/Education.js";
import Skills from "./components/Skills/Skills.js";
import Interests from "./components/Interests/Interests.js";

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
