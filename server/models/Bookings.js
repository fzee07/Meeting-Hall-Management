const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const bookingSchema = new Schema({
  booked_by: {
    type: mongoose.Types.ObjectId,
    ref: "Employee",
  },
  room_id: {
    type: mongoose.Types.ObjectId,
    ref: "Room",
  },
  booked_by_dept: {
    type: mongoose.Types.ObjectId,
    ref: "Department",
  },
  meeting_title: {
    type: String,
    default: "New Meeting",
  },
  meeting_desc: {
    type: String,
  },
  guests: {
    type: Array,
    default: [],
    required: true,
  },
});

const Booking = mongoose.model("booking", bookingSchema);
module.exports = Booking;
