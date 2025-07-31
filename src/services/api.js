// API service for connecting frontend to backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Helper method for making HTTP requests
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth endpoints
  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    if (response.token) {
      localStorage.setItem('authToken', response.token);
    }
    
    return response;
  }

  async logout() {
    localStorage.removeItem('authToken');
  }

  // Clinic endpoints
  async getClinics(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    return this.request(`/clinics${queryParams ? `?${queryParams}` : ''}`);
  }

  async getClinicById(id) {
    return this.request(`/clinics/${id}`);
  }

  // Dentist endpoints
  async getDentists(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    return this.request(`/dentists${queryParams ? `?${queryParams}` : ''}`);
  }

  async getDentistById(id) {
    return this.request(`/dentists/${id}`);
  }

  // Appointment endpoints
  async createAppointment(appointmentData) {
    return this.request('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  }

  async getAppointments() {
    return this.request('/appointments');
  }

  async updateAppointment(id, updates) {
    return this.request(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  // Payment endpoints
  async createPaymentOrder(orderData) {
    return this.request('/payments/create-order', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async verifyPayment(paymentData) {
    return this.request('/payments/verify', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  }

  // Health check endpoint for testing connection
  async testConnection() {
    try {
      const response = await this.request('/health');
      console.log('✅ Backend connection successful:', response);
      return response;
    } catch (error) {
      console.error('❌ Backend connection failed:', error);
      throw error;
    }
  }
}

export default new ApiService();
