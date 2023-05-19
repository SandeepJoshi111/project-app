import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import './header.css'
import HOMEDOC from '../../assets/home doc.png'

function Header() {
  const [clipPath, setClipPath] = useState('initial');

  return (
    <div  className="container header-container">
        <div className="header-content" style={{ clipPath }}>
          <img src={HOMEDOC} alt="" />
      
        </div>
  </div>
  );
}

export default Header;
