const express = require("express");
const router = express.Router();
const FeedItem = require("../models/FeedItem"); // Make sure your model is imported

// GET feed data from MongoDB
router.get("/api/feed", async (req, res) => {
  try {
    const feedItems = await FeedItem.find(); // Fetch all items from MongoDB
    res.json(feedItems); // Send the data as JSON to the frontend
  } catch (error) {
    console.error("Error fetching feed data:", error);
    res.status(500).json({ error: "Server error while fetching feed data" });
  }
});

module.exports = router;
