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


const Services = () => {
  return (
    <MainLayouts>
      <div class="container services-container">
        <h1 className="services-title" >
          Services
        </h1>
        <div class="services-grid">
          <div class="services-wrap">
            <RiLoginBoxFill className="services-logo" />
            <div className="services-content">
              <h2>Log In</h2>
              <span>One step closer to your online therapy</span>
            </div>
          </div>
          <div class="services-wrap">
            <BsFillCalendar2CheckFill className="services-logo" />
            <div className="services-content">
              <h2>Book an Appointment</h2>
              <span>Save time, book your appointment online</span>
            </div>
          </div>
          <div class="services-wrap">
            <BsFillChatDotsFill className="services-logo" />
            <div className="services-content">
              <h2>Live Text</h2>
              <span>Text-based therapy when you need it</span>
            </div>
          </div>

          <div class="services-wrap">
            <MdOutlinePayments className="services-logo" />
            <div className="services-content">
              <h2>Payment</h2>
              <span>
                Effortless payments for a hassle-free experience through Khalti
              </span>
            </div>
          </div>

          <div class="services-wrap">
            <FaAmbulance className="services-logo" />
            <div className="services-content">
              <h2>Ambulance</h2>
              <span>Rapid response, saving lives</span>
            </div>
          </div>
          <div class="services-wrap">
            <FaHospitalAlt className="services-logo" />
            <div className="services-content">
              <h2>Hospital</h2>
              <span>Compassionate care at your service</span>
            </div>
          </div>
          <div class="services-wrap">
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
