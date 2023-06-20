import React, { useState } from "react";
import { auth, firestore } from "../../firebase/Firebase";
import firebase from "firebase/compat/app";

function SendChat() {
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
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Your Message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendChat;
