import React from "react";

const education = () => {
  return (
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
        {/* Tambahkan pendidikan lainnya jika diperlukan */}
      </div>
    </section>
  );
};

export default education;
