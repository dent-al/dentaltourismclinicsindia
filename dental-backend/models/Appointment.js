const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dentist: { type: mongoose.Schema.Types.ObjectId, ref: 'Dentist' },
  clinic: { type: mongoose.Schema.Types.ObjectId, ref: 'Clinic' },
  date: Date,
  time: String,
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
