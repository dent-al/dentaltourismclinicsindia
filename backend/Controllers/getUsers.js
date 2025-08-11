const userModel = require('../Models/userModel');

const getUsers = async (req, res) => {
  try {
    // Get all users but exclude password field for security
    const users = await userModel.find({}, '-password');
    
    if (users.length === 0) {
      return res.status(404).json({ 
        message: 'No users found', 
        success: false 
      });
    }
    
    return res.status(200).json({ 
      message: 'Users retrieved successfully', 
      data: users, 
      success: true 
    });
  } catch (error) {
    console.error('Error retrieving users:', error);
    return res.status(500).json({ 
      message: 'Internal server error', 
      success: false 
    });
  }
};

module.exports = getUsers;
