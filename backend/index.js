const express = require('express');
const cors = require('cors');
const path = require('path');
const database = require('./config/db');
// Temporarily disabled route imports to isolate the issue
// const Cbci_opg_data=require('./Router/Cbci_opg_dataRoute');
// const DentalRegistration=require('./Router/DentalRegisterRoute');
// const diagnosticLab=require('./Router/DiagnosticLabsRoutes')
// const PharmaBrand=require('./Router/PharmaBrandRoute');
// const UserRoute=require('./Router/UserRoute');
// const analyticsRoutes=require('./Router/analyticsRoutes');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'], // Allow both ports
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../build')));

// API routes - temporarily disabled to isolate issue
// app.use('/api', Cbci_opg_data);
// app.use('/api', DentalRegistration);
// app.use('/api', diagnosticLab);
// app.use('/api', PharmaBrand);
// app.use('/api', UserRoute);
// app.use('/api', Contact_US);
// app.use('/api/analytics', analyticsRoutes);

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
    endpoints: ['/api/health', '/api/dental-register', '/api/CBCI_OPG_data', '/api/diagnostic-labs', '/api/pharma-brand', '/api/user', '/api/analytics']
  });
});

// Serve React app for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
   database();
  console.log(`Server is running on port ${PORT}`);
  console.log(`Frontend and Backend both accessible at http://localhost:${PORT}`);
});
