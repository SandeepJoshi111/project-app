import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "../components/Patient/patient.css";
import MainLayouts from "../layouts/MainLayouts";
import { FaUserMd } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

function Doctor() {
  return (
    <MainLayouts>
      <div className="contaienr patient-container">
        <div className="patient-grid">
          <div className="patient-wrap">
            <div className="doctor-icon-container">
              <div className="doctor-icon">
                <FaUserMd />
              </div>
            </div>
            <div className="doctor-content">
              <div className="doctor-name">
                <h1>Dr. John Doe</h1>
              </div>
              <div className="doctor-location">
                <MdLocationPin /> <p>Hospital Name</p>
              </div>
              <div className="buttons">
                <div className="book-an-appointment">
                  <button className="btn-book">Book an Appointment</button>
                </div>
                <div className="payment">
                  <button className="btn-book">Payments</button>
                </div>
              </div>
            </div>
          </div>
          <div className="patient-wrap">
            <div className="doctor-icon-container">
              <div className="doctor-icon">
                <FaUserMd />
              </div>
            </div>
            <div className="doctor-content">
              <div className="doctor-name">
                <h1>Dr. John Doe</h1>
              </div>
              <div className="doctor-location">
                <MdLocationPin /> <p>Hospital Name</p>
              </div>
              <div className="buttons">
                <div className="book-an-appointment">
                  <button className="btn-book">Book an Appointment</button>
                </div>
                <div className="payment">
                  <button className="btn-book">Payments</button>
                </div>
              </div>
            </div>
          </div>
          <div className="patient-wrap">
            <div className="doctor-icon-container">
              <div className="doctor-icon">
                <FaUserMd />
              </div>
            </div>
            <div className="doctor-content">
              <div className="doctor-name">
                <h1>Dr. John Doe</h1>
              </div>
              <div className="doctor-location">
                <MdLocationPin /> <p>Hospital Name</p>
              </div>
              <div className="buttons">
                <div className="book-an-appointment">
                  <button className="btn-book">Book an Appointment</button>
                </div>
                <div className="payment">
                  <button className="btn-book">Payments</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
}

export default Doctor;
