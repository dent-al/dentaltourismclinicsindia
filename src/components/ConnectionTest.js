import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const ConnectionTest = () => {
  const [connectionStatus, setConnectionStatus] = useState({
    backend: 'checking',
    database: 'checking',
    data: null
  });

  // Test backend connection
  const testBackendConnection = async () => {
    try {
      const result = await apiService.healthCheck();
      if (result.success) {
        setConnectionStatus(prev => ({ ...prev, backend: 'connected' }));
        return true;
      } else {
        setConnectionStatus(prev => ({ ...prev, backend: 'failed' }));
        return false;
      }
    } catch (error) {
      setConnectionStatus(prev => ({ ...prev, backend: 'failed' }));
      return false;
    }
  };

  // Test database connection by fetching data
  const testDatabaseConnection = async () => {
    try {
      const result = await apiService.dental.getAll();
      if (result.success) {
        setConnectionStatus(prev => ({ 
          ...prev, 
          database: 'connected',
          data: result.data 
        }));
      } else {
        setConnectionStatus(prev => ({ ...prev, database: 'no-data' }));
      }
    } catch (error) {
      setConnectionStatus(prev => ({ ...prev, database: 'failed' }));
    }
  };

  // Run tests on component mount
  useEffect(() => {
    const runTests = async () => {
      const backendConnected = await testBackendConnection();
      if (backendConnected) {
        await testDatabaseConnection();
      }
    };
    runTests();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'text-green-600';
      case 'checking': return 'text-yellow-600';
      case 'failed': return 'text-red-600';
      case 'no-data': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected': return '✅';
      case 'checking': return '🔄';
      case 'failed': return '❌';
      case 'no-data': return '⚠️';
      default: return '❓';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Frontend ↔ Backend ↔ MongoDB Atlas Connection Test
      </h2>
      
      <div className="space-y-4">
        {/* Backend Connection */}
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h3 className="font-semibold">Backend Connection</h3>
            <p className="text-sm text-gray-600">http://localhost:3000</p>
          </div>
          <div className={`flex items-center ${getStatusColor(connectionStatus.backend)}`}>
            <span className="mr-2">{getStatusIcon(connectionStatus.backend)}</span>
            <span className="capitalize">{connectionStatus.backend}</span>
          </div>
        </div>

        {/* Database Connection */}
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h3 className="font-semibold">MongoDB Atlas</h3>
            <p className="text-sm text-gray-600">dentalclinic.oolb9je.mongodb.net</p>
          </div>
          <div className={`flex items-center ${getStatusColor(connectionStatus.database)}`}>
            <span className="mr-2">{getStatusIcon(connectionStatus.database)}</span>
            <span className="capitalize">
              {connectionStatus.database === 'no-data' ? 'Connected (No Data)' : connectionStatus.database}
            </span>
          </div>
        </div>
      </div>

      {/* Data Preview */}
      {connectionStatus.data && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Sample Data from MongoDB:</h3>
          <pre className="text-xs overflow-x-auto bg-white p-2 rounded border">
            {JSON.stringify(connectionStatus.data, null, 2)}
          </pre>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => window.location.reload()}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Refresh Test
        </button>
        <button
          onClick={() => {
            setConnectionStatus({
              backend: 'checking',
              database: 'checking',
              data: null
            });
            // Re-run tests
            setTimeout(async () => {
              const backendConnected = await testBackendConnection();
              if (backendConnected) {
                await testDatabaseConnection();
              }
            }, 100);
          }}
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Re-test Connection
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Connection Status Guide:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>✅ <strong>Connected:</strong> Everything is working perfectly</li>
          <li>⚠️ <strong>Connected (No Data):</strong> Connection works but no data in database yet</li>
          <li>🔄 <strong>Checking:</strong> Testing connection...</li>
          <li>❌ <strong>Failed:</strong> Connection failed - check if backend is running</li>
        </ul>
      </div>
    </div>
  );
};

export default ConnectionTest;
