import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MainLayouts from "./layouts/MainLayouts";
import Header from "./components/Header/Header";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import Login from "./components/LoginPage/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <MainLayouts>
      <Header/>
    </MainLayouts>
  );
}

export default App;
