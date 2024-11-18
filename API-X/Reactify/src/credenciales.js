// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUcrzk3s5xIClM-mzG3a_DPj_E9SQkaOo",
  authDomain: "api-x-f2d96.firebaseapp.com",
  projectId: "api-x-f2d96",
  storageBucket: "api-x-f2d96.appspot.com",
  messagingSenderId: "565447301906",
  appId: "1:565447301906:web:67dc08e4fbe0a67b79f1cb"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;