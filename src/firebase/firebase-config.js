// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC33pXvm8S21uCOcdfEwEp4q0zTeq7kxYI",
  authDomain: "netflix-project-22cd4.firebaseapp.com",
  projectId: "netflix-project-22cd4",
  storageBucket: "netflix-project-22cd4.appspot.com",
  messagingSenderId: "290287794044",
  appId: "1:290287794044:web:3babb0d5b5d1ee336b16f9",
  measurementId: "G-V7736H8V2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
