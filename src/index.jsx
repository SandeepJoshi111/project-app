import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Emergency from "./pages/Emergency";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUp/SignUp";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";
import Hospital from "./pages/Hospital";
import Services from "./pages/Services";
import SignUpDoctor from "./components/SignUp/SignUpDoctor";
import LoginDoctor from "./components/LoginPage/LoginDoctor";
import Payment from "./components/Payment/Payment";
import Header from "./components/Header/Header";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/services",
//     element: <Services />,
//   },
//   {
//     path: "/hospital",
//     element: <Hospital />,
//   },
//   {
//     path: "/emergency",
//     element: <Emergency />,
//   },

//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/logindoctor",
//     element: <LoginDoctor />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/signupdoctor",
//     element: <SignUpDoctor />,
//   },
//   {
//     path: "/patient",
//     element: <Patient />,
//   },
//   {
//     path: "/doctor",
//     element: <Doctor />,
//   },
//   {
//     path: "/payments",
//     element: <Payment />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      
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
    </Router>

    {/* <RouterProvider router={router} /> */}
  </>
);
