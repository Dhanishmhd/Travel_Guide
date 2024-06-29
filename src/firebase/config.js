// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyVrmQmyUlGpy4EaDt6m60fHXK8WBPcqw",
    authDomain: "travel-f6c2a.firebaseapp.com",
    projectId: "travel-f6c2a",
    storageBucket: "travel-f6c2a.appspot.com",
    messagingSenderId: "899074781887",
    appId: "1:899074781887:web:d0a46b5773b8195b060c0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)