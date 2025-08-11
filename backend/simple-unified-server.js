const express = require('express');
const cors = require('cors');
const path = require('path');
const database = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../build')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString()
  });
});

// API info endpoint
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Dental Tourism Clinics India Backend API',
    status: 'Running',
    endpoints: ['/api/health']
  });
});

// Import and use routes one by one to identify which one causes the issue
try {
  const Cbci_opg_data = require('./Router/Cbci_opg_dataRoute');
  app.use('/api', Cbci_opg_data);
  console.log('✓ CBCI OPG routes loaded');
} catch (error) {
  console.log('✗ CBCI OPG routes failed:', error.message);
}

try {
  const DentalRegistration = require('./Router/DentalRegisterRoute');
  app.use('/api', DentalRegistration);
  console.log('✓ Dental Registration routes loaded');
} catch (error) {
  console.log('✗ Dental Registration routes failed:', error.message);
}

try {
  const diagnosticLab = require('./Router/DiagnosticLabsRoutes');
  app.use('/api', diagnosticLab);
  console.log('✓ Diagnostic Lab routes loaded');
} catch (error) {
  console.log('✗ Diagnostic Lab routes failed:', error.message);
}

try {
  const PharmaBrand = require('./Router/PharmaBrandRoute');
  app.use('/api', PharmaBrand);
  console.log('✓ Pharma Brand routes loaded');
} catch (error) {
  console.log('✗ Pharma Brand routes failed:', error.message);
}

try {
  const UserRoute = require('./Router/UserRoute');
  app.use('/api', UserRoute);
  console.log('✓ User routes loaded');
} catch (error) {
  console.log('✗ User routes failed:', error.message);
}

// Serve React app for all non-API routes  
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Serve React app for specific routes
app.get('/dental-registration', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/clinics', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/articles', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/shop', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  database();
  console.log(`Server is running on port ${PORT}`);
  console.log(`Frontend and Backend both accessible at http://localhost:${PORT}`);
});
