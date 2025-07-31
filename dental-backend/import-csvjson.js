// Script to import CSVJson.JSON data into MongoDB using Mongoose
require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Change this to your model (e.g., Clinic)
const Clinic = require('./models/Clinic');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dental_tourism';
const DATA_FILE = path.join(__dirname, 'CSVJson.JSON');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) {
      throw new Error('CSVJson.JSON must be an array of objects');
    }
    // Insert data into Clinic collection
    await Clinic.insertMany(data);
    console.log(`Imported ${data.length} records into Clinic collection.`);
  } catch (err) {
    console.error('Import error:', err);
  } finally {
    mongoose.connection.close();
  }
});
