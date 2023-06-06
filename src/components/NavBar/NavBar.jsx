import React, { useState } from "react";
import ModalLayout from "../Modal/ModalLayout/ModalLayout";
import Login from "../LoginPage/Login";
import UseAuth from "../../hooks/UseAuth";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";

// ----------FIREBASE----------
import { auth } from "../../firebase/Firebase";
import "firebase/firestore";
import "firebase/compat/auth";
import { signOut } from "firebase/auth";

// ----------LOGO----------
import LOGO from "../../assets/HCN-removebg-preview.png";

// ----------ICONS----------
import { AiFillHome } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHospitalAlt } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";

const NavBar = () => {
  const [modal, setModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // retrieving data of currentUser from database
  const currentUser = UseAuth();

  // sign out
  const handleLogout = async () => {
    await signOut(auth);
    toggleModalLayout();
  };

  // Styling active navbar link
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

          {/*Use=ing ternary operator to check if current user is present or no if present display name and change button to logout  */}
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
            // If no currentUser then display button to Log in
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
        <ModalLayout
          toggleModalLayout={toggleModalLayout}
          title="Logged Out"
          userType="loggout"
        />
      )}
    </div>
  );
};

export default NavBar;
