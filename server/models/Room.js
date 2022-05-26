const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const roomSchema = new Schema(
  {
    room_id: {
      type: Integer,
      required: true,
      unique: true,
    },
    start_day_time: {
      type: Date,
    },
    end_day_time: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
