import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../../firebase/Firebase";
import {BiArrowBack} from 'react-icons/bi'
import firebase from 'firebase/compat/app';
import 'firebase/firestore';


const Login = (props) => {

  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function handleLogin() {
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/")
        props.onLogin(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }
  return (
    <div className="container login-container">

          <div className="backlogin">
              <Link to='/'><BiArrowBack/></Link>
          </div>
      <div className="login-box">
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
          <button className="btn" onClick={handleLogin}>Log In</button>

          <div>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Register</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
