import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Register a new patient
export const registerPatient = async (patientData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Registration`, patientData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { message: 'Network error' };
  }
};

// Login patient
export const loginPatient = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Login`, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // for httpOnly cookie
    });
    // Save JWT token if returned
    if (response.data.token) {
      localStorage.setItem('patientToken', response.data.token);
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { message: 'Network error' };
  }
};
