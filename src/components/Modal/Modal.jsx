import React from "react";
import "./modal.css";
import { RxCross1 } from "react-icons/rx";
const Modal = ({ toggleModal }) => {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <form className="form">
            <p className="title">Book an Appointment </p>

            <div className="names">
              <label>
                <input
                  placeholder="First Name"
                  type="text"
                  className="input"
                  required
                />
              </label>

              <label>
                <input
                  placeholder="Last Name"
                  type="text"
                  className="input"
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
                  required
                />
              </label>

              <label>
                <input
                  placeholder="Time"
                  type="time"
                  className="input"
                  required
                />
              </label>
            </div>

            <div className="creadential">
              <label>
                <input
                  placeholder="Phone Number"
                  type="number"
                  className="input"
                  id="phone"
                  required
                />
              </label>
              <label>
                <select id="age" required>
                  <option value="">Select Age</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </label>
            </div>
            <div className="message">
              <label>
                <textarea placeholder="Message" className="input" />
              </label>
            </div>

            <button className="btn-modal">Submit</button>
          </form>
          <RxCross1 className="close-modal" onClick={toggleModal} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
