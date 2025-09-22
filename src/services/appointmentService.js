import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Book Appointment (POST)
export const bookAppointment = async ({ type, centerId, data, token }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/appointment/${type}/${centerId}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { message: 'Server error', error: error.message };
  }
};

// Fetch User's Appointments (GET)
export const fetchUserAppointments = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getAppointment`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { message: 'Server error', error: error.message };
  }
};
