const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, // Reference to parent category (optional)
}, { timestamps: true });

module.exports = mongoose.model("Category", CategorySchema);
