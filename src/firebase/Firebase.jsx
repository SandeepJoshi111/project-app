// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import "firebase/compat/firestore";



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
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const firestore = firebase.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();



export {firebase, auth ,provider};