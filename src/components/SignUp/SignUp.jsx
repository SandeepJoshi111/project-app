import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, fireStore } from "../../firebase/Firebase";
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmission = () => {
    
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        firebase.firestore().collection('users').doc(user.uid).set({
          firstName: firstName,
          lastName: lastName,
          email: email
        })
        .then(() => {
          console.log('User added with ID: ', user.uid);
          navigate('/');
        })
        .catch((error) => {
          console.error('Error adding user details: ', error);
        });
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error creating user: ', error);
      });

  };
  return (
    <div className="container signup-container">
      <div className="signup-box">
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
        {error && <b>{error}</b>}
          <button
            onClick={handleSubmission}
            className="btn btn-primary">
            Sign Up
          </button>
          <div>
            Already have an account?{" "}
            <span>
              <Link to="/login">Log In</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
