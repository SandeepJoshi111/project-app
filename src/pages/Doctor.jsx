import React, { useEffect, useState } from "react";
import MainLayouts from "../layouts/MainLayouts";
import "../components/Doctor/doctor.css";

// ----------FIREBASE----------
import { firestore } from "../firebase/Firebase";
import "firebase/firestore";
import "firebase/compat/auth";
import UseAuth from "../hooks/UseAuth";

import { BiMessageAltDots } from "react-icons/bi";

// ----------ANIMATION----------
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import TextModal from "../components/Message/TextModal";
import ModalLayout from "../components/Modal/ModalLayout/ModalLayout";

function Doctor() {
  const currentUser = UseAuth();

  const [appointments, setAppointments] = useState([]);
  const [textmodal, setTextModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    AOS.init({ duraction: 2000 });
  }, []);
  useEffect(() => {
    if (currentUser) {
      // Fetch appointments data from Firebase
      const fetchAppointments = async () => {
        const appointmentsRef = firestore.collection("appointments");
        // if email are same then store on query
        const query = appointmentsRef.where(
          "doctorEmail",
          "==",
          currentUser.email
        );

        // Executes query and retrieves snapshot of the document that match the query
        const snapshot = await query.get(); // get is used to fetch the document that match the query

        //doc property contain array of snapshot
        // map create a new object that includes document data and its id
        const appointmentData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data, // spread operator is used to include all existing properties if the data
            id: doc.id,
          };
        });
        // this is so we can extract all the required info from the document
        setAppointments(appointmentData);
      };

      fetchAppointments();
    }
  }, [currentUser]);

  // Send a message to the patient if accept is clicked by the doctor
  const handleAccept = async (appointment) => {
    const messagesRef = firestore.collection("messages");
    const newMessage = {
      sender: currentUser.displayName, // or any identifier for the doctor
      receiver: appointment.patientEmail, // or any identifier for the patient
      message: "Your appointment has been accepted.",
      timestamp: new Date(),
    };
    setModalTitle("Appointment Accepted");
    toggleModalLayout();
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

  // Send a message to the patient when reject is clicked
  const handleReject = async (appointment) => {
    const messagesRef = firestore.collection("messages");
    const newMessage = {
      sender: currentUser.displayName, // or any identifier for the doctor
      receiver: appointment.patientEmail, // or any identifier for the patient
      message: "Sorry! The schedule is pack.",
      timestamp: new Date(),
    };
    setModalTitle("Appointment Rejected");
    toggleModalLayout();
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
  const toggleTextModal = () => {
    setTextModal(!textmodal);
  };

  const toggleModalLayout = () => {
    setModal(!modal);
  };

  return (
    <MainLayouts>
      <div className="container doctor-container">
        <motion.h2
          className="doctor-title"
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          Appointments
        </motion.h2>
        <div className="appointment-container">
          {appointments.length === 0 ? (
            <motion.div
              className="no-appointments"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <p>No appointments available.</p>
            </motion.div>
          ) : (
            <div className="appointment-list">
              {appointments.map((appointment, index) => (
                <div key={index} className="doctor-grid">
                  <div className="doctor-wrap" data-aos="zoom-in-up">
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
      <button className="bubble" onClick={toggleTextModal}>
        <BiMessageAltDots />
      </button>
      {textmodal && <TextModal toggleTextModal={toggleTextModal} />}
      {modal && (
        <ModalLayout toggleModalLayout={toggleModalLayout} title={modalTitle} />
      )}
    </MainLayouts>
  );
}

export default Doctor;
