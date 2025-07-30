// Controller for dentists (list, filter)
const Dentist = require('../models/Dentist');

exports.getDentists = async (req, res) => {
  try {
    const { clinic, specialty } = req.query;
    const filter = {};
    if (clinic) filter.clinic = clinic;
    if (specialty) filter.specialty = specialty;
    const dentists = await Dentist.find(filter).populate('clinic');
    res.json(dentists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Placeholder for filterDentists
exports.filterDentists = async (req, res) => {
  res.status(501).json({ error: 'Not implemented' });
};
