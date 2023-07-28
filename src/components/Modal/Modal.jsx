import React, { useState } from "react";
import ModalLayout from "./ModalLayout/ModalLayout";
import "./modal.css";

// ----------FIREBASE----------
import firebase from "firebase/compat/app";
import UseAuth from "../../hooks/UseAuth";
import { auth } from "../../firebase/Firebase";
import "firebase/firestore";

// ----------ICONS----------
import { RxCross1 } from "react-icons/rx";

const Modal = ({ toggleModal, doctorEmail }) => {
  const currentUser = UseAuth();
  const { uid } = auth.currentUser;
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    //Create a form with the following user credential
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    number: "",
    age: "",
    message: "",
    patientUid: uid,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Access the Firebase Firestore instance
      const db = firebase.firestore();

      // Add the appointment data to the "appointments" collection
      await db.collection("appointments").add({
        ...formData,
        doctorEmail: doctorEmail, // adding doctorEmail to the appointments collection
        patientEmail: currentUser.email, // adding patientEmail to the appointments collection
      });

      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        date: "",
        time: "",
        number: "",
        age: "",
        message: "",
        patientUid: "",
      });

      toggleModalLayout();
      console.log("Appointment data stored successfully!");
    } catch (error) {
      console.error("Error storing appointment data:", error);
    }
  };
  const toggleModalLayout = () => {
    setModal(!modal);
  };

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <form className="form" onSubmit={handleSubmit}>
            <p className="modal-title">Book an Appointment </p>

            <div className="names">
              <label>
                <input
                  placeholder="First Name"
                  type="text"
                  className="input"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </label>

              <label>
                <input
                  placeholder="Last Name"
                  type="text"
                  className="input"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </label>
            </div>
            <div className="dates">
              <label>
                <input
                  placeholder="Date"
                  type="date"
                  className="input"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                />
              </label>

              <label>
                <input
                  placeholder="Time"
                  type="time"
                  className="input"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  required
                />
              </label>
            </div>

            <div className="creadential">
              <label>
                <input
                  placeholder="Phone Number"
                  type="text"
                  className="input"
                  id="phone"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                  required
                />
              </label>
              <label>
                <input
                  placeholder="Enter Age"
                  type="text"
                  id="age"
                  className="input"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  required
                />
              </label>
            </div>
            <div className="message">
              <label>
                <textarea
                  placeholder="Physical or Online appointment"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="input"
                />
              </label>
            </div>

            <button className="btn-modal" type="submit">
              Submit
            </button>
            <RxCross1 className="close-modal" onClick={toggleModal} />
          </form>
        </div>
      </div>
      {modal && (
        <ModalLayout
          toggleModalLayout={toggleModalLayout}
          title="Successfully booked an appointment"
          userType="appointment"
        />
      )}
    </div>
  );
};

export default Modal;
