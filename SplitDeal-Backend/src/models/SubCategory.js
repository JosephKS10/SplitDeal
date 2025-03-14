const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }, // Reference to the parent category
  logoLink: { type: String }, // Link to the logo/image
}, { timestamps: true });

module.exports = mongoose.model("SubCategory", SubCategorySchema);