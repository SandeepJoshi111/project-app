import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import Login from "./components/LoginPage/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayouts from "./layouts/MainLayouts";

function App() {
  return (
    <MainLayouts>
      <Header/>
    </MainLayouts>
  );
}

export default App;
