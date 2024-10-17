// // const express = require("express");
// // const router = express.Router();
// // const FeedItem = require("../models/FeedItem");
// // const fs = require("fs");

// // router.get("/api/feed", async (req, res) => {
// //   try {
// //     const feedItems = await FeedItem.find();
// //     const file = fs.readFileSync("./routes/dummy.txt").toString();

// //     console.info("file Contents:\n", file);
// //     res.json(feedItems);
// //   } catch (error) {
// //     console.error("Error fetching feed data:", error);
// //     res.status(500).json({ error: "Server error while fetching feed data" });
// //   }
// // });

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Feed = require("../models/feed");

// // GET all feeds
// router.get("/api/feeds", async (req, res) => {
//   try {
//     const feeds = await Feed.find().sort({ createdAt: -1 });
//     res.json(feeds);
//   } catch (error) {
//     console.error("Error fetching feeds:", error);
//     res.status(500).json({ error: "Error fetching feeds" });
//   }
// });

// // GET single feed by slug
// router.get("/api/feeds/:slug", async (req, res) => {
//   try {
//     const feed = await Feed.findOne({ slug: req.params.slug });
//     if (!feed) {
//       return res.status(404).json({ error: "Feed not found" });
//     }
//     res.json(feed);
//   } catch (error) {
//     console.error("Error fetching feed:", error);
//     res.status(500).json({ error: "Error fetching feed" });
//   }
// });

// // POST new feed
// router.post("/api/feeds", async (req, res) => {
//   try {
//     const newFeed = new Feed(req.body);
//     const savedFeed = await newFeed.save();
//     res.status(201).json(savedFeed);
//   } catch (error) {
//     console.error("Error creating feed:", error);
//     res.status(500).json({ error: "Error creating feed" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const readFeedData = () => {
  const filePath = path.join(__dirname, "feed.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileData);
};

router.get("/api/feeds", (req, res) => {
  try {
    const data = readFeedData();
    res.json(data.feeds);
  } catch (error) {
    console.error("Error reading feed data:", error);
    res.status(500).json({ error: "Error reading feed data" });
  }
});

router.get("/api/feeds/:id", (req, res) => {
  try {
    const data = readFeedData();
    const feedId = parseInt(req.params.id, 10);
    const feed = data.feeds.find((feed) => feed.id === feedId);

    if (!feed) {
      return res.status(404).json({ error: "Feed not found" });
    }

    res.json(feed);
  } catch (error) {
    console.error("Error reading feed data:", error);
    res.status(500).json({ error: "Error reading feed data" });
  }
});

module.exports = router;
