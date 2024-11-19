import React from "react";

const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Mokolensang, <span className="text-primary">Matthew Yesa</span>
        </h1>
        <div className="subheading mb-5">
          Manado, Kalawat · Mokolensang, Matthew Yesa, · 0823-9414-0351 ·{" "}
          <a href="mailto:matthewmokolensang24561@email.com">
            matthewmokolensang24561@email.com
          </a>
        </div>
        <p className="lead mb-5">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high-level overviews.
        </p>
        <div className="social-icons">
          <a className="social-icon" href="#!">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-icon" href="#!">
            <i className="fab fa-github"></i>
          </a>
          <a className="social-icon" href="#!">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="social-icon" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
