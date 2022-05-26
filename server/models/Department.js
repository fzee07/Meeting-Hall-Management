const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const deptSchema = new Schema({
  dept_id: {
    type: Integer,
    required: true,
  },
  dept_name: {
    type: String,
    required: true,
  },
});

const Department = mongoose.model("department", deptSchema);
module.exports = Department;
