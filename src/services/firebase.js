// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2nam1eKq_mfmNXsDAzERAUEZ-qa77GmQ",
  authDomain: "auth-c0700.firebaseapp.com",
  projectId: "auth-c0700",
  storageBucket: "auth-c0700.appspot.com",
  messagingSenderId: "777767766772",
  appId: "1:777767766772:web:0a40dbe2949a4f5a266ca1",
  measurementId: "G-Z3G2QMS4FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {analytics, auth}