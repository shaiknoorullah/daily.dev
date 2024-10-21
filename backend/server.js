const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const feedRoutes = require("./routes/feed");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Cloudinary configuration
cloudinary.config({
  cloud_name: "daabzantm",
  api_key: "946291831714729",
  api_secret: "2I19lsBCN-0SbhByuEP-qngx1PI",
});

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/testDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Define Mongoose schema
const TestSchema = new mongoose.Schema({}, { collection: "testCollection" });
const TestModel = mongoose.model("TestModel", TestSchema);

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the temporary storage directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename the file
  },
});

const upload = multer({ storage });

// Image upload route
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Optionally delete the local file after upload
    fs.unlinkSync(req.file.path);

    // Respond with the Cloudinary URL
    res.json({
      message: "Image uploaded successfully",
      imageUrl: result.secure_url, // URL of the uploaded image
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Image upload failed" });
  }
});

// Fetch data from MongoDB
app.get("/data", async (req, res) => {
  const data = await TestModel.find({});
  res.json(data);
});

// Use the feed routes
app.use(feedRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
