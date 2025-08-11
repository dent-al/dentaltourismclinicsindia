import axios from 'axios';

// Base URL for your backend API
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// API Service Functions
export const apiService = {
  // Health check
  healthCheck: async () => {
    try {
      const response = await api.get('/health');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Dental Registration
  dental: {
    create: async (data) => {
      try {
        const response = await api.post('/dental-register', data);
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    },
    getAll: async () => {
      try {
        const response = await api.get('/dental-register');
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
  },

  // CBCT/OPG Centers
  cbct: {
    create: async (data) => {
      try {
        const response = await api.post('/CBCI_OPG_register', data);
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    },
    getAll: async () => {
      try {
        const response = await api.get('/CBCI_OPG_data');
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
  },

  // Diagnostic Labs
  diagnosticLab: {
    create: async (data) => {
      try {
        const response = await api.post('/diagnostic-labs', data);
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    },
    getAll: async () => {
      try {
        const response = await api.get('/diagnostic-labs');
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
  },

  // Pharma Brands
  pharma: {
    create: async (data) => {
      try {
        const response = await api.post('/pharma-brand', data);
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    },
    getAll: async () => {
      try {
        const response = await api.get('/pharma-brand');
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
  },

  // Users
  user: {
    register: async (data) => {
      try {
        const response = await api.post('/user/Registration', data);
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    },
    login: async (data) => {
      try {
        const response = await api.post('/user/Login', data);
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    },
    getAll: async () => {
      try {
        const response = await api.get('/user');
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
  },

  // Contact Us
  contact: {
    create: async (data) => {
      try {
        const response = await api.post('/Contact_Us', data);
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    },
    getAll: async () => {
      try {
        const response = await api.get('/get_Contact_us');
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
  }
};

export default apiService;
