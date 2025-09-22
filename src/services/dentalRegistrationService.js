import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Register a dental practitioner (with file uploads)
export const registerDentalPractitioner = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/dental-register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, message: 'Network error' };
  }
};

// Get all registered dental practitioners
export const fetchDentalPractitioners = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dental-register`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, message: 'Network error' };
  }
};
