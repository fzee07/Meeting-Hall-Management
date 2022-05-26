const express = require("express");
const { route } = require("./admin");
const router = express.Router();

router.get("/booking/meeting-room");

module.exports = router;
