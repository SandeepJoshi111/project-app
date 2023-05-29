import React from "react";
import "./modallogin.css";
import { useNavigate } from "react-router-dom";
const ModalLogin = ({ toggleModalLogin }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    toggleModalLogin(); // Close the modal
    navigate("/patient"); // Navigate to /login
  };
  return (
    <div className="modal-login">
      <div className="overlay-login">
        <div className="modal-content-login">
          <p className="modal-title-login">Logged In as a Patient</p>
          <button className="close-modal-login" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
