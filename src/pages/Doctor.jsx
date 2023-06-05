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
        const appointmentData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
          };
        });
        setAppointments(appointmentData);
      };

      fetchAppointments();
    }
  }, [currentUser]);

  const handleAccept = async (appointment) => {
    // Send a message to the patient
    const messagesRef = firestore.collection("messages");
    const newMessage = {
      sender: currentUser.email, // or any identifier for the doctor
      receiver: appointment.patientEmail, // or any identifier for the patient
      message: "Your appointment has been accepted.",
      timestamp: new Date(),
    };
    alert("Accepted");
    await messagesRef.add(newMessage);

    // Update the state to remove the deleted appointment
    setAppointments((prevAppointments) =>
      prevAppointments.filter(
        (prevAppointment) => prevAppointment.id !== appointment.id
      )
    );
    // Delete the accepted appointment
    const appointmentsRef = firestore.collection("appointments");
    await appointmentsRef.doc(appointment.id).delete();
  };
  const handleReject = async (appointment) => {
    // Send a message to the patient
    const messagesRef = firestore.collection("messages");
    const newMessage = {
      sender: currentUser.email, // or any identifier for the doctor
      receiver: appointment.patientEmail, // or any identifier for the patient
      message: "Sorry! The schedule is pack.",
      timestamp: new Date(),
    };
    alert("Rejected");
    await messagesRef.add(newMessage);

    // Delete the accepted appointment
    const appointmentsRef = firestore.collection("appointments");
    await appointmentsRef.doc(appointment.id).delete();

    // Update the state to remove the deleted appointment
    setAppointments((prevAppointments) =>
      prevAppointments.filter(
        (prevAppointment) => prevAppointment.id !== appointment.id
      )
    );
  };

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
                        <button
                          className="btn-patient"
                          onClick={() => handleAccept(appointment)}
                        >
                          Accept
                        </button>
                        <button
                          className="btn-patient"
                          onClick={() => handleReject(appointment)}
                        >
                          Reject
                        </button>
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
