import React, { useEffect, useState } from "react";
import "./textmodal.css";
import UseAuth from "../../hooks/UseAuth";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { motion } from "framer-motion";

const TextModal = () => {
  const currentUser = UseAuth();

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Access the Firebase Firestore instance
        const db = firebase.firestore();

        // Fetch all messages for the current user or any other relevant condition
        const query = db
          .collection("messages")
          .where("receiver", "==", currentUser.email)
          .orderBy(firebase.firestore.FieldPath.documentId())
          .limitToLast(1);

        const snapshot = await query.get();

        if (!snapshot.empty) {
          const messageDoc = snapshot.docs[0];

          // Convert the message document data into an object
          const messageData = messageDoc.data();

          // Update the messages state with the most recent message
          setMessages([messageData]);

          // Delete all other messages except the most recent one
          snapshot.docs.forEach((doc) => {
            if (doc.id !== messageDoc.id) {
              db.collection("messages").doc(doc.id).delete();
            }
          });
        } else {
          // No messages available
          setMessages([]);
        }
      } catch (error) {
        console.error("Error fetching and deleting messages:", error);
      }
    };

    fetchMessages();
  }, [currentUser.email]);

  return (
    <motion.div
      className="modal-text"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
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
    </motion.div>
  );
};

export default TextModal;
