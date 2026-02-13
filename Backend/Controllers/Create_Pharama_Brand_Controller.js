const Pharma_Brand_Registration_Model= require('../Models/Pharma_Brand_Registration');
 


const PharmaBrandController = async (req, res) => {
    try {
        const { BrandName, Manager_Name, Email, Phone_Number, Alternate_Phone_Number, Website_Url } = req.body;

        // Validate required fields
        if (!BrandName || !Manager_Name || !Email || !Phone_Number || !Website_Url) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new Pharma Brand Registration document
        const newPharmaBrand = new Pharma_Brand_Registration_Model({
            BrandName,
            Manager_Name,
            Email,
            Phone_Number,
            Alternate_Phone_Number,
            Website_Url
        });

        // Save the document to the database
        await newPharmaBrand.save();

        return res.status(201).json({ message: 'Pharma Brand registered successfully', data: newPharmaBrand });
    } catch (error) {
        console.error('Error registering Pharma Brand:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}   
module.exports = PharmaBrandController;