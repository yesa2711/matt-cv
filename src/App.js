import React from "react";

const App = () => {
  return (
    <>
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Clarence Taylor</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="assets/img/profile.jpg"
              alt="Profile"
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">
                Awards
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container-fluid p-0">
        {/* About Section */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Clarence <span className="text-primary">Taylor</span>
            </h1>
            <div className="subheading mb-5">
              3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·{" "}
              <a href="mailto:name@email.com">name@email.com</a>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high-level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
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
        <hr className="m-0" />

        {/* Experience Section */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Senior Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User-generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2013 - Present</span>
              </div>
            </div>
            {/* Repeat similar structure for other experiences */}
          </div>
        </section>
        <hr className="m-0" />

        {/* Education Section */}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">University of Colorado Boulder</h3>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.23</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">August 2006 - May 2010</span>
              </div>
            </div>
            {/* Repeat for other education entries */}
          </div>
        </section>
        <hr className="m-0" />

        {/* Skills Section */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              {/* Add other icons as needed */}
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        {/* Interests Section */}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              mountain biking, free climbing, and kayaking.
            </p>
          </div>
        </section>
        <hr className="m-0" />

        {/* Awards Section */}
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards & Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Google Analytics Certified Developer
              </li>
              {/* Add other awards as needed */}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
