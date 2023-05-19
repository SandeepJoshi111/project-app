import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import './header.css'


function Header() {
  const [clipPath, setClipPath] = useState('initial');

  return (
    <div  className="container header-container">
        <div className="header-content" style={{ clipPath }}>
          <img src="" alt="" />
      
        </div>
  </div>
  );
}

export default Header;
