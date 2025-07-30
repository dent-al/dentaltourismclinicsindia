const express = require('express');
const router = express.Router();
// const clinicController = require('../controllers/clinicController');
// const auth = require('../middleware/auth');

// Mock data for testing
const mockClinics = [
  {
    id: 1,
    name: "Delhi Dental Care",
    location: "Delhi",
    services: ["Implants", "Orthodontics", "Cosmetic"],
    rating: 4.8,
    image: "/images/clinic1.jpg"
  },
  {
    id: 2,
    name: "Mumbai Smile Center",
    location: "Mumbai",
    services: ["Root Canal", "Whitening", "Veneers"],
    rating: 4.7,
    image: "/images/clinic2.jpg"
  },
  {
    id: 3,
    name: "Bangalore Dental Hub",
    location: "Bangalore",
    services: ["Implants", "Braces", "Surgery"],
    rating: 4.9,
    image: "/images/clinic3.jpg"
  }
];

// Get all clinics (public for now)
router.get('/', (req, res) => {
  try {
    res.json(mockClinics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get clinic by ID
router.get('/:id', (req, res) => {
  try {
    const clinic = mockClinics.find(c => c.id === parseInt(req.params.id));
    if (!clinic) {
      return res.status(404).json({ error: 'Clinic not found' });
    }
    res.json(clinic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
