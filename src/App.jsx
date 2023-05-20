import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "firebase/firestore";
import MainLayouts from "./layouts/MainLayouts";
import Services from "./pages/Services";
import Hospital from "./pages/Hospital";
import Emergency from "./pages/Emergency";
import Login from "./components/LoginPage/Login";
import LoginDoctor from "./components/LoginPage/LoginDoctor";
import SignUp from "./components/SignUp/SignUp";
import SignUpDoctor from "./components/SignUp/SignUpDoctor";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";
import Payment from "./components/Payment/Payment";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <>
        <MainLayouts>
          <Header />
        </MainLayouts>
    </>
  );
}

export default App;
