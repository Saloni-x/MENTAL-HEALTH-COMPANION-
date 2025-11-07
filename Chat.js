import React, { useState } from "react";+-
import axios from "axios";

function Chat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:5000/chat", { message });
      setReply(res.data.reply);
    } catch (error) {
      setReply("Error connecting to server ");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chat with Bot </h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
      <p><strong>Bot:</strong> {reply}</p>
    </div>
  );
}


export default Chat;
