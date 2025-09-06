const mongoose = require('mongoose');
require('dotenv').config();

const database = async () => {
  try {
    await mongoose.connect(mongodb+srv://job-portal:vivek123@cluster0.2naawoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

module.exports = database;
