const express = require('express');
const cors = require('cors');
const database = require('./config/db');
const Cbci_opg_data=require('./Router/Cbci_opg_dataRoute');
const DentalRegistration=require('./Router/DentalRegisterRoute');
const diagnosticLab=require('./Router/DiagnosticLabsRoutes')
const Contact_US=require('./Router/Contact_Us_route');
const PharmaBrand=require('./Router/PharmaBrandRoute');
const patientRoute=require('./Router/patientRoute')
const FixMyTeeth = require('./Router/Fixmyteeth');
const appointmentRoute = require('./Router/appointment'); // ✅ correct
const cookieParser = require("cookie-parser");
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(cors({
  origin: 'http://localhost:3001', // Frontend URL
  credentials: true
}));

app.use(express.json());
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




app.listen(PORT, () => {
   database();
  console.log(`Server is running on port ${PORT}`);
   
});
