import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Services/services.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <MainLayouts>
      <div className="container services-container">
        <div className="services-grid">
          <Link to="/login">
            <div className="services-wrap">
              <div className="services-logo">
                <RiLoginBoxFill size={90} />
              </div>
              <div className="services-content">
                <h1>Logging In</h1>
                <p>Create a account and log in</p>
              </div>
            </div>
          </Link>

          <div className="services-wrap">
            <div className="services-logo">
              <BsFillChatDotsFill size={90} />
            </div>
            <div className="services-content">
              <h1>Live Chat Session</h1>
              <p>Have a live chat with preferred counsellor</p>
            </div>
          </div>

          <div className="services-wrap">
            <div className="services-logo">
              <BsFillCalendar2CheckFill size={90} />
            </div>
            <div className="services-content">
              <h1>Book an Appointment</h1>
              <p>Book an appointment for physical of mental treatment</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Services;
