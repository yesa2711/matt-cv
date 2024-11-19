import React from "react";

const Experience = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Junior Web Designer</h3>
            <div className="subheading mb-3">Intelitec Solutions</div>
            <p>
              Menerapkan pengetahuan HTML, CSS, dan JavaScript untuk
              mengembangkan berbagai proyek web responsif sebagai bagian dari
              tugas dan kerja tim. Membuat desain antarmuka pengguna yang
              intuitif sambil memastikan kompatibilitas lintas browser.
              Mengintegrasikan animasi sederhana menggunakan JavaScript untuk
              meningkatkan pengalaman pengguna dan mengeksplorasi konsep
              pengembangan web modern melalui proyek-proyek kreatif.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">November 2024 - Present</span>
          </div>
        </div>
        {/* Tambahkan pengalaman lainnya jika diperlukan */}
      </div>
    </section>
  );
};

export default Experience;
