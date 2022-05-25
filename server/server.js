const express = require("express");
require("dotenv").config();
const app = express();
const { connectDB } = require("./config/connectDB");
connectDB();

app.use("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Welcome Home",
  });
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  console.log(`Server started listening on PORT ${PORT}`);
});
