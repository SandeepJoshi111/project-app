import React, { useEffect, useState } from "react";
import LOGO from "../../assets/HCN-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import "firebase/firestore";
import "firebase/compat/auth";
import Login from "../LoginPage/Login";
import { AiFillHome } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHospitalAlt } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import { auth, firestore } from "../../firebase/Firebase";
import { signOut } from "firebase/auth";

import ModalLayout from "../Modal/ModalLayout/ModalLayout";

const NavBar = () => {
  const [modal, setModal] = useState(false);
  // TO RETRIEVE DATA FROM FIREBASE
  const currentUser = UseAuth();
  const [showLogin, setShowLogin] = useState(false);

  // SIGN OUT
  const handleLogout = async () => {
    await signOut(auth);
    toggleModalLayout();
  };
  // const [isDoctor, setIsDoctor] = useState(false);

  // useEffect(() => {
  //   if (currentUser && currentUser.email) {
  //     const doctorsCollection = firestore.collection("doctor");
  //     // Query the "doctor" collection for the user's email
  //     doctorsCollection
  //       .where("email", "==", currentUser.email)
  //       .get()
  //       .then((querySnapshot) => {
  //         if (!querySnapshot.empty) {
  //           // User exists in the "doctor" collection
  //           setIsDoctor(true);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("Error getting doctor data:", error);
  //       });
  //   }
  // }, [currentUser]);

  const navLinkStyle = ({ isActive }) => {
    return {
      background: isActive ? "var(--color-primary)" : "transparent",
      padding: "10px",
      borderRadius: "50%",
      color: isActive ? "white" : "black",

      transition: "all 400ms ease-out",
    };
  };
  const toggleModalLayout = () => {
    setModal(!modal);
  };
  return (
    <div className="container nav-container">
      <div className="nav-content">
        <div className="nav-image">
          <Link to="/">
            <img src={LOGO} alt="logo" />
          </Link>
        </div>

        <div className="nav-links">
          <div className="links">
            <li className="home">
              <NavLink style={navLinkStyle} to="/">
                <span id="home">Home</span>
                <AiFillHome />
              </NavLink>
            </li>
            <li className="services">
              <NavLink style={navLinkStyle} to="/services">
                <span id="services">Services</span>
                <MdMiscellaneousServices />
              </NavLink>
            </li>

            <li className="hospital">
              <NavLink style={navLinkStyle} to="/hospital">
                <span id="hospital">Hospital</span>
                <FaHospitalAlt />
              </NavLink>
            </li>
            <li className="emergency">
              <NavLink style={navLinkStyle} to="/emergency">
                <span id="emergency">Emergency</span>
                <FaAmbulance />
              </NavLink>
            </li>
          </div>

          {currentUser ? (
            <li className="logout">
              <div className="name-content">
                <span className="namaste">Namaste</span>
                {currentUser.displayName}
              </div>
              <button className="btn btn-hover" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          ) : (
            <li className="login">
              <Link to="/login">
                <button className="btn" onClick={() => setShowLogin(true)}>
                  Log In
                </button>
              </Link>
            </li>
          )}

          {showLogin && (
            <Login
              onLogin={(currentUser) => {
                setShowLogin(false);
              }}
            />
          )}
        </div>
      </div>
      {modal && (
        <ModalLayout toggleModalLayout={toggleModalLayout} title="Logged Out" userType="loggout"/>
      )}
    </div>
  );
};

export default NavBar;
