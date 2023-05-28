import React, { useState } from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Services/services.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <MainLayouts>
      <div class="container services-container">
        <h1 className="services-title">Services</h1>
        <div class="services-grid">
          <div class="services-wrap">
            <RiLoginBoxFill className="services-logo" />
            <div className="services-content">
              <h2>Log In</h2>
              <span>Easy Login</span>
            </div>
          </div>
          <div class="services-wrap">
            <BsFillCalendar2CheckFill className="services-logo" />
            <div className="services-content">
              <h2>Book an Appointment</h2>
              <span>Booking an appiontment</span>
            </div>
          </div>
          <div class="services-wrap">
            <BsFillChatDotsFill className="services-logo" />
            <div className="services-content">
              <h2>Live Text</h2>
              <span>Have a Live Chat with your preferred Doctor</span>
            </div>
          </div>

          <div class="services-wrap">
            <BsFillChatDotsFill className="services-logo" />
            <div className="services-content">
              <h2>App Development</h2>
              <span>Hello</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Services;
