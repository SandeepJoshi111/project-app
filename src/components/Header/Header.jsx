import { useEffect, useRef, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "./header.css";
import HOMEDOC from "../../assets/undraw_medicine_b-1-ol.svg";
import MainLayouts from "../../layouts/MainLayouts";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import LOGO from "../../assets/HCN-removebg-preview.png";

function Header() {
  const [clipPath, setClipPath] = useState("initial");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_93mxinu",
      "template_xb0pv3l",
      form.current,
      "EACVzdlFnYh2JfrHc"
    );

    e.target.reset();
  };
  return (
    <MainLayouts>
      <div className="container header-container">
        {/* <marquee className="home-marquee">
          हेल्थ केयर नेपालबाट अपोइन्टमेन्ट बुक गर्दा १०% छुट पाउनुहोस्।
        </marquee> */}
        <div className="header-content" style={{ clipPath }}>
          <div className="home-image">
            <img src={HOMEDOC} alt="" />
          </div>
          <div className="home-content">
            <div className="home-quote">
              <h1>
                Welcome to <br />{" "}
                <span className="home-name"> Health Care Nepal</span>
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
              <a href="#contact">
                <button className="btn-home">Contact Us</button>
              </a>
            </div>
          </div>
        </div>

        <section className="about-container" id="about">
          <h1 className="home-title">About Us</h1>
          <div className="about-content">
            <div className="left-about">
              <div className="about-us">
                <h4>Why Health Care Nepal?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate soluta laudantium aperiam natus explicabo dolore
                  dolores quas architecto. Quam quia voluptatibus temporibus,
                  facere laudantium corporis nesciunt repudiandae aliquid sint
                  suscipit nulla aperiam saepe illo vero quod excepturi rerum
                  labore id.
                </p>
              </div>
            </div>
            <div className="seperator-about"></div>
            <div className="right-about">
              <div className="right-about-content">
                <div className="about-user">
                  <h4>Cosult With Doctor</h4>
                  <span>Talk to a doctor regarding your health issue.</span>
                </div>

                <Link to="/patient">
                  <button className="btn-home">View all</button>
                </Link>
              </div>
              <div className="right-about-content">
                <div className="about-user">
                  <h4>Check Report</h4>
                  <span>Check Report of your Patient</span>
                </div>
                <Link to="/doctor">
                  <button className="btn-home">View Report</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-container" id="contact">
          <h1 className="home-title">Contact Us</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="contact-input"
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              className="contact-input"
            ></textarea>
            <button type="submit" className="btn-home">
              Send Message
            </button>
          </form>
        </section>

        <footer>
          {/* <div className="logo">
            <img src={LOGO} alt="" />
          </div> */}

          <ul className="permalinks">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="footer-copyright">
            <small>&copy; Designed by Dristi Gurung and Sandeep Joshi .</small>
          </div>
        </footer>
      </div>
    </MainLayouts>
  );
}

export default Header;
