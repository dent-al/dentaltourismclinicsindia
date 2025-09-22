// If axios import fails, ensure axios is installed in your project:
// Run: npm install axios
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Create Fix My Teeth Case (POST)
export const submitFixMyTeethCase = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/fix-my-teeth`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, message: 'Internal server error', error: error.message };
  }
};

// Fetch All Fix My Teeth Cases (GET)
export const fetchFixMyTeethCases = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fix-my-teeth`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, message: 'Internal server error', error: error.message };
  }
};
