import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/Firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.pass
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="container signup-container">
      <div className="signup-box">
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, firstName: event.target.value }))
          }
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, lastName: event.target.value }))
          }
        />

        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
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
          <b >{errorMsg}</b>
          <button
            disabled={submitButtonDisabled}
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
