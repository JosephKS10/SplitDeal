const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// 📌 REGISTER USER
exports.registerUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ user_email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user_password, salt);

    // Create new user
    user = new User({ user_email, user_password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 📌 LOGIN USER
exports.loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;

    // Find user
    const user = await User.findOne({ user_email });
    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

    // Check password
    const isMatch = await bcrypt.compare(user_password, user.user_password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    // Generate JWT token
    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ msg: "Authentication successful", token, user_id: user._id });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};
