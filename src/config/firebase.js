// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsZwMPB_ehkABjlo7hf91iP9iyaENKFoY",
  authDomain: "nobodyclimb.firebaseapp.com",
  projectId: "nobodyclimb",
  storageBucket: "nobodyclimb.appspot.com",
  messagingSenderId: "190697952536",
  appId: "1:190697952536:web:845476bd4d75ec05557a6d",
  measurementId: "G-WY1778JGQT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
