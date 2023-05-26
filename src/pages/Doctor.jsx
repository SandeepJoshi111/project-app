import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "../components/Doctor/doctor.css";
import MainLayouts from "../layouts/MainLayouts";
import { FaPrayingHands } from "react-icons/fa";

function Doctor() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data from Firebase
    const fetchAppointments = async () => {
      const db = firebase.firestore();
      const user = firebase.auth().currentUser;

      if (user) {
        const doctorId = user.uid;
        const appointmentsRef = db.collection("appointments");
        const query = appointmentsRef.where("doctorId", "==", doctorId);

        const snapshot = await query.get();
        const appointmentData = snapshot.docs.map((doc) => doc.data());
        setAppointments(appointmentData);
      }
    };

    fetchAppointments();
  }, []);
  return (
    <MainLayouts>
      <div className="container doctor-container">
      <h2 className="doctor-title">Appointments</h2>
        {appointments.length === 0 ? (
          <div className="no-appointments">
            <FaPrayingHands className="praying-hands-icon" />
            <p>No appointments available.</p>
          </div>
        ) : (
          <ul className="appointment-list">
            {appointments.map((appointment, index) => (
              <li key={index} className="appointment-item">
                <p>Patient: {appointment.patientName}</p>
                <p>Date: {appointment.date}</p>
               
              </li>
            ))}
          </ul>
        )}
      </div>
    </MainLayouts>
  );
}

export default Doctor;
