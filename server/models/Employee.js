const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const empSchema = new Schema({
  emp_id: {
    type: Integer,
    required: true,
  },
  emp_name: {
    type: String,
    required: true,
  },
  dept_id: {
    type: mongoose.Types.ObjectId,
    ref: "Department",
  },
  password: {
    required: true,
  },
});

const Employee = mongoose.model("Employee", empSchema);
module.exports = Employee;
