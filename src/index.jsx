import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
const App = lazy(() => import("./App"));
const Services = lazy(() => import("./pages/Services"));
const Hospital = lazy(() => import("./pages/Hospital"));
const Emergency = lazy(() => import("./pages/Emergency"));
const Login = lazy(() => import("./components/LoginPage/Login"));
const LoginDoctor = lazy(() => import("./components/LoginPage/LoginDoctor"));
const SignUp = lazy(() => import("./components/SignUp/SignUp"));
const SignUpDoctor = lazy(() => import("./components/SignUp/SignUpDoctor"));
const Patient = lazy(() => import("./pages/Patient"));
const Doctor = lazy(() => import("./pages/Doctor"));
const Payment = lazy(() => import("./components/Payment/Payment"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/hospital" element={<Hospital />}></Route>
          <Route path="/emergency" element={<Emergency />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logindoctor" element={<LoginDoctor />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signupdoctor" element={<SignUpDoctor />}></Route>
          <Route path="/patient" element={<Patient />}></Route>
          <Route path="/doctor" element={<Doctor />}></Route>
          <Route path="/payments" element={<Payment />}></Route>
        </Routes>
      </Suspense>
    </Router>
  </>
);
