import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "../components/Patient/patient.css";
import MainLayouts from "../layouts/MainLayouts";
import { FaUserMd } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import Modal from "../components/Modal/Modal";

function Doctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase collection
    const fetchData = async () => {
      const db = firebase.firestore();
      const collectionRef = db.collection("doctor");
      const snapshot = await collectionRef.get();
      const doctorData = snapshot.docs.map((doc) => doc.data());
      setDoctors(doctorData);
    };

    fetchData();
  }, []);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <MainLayouts>
      <h2>Online Registered Doctors</h2>
      <div className="contaienr patient-container">
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
                <div className="doctor-location">
                  <p>{doctor.speciality}</p>
                </div>
                <div className="buttons">
                  <div className="book-an-appointment">
                    <button className="btn-book" onClick={toggleModal}>
                      Book an Appointment
                    </button>
                  </div>
                  <div className="payment">
                    <button className="btn-pay">Payments</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {modal && <Modal toggleModal={toggleModal} />}
      </div>
    </MainLayouts>
  );
}

export default Doctor;
