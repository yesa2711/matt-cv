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
          Halo! Saya Mokolensang, Matthew Yesa, seorang mahasiswa Informatika
          dengan minat dalam pengembangan perangkat lunak dan teknologi web.
          Saat ini, saya sedang mengeksplorasi berbagai bidang dalam dunia
          pemrograman dan berfokus pada pengembangan aplikasi web, desain UX/UI,
          serta pemrograman berbasis data. Dengan keahlian dalam bahasa
          pemrograman seperti JavaScript, Python, dan HTML/CSS, saya bersemangat
          untuk menciptakan solusi yang berguna dan mudah diakses untuk berbagai
          masalah. Portofolio ini berisi beberapa proyek yang telah saya
          kerjakan, baik secara individu maupun dalam tim. Saya berharap dapat
          terus belajar dan berkembang di bidang ini. Terima kasih telah
          mengunjungi halaman saya, dan saya terbuka untuk kolaborasi serta
          peluang kerja di masa depan!
        </p>
        <div className="social-icons">
          <a className="social-icon" href="https://github.com/settings/profile">
            <i className="fab fa-github"></i>
          </a>
          <a className="social-icon" href="https://x.com/YMokolensa24708">
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
