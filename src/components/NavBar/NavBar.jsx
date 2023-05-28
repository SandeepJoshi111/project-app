import React, { useState } from "react";
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
import { auth } from "../../firebase/Firebase";
import { signOut } from "firebase/auth";

const NavBar = () => {
  // TO RETRIEVE DATA FROM FIREBASE
  const currentUser = UseAuth();
  const [showLogin, setShowLogin] = useState(false);

  // SIGN OUT
  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged Out");
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      background: isActive ? "teal" : "transparent",
      padding: "10px",
      borderRadius: "50%",
      color: isActive ? "white" : "black",
      transition: "all 400ms ease",
    };
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
              {/* <div>Namaste</div> */}
              <div className="name-content">
                <span className="namaste">Namaste</span>{" "}
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
    </div>
  );
};

export default NavBar;
