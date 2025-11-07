// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCGCkZZJcEwa5X5Xa310OyNecwjw_obIs",
  authDomain: "careercompass-4be52.firebaseapp.com",
  projectId: "careercompass-4be52",
  storageBucket: "careercompass-4be52.firebasestorage.app",
  messagingSenderId: "457589478627",
  appId: "1:457589478627:web:f162ddfcb3220923f761d6",
  measurementId: "G-ZBTWEXXGQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 