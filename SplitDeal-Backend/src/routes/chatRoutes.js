const express = require("express");
const router = express.Router();
const { createMessage, getMessagesByGroup } = require("../controllers/chatController");

const authMiddleware = require("../middlewares/authMiddleware");

// 📌 Route to send a message
router.post("/send-message", authMiddleware, createMessage);

// 📌 Route to get messages for a specific group (sorted in ascending order)
router.get("/get-messages/:groupID", authMiddleware, getMessagesByGroup);

module.exports = router;
