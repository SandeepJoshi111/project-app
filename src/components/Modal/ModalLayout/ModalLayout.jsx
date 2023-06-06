import React from "react";
import { useNavigate } from "react-router-dom";
import "./modallayout.css";

const ModalLayout = ({ toggleModalLayout, title, userType }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    toggleModalLayout(); // Close the modal

    if (userType === "patient") {
      navigate("/patient");
    } else if (userType === "doctor") {
      navigate("/doctor");
    } else if (userType === "login") {
      navigate("/login");
    } else if (userType === "logindoctor") {
      navigate("/logindoctor");
    } else {
      navigate("/"); // Navigate to /home as a fallback
    }
  };
  return (
    <div className="modal-layout">
      <div className="overlay-layout">
        <div className="modal-content-layout">
          <p className="modal-title-layout">{title}</p>{" "}
          {/* The title is passed from other components and displayed over here*/}
          <button className="close-modal-layout" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
