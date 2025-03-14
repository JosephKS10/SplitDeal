const express = require("express");
const router = express.Router();
const {
  createSubCategory,
  getAllSubCategories,
  getSubCategoriesByCategoryId,
} = require("../controllers/subCategoryController");

// 📌 Route to create a new sub-category
router.post("/create-sub-category", createSubCategory);

// 📌 Route to get all sub-categories
router.get("/get-sub-categories", getAllSubCategories);

// 📌 Route to get sub-categories by category ID
router.get("/get-sub-categories/:categoryId", getSubCategoriesByCategoryId);

module.exports = router;