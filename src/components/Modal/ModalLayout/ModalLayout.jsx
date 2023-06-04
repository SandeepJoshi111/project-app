import React from "react";
import "./modallayout.css";
import { useNavigate } from "react-router-dom";

const ModalLayout = ({ toggleModalLayout, title }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    toggleModalLayout(); // Close the modal
    navigate("/"); // Navigate to /home
  };
  return (
    <div className="modal-layout">
      <div className="overlay-layout">
        <div className="modal-content-layout">
          <p className="modal-title-layout">{title}</p>
          <button className="close-modal-layout" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
