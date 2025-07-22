const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  city: String,
  state: String,
  phone: String,
  email: String,
  description: String,
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Clinic', clinicSchema);
