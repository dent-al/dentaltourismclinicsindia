const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const DentalRegistration = require('./Models/DentalRegistration.model');
const CBCT_OPG = require('./Models/CBCT_OPG_Model');
const DiagnosticLab = require('./Models/Diagnostic_Lab.model');
const PharmaBrand = require('./Models/PharmaBrand.model');
const User = require('./Models/userModel');

// Connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

// Sample data
const sampleData = {
  dental: [
    {
      name: "Dr. Rajesh Kumar",
      email: "rajesh.kumar@dentalcare.com",
      phoneNumber: "9876543210",
      state: "Delhi",
      file: "sample-certificate.pdf",
      qualification: "BDS, MDS",
      experience: "10 years",
      specialization: "Orthodontics"
    },
    {
      name: "Dr. Priya Sharma",
      email: "priya.sharma@smile.com",
      phoneNumber: "9876543211",
      state: "Mumbai",
      file: "sample-certificate2.pdf",
      qualification: "BDS",
      experience: "5 years",
      specialization: "General Dentistry"
    }
  ],
  cbct: [
    {
      centerName: "advanced dental imaging center",
      ownerName: "dr. amit gupta",
      email: "amit@imaging.com",
      phoneNumber: "9876543212",
      alternatePhoneNumber: "9876543213",
      website_url: "https://imaging.com"
    }
  ],
  diagnostic: [
    {
      labName: "MediLab Diagnostics",
      OwnerName: "Dr. Suresh Reddy",
      email: "suresh@medilab.com",
      phoneNumber: "9876543213",
      alternativeNumber: "9876543214",
      websiteURL: "https://medilab.com"
    }
  ],
  pharma: [
    {
      brandName: "DentalCare Plus",
      OwnerName: "Mr. Vikash Singh",
      email: "vikash@healthcorp.com",
      phoneNumber: "9876543214",
      alternativeNumber: "9876543215",
      websiteURL: "https://dentalcareplus.com"
    }
  ],
  users: [
    {
      name: "John Patient",
      phone: "9876543215",
      email: "john@patient.com",
      password: "$2b$10$sample.hashed.password" // This would be properly hashed
    },
    {
      name: "Sarah Williams",
      phone: "9876543216", 
      email: "sarah@patient.com",
      password: "$2b$10$sample.hashed.password2"
    }
  ]
};

// Insert sample data
const insertSampleData = async () => {
  try {
    await connectDB();
    
    console.log('🔄 Inserting sample data...');
    
    // Clear existing data (optional)
    console.log('Clearing existing data...');
    await DentalRegistration.deleteMany({});
    await CBCT_OPG.deleteMany({});
    await DiagnosticLab.deleteMany({});
    await PharmaBrand.deleteMany({});
    await User.deleteMany({});
    
    // Insert dental registrations
    console.log('📋 Inserting dental registrations...');
    await DentalRegistration.insertMany(sampleData.dental);
    
    // Insert CBCT/OPG centers
    console.log('🏥 Inserting CBCT/OPG centers...');
    await CBCT_OPG.insertMany(sampleData.cbct);
    
    // Insert diagnostic labs
    console.log('🔬 Inserting diagnostic labs...');
    await DiagnosticLab.insertMany(sampleData.diagnostic);
    
    // Insert pharma brands
    console.log('💊 Inserting pharma brands...');
    await PharmaBrand.insertMany(sampleData.pharma);
    
    // Insert users
    console.log('👥 Inserting users...');
    await User.insertMany(sampleData.users);
    
    console.log('✅ Sample data inserted successfully!');
    console.log(`
📊 Data Summary:
- Dental Registrations: ${sampleData.dental.length}
- CBCT/OPG Centers: ${sampleData.cbct.length}
- Diagnostic Labs: ${sampleData.diagnostic.length}
- Pharma Brands: ${sampleData.pharma.length}
- Users: ${sampleData.users.length}

🔗 You can now view this data at:
- http://localhost:3001/admin/data
    `);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error inserting sample data:', error);
    process.exit(1);
  }
};

// Run the script
insertSampleData();
