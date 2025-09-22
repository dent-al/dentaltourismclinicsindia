import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Register a new pharma brand
export const registerPharmaBrand = async (brandData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pharma-brand`, brandData, {
      headers: {
        'Content-Type': 'application/json',
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

// Fetch all pharma brands
export const fetchPharmaBrands = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pharma-brand`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, message: 'Network error' };
  }
};
