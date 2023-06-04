import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { RxCross1 } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";
import ModalLayout from "../Modal/ModalLayout/ModalLayout";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const handleSubmission = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            uid: user.uid,
          })
          .then(() => {
            console.log("User added with ID: ", user.uid);
            toggleModalLayout(); //Opening modal
          })
          .catch((error) => {
            console.error("Error adding user details: ", error);
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
          <Link className="user active" to="/signup">
            <div>
              <FaUserAlt />
            </div>
            User
          </Link>
          <Link className="doctor" to="/signupdoctor" id="doctor-icon">
            <div>
              <FaUserMd />
            </div>
            Doctor
          </Link>
        </div>

        <div className="backsignup">
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
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>New Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
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
          title="SUCCESSFULL REGISTERED AS A PATIENT"
        />
      )}
    </div>
  );
};

export default SignUp;
