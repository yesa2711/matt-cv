// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWXK9vcXipFGxqx1mZAHbXH_27Upqa0X8",
  authDomain: "matthew-cv-1e5bf.firebaseapp.com",
  databaseURL: "https://matthew-cv-1e5bf-default-rtdb.firebaseio.com/",
  projectId: "matthew-cv-1e5bf",
  storageBucket: "matthew-cv-1e5bf.firebasestorage.app",
  messagingSenderId: "632028696289",
  appId: "1:632028696289:web:3713f64b55e864950b31a0",
  measurementId: "G-YLLZM3412Q",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
