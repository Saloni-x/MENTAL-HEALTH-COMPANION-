import express from "express";
import Chat from "../models/Chat.js";

const router = express.Router();

// Dummy AI logic (replace later with real AI)
function generateBotReply(message) {
  if (message.toLowerCase().includes("stress")) {
    return "I sense you are stressed. Take a deep breath 🌿";
  }
  return "Thanks for sharing. I’m here for you 💙";
}

router.post("/", async (req, res) => {
  const { userMessage } = req.body;
  const botReply = generateBotReply(userMessage);

  const newChat = new Chat({ userMessage, botReply });
  await newChat.save();

  res.json(newChat);
});

export default router;