// Controller for clinics (list, sync)
const Clinic = require('../models/Clinic');

exports.getClinics = async (req, res) => {
  try {
    const clinics = await Clinic.find();
    res.json(clinics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Placeholder for Google Sheets sync
exports.syncClinicsFromGoogleSheets = async (req, res) => {
  res.status(501).json({ error: 'Not implemented' });
};
