import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth,provider } from "../../firebase/Firebase";
import { RxCross1 } from "react-icons/rx";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { FaUserAlt } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";
import GoogleButton from "react-google-button";

const LoginDoctor = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  const [user,setUser] = useState(null);
  const handleGoogleSignIn =()=>{
    signInWithPopup(auth,provider).then((result)=>{
      const user = result.user;
      setUser(user);
      navigate('/')
    }).catch((error)=>{
      console.log(error);
    })
  
  }

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/doctor");
        alert("Loggin In");
        setIsLoggedIn(true);
        setUserType('doctor');
        onLogin('doctor');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }
  return (
    <div className="container login-container">
      <motion.div
        className="login-box"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
      >
        <div className="register-form" >
          <Link className="user " to="/login" id="doctor-icon">
            <div>
              <FaUserAlt />
            </div>
            User
          </Link>
          <Link className="doctor active" to="/logindoctor">
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
        <div class="separator">OR</div>
        <div className="google"><GoogleButton type="light" onClick={handleGoogleSignIn}/></div>

        <div className="btn-footer">
          {error ? <p>{error}</p> : null}
          <button className="btn" onClick={handleLogin}>
            Log In
          </button>

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

export default LoginDoctor;
