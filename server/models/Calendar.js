const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const calendarSchema = new Schema({
  time_slot: {
    start_time: {
      type: Date,
      required: true,
    },
    end_time: {
      type: Date,
      required: true,
    },
    date: {
      type: Date,
      default: new Date.now(),
    },
  },
  meeting_title: {
    type: String,
    required: true,
  },
  meeting_desc: {
    type: String,
    required: false,
    default: "New Meeting",
  },
  booked_by: {
    type: mongoose.Types.ObjectId,
    ref: "Employee",
  },
  dept_id: {
    type: mongoose.Types.ObjectId,
    ref: "Department",
  },
});

const Calendar = mongoose.model("Calandar", calendarSchema);

module.exports = Calendar;
