const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
// const auth = require('../middleware/auth'); // Uncomment if you add protected auth routes

// Mock users for testing
const mockUsers = [
  { id: 1, email: 'test@example.com', password: 'password123', name: 'Test User' },
  { id: 2, email: 'admin@dental.com', password: 'admin123', name: 'Admin User' }
];

// Register (public) - Mock implementation
router.post('/register', (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    
    // Create new user
    const newUser = {
      id: mockUsers.length + 1,
      name,
      email,
      password // In real app, this would be hashed
    };
    mockUsers.push(newUser);
    
    // Mock token
    const token = 'mock-jwt-token-' + newUser.id;
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login (public) - Mock implementation
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Mock token
    const token = 'mock-jwt-token-' + user.id;
    
    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
