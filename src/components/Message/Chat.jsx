import React, { useState, useEffect, useRef } from "react";
import { auth, firestore } from "../../firebase/Firebase";
import SendChat from "./SendChat";
import "./chat.css";

function Chat() {
  const scroll = useRef();
  const [chats, setChats] = useState([]);
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
        {chats.map(({ id, text, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <p className="text-msg">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendChat scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
