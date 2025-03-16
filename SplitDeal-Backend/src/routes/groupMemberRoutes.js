const express = require("express");
const router = express.Router();
const {
  createAdminGroupMember,
  createTeamMember,
  deleteTeamMember,
  verifyTeamMember,
  updateRatingsProvided,
  getGroupMembersByGroupId,
  getGroupIdsByUserId,
} = require("../controllers/groupMemberController");

const authMiddleware = require("../middlewares/authMiddleware");

// 📌 Route to create an admin group member
router.post("/create-admin-group-member", authMiddleware, createAdminGroupMember);

// 📌 Route to create a team member
router.post("/create-team-member", authMiddleware, createTeamMember);

// 📌 Route to delete a team member
router.delete("/delete-team-member/:id", authMiddleware, deleteTeamMember);

// 📌 Route to verify a team member
router.put("/verify-team-member/:id", authMiddleware, verifyTeamMember);

// 📌 Route to update ratings provided status
router.put("/update-ratings-provided/:id", authMiddleware, updateRatingsProvided);

router.get("/get-group-members/:groupId", authMiddleware, getGroupMembersByGroupId);

// 📌 Route to get group IDs by user ID
router.get("/get-group-ids/:userId", authMiddleware, getGroupIdsByUserId);

module.exports = router;
