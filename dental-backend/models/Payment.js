const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
  amount: Number,
  status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  paymentId: String, // From payment gateway
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
