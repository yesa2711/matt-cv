import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "../firebase/firebaseConfig";

const Interests = () => {
  const [interests, setInterests] = useState({});

  useEffect(() => {
    const db = getDatabase(firebaseApp); // Gunakan firebaseApp untuk inisialisasi
    const interestsRef = ref(db, "interests");

    onValue(interestsRef, (snapshot) => {
      const data = snapshot.val();
      setInterests(data || {}); // Pastikan data tidak null
    });
  }, []);
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">{interests.intersts1}</h2>
        <p>{interests.intersts2}</p>
      </div>
    </section>
  );
};

export default Interests;
