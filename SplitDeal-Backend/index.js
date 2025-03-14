require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require("./src/routes/userRoutes");
const categoryRoutes = require('./src/routes/categoryRoutes');
const subCategoryRoutes = require('./src/routes/subCategoryRoutes');
const dealRoutes = require('./src/routes/dealRoutes');
const groupRoutes = require('./src/routes/groupRoutes');
const groupMemberRoutes = require('./src/routes/groupMemberRoutes');
const chatRoutes = require('./src/routes/chatRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Simple Route
app.get('/', (req, res) => {
    res.send('Backend is running...');
});
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/sub-category", subCategoryRoutes);
app.use("/api/user", userRoutes);
app.use("/api/deal", dealRoutes);
app.use("/api/group", groupRoutes);
app.use("/api/group-member", groupMemberRoutes);
app.use("/api/chat", chatRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
