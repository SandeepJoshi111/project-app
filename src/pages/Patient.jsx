import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "../components/Patient/patient.css";
import MainLayouts from "../layouts/MainLayouts";
import { FaUserMd } from "react-icons/fa";
import Modal from "../components/Modal/Modal";
import { Link } from "react-router-dom";
import KhaltiCheckout from "khalti-checkout-web";
import config from "../components/Payment/PaymentConfig";
import { firestore } from "../firebase/Firebase";

function Doctor() {
  const [doctors, setDoctors] = useState([]);
  const [doctorEmail, setDoctorEmail] = useState("");
  let checkout = new KhaltiCheckout(config);

  useEffect(() => {
    // Fetch data from Firebase collection
    const fetchData = async () => {
      const collectionRef = firestore.collection("doctor");
      const snapshot = await collectionRef.get();
      const doctorData = snapshot.docs.map((doc) => doc.data());
      setDoctors(doctorData);
    };

    fetchData();
  }, []);
  const [modal, setModal] = useState(false);

  const toggleModal = (email) => {
    setModal(!modal);
    setDoctorEmail(email);
  };
  return (
    <MainLayouts>
      <h2 className="patient-title">Online Registered Doctors</h2>
      <div className="container patient-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="patient-grid">
            <div className="patient-wrap">
              <div className="doctor-icon-container">
                <div className="doctor-icon">
                  <FaUserMd />
                </div>
              </div>

              <div className="doctor-content">
                <div className="doctor-name">
                  <h1>
                    Dr. {doctor.firstName} {doctor.lastName}
                  </h1>
                </div>
                <div className="doctor-speciality">
                  <p>{doctor.speciality}</p>
                </div>
                <div className="buttons">
                  <div className="book-an-appointment">
                    <button
                      className="btn-book"
                      onClick={() => toggleModal(doctor.email)}
                    >
                      Book an Appointment
                    </button>
                  </div>
                  <div className="payment">
                    <button
                      className="btn-pay"
                      onClick={() => checkout.show({ amount: 20000 })}
                    >
                      Payments
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {modal && <Modal toggleModal={toggleModal} doctorEmail={doctorEmail} />}
      </div>
    </MainLayouts>
  );
}

export default Doctor;
