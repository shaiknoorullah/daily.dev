// const mongoose = require("mongoose");

// const feedItemSchema = new mongoose.Schema({
//   title: String,
//   hashtags: [String],
//   readTime: String,
//   image: String,
// });

// module.exports = mongoose.model("FeedItem", feedItemSchema);
const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  readTime: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  image: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feed", feedSchema);
