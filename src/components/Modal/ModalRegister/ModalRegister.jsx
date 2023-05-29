import React from "react";
import "./modalregister.css";
import { useNavigate } from "react-router-dom";
const ModalRegister = ({ toggleModalRegister }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    toggleModalRegister(); // Close the modal
    navigate("/login"); // Navigate to /login
  };
  return (
    <div className="modal-signup">
      <div className="overlay-signup">
        <div className="modal-content-signup">
          <p className="modal-title-signup">
            SUCCESSFULLY REGISTERED AS PATIENT
          </p>
          <button className="close-modal-signup" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
