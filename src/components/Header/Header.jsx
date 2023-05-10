import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import './header.css'


function Header() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Retrieve user data from Firestore collection
        const db = firebase.firestore();
        db.collection('users').doc(user.uid).get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              setUser({
                uid: user.uid,
                firstName: data.firstName,
                lastName: data.lastName
              });
            }
          })
          .catch((error) => {
            console.log('Error getting user data:', error);
          });
      } else {
        setUser(null);
      }
    });
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Retrieve user data from Firestore collection
        const db = firebase.firestore();
        db.collection('doctor').doc(user.uid).get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              setUser({
                uid: user.uid,
                firstName: data.firstName,
                lastName: data.lastName
              });
            }
          })
          .catch((error) => {
            console.log('Error getting user data:', error);
          });
      } else {
        setUser(null);
      }
    });
  }, []);
  
  return (
    <div className="contaienr header-container">
     {user ? (
    
            <div className="header-content">
              Hi! Dr.{user.firstName} {user.lastName}!
              <p>Ready for checkups?</p>
            </div>
            
    
        ) : (
          <div>
            </div>
        )}
      
  </div>
  );
}

export default Header;
