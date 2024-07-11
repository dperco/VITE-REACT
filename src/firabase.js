// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA34pJ6-oNoEqQRKKiO6lW_EacdC5QSYJw",
  authDomain: "proyectovitereact.firebaseapp.com",
  projectId: "proyectovitereact",
  storageBucket: "proyectovitereact.appspot.com",
  messagingSenderId: "308157844878",
  appId: "1:308157844878:web:2ea62a83c9cd1996c2e8df",
  measurementId: "G-H903DDQVTG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);