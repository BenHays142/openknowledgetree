// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK7Y743PlqvnYf8VTgUpla-H_M0uI51vo",
  authDomain: "openknowledgetree.firebaseapp.com",
  projectId: "openknowledgetree",
  storageBucket: "openknowledgetree.appspot.com",
  messagingSenderId: "53835674987",
  appId: "1:53835674987:web:e8392f54e2eb2f358ec82e",
  measurementId: "G-R3JQEB3ZQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);