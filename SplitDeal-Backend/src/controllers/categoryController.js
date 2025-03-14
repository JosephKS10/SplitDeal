const Category = require("../models/Category");

// 📌 Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if category already exists
    let category = await Category.findOne({ name });
    if (category) return res.status(400).json({ msg: "Category already exists" });

    // Create and save category
    category = new Category({ name, description });
    await category.save();

    res.status(201).json({ msg: "Category created successfully", category });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 📌 Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};
