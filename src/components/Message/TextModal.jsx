import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import "./textmodal.css";


const TextModal = () => {
  return (
    <div className="modal-text">
      <Chat />
    </div>
  );
};

export default TextModal;
