const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const roomSchema = new Schema(
  {
    room_id: {
      type: Integer,
      required: true,
      unique: true,
    },
    start_time: {
      type: Date,
    },
    end_time: {
      type: Date,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("room", roomSchema);
module.exports = Room;
