const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  attendance: {
    type: Map,
    of: String,
    default: {},
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
