import { useEffect, useRef, useState } from "react";
import MainLayouts from "../../layouts/MainLayouts";
import { Link } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import emailjs from "emailjs-com";
import "./header.css";

// ----------FIREBASE----------
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import { firestore } from "../../firebase/Firebase";

// ----------IMAGES----------
import HOMEDOC from "../../assets/SVGFINAL.svg";
import KHALTI from "../../assets/khalti.png";

// ----------ICONS----------
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

// ----------ANIMATION----------
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [clipPath, setClipPath] = useState("initial");
  const currentUser = UseAuth();
  const [isDoctor, setIsDoctor] = useState(false);

  // For animation
  useEffect(() => {
    AOS.init({ duraction: 2000 });
  }, []);

  useEffect(() => {
    //Checking if the user is a doctor or not
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

  //To send an email to our account using email.js
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
      {/* ----------HOME SECTION---------- */}
      <div className="container header-container">
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
        {/* ----------END OF HOME SECTION---------- */}

        {/* ----------ABOUT SECTION---------- */}
        <section className="about-container" id="about">
          <h1 className="home-title" data-aos="zoom-in-up">
            About Us
          </h1>
          <div className="about-content">
            <div className="left-about">
              <div className="about-us">
                <h4 data-aos="fade-up">Why Health Care Nepal?</h4>
                <p data-aos="fade-up">
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
                  <h4 data-aos="fade-up">Consult With Doctor</h4>
                  <span data-aos="fade-up">
                    Talk to a doctor regarding your health issue.
                  </span>
                </div>

                {/* Disabling button so Patient cant go to Doctor Page and vice versa */}
                {currentUser && isDoctor ? (
                  <Link to="/patient">
                    <button
                      className="btn-home disabled"
                      disabled
                      data-aos="fade-up"
                    >
                      View all
                    </button>
                  </Link>
                ) : (
                  <Link to={currentUser ? "/patient" : "/login"}>
                    <button className="btn-home" data-aos="fade-up">
                      View all
                    </button>
                  </Link>
                )}
              </div>
              <div className="right-about-content">
                <div className="about-user">
                  <h4 data-aos="fade-up"> View Appointment</h4>
                  <span data-aos="fade-up">
                    View who booked an appointment?
                  </span>
                </div>
                {currentUser && !isDoctor ? (
                  <Link to="/doctor">
                    <button
                      className="btn-home disabled"
                      disabled
                      data-aos="fade-up"
                    >
                      View all
                    </button>
                  </Link>
                ) : (
                  <Link to={currentUser ? "/doctor" : "/logindoctor"}>
                    <button className="btn-home" data-aos="fade-up">
                      View all
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* ----------END OF ABOUT SECTION---------- */}

        {/* ----------CONTACT SECTION---------- */}
        <section className="contact-container" id="contact">
          <h1 className="home-title" data-aos="zoom-in-up">
            Contact Us
          </h1>
          <div className="heatbeat-content" data-aos="zoom-in-up">
            <svg className="heartbeat" x="0px" y="0px" viewBox="0 0 298 53.9">
              <path
                class="pathdraw"
                d="M297.5,41.2h-76.6c-0.5,0-0.9,0.4-1,0.8l-1.6,11.3l-3.1-32c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8
                       l-5.3,25.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6l-2.3,4.8h-107c0,0,0,0,0,0H82c-1.6,0-2.2,1.1-2.2,1.6
                       l-1.6,11.3l-3.1-52c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8l-9.3,45.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6
                       l-2.3,4.8H0.5"
              />
            </svg>
          </div>
          <div className="contact-content" data-aos="zoom-in-up">
            <div className="contact-right">
              <p data-aos="fade-up"> Fill up the form to contact</p>
              <a href="tel:9818119950" data-aos="fade-up">
                <BsFillTelephoneFill /> <p>9818119950</p>
              </a>
              <a href="tel:9840556101" data-aos="fade-up">
                <BsFillTelephoneFill /> <p>9840556101</p>
              </a>
              <a
                href="https://www.google.com/maps/place/Pashupatinath+Temple/@27.710512,85.3462376,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb191aaaaaaaab:0x424c7d0a60df9091!8m2!3d27.710512!4d85.3488125!16zL20vMGNzX2hz?entry=ttu"
                data-aos="fade-up"
              >
                <MdLocationPin /> <p>Kathmandu,Nepal</p>
              </a>
              <div className="social-media">
                <a href="" data-aos="zoom-in-up">
                  <BsFacebook />
                </a>
                <a
                  href="https://github.com/SandeepJoshi111/project-app"
                  target="_blank"
                  data-aos="zoom-in-up"
                >
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
                  data-aos="zoom-in-up"
                />
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  data-aos="zoom-in-up"
                />
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  className="contact-input"
                  data-aos="zoom-in-up"
                ></textarea>
                <button type="submit" className="btn-home" data-aos="fade-up">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* ----------END OF CONTACT SECTION---------- */}

        {/* ----------FOOTER SECTION---------- */}
        <footer data-aos="fade-up">
          <div className="footer-quote" data-aos="zoom-in-up">
            "Online resources, offline impact"
          </div>

          <div className="seperator-footer"></div>
          <div className="footer-grid ">
            <div className="footer-payment">
              <h2 data-aos="fade-up">We accept Payment with </h2>
              <img src={KHALTI} alt="Khalti-Image" data-aos="zoom-in-up" />
            </div>
            <div className="footer-content">
              <div className="permalinks">
                <li>
                  <a href="#" data-aos="fade-up">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" data-aos="fade-up">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" data-aos="fade-up">
                    Contact Us
                  </a>
                </li>
              </div>

              <div className="footer-social-media">
                <a href="" data-aos="zoom-in-up">
                  <BsFacebook />
                </a>
                <a
                  href="https://github.com/SandeepJoshi111/project-app"
                  target="_blank"
                  data-aos="zoom-in-up"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <small>
              All rights reserved &copy; <br /> Designed by Dristi Gurung.
              Webcasted by Sandeep Joshi.
            </small>
          </div>
        </footer>
        {/* ----------END OF FOOTER SECTION---------- */}
      </div>
    </MainLayouts>
  );
}

export default Header;
