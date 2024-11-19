import React from "react";

const Education = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Universitas Klabat</h3>
            <div className="subheading mb-3">Mahasiswa Informatika</div>
            <div>Computer Science - Web Development Track</div>
            <p>
              Sedang mendalami pengembangan web dengan fokus pada HTML, CSS, dan
              JavaScript. Mengembangkan keterampilan dalam menciptakan situs web
              responsif dan interaktif, serta menerapkan prinsip-prinsip desain
              yang baik. Berpartisipasi dalam proyek-proyek kuliah yang
              melibatkan teknologi terkini dan bekerja dalam tim untuk
              mengembangkan solusi aplikasi web yang efektif dan efisien.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">Agustus 2024</span>
          </div>
        </div>
        {/* Tambahkan pendidikan lainnya jika diperlukan */}
      </div>
    </section>
  );
};

export default Education;
