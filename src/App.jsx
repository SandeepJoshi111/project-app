import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "firebase/firestore";
import MainLayouts from "./layouts/MainLayouts";


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
