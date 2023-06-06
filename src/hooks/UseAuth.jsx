import React, { useEffect, useState } from "react";

// ----------FIREBASE----------
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import "firebase/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

const UseAuth = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // checks authentication state of user like sign in or sign out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = firebase.firestore();
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            // If there is document inside users collection then setCurrentUser with the following
            if (doc.exists) {
              const data = doc.data();
              const displayName = `${data.firstName} ${data.lastName}`; //concatinating firstName and lastName and storing on displayName
              setCurrentUser({
                uid: user.uid,
                displayName: displayName,
                email: data.email,
              });
            }
          })
          .catch((error) => {
            console.log("Error getting user data:", error);
          });

        db.collection("doctor")
          .doc(user.uid)
          .get()
          .then((doc) => {
            // If there is document inside doctors collection then setCurrentUser with the following
            if (doc.exists) {
              const data = doc.data();
              const displayName = `${data.firstName} ${data.lastName}`; //concatinating firstName and lastName and storing on displayName
              setCurrentUser({
                uid: user.uid,
                displayName: displayName,
                email: data.email,
              });
            }
          })
          .catch((error) => {
            console.log("Error getting user data:", error);
          });

        // setCurrentUser if looged in from Google
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return currentUser;
};

export default UseAuth;
