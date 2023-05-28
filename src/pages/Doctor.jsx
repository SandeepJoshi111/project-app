import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "../components/Doctor/doctor.css";
import MainLayouts from "../layouts/MainLayouts";
import { FaPrayingHands } from "react-icons/fa";
import UseAuth from "../hooks/UseAuth";
import { firestore } from "../firebase/Firebase";

function Doctor() {
  const currentUser = UseAuth();

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (currentUser) {
      // Fetch appointments data from Firebase
      const fetchAppointments = async () => {
        const appointmentsRef = firestore.collection("appointments");
        const query = appointmentsRef.where(
          "doctorEmail",
          "==",
          currentUser.email
        );

        const snapshot = await query.get();
        const appointmentData = snapshot.docs.map((doc) => doc.data());
        setAppointments(appointmentData);
      };

      fetchAppointments();
    }
  }, [currentUser]);

  return (
    <MainLayouts>
      <div className="container doctor-container">
        <h2 className="doctor-title">Appointments</h2>
        <div className="appointment-container">
          {appointments.length === 0 ? (
            <div className="no-appointments">
              {/* <FaPrayingHands className="praying-hands-icon" /> */}
              <p>No appointments available.</p>
            </div>
          ) : (
            <div className="appointment-list">
              {appointments.map((appointment, index) => (
                <div key={index} className="doctor-grid">
                  <div className="doctor-wrap">
                    <div className="patient-content">
                      <p>
                        Patient:{" "}
                        <span>
                          {appointment.firstName} {appointment.lastName}
                        </span>
                      </p>
                      <p>
                        Age: <span>{appointment.age}</span>
                      </p>
                      <p>
                        Number: <span>{appointment.number}</span>
                      </p>
                      <p>
                        Date: <span>{appointment.date}</span>
                      </p>
                      <p>
                        Time: <span>{appointment.time}</span>
                      </p>
                      <p>
                        Message: <span>{appointment.message}</span>
                      </p>
                      <div className="patient-footer">
                        <button className="btn-patient">Accept</button>
                        <button className="btn-patient">Reject</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayouts>
  );
}

export default Doctor;
