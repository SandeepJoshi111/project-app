import React from "react";
import "./modallogout.css";
import { useNavigate } from "react-router-dom";

const ModalLogout = ({ toggleModalLogout }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    toggleModalLogout(); // Close the modal
    navigate("/"); // Navigate to /home
  };
  return (
    <div className="modal-logout">
      <div className="overlay-logout">
        <div className="modal-content-logout">
          <p className="modal-title-logout">Logged Out</p>
          <button className="close-modal-logout" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
