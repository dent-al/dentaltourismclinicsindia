const mongoose = require('mongoose');

const dentistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: String,
  experience: Number,
  clinic: { type: mongoose.Schema.Types.ObjectId, ref: 'Clinic' },
  rating: Number,
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Dentist', dentistSchema);
