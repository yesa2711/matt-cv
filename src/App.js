import React from "react";
import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Experience from "./components/experience.js";
import Education from "./components/education.js";
import Skills from "./components/skills.js";
import Interests from "./components/interests.js";

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
