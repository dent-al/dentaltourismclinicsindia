const express = require('express');
const cors = require('cors');
const path = require('path');
const database = require('./config/db');
<<<<<<< HEAD
const Cbci_opg_data=require('./Router/Cbci_opg_dataRoute');
const DentalRegistration=require('./Router/DentalRegisterRoute');
const diagnosticLab=require('./Router/DiagnosticLabsRoutes')
const Contact_US=require('./Router/Contact_Us_route');
const PharmaBrand=require('./Router/PharmaBrandRoute');
const patientRoute=require('./Router/patientRoute')
const FixMyTeeth = require('./Router/Fixmyteeth'); // ✅ correct
const appointmentRoute = require('./Router/appointment');



const cookieParser = require("cookie-parser");
=======
// Temporarily disabled route imports to isolate the issue
// const Cbci_opg_data=require('./Router/Cbci_opg_dataRoute');
// const DentalRegistration=require('./Router/DentalRegisterRoute');
// const diagnosticLab=require('./Router/DiagnosticLabsRoutes')
// const PharmaBrand=require('./Router/PharmaBrandRoute');
// const UserRoute=require('./Router/UserRoute');
// const analyticsRoutes=require('./Router/analyticsRoutes');
>>>>>>> 3c59f3e0a93f8244ce9d863d365fe848406935bf
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'], // Allow both ports
  credentials: true
}));

app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
//cookie parser
app.use(cookieParser());

//routes
app.use('/', Cbci_opg_data);
app.use('/', DentalRegistration);
app.use('/', diagnosticLab);
app.use('/',PharmaBrand)
app.use('/',patientRoute)
app.use('/', Contact_US);
app.use('/',appointmentRoute)
app.use('/', FixMyTeeth);

=======

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
>>>>>>> 3c59f3e0a93f8244ce9d863d365fe848406935bf

// Serve React app for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
   database();
  console.log(`Server is running on port ${PORT}`);
  console.log(`Frontend and Backend both accessible at http://localhost:${PORT}`);
});
