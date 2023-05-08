import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MainLayouts from "./layouts/MainLayouts";
import Header from "./components/Header/Header";
import {db} from '../src/firebase/Firebase';
import SignUp from "./components/SignUp/SignUp";

function App() {

  return (

           <MainLayouts>
     
            <Header/>
           </MainLayouts>


  );
}

export default App;
