import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "./header.css";
import HOMEDOC from "../../assets/undraw_medicine_b-1-ol.svg";
import MainLayouts from "../../layouts/MainLayouts";

function Header() {
  const [clipPath, setClipPath] = useState("initial");

  return (
    <MainLayouts>
      <div className="container header-container">
        <marquee className="home-marquee">
          हेल्थ केयर नेपालबाट अपोइन्टमेन्ट बुक गर्दा १०% छुट पाउनुहोस्।
        </marquee>
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
              <span>"तपाईं जहाँ, स्वास्थ्य सेवा त्यहाँ"</span>
            </div>
            <div className="home-button">
              <a href="#about">
                <button className="btn-home">Details</button>
              </a>
            </div>
          </div>
        </div>

        <section className="about-container" id="about">
          About Us
         
        </section>
      </div>
    </MainLayouts>
  );
}

export default Header;
