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
  calendar: {
    type: mongoose.Types.ObjectId,
    ref: "Calendar",
  },
  booked_by_dept: {
    type: mongoose.Types.ObjectId,
    ref: "Department",
  },
  guests: {
    type: Array,
    default: [],
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
