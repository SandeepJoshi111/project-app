import { Box, Button, background } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LOGO from "../../assets/HCN-removebg-preview.png";
import { Link } from "react-router-dom";
import "./nav.css";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import Login from "../LoginPage/Login";

const NavBar = () => {
  // TO RETRIEVE DATA FROM FIREBASE 
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);


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

  
  // SIGN OUT
  function handleLogout() {
    firebase.auth().signOut();
    alert('Logged Out')
    setUser(null);
  }
  // MODAL
 // END OF RETRIVAL

  return (
    <div className="container nav-container">
      <div className="nav-content">
        <div className="nav-image">
          <img src={LOGO} alt="logo" />
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/hospital">Hospital</Link>
          <Link to="/emergency">Emergency</Link>

          {/* <button  className='btn' ><Link to='/login'>Log In</Link></button> */}

          {user ? (
          <li className="logout">
            {/* <div> {user.firstName} {user.lastName}.</div> */}
            <button className="btn btn-hover" onClick={handleLogout}>Log Out </button>
          </li>
        ) : (
          <li className="login">
            <Link to='/login'><button className="btn" onClick={() => setShowLogin(true)}>Log In</button></Link>
          </li>
        )}


      {showLogin && (
        <Login onLogin={(user) => {
          setShowLogin(false);
        }} />
      )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
