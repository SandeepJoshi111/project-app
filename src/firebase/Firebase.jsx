// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKwi68yBd0UrGvVZjK4KnarY1opnodH04",
  authDomain: "healthcarenepal-app.firebaseapp.com",
  databaseURL: "https://healthcarenepal-app-default-rtdb.firebaseio.com",
  projectId: "healthcarenepal-app",
  storageBucket: "healthcarenepal-app.appspot.com",
  messagingSenderId: "922403275376",
  appId: "1:922403275376:web:5cdf1d5f40215d9601aab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {db, auth};