// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQpCI0Dgk6zyvirajfwBwWdl4Cd2pfylU",
  authDomain: "social-media-c412f.firebaseapp.com",
  projectId: "social-media-c412f",
  storageBucket: "social-media-c412f.appspot.com",
  messagingSenderId: "1073141414829",
  appId: "1:1073141414829:web:a4d480a1a5965b4c3c3f24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
