// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a7070.firebaseapp.com",
  projectId: "mern-estate-a7070",
  storageBucket: "mern-estate-a7070.firebasestorage.app",
  messagingSenderId: "548682753176",
  appId: "1:548682753176:web:ccfb0308dc23bf99fb1ced",
  measurementId: "G-XQ87RW5MVN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
