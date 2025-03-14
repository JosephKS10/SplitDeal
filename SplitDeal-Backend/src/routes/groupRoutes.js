const express = require("express");
const router = express.Router();
const {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroupStatus,
} = require("../controllers/groupController");

const authMiddleware = require("../middlewares/authMiddleware");

//  Route to create a new group
router.post("/create-group",authMiddleware, createGroup);

//  Route to get all groups
router.get("/get-groups",authMiddleware, getAllGroups);

//  Route to get a group by ID
router.get("/get-group/:id",authMiddleware, getGroupById);

//  Route to update group status
router.put("/update-group-status/:id",authMiddleware, updateGroupStatus);

module.exports = router;