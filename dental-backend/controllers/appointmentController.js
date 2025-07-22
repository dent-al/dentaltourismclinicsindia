// Controller for appointments (book, list)
const Appointment = require('../models/Appointment');

exports.bookAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const { patient } = req.query;
    const filter = {};
    if (patient) filter.patient = patient;
    const appointments = await Appointment.find(filter).populate('patient dentist clinic');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
