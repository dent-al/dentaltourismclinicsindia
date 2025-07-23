const express = require("express");
const route = express.Router();
const PharmaBrandController = require('../Controllers/Create_Pharama_Brand_Controller');

// Define the route for creating a Pharma Brand Registration
route.post('/pharma-brand-registration', PharmaBrandController);

// Export the router
module.exports = route;