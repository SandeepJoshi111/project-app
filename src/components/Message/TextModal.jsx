import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import "./textmodal.css";
import UseAuth from "../../hooks/UseAuth";
import { firestore } from "../../firebase/Firebase";

const TextModal = () => {
  const currentUser = UseAuth();

  return (
    <div className="modal-text">
      {" "}
      <Chat />
    </div>
  );
};

export default TextModal;
