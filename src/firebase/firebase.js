// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT3ymJOoanuQ16M7Pke0fvIoqHbI2085E",
  authDomain: "travel-guide-61a1e.firebaseapp.com",
  projectId: "travel-guide-61a1e",
  storageBucket: "travel-guide-61a1e.appspot.com",
  messagingSenderId: "699429542941",
  appId: "1:699429542941:web:582aec52b472fbcc627af4",
  measurementId: "G-H934HD4J4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);