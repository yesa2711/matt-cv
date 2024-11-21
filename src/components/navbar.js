import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "../firebase/firebaseConfig";

const Navbar = () => {
  const [navbar, setNavbar] = useState({});

  useEffect(() => {
    const db = getDatabase(firebaseApp); // Gunakan firebaseApp untuk inisialisasi
    const navbarRef = ref(db, "navbar");

    onValue(navbarRef, (snapshot) => {
      const data = snapshot.val();
      setNavbar(data || {}); // Pastikan data tidak null
    });
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Clarence Taylor</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/img/profile.jpeg" // Path ke file gambar di folder public
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
              {navbar.navbar1}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              {navbar.navbar2}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              {navbar.navbar3}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              {navbar.navbar4}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">
              {navbar.navbar5}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
