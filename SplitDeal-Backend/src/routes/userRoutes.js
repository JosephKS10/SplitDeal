const express = require("express");
const {
  updateProfile,
  updateLocation,
  updateRating,
  updateSuccessfulOrders,
  updateFailedOrders,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Update Profile

// Update Location
router.put("/update-location", authMiddleware, updateLocation);

// Update Rating
router.put("/update-rating/:userId",authMiddleware, updateRating);

// Update Successful Orders
router.put("/successful-order", authMiddleware, updateSuccessfulOrders);

// Update Failed Orders
router.put("/failed-order", authMiddleware, updateFailedOrders);

module.exports = router;
