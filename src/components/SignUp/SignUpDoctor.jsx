import React, { useState } from "react";
import ModalLayout from "../Modal/ModalLayout/ModalLayout";
import { Link } from "react-router-dom";
import "./signup.css";

import LOGO from "../../assets/HCN nobg.svg";

// ----------FIREBASE----------
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import firebase from "firebase/compat/app";
import "firebase/firestore";

// ----------ICONS----------
import { RxCross1 } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";

// ----------ANIMATION----------
import { motion } from "framer-motion";

const SignUpDoctor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const handleSubmission = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        firebase
          // Created a collection named doctor in firebase and stored the following doctor specification
          .firestore()
          .collection("doctor")
          .doc(user.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            speciality: speciality,
            uid: user.uid,
          })
          .then(() => {
            console.log("Doctor added with ID: ", user.uid);
            toggleModalLayout(); //Opening modal
          })
          .catch((error) => {
            console.error("Error adding doctor details: ", error);
          });
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error creating user: ", error);
      });
  };

  const toggleModalLayout = () => {
    setModal(!modal);
  };
  return (
    <div className="container signup-container">
      <motion.div
        className="signup-box"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
      >
        <div className="register-form">
          <Link className="user " to="/signup" id="doctor-icon">
            <div>
              <FaUserAlt />
            </div>
            User
          </Link>
          <Link className="doctor active" to="/signupdoctor">
            <div>
              <FaUserMd />
            </div>
            Doctor
          </Link>
        </div>

        <div className="backsignup">
          <img src={LOGO} alt="" />
          <Link to="/">
            <RxCross1 />
          </Link>
        </div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Speciality</label>
        <input
          type="text"
          id="speciality"
          name="speciality"
          placeholder="Speciality"
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
        />
        <label>New Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="btn-footer">
          {error ? <p>{error}</p> : null}
          <button onClick={handleSubmission} className="btn btn-primary">
            Sign Up
          </button>
          <div>
            Already have an account?{" "}
            <span>
              <Link to="/login">Log In</Link>
            </span>
          </div>
        </div>
      </motion.div>
      {modal && (
        <ModalLayout
          toggleModalLayout={toggleModalLayout}
          title="Successfully Registered as a Doctor"
          userType="logindoctor"
        />
      )}
    </div>
  );
};

export default SignUpDoctor;
