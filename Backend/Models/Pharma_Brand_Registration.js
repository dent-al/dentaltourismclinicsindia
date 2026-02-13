const mongoose = require('mongoose');

const pharmaBrandRegistrationSchema = new mongoose.Schema({
    BrandName: {
        type: String,
        required: [true, 'Brand name is required'],
        trim: true
    },
    Manager_Name: {
        type: String,
        required: [true, 'Manager name is required'],
        trim: true
    },
    Email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
        unique: true,
        lowercase: true,
        trim: true
    },
    Phone_Number: {
        type: String,  // Changed to String
        required: [true, 'Phone number is required'],
        match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number'],
        unique: true,
        trim: true
    },
    Alternate_Phone_Number: {
        type: String,  // Changed to String
        match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number'],
        trim: true
    },
    Website_Url: {
        type: String,
        required: [true, 'Website URL is required'],
        match: [/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/, 'Please enter a valid URL'],
        trim: true
    }
}, {
    timestamps: true  // Adds createdAt and updatedAt fields
});

const Pharma_Brand_Registration_Model = mongoose.model('Pharma_Brand_Registration', pharmaBrandRegistrationSchema);
module.exports = Pharma_Brand_Registration_Model;