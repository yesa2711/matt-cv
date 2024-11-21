import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "../firebase/firebaseConfig";

const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const db = getDatabase(firebaseApp); // Gunakan firebaseApp untuk inisialisasi
    const aboutRef = ref(db, "about");

    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data || {}); // Pastikan data tidak null
    });
  }, []);
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Mokolensang, <span className="text-primary">Matthew Yesa</span>
        </h1>
        <div className="subheading mb-5">
          {about.about1}{" "}
          <a href="mailto:matthewmokolensang24561@email.com">{about.about2}</a>
        </div>
        <p className="lead mb-5">{about.about3}</p>
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
