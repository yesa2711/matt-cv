import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "../firebase/firebaseConfig";

const Experience = () => {
  const [experience, setExperience] = useState({});

  useEffect(() => {
    const db = getDatabase(firebaseApp); // Gunakan firebaseApp untuk inisialisasi
    const experienceRef = ref(db, "experience");

    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      setExperience(data || {}); // Pastikan data tidak null
    });
  }, []);
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">{experience.experience1}</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">{experience.experience2}</h3>
            <div className="subheading mb-3">{experience.experience3}</div>
            <p>{experience.experience4}</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">{experience.experience5}</span>
          </div>
        </div>
        {/* Tambahkan pengalaman lainnya jika diperlukan */}
      </div>
    </section>
  );
};

export default Experience;
