import React from "react";
import "./modal.css";
import { RxCross1 } from "react-icons/rx";
const Modal = ({ toggleModal }) => {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <form class="form">
            <p class="title">Book an Appointment </p>

            <div class="names">
              <label>
                <input
                  required=""
                  placeholder="First Name"
                  type="text"
                  class="input"
                />
              </label>

              <label>
                <input
                  required=""
                  placeholder="Last Name"
                  type="text"
                  class="input"
                />
              </label>
            </div>
            <label>
              <input
                required=""
                placeholder="Phone Number"
                type="password"
                class="input"
              />
            </label>

            <label>
              <input
                required=""
                placeholder="Email"
                type="email"
                class="input"
              />
            </label>

            <label>
              <input
                required=""
                placeholder="Message"
                type="password"
                class="input"
              />
            </label>
            <button class="btn-modal">Submit</button>
          </form>
          <RxCross1 className="close-modal" onClick={toggleModal} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
