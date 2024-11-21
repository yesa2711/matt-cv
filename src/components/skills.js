import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "../firebase/firebaseConfig";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const db = getDatabase(firebaseApp); // Gunakan firebaseApp untuk inisialisasi
    const SkillsRef = ref(db, "skills");

    onValue(SkillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkills(data || {}); // Pastikan data tidak null
    });
  }, []);
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">{skills.skills1}</h2>
        <div className="subheading mb-3">{skills.skills2}</div>
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
          <li className="list-inline-item">
            <i className="fab fa-angular"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-sass"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-less"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-wordpress"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-gulp"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-grunt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
        </ul>
        <div className="subheading mb-3">{skills.skills3}</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {skills.skills4}
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {skills.skills5}
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {skills.skills6}
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {skills.skills7}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
