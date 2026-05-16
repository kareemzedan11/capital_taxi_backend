require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/dbConfig");

let isConnected = false;

module.exports = async (req, res) => {
  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
      console.log("✅ Database Connected");
    }

    return app(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};