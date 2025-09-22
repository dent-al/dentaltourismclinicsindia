import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Register a new diagnostic lab
export const registerDiagnosticLab = async (labData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/diagnostic-labs`, labData, {
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

// Fetch all diagnostic labs
export const fetchDiagnosticLabs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/diagnostic-labs`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, message: 'Network error' };
  }
};
