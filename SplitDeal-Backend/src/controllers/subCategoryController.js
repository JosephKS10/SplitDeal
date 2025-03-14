const SubCategory = require("../models/SubCategory");

// 📌 Create a new sub-category
exports.createSubCategory = async (req, res) => {
  try {
    const { name, description, categoryId, logoLink } = req.body;

    // Check if sub-category already exists
    let subCategory = await SubCategory.findOne({ name });
    if (subCategory) return res.status(400).json({ msg: "Sub-category already exists" });

    // Create and save sub-category
    subCategory = new SubCategory({ name, description, categoryId, logoLink });
    await subCategory.save();

    res.status(201).json({ msg: "Sub-category created successfully", subCategory });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 📌 Get all sub-categories
exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 📌 Get sub-categories by category ID
exports.getSubCategoriesByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subCategories = await SubCategory.find({ categoryId });
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};