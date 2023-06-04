import React, { useEffect, useState } from "react";
import "./textmodal.css";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import firebase from "firebase/compat/app";
import "firebase/firestore";

const TextModal = ({ toggleTextModal }) => {
  const navigate = useNavigate();
  const currentUser = UseAuth();

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Access the Firebase Firestore instance
        const db = firebase.firestore();

        // Fetch the messages for the current user or any other relevant condition
        const query = db
          .collection("messages")
          .where("receiver", "==", currentUser.email);
        const snapshot = await query.get();

        // Convert the snapshot data into an array of message objects
        const messageData = snapshot.docs.map((doc) => doc.data());

        // Update the messages state
        setMessages(messageData);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [currentUser.email]);
  // const handleCloseModal = () => {
  //   toggleTextModal(); // Close the modal
  //   navigate("/login"); // Navigate to /login
  // };
  return (
    <div className="modal-text">
      <div className="message-list">
        <h4>Messages:</h4>
        {messages.length === 0 ? (
          <p>No messages available.</p>
        ) : (
          <ul>
            {messages.map((message, index) => (
              <li key={index}>
                {/* <p>Sender: {message.sender}</p> */}
                <p>{message.message}</p>
                {/* <p>Timestamp: {message.timestamp.toDate().toString()}</p> */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TextModal;
