const mongoose = require("mongoose");

const feedItemSchema = new mongoose.Schema({
  title: String,
  hashtags: [String], // Array of strings for hashtags
  readTime: String,
  image: String,
});

module.exports = mongoose.model("FeedItem", feedItemSchema);
