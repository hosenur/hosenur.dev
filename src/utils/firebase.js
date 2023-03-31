// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDACMaZoUkSEObBoKbPswHuEoSMJSgN2Bg",
  authDomain: "hosenur.firebaseapp.com",
  databaseURL:
    "https://hosenur-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hosenur",
  storageBucket: "hosenur.appspot.com",
  messagingSenderId: "1065002749626",
  appId: "1:1065002749626:web:6a10b9c1374435e0d2fc83",
  measurementId: "G-EK6B3DYGBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
