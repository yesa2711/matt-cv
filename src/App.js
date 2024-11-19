import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";

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
