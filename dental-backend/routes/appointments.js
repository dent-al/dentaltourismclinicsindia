const express = require('express');
const router = express.Router();
// const appointmentController = require('../controllers/appointmentController');
// const auth = require('../middleware/auth');

// Mock appointments storage
let mockAppointments = [];
let appointmentIdCounter = 1;

// Book appointment (public for now)
router.post('/', (req, res) => {
  try {
    const { dentistId, patientName, email, phone, date, time, problem } = req.body;
    
    const newAppointment = {
      id: appointmentIdCounter++,
      dentistId,
      patientName,
      email,
      phone,
      date,
      time,
      problem,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    mockAppointments.push(newAppointment);
    
    res.status(201).json({
      message: 'Appointment booked successfully',
      appointment: newAppointment
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all appointments (public for now)
router.get('/', (req, res) => {
  try {
    res.json(mockAppointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get appointment by ID
router.get('/:id', (req, res) => {
  try {
    const appointment = mockAppointments.find(a => a.id === parseInt(req.params.id));
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
