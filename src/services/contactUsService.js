import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Create Contact Us Entry (POST)
export const submitContactUs = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact-us`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, message: 'Internal server error', error: error.message };
  }
};

// Fetch All Contact Us Entries (GET)
export const fetchContactUsEntries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/contact-us`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, message: 'Internal server error', error: error.message };
  }
};
