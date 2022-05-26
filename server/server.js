// Importing Neccessary Modules
const express = require("express");
require("dotenv").config();
const app = express();
const { connectDB } = require("./config/connectDB");
connectDB();

// Calling Routes
const admin = require("./routes/admin");
const booking = require("./routes/booking");
const department = require("./routes/department");
const calendar = require("./routes/calender");

// And Then Using It In Server File
app.use("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Welcome Home",
  });
}); //Calling Or Defining Home Routes

app.use("/api/v1", admin); //Calling Admin Route
app.use("/api/v1", booking); //Calling Booking Route
app.use("/api/v1", department); //Calling Department Route
app.use("/api/v1", calendar); //Calling Calendar Route

// Starting Server
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server started listening on PORT ${PORT}`);
});
