// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDACMaZoUkSEObBoKbPswHuEoSMJSgN2Bg",
    authDomain: "hosenur.firebaseapp.com",
    databaseURL: "https://hosenur-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hosenur",
    storageBucket: "hosenur.appspot.com",
    messagingSenderId: "1065002749626",
    appId: "1:1065002749626:web:a919591e91677ad6d2fc83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)