import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "./header.css";
import HOMEDOC from "../../assets/undraw_doctors_p6aq.svg";

function Header() {
  const [clipPath, setClipPath] = useState("initial");

  return (
    <>
      <div className="container header-container">
        <div className="header-content" style={{ clipPath }}>
          <div className="home-image">
            <img src={HOMEDOC} alt="" />
          </div>
          <div className="home-content">
            <div className="home-quote">
              <h1>
                Welcome to <br /> Health Care Nepal
              </h1>
              <h4>Consult Online</h4>
              <div class="home-separator">तपाईकै लागी</div>
              <h5>only trusted doctors from across Nepal</h5>
              "राम्रो स्वास्थ्य नै उत्तम धन हो।"
            </div>
            <div className="home-button">
              <button className="btn-home">Details</button>
            </div>
          </div>
        </div>
        <div className="about-container" id="about">
          About Us
        </div>
      </div>
    </>
  );
}

export default Header;
