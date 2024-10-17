// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const feedRoutes = require("./routes/feed");

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.set("strictQuery", false);

// mongoose
//   .connect("mongodb://localhost:27017/testDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// const TestSchema = new mongoose.Schema({}, { collection: "testCollection" });
// const TestModel = mongoose.model("TestModel", TestSchema);

// app.get("/data", async (req, res) => {
//   const data = await TestModel.find({});
//   res.json(data);
// });

// app.use(feedRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const feedRoutes = require("./routes/feed");

const app = express();

app.use(cors());
app.use(express.json());

// Use the feed routes
app.use(feedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
