import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "./header.css";
import HOMEDOC from "../../assets/undraw_doctors_p6aq.svg";

function Header() {
  const [clipPath, setClipPath] = useState("initial");

  return (
    <div className="container header-container">
      <div className="header-content" style={{ clipPath }}>
        <div className="home-image">
          <img src={HOMEDOC} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
