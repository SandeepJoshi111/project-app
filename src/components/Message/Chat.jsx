import React, { useState, useEffect, useRef } from "react";
import { auth, firestore } from "../../firebase/Firebase";
import SendChat from "./SendChat";
import "./chat.css";
import UseAuth from "../../hooks/UseAuth";
import firebase from "firebase/compat/app";
import "firebase/firestore";

function Chat() {
  const scroll = useRef();
  const [chats, setChats] = useState([]);
  const currentUser = UseAuth();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading

  const [sentmessage, setSentMessage] = useState([]);

  // TO REMOVE TEXT SENT ON OTHER ACCOUNT
  useEffect(() => {
    // Fetch sentmessage from Firestore
    const fetchSentMessages = async () => {
      try {
        const messagesRef = firestore.collection("messages");
        const snapshot = await messagesRef.get();

        const messagesData = [];
        snapshot.forEach((doc) => {
          const message = doc.data();
          messagesData.push(message);
        });

        setSentMessage(messagesData);
      } catch (error) {
        console.error("Error fetching sentmessage:", error);
      }
    };

    fetchSentMessages();
  }, []);

  const filteredMessages = sentmessage.filter(
    (message) =>
      (message.receiver === currentUser?.email ||
        message.senderEmail === currentUser?.email) &&
      currentUser?.email
  );

  // TO DISPLAY IF APPOINTMENT IS BOOKED OR NOT
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
          .orderBy(firebase.firestore.FieldPath.documentId(), "asc");

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

  // FOR CHAT
  useEffect(() => {
    firestore
      .collection("chats")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setChats(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <div className="message-list">
        {/* <h4>Messages:</h4> */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {messages.length === 0 && <p>No messages available.</p>}
            {messages.length > 0 && (
              <ul>
                {messages.map((message, index) => (
                  <li key={index}>
                    <p>From: Dr. {message.sender}</p>
                    <p>{message.message}</p>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>

      <div className="msgs">
        {chats.map(({ id, text, uid }) => (
          <div>
            {filteredMessages.length > 0 && (
              <div
                key={id}
                className={`msg ${
                  uid === currentUser?.uid ? "sent" : "received"
                }`}
              >
                <p className="text-msg">{text}</p>
              </div>
            )}
          </div>
        ))}
        <div ref={scroll}></div>
      </div>
      <SendChat scroll={scroll} />
    </div>
  );
}

export default Chat;
