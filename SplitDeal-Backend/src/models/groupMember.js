const mongoose = require('mongoose');

const GroupMemberSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to the user
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true }, // Reference to the group
  dealId: { type: mongoose.Schema.Types.ObjectId, ref: 'Deal', required: true }, // Reference to the deal
  contribution: { type: Number, required: true }, // Value of the product contributed
  productPhoto: { type: String }, // Photo of the product contribution
  isVerified: { type: Boolean, default: false }, // Admin: true by default, Team Member: false by default
  ratings: { type: Number, min: 0, max: 5 }, // Ratings (can be fetched from user profile)
  ratingsProvided: { 
    type: String, 
    enum: ["not submitted", "skipped", "submitted"], 
    default: "not submitted" 
  }, // Default: "not submitted"
  role: { type: String, enum: ["admin", "team-member"], required: true }, // Either admin or team-member
}, { timestamps: true });

module.exports = mongoose.model("GroupMember", GroupMemberSchema);
