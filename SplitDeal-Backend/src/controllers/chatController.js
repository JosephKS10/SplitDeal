const Chat = require("../models/Chat");

// 📌 CREATE A MESSAGE (POST)
exports.createMessage = async (req, res) => {
  try {
    const { user_name, message, groupID } = req.body;

    // Validate input
    if (!user_name || !message || !groupID) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Create a new chat message
    const newMessage = new Chat({
      user_name,
      message,
      groupID,
    });

    await newMessage.save();

    res.status(201).json({ msg: "Message sent successfully", newMessage });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 📌 GET ALL MESSAGES FOR A GROUP (GET)
exports.getMessagesByGroup = async (req, res) => {
  try {
    const { groupID } = req.params;

    // Find all messages related to the group, sorted from oldest to newest
    const messages = await Chat.find({ groupID }).sort({ time_of_message: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};
