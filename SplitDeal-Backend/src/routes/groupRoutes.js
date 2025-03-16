const express = require("express");
const router = express.Router();
const {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroupStatus,
  updateReceiptImage,
  updateMembersRequired,
  deleteGroup
} = require("../controllers/groupController");

const authMiddleware = require("../middlewares/authMiddleware");

//  Route to create a new group
router.post("/create-group",authMiddleware, createGroup);

//  Route to get all groups
router.get("/get-groups", getAllGroups);

//  Route to get a group by ID
router.get("/get-group/:id",authMiddleware, getGroupById);

//  Route to update group status
router.put("/update-group-status/:id",authMiddleware, updateGroupStatus);

//Route to update receipt image based on group ID
router.put("/update-receipt/:id", authMiddleware, updateReceiptImage);

router.put("/update-members-required/:id", authMiddleware, updateMembersRequired);

router.delete("/delete-group/:id", authMiddleware, deleteGroup);


module.exports = router;