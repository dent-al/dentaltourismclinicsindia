const express = require('express');
const router = express.Router();
// const dentistController = require('../controllers/dentistController');
// const auth = require('../middleware/auth');

// Mock data for testing
const mockDentists = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Orthodontist",
    clinic: "Delhi Dental Care",
    experience: "15 years",
    rating: 4.9,
    image: "/images/doctor1.png",
    languages: ["English", "Hindi"],
    education: "BDS, MDS Orthodontics",
    consultationFee: 500
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Oral Surgeon",
    clinic: "Mumbai Smile Center",
    experience: "12 years",
    rating: 4.8,
    image: "/images/doctor2.png",
    languages: ["English", "Hindi", "Marathi"],
    education: "BDS, MDS Oral Surgery",
    consultationFee: 600
  },
  {
    id: 3,
    name: "Dr. Anita Reddy",
    specialization: "Cosmetic Dentist",
    clinic: "Bangalore Dental Hub",
    experience: "10 years",
    rating: 4.7,
    image: "/images/doctor1.png",
    languages: ["English", "Hindi", "Telugu"],
    education: "BDS, MDS Prosthodontics",
    consultationFee: 700
  }
];

// Get all dentists (public for now)
router.get('/', (req, res) => {
  try {
    let dentists = [...mockDentists];
    
    // Filter by problem if provided
    const { problem } = req.query;
    if (problem) {
      // Simple filtering logic - in real app, this would be more sophisticated
      if (problem.toLowerCase().includes('teeth alignment') || problem.toLowerCase().includes('crooked')) {
        dentists = dentists.filter(d => d.specialization === 'Orthodontist');
      } else if (problem.toLowerCase().includes('surgery') || problem.toLowerCase().includes('extraction')) {
        dentists = dentists.filter(d => d.specialization === 'Oral Surgeon');
      } else if (problem.toLowerCase().includes('cosmetic') || problem.toLowerCase().includes('whitening')) {
        dentists = dentists.filter(d => d.specialization === 'Cosmetic Dentist');
      }
    }
    
    res.json(dentists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get dentist by ID
router.get('/:id', (req, res) => {
  try {
    const dentist = mockDentists.find(d => d.id === parseInt(req.params.id));
    if (!dentist) {
      return res.status(404).json({ error: 'Dentist not found' });
    }
    res.json(dentist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
