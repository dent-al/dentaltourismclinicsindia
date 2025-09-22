import React, { useState } from 'react';
import axios from 'axios';

const ApiTest = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const testContactApi = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    const testData = {
      name: "Test User",
      email: "test@example.com", 
      phone: "1234567890",
      subject: "API Test",
      message: "This is a test message to check if the API is working."
    };

    try {
      const result = await axios.post('/contact-us', testData, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      console.log("API Success:", result.data);
      setResponse(result.data);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
      <h3 className="font-bold text-yellow-800 mb-3">🧪 API Test Component</h3>
      <button 
        onClick={testContactApi}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Contact API'}
      </button>
      
      {response && (
        <div className="mt-4 p-3 bg-green-100 rounded">
          <h4 className="font-semibold text-green-800">✅ API Response:</h4>
          <pre className="text-sm mt-2 text-green-700 overflow-x-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 rounded">
          <h4 className="font-semibold text-red-800">❌ API Error:</h4>
          <pre className="text-sm mt-2 text-red-700 overflow-x-auto">
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiTest;
