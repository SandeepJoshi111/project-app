import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "firebase/firestore";
import MainLayouts from "./layouts/MainLayouts";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <>
    <MainLayouts>
      <Header/> 
    </MainLayouts>
    </>
  );
}

export default App;
