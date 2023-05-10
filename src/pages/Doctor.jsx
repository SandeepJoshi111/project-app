import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "../components/Doctor/doctor.css";
import MainLayouts from "../layouts/MainLayouts";
import {FaPrayingHands} from 'react-icons/fa'

function Doctor() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Retrieve user data from Firestore collection
        const db = firebase.firestore();
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              setUser({
                uid: user.uid,
                firstName: data.firstName,
                lastName: data.lastName,
              });
            }
          })
          .catch((error) => {
            console.log("Error getting user data:", error);
          });
      } else {
        setUser(null);
      }
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Retrieve user data from Firestore collection
        const db = firebase.firestore();
        db.collection("doctor")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              setUser({
                uid: user.uid,
                firstName: data.firstName,
                lastName: data.lastName,
              });
            }
          })
          .catch((error) => {
            console.log("Error getting user data:", error);
          });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <MainLayouts>
      <div className="contaienr doctor-container">
        {user ? (
          <div className="doctor-content">
            <div className="namaste">Namaste<FaPrayingHands/> </div>
            <h1>Dr.  {user.firstName} {user.lastName}</h1>
            <p>Ready for Counselling ?</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </MainLayouts>
  );
}

export default Doctor;
