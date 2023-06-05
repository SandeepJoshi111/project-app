import React, { useEffect } from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Services/services.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FaHospitalAlt } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <MainLayouts>
      <div class="container services-container">
        <motion.h1
          className="services-title"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Services
        </motion.h1>
        <div class="services-grid">
          <motion.div
            class="services-wrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <RiLoginBoxFill className="services-logo" />
            <div className="services-content">
              <h2>Log In</h2>
              <span>One step closer to your online therapy</span>
            </div>
          </motion.div>

          <motion.div
            class="services-wrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <BsFillCalendar2CheckFill className="services-logo" />
            <div className="services-content">
              <h2>Book an Appointment</h2>
              <span>Save time, book your appointment online</span>
            </div>
          </motion.div>

          <motion.div
            class="services-wrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <BsFillChatDotsFill className="services-logo" />
            <div className="services-content">
              <h2>Live Text</h2>
              <span>Text-based therapy when you need it</span>
            </div>
          </motion.div>

          <motion.div
            class="services-wrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <MdOutlinePayments className="services-logo" />
            <div className="services-content">
              <h2>Payment</h2>
              <span>
                Effortless payments for a hassle-free experience through Khalti
              </span>
            </div>
          </motion.div>

          <motion.div
            class="services-wrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <FaAmbulance className="services-logo" />
            <div className="services-content">
              <h2>Ambulance</h2>
              <span>Rapid response, saving lives</span>
            </div>
          </motion.div>

          <motion.div
            class="services-wrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <FaHospitalAlt className="services-logo" />
            <div className="services-content">
              <h2>Hospital</h2>
              <span>Compassionate care at your service</span>
            </div>
          </motion.div>
          <motion.div
            class="services-wrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <MdContactPhone className="services-logo" />
            <div className="services-content">
              <h2>Contact</h2>
              <span>We're just a click away</span>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Services;
