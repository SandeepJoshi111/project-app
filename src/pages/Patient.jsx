import { useEffect, useState } from "react";
import "firebase/firestore";
import "firebase/compat/auth";
import "../components/Patient/patient.css";
import MainLayouts from "../layouts/MainLayouts";
import { FaUserMd } from "react-icons/fa";
import { BiMessageAltDots } from "react-icons/bi";
import Modal from "../components/Modal/Modal";
import KhaltiCheckout from "khalti-checkout-web";
import config from "../components/Payment/PaymentConfig";
import { firestore } from "../firebase/Firebase";
import TextModal from "../components/Message/TextModal";
import { motion } from "framer-motion";
function Patient() {
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
  const [textmodal, setTextModal] = useState(false);

  const toggleModal = (email) => {
    setModal(!modal);
    setDoctorEmail(email);
  };
  const toggleTextModal = () => {
    setTextModal(!textmodal);
  };

  return (
    <MainLayouts>
      <div className="container patient-container">
        <motion.h2
          className="patient-title"
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
        >
          Online Registered Doctors
        </motion.h2>
        <div className="patient-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="patient-wrap">
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
          ))}
        </div>
        {modal && <Modal toggleModal={toggleModal} doctorEmail={doctorEmail} />}
      </div>
      <button className="bubble" onClick={toggleTextModal}>
        <BiMessageAltDots />
        {textmodal && <TextModal toggleTextModal={toggleTextModal} />}
      </button>
    </MainLayouts>
  );
}

export default Patient;
