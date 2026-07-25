const express = require("express");
const cors = require("cors");

console.log("✅ App started");

const routes = require("./routes");
console.log("✅ Routes imported");

const { errorHandler } = require("./middleware/errorMiddleware");
console.log("✅ Error middleware imported");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("✅ Middleware loaded");

// Routes
app.get("/", (req, res) => {
  res.send("Backend Working ✅");
});

console.log("✅ Root route loaded");

app.use("/api", routes);

console.log("✅ API routes loaded");

// Global Error Handling Middleware
app.use(errorHandler);

console.log("✅ Error handler loaded");

module.exports = app;