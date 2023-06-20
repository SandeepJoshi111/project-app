import React, { useState } from "react";
import { auth, firestore } from "../../firebase/Firebase";
import firebase from "firebase/compat/app";

function SendChat({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid } = auth.currentUser;

    await firestore.collection("chats").add({
      text: msg,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            className="send-input"
            type="text"
            placeholder="Your Message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="send-button" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendChat;
