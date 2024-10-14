const express = require("express");
const router = express.Router();
const TestModel = require("../models/User"); // Import your model

// Search endpoint for todos/feed
router.get("/search", async (req, res) => {
  const searchQuery = req.query.q; // Get search query from URL parameter
  if (!searchQuery) {
    return res.json([]); // Return an empty array if no query is provided
  }

  try {
    const results = await TestModel.find({
      title: { $regex: searchQuery, $options: "i" }, // Case-insensitive search on the title field
    });
    res.json(results);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
