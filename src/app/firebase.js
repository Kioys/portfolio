// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpFFV11zasgsFZV8VgF_C2chglbhy19jE",
  authDomain: "portafolio-matias-arratibel.firebaseapp.com",
  projectId: "portafolio-matias-arratibel",
  storageBucket: "portafolio-matias-arratibel.appspot.com",
  messagingSenderId: "638585296946",
  appId: "1:638585296946:web:981c7eca8d8fb17d2f442b",
  measurementId: "G-13PHSGSMBC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)