import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Register CBCT/OPG Center (POST)
export const registerCbctCenter = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/CBCI_OPG_register`, data, {
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

// Fetch Registered Centers (GET)
export const fetchCbctCenters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/CBCI_OPG_data`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, message: 'Internal server error', error: error.message };
  }
};
