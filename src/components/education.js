import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "../firebase/firebaseConfig";

const Education = () => {
  const [education, setEducation] = useState({});

  useEffect(() => {
    const db = getDatabase(firebaseApp); // Gunakan firebaseApp untuk inisialisasi
    const educationRef = ref(db, "education");

    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      setEducation(data || {}); // Pastikan data tidak null
    });
  }, []);
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">{education.education1}</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">{education.education2}</h3>
            <div className="subheading mb-3">{education.education3}</div>
            <div>{education.education4}</div>
            <p>{education.education5}</p>
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
