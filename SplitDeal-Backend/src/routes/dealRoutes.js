const express = require("express");
const router = express.Router();
const {
  createDeal,
  getAllDeals,
  getDealsByCategoryId,
  getDealsBySubCategoryId,
} = require("../controllers/dealController");
const authMiddleware = require("../middlewares/authMiddleware");


// 📌 Route to create a new deal
router.post("/create-deal",authMiddleware, createDeal);

// 📌 Route to get all deals
router.get("/get-deals", getAllDeals);

// 📌 Route to get deals by category ID
router.get("/get-deals-by-category/:categoryId", getDealsByCategoryId);

// 📌 Route to get deals by sub-category ID
router.get("/get-deals-by-sub-category/:subCategoryId", getDealsBySubCategoryId);

module.exports = router;