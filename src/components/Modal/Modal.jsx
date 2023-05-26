import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "./modal.css";
import { RxCross1 } from "react-icons/rx";
const Modal = ({ toggleModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    number: "",
    age: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Access the Firebase Firestore instance
      const db = firebase.firestore();

      // Add the appointment data to the "appointments" collection
      await db.collection("appointments").add({ ...formData });

      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        date: "",
        time: "",
        number: "",
        age: "",
        message: "",
      });

      console.log("Appointment data stored successfully!");
    } catch (error) {
      console.error("Error storing appointment data:", error);
    }
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
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  required
                >
                  <option value="">Select Age</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </label>
            </div>
            <div className="message">
              <label>
                <textarea
                  placeholder="Message"
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
          </form>
          <RxCross1 className="close-modal" onClick={toggleModal} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
