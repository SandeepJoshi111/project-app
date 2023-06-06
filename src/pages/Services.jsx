import React, { useEffect } from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Services/services.css";

// ----------ICONS----------
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FaHospitalAlt } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";

// ----------ANIMATION----------
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duraction: 2000 });
  }, []);

  return (
    <MainLayouts>
      <div class="container services-container">
        <motion.h1
          className="services-title"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          Services
        </motion.h1>
        <div class="services-grid">
          <div class="services-wrap" data-aos="zoom-in">
            <RiLoginBoxFill className="services-logo" />
            <div className="services-content">
              <h2>Log In</h2>
              <span>One step closer to your online therapy</span>
            </div>
          </div>

          <div class="services-wrap" data-aos="zoom-in">
            <BsFillCalendar2CheckFill className="services-logo" />
            <div className="services-content">
              <h2>Book an Appointment</h2>
              <span>Save time, book your appointment online</span>
            </div>
          </div>

          <div class="services-wrap" data-aos="zoom-in">
            <BsFillChatDotsFill className="services-logo" />
            <div className="services-content">
              <h2>Live Text</h2>
              <span>Text-based therapy when you need it</span>
            </div>
          </div>

          <div class="services-wrap" data-aos="zoom-in">
            <MdOutlinePayments className="services-logo" />
            <div className="services-content">
              <h2>Payment</h2>
              <span>
                Effortless payments for a hassle-free experience through Khalti
              </span>
            </div>
          </div>

          <div class="services-wrap" data-aos="zoom-in">
            <FaAmbulance className="services-logo" />
            <div className="services-content">
              <h2>Ambulance</h2>
              <span>Rapid response, saving lives</span>
            </div>
          </div>

          <div class="services-wrap" data-aos="zoom-in">
            <FaHospitalAlt className="services-logo" />
            <div className="services-content">
              <h2>Hospital</h2>
              <span>Compassionate care at your service</span>
            </div>
          </div>

          <div class="services-wrap" data-aos="zoom-in">
            <MdContactPhone className="services-logo" />
            <div className="services-content">
              <h2>Contact</h2>
              <span>We're just a click away</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Services;
