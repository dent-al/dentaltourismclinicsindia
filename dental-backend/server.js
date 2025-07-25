require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Import routes
const authRoutes = require('./routes/auth');
const clinicRoutes = require('./routes/clinics');
const dentistRoutes = require('./routes/dentists');
const appointmentRoutes = require('./routes/appointments');
const paymentRoutes = require('./routes/payments');

// Register routes with /api prefix
app.use('/api/auth', authRoutes);
app.use('/api/clinics', clinicRoutes);
app.use('/api/dentists', dentistRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 3001;

// Connect to MongoDB and start server only after successful connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/api/health`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
