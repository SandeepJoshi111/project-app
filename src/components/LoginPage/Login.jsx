import React, { useEffect, useState } from "react";
import ModalLayout from "../Modal/ModalLayout/ModalLayout";
import { Link, useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import "./login.css";

// ----------FIREBASE----------
import firebase from "firebase/compat/app";
import { auth, provider } from "../../firebase/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";

// ----------ICONS----------
import { RxCross1 } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  //Signing in with Google hooks
  const signInWithGoogle = async () => {
    try {
      //Pop up appears for signin in
      const userCredential = await signInWithPopup(auth, provider);
      console.log("userCredential", userCredential);
      const user = userCredential.user;
      const name = user.displayName;

      console.log("user", user);
      console.log("name", name);

      //After signing in the page then navigate the user to /patient page
      navigate("/patient");

      // If there is any error while signing in it is displayed in a console
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  // Signing in with Email and Password
  const handleLogin = async () => {
    try {
      // Check if the email exists in the "doctor" collection
      const doctorsRef = collection(firebase.firestore(), "doctor");
      const doctorQuery = query(doctorsRef, where("email", "==", email));
      const doctorSnapshot = await getDocs(doctorQuery);

      if (!doctorSnapshot.empty) {
        // If the email exists in the "doctor" collection, prevent login and show an error message
        setError("Go to Doctor Login.");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("user", user);
        // Toggleing a modal to display user has signed in
        toggleModalLayout();
      }
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const toggleModalLayout = () => {
    setModal(!modal);
  };

  return (
    <div className="container login-container">
      <motion.div
        className="login-box"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
      >
        <div className="register-form">
          <Link className="user active" to="/login">
            <div>
              <FaUserAlt />
            </div>
            User
          </Link>
          <Link className="doctor" to="/logindoctor" id="doctor-icon">
            <div>
              <FaUserMd />
            </div>
            Doctor
          </Link>
        </div>
        <div className="backlogin">
          <Link to="/">
            <RxCross1 />
          </Link>
        </div>
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // when event occer then the value in it is stored on setEmail
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // when event occer then the value in it is stored on setPassword
        />
        <div className="btn-footer">
          {error ? <p>{error}</p> : null}
          <button onClick={handleLogin} className="btn btn-primary">
            Log In
          </button>
        </div>
        <div class="separator">OR</div>
        <div className="google">
          <GoogleButton type="light" onClick={signInWithGoogle} />
        </div>
        <div className="btn-footer">
          <div>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Register</Link>
            </span>
          </div>
        </div>
      </motion.div>
      {modal && (
        // title and userType are passed to ModalLayout to display them in a Modal
        <ModalLayout
          toggleModalLayout={toggleModalLayout}
          title="Logged In as a Patient"
          userType="patient"
        />
      )}
    </div>
  );
};

export default Login;
