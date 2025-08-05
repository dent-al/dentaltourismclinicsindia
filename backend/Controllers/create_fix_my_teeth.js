const FixMyTeeth = require('../Models/Fix_my_teeth');
const cloudinary = require("../config/Cloudinary");
const getDataUri = require("../config/datauri");

const createFixMyTeeth = async (req, res) => {
  try {
    let { name, email, selectedProblems, selectedState, otherProblemText, photoUrls } = req.body;

    // Parse selectedProblems if needed
    if (selectedProblems && typeof selectedProblems === 'string') {
      try {
        selectedProblems = JSON.parse(selectedProblems);
      } catch (err) {
        // Ignore parse errors, fallback to default below
      }
    }

    // Default values
    if (!Array.isArray(selectedProblems)) selectedProblems = selectedProblems ? [selectedProblems] : [];
    if (!otherProblemText) otherProblemText = "";

    // Normalize photoUrls if sent in request body
    let uploadedPhotoUrls = [];
    if (photoUrls) {
      if (typeof photoUrls === 'string') {
        try {
          uploadedPhotoUrls = JSON.parse(photoUrls);
        } catch (err) {
          uploadedPhotoUrls = [];
        }
      } else if (Array.isArray(photoUrls)) {
        uploadedPhotoUrls = photoUrls;
      }
    }

    // Process uploaded files in req.files (from multer .array('photo'))
    const photoFiles = Array.isArray(req.files) ? req.files : [];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    for (const file of photoFiles) {
      // Validate file type
      if (!allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({
          message: `Only JPEG and PNG files are allowed. Invalid file type: ${file.mimetype}`,
          success: false
        });
      }

      // Validate file size
      if (file.size > maxSize) {
        return res.status(400).json({
          message: "File size must be less than 5MB",
          success: false
        });
      }

      // Upload to Cloudinary
      const fileuri = getDataUri(file); // { content: ... }
      try {
        const cloudResponse = await cloudinary.uploader.upload(fileuri.content, {
          folder: 'fix_my_teeth',
          resource_type: 'image',
          quality: 'auto:good',
          fetch_format: 'auto'
        });
        uploadedPhotoUrls.push(cloudResponse.secure_url);
      } catch (uploadError) {
        console.log('Cloudinary upload failed:', uploadError);
        
        return res.status(500).json({
          
          message: 'Error uploading one of the images. Please try again.',
          success: false
        });
      }
    }

    // Validate required fields
    if (!name || !email || !selectedProblems.length || !selectedState) {
      return res.status(400).json({ message: 'Please fill all required fields', success: false });
    }

    // Create a new Fix My Teeth document
    const newFixMyTeeth = new FixMyTeeth({
      name,
      email,
      selectedProblems,
      selectedState,
      otherProblemText,
      photoUrls: uploadedPhotoUrls
    });

    await newFixMyTeeth.save();
   

    res.status(201).json({
      message: 'Fix My Teeth submission successful',
      data: newFixMyTeeth,
      success: true
    });
  } catch (error) {
    console.error('Error during Fix My Teeth submission:', error);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

module.exports = createFixMyTeeth;
