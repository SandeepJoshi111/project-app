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
import KHALTI from "../../assets/khalti.png";
import UseAuth from "../../hooks/UseAuth";
import { firestore } from "../../firebase/Firebase";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Header() {
  const [clipPath, setClipPath] = useState("initial");
  const currentUser = UseAuth();

  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.email) {
      const doctorsCollection = firestore.collection("doctor");
      // Query the "doctor" collection for the user's email
      doctorsCollection
        .where("email", "==", currentUser.email)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            // User exists in the "doctor" collection
            setIsDoctor(true);
          }
        })
        .catch((error) => {
          console.log("Error getting doctor data:", error);
        });
    }
  }, [currentUser]);

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
                  Health Care Nepal (HCN) is an online health platform where you
                  can connect with your preferred doctor and have a live session
                  with them. Nepal's first online mental healthcare service
                  providing website aimed to make healthcare services easy, fast
                  and affordable.
                </p>
              </div>
            </div>
            <div className="seperator-about"></div>
            <div className="right-about">
              <div className="right-about-content">
                <div className="about-user">
                  <h4>Consult With Doctor</h4>
                  <span>Talk to a doctor regarding your health issue.</span>
                </div>
                {currentUser && isDoctor ? (
                  <Link to="/patient">
                    <button className="btn-home disabled" disabled>
                      View all
                    </button>
                  </Link>
                ) : (
                  <Link to={currentUser ? "/patient" : "/login"}>
                    <button className="btn-home">View all</button>
                  </Link>
                )}
              </div>
              <div className="right-about-content">
                <div className="about-user">
                  <h4>View Appointment</h4>
                  <span>View who booked an appointment?</span>
                </div>
                {currentUser && !isDoctor ? (
                  <Link to="/doctor">
                    <button className="btn-home disabled" disabled>
                      View all
                    </button>
                  </Link>
                ) : (
                  <Link to={currentUser ? "/doctor" : "/logindoctor"}>
                    <button className="btn-home">View all</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-container" id="contact">
          <h1 className="home-title">Contact Us</h1>
          {/* <div className="contact-divider"> */}
          <div className="heatbeat-content">
            <svg
              className="heartbeat"
              width="800"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g class="pathdraw" id="Layer_1">
                <title>Pulse Heart</title>
                <path
                  id="svg_1"
                  d="m162.5,299.2l142.5,-0.2l8,-23l11,23l34,0l14,-109l14,226l12,-118l30,0l5,-15l10,0l7,-16l10,31l155,0"
                />
              </g>
            </svg>
          </div>
          <div className="contact-content">
            <div className="contact-right">
              <p>Fill up the form to contact us</p>
              <a href="">
                <BsFillTelephoneFill /> <p>9818119950</p>
              </a>
              <a href="">
                <MdLocationPin /> <p>Kathmandu,Nepal</p>
              </a>
              <div className="social-media">
                <a href="">
                  <BsFacebook />
                </a>
                <a href="">
                  <BsGithub />
                </a>
              </div>
            </div>
            <div className="seperator-about"></div>
            <div className="contact-left">
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
            </div>
            {/* </div> */}
          </div>
        </section>

        <footer>
          {/* <div className="logo">
            <img src={LOGO} alt="" />
          </div> */}

          <div className="permalinks">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </div>
          <div className="footer-payment">
            <h2>We accept Payment with </h2>
            <img src={KHALTI} alt="Khalti-Image" />
          </div>
          <div className="footer-copyright">
            <small>&copy; Designed by Dristi Gurung and Sandeep Joshi .</small>
          </div>
        </footer>
      </div>
    </MainLayouts>
  );
}

export default Header;
