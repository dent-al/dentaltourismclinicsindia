import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Register a new patient
export const registerPatient = async (patientData) => {
  try {
    const response = await api.post('/Registration', patientData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    if (error.response) {
      return error.response.data;
    }
    return { 
      success: false, 
      message: 'Network error. Please check your connection.' 
    };
  }
};

// Login patient
export const loginPatient = async (loginData) => {
  try {
    console.log('Sending login request with data:', loginData); // Debug log
    
    const response = await api.post('/Login', loginData);
    
    console.log('Login response:', response); // Debug log
    
    // Save JWT token if returned
    if (response.data.token) {
      localStorage.setItem('patientToken', response.data.token);
      localStorage.setItem('authToken', response.data.token); // Also store as authToken for consistency
    }
    
    return response.data;
  } catch (error) {
    console.error('Login API error:', error);
    
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error status:', error.response.status);
      return { 
        success: false, 
        message: error.response.data.message || 'Login failed',
        status: error.response.status
      };
    }
    
    return { 
      success: false, 
      message: 'Network error. Please check your connection.' 
    };
  }
};