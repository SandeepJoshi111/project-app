import React, { useState, useEffect, useRef } from "react";
import { firestore } from "../../firebase/Firebase";
import SendChat from "./SendChat";
import "./chat.css";
import UseAuth from "../../hooks/UseAuth";
import "firebase/firestore";

function Chat() {
  const scroll = useRef();
  const [chats, setChats] = useState([]);
  const currentUser = UseAuth();

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
      <div className="msgs">
        {chats.map(({ id, text, senderUid }) => (
          <div>
            {filteredMessages.length > 0 && (
              <div
                key={id}
                className={`msg ${
                  senderUid === currentUser?.uid ? "sent" : "received"
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
