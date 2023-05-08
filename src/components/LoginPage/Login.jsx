import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/Firebase";

const Login = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (
      !values.email ||
      !values.pass
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="container login-container">
      <div className="login-box">
        <label>Email</label>
        <input type="text" id="email" name="email" placeholder="E-mail" 
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }/>
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className="btn-footer">
          <b>{errorMsg}</b>
          <button className="btn" disabled={submitButtonDisabled} onClick={handleSubmission}>Log In</button>

          <div>
            Don't have an account{" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
