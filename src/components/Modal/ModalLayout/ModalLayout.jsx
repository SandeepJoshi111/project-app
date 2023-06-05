import React from "react";
import "./modallayout.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
        <motion.div
          className="modal-content-layout"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <p className="modal-title-layout">{title}</p>
          <button className="close-modal-layout" onClick={handleCloseModal}>
            Close
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ModalLayout;
