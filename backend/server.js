console.log("🔥 THIS IS MY SERVER.JS");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
console.log("AUTH ROUTES PATH:", require.resolve("./routes/authRoutes"));
const authRoutes = require("./routes/authRoutes");

require("dotenv").config({ path: __dirname + "/.env" });

console.log("MONGO_URI loaded:", !!process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("MongoDB Connection Error:");
    console.dir(err, { depth: 10 });
  });
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});