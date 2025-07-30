// Connection Test Script
// Run this in the browser console to test frontend-backend connection

async function testBackendConnection() {
  console.log('🔍 Testing Frontend-Backend Connection...');
  
  try {
    // Test 1: Health Check
    console.log('1. Testing health endpoint...');
    const healthResponse = await fetch('http://localhost:3000/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test 2: API Service Test
    console.log('2. Testing API service...');
    // You can import and use the API service here if needed
    
    // Test 3: Root endpoint
    console.log('3. Testing root endpoint...');
    const rootResponse = await fetch('http://localhost:3000/');
    const rootData = await rootResponse.json();
    console.log('✅ Root endpoint:', rootData);
    
    console.log('🎉 All tests passed! Frontend-Backend connection is working!');
    return true;
    
  } catch (error) {
    console.error('❌ Connection test failed:', error);
    console.log('💡 Make sure:');
    console.log('   - Backend server is running on port 3000');
    console.log('   - MongoDB is running');
    console.log('   - No CORS issues');
    return false;
  }
}

// Auto-run the test
testBackendConnection();
