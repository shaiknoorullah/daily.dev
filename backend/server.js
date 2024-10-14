const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const feedRoutes = require("./routes/feed");
require("dotenv").config(); // For environment variables

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/testDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes

const TestSchema = new mongoose.Schema({}, { collection: "testCollection" });
const TestModel = mongoose.model("TestModel", TestSchema);

app.get("/data", async (req, res) => {
  const data = await TestModel.find({});
  res.json(data);
});
app.use(feedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
