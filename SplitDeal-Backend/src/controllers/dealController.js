const Deal = require("../models/Deal");

// 📌 Create a new deal
exports.createDeal = async (req, res) => {
  try {
    const {
      dealName,
      dealDesc,
      categoryId,
      subCategoryId,
      storeName,
      storeLocation,
      totalValue,
      discount,
      storeLogo,
      expiryDate,
    } = req.body;

    // Check if deal already exists (optional, based on your requirements)
    let deal = await Deal.findOne({ dealName });
    if (deal) return res.status(400).json({ msg: "Deal already exists" });

    // Create and save deal
    deal = new Deal({
      dealName,
      dealDesc,
      categoryId,
      subCategoryId,
      storeName,
      storeLocation,
      totalValue,
      discount,
      storeLogo,
      expiryDate,
    });
    await deal.save();

    res.status(201).json({ msg: "Deal created successfully", deal });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 📌 Get all deals
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 📌 Get deals by category ID
exports.getDealsByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const deals = await Deal.find({ categoryId });
    res.json(deals);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};

// 📌 Get deals by sub-category ID
exports.getDealsBySubCategoryId = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const deals = await Deal.find({ subCategoryId });
    res.json(deals);
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
};