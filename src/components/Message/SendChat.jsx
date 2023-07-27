import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebase/Firebase";
import firebase from "firebase/compat/app";

function SendChat({ scroll }) {
  // State to hold the visibility of the sendMsg div
  const [showSendMsg, setShowSendMsg] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const checkUserUidInMessages = async () => {
      const { uid } = auth.currentUser;
      const messagesRef = firestore.collection("messages");
      const querySnapshot = await messagesRef
        .where("receiverUid", "==", uid) // Check for "sendUid" field matching current user's UID
        .get();

      const querySnapshot2 = await messagesRef
        .where("sendUid", "==", uid) // Check for "sendUid" field matching current user's UID
        .get();

      if (!querySnapshot.empty || !querySnapshot2.empty) {
        setShowSendMsg(true); // Set visibility to true if doctor UID is present in messages collection
      } else {
        setShowSendMsg(false); // Set visibility to false if doctor UID is not found
      }
    };

    checkUserUidInMessages();
  }, []);

  async function sendMessage(e) {
    e.preventDefault();
    const { uid } = auth.currentUser;

    await firestore.collection("chats").add({
      text: msg,
      senderUid: uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      {showSendMsg && ( // Display the sendMsg div only if showSendMsg is true
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
      )}
    </div>
  );
}

export default SendChat;
