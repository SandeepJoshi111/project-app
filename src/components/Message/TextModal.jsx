import React, { useEffect, useState } from "react";
import "./textmodal.css";
import UseAuth from "../../hooks/UseAuth";
import firebase from "firebase/compat/app";
import "firebase/firestore";

const TextModal = () => {
  const currentUser = UseAuth();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Access the Firebase Firestore instance
        const db = firebase.firestore();

        if (!currentUser || !currentUser.email) {
          // User not available or email not present
          setLoading(false);
          return;
        }

        // Fetch all messages for the current user or any other relevant condition
        const query = db
          .collection("messages")
          .where("receiver", "==", currentUser.email)
          .orderBy(firebase.firestore.FieldPath.documentId())
          .limitToLast(1);

        setLoading(true);

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
        console.log("Error fetching and deleting messages:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchMessages();
  }, [currentUser]);

  return (
    <div className="modal-text">
      <div className="message-list">
        <h4>Messages:</h4>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {messages.length === 0 && <p>No messages available.</p>}
            {messages.length > 0 && (
              <ul>
                {messages.map((message, index) => (
                  <li key={index}>
                    <p>{message?.message}</p>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TextModal;
