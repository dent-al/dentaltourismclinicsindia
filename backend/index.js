const express = require('express');
const cors = require('cors');
const database = require('./config/db');
const Cbci_opg_data=require('./Router/Cbci_opg_dataRoute');
const DentalRegistration=require('./Router/DentalRegisterRoute');
const diagnosticLab=require('./Router/DiagnosticLabsRoutes')
const PharmaBrand=require('./Router/PharmaBrandRoute');
const UserRoute=require('./Router/UserRoute');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(cors({
  origin: 'http://localhost:3001', // Frontend URL
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', Cbci_opg_data);
app.use('/', DentalRegistration);
app.use('/', diagnosticLab);
app.use('/',PharmaBrand)
app.use('/',UserRoute)

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Dental Tourism Clinics India Backend API',
    status: 'Running',
    endpoints: ['/health', '/dental-registration', '/cbct-opg', '/diagnostic-lab', '/pharma-brand', '/user']
  });
});


app.listen(PORT, () => {
   database();
  console.log(`Server is running on port ${PORT}`);
   
});
