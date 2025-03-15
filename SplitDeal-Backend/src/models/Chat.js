const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  user_name: { type: String, required: true }, // Name of the user sending the message
  message: { type: String, required: true }, // The chat message
  time_of_message: { type: Date, default: Date.now }, // Timestamp for the message
  groupID: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true }, // Reference to the Group
});

module.exports = mongoose.model("Chat", ChatSchema);