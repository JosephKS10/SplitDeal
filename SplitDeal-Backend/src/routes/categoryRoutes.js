const express = require("express");
const router = express.Router();
const { createCategory, getAllCategories } = require("../controllers/categoryController");

// 📌 Route to create a new category
router.post("/create-category", createCategory);

// 📌 Route to get all categories
router.get("/get-categories", getAllCategories);

module.exports = router;
