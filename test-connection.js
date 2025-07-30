// Simple connection test for frontend-backend
const API_BASE_URL = 'http://localhost:3000';

async function testConnection() {
  try {
    console.log('Testing connection to backend...');
    const response = await fetch(`${API_BASE_URL}/health`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Backend connection successful!');
      console.log('Response:', data);
      return true;
    } else {
      console.log('❌ Backend responded with error:', response.status);
      return false;
    }
  } catch (error) {
    console.log('❌ Connection failed:', error.message);
    return false;
  }
}

// Test the connection
testConnection().then(success => {
  if (success) {
    console.log('\n🎉 Frontend-Backend connection is working!');
  } else {
    console.log('\n❗ Frontend-Backend connection issues detected.');
    console.log('Make sure:');
    console.log('1. Backend server is running on port 3000');
    console.log('2. MongoDB is running');
    console.log('3. Environment variables are set correctly');
  }
});
