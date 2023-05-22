import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/Firebase";
import { RxCross1 } from "react-icons/rx";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { FaUserAlt } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { color, motion } from "framer-motion";
import { GoogleButton } from "react-google-button";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log("userCredential", userCredential);
      const user = userCredential.user;
      const name = user.displayName;

      console.log("user", user);
      console.log("name", name);
      navigate('/patient')
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  // function handleLogin() {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       navigate("/patient");
  //       alert("Loggin In");
  //       setIsLoggedIn(true);
  //       setUserType('patient');
  //       onLogin('patient');
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //     });
  // }

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("user", user);
      navigate("/patient");
    } catch (error) {
      const errorMessage = error.message;
            setError(errorMessage);
    }
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
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
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
          <button className="btn" onClick={handleLogin}>
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
    </div>
  );
};

export default Login;
