const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new student
router.post('/', async (req, res) => {
  const { name, rollNumber } = req.body;

  try {
    const newStudent = new Student({ name, rollNumber });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Mark attendance for a specific date for a particular student
router.post('/:studentId/attendance', async (req, res) => {
  const { studentId } = req.params;
  const { date, status } = req.body;

  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.attendance.set(date, status);
    await student.save();
    res.json({ message: 'Attendance marked successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// View the attendance report for a particular student
router.get('/:studentId/attendance', async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ student: student.name, attendance: student.attendance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
