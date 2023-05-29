import React from "react";
import "./modalregister.css";
import { useNavigate } from "react-router-dom";
const ModalRegisterDoctor = ({ toggleModalRegister }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    toggleModalRegister(); // Close the modal
    navigate("/logindoctor"); // Navigate to /login
  };
  return (
    <div className="modal-signup">
      <div className="overlay-signup">
        <div className="modal-content-signup">
          <p className="modal-title-signup">
            Successfully Registered as Doctor
          </p>
          <button className="close-modal-signup" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRegisterDoctor;
