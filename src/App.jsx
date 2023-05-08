import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MainLayouts from "./layouts/MainLayouts";
import { auth } from "./firebase/Firebase";


function App() {
  const[userName,setUserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
        setUserName(user.displayName);

      }
      else{
        setUserName("");
      }
    })
  },[])
  return (

           <MainLayouts>
            <p>Home</p>
           </MainLayouts>


  );
}

export default App;
