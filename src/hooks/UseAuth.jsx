import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import "firebase/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

const UseAuth = () => {
    
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = firebase.firestore();
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              const displayName = `${data.firstName} ${data.lastName}`
              setCurrentUser({
                uid: user.uid,
                displayName: displayName,
                email:data.email,
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
            if (doc.exists) {
              const data = doc.data();
              const displayName = `${data.firstName} ${data.lastName}`
              setCurrentUser({
                uid: user.uid,
                displayName: displayName,
                email:data.email,
              });
            }
          })
          .catch((error) => {
            console.log("Error getting user data:", error);
          });

        
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
