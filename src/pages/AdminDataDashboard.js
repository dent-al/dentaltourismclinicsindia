import React, { useState, useEffect } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';

const AdminDataDashboard = () => {
  const [activeTab, setActiveTab] = useState('dental');
  const [data, setData] = useState({
    dental: [],
    cbct: [],
    diagnostic: [],
    pharma: [],
    users: []
  });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { isAuthenticated } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  // Fetch data from backend
  const fetchData = async (type) => {
    setLoading(true);
    try {
      let endpoint = '';
      switch(type) {
        case 'dental':
          endpoint = '/dental-register';
          break;
        case 'cbct':
          endpoint = '/CBCI_OPG_data';
          break;
        case 'diagnostic':
          endpoint = '/diagnostic-labs';
          break;
        case 'pharma':
          endpoint = '/pharma-brand';
          break;
        case 'users':
          endpoint = '/user';
          break;
        default:
          endpoint = '/dental-register';
      }

      console.log(`Fetching data from: http://localhost:3000${endpoint}`);
      const response = await fetch(`http://localhost:3000${endpoint}`);
      console.log(`Response status: ${response.status}`);
      
      const result = await response.json();
      console.log(`Response data:`, result);
      
      if (response.ok && result.success) {
        setData(prev => ({
          ...prev,
          [type]: result.data || []
        }));
      } else {
        console.log(`No data found for ${type}: ${result.message}`);
        setData(prev => ({
          ...prev,
          [type]: []
        }));
      }
    } catch (error) {
      console.error(`Error fetching ${type} data:`, error);
      setData(prev => ({
        ...prev,
        [type]: []
      }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  // Filter data based on search term
  const getFilteredData = () => {
    const currentData = data[activeTab] || [];
    if (!searchTerm) return currentData;
    
    return currentData.filter(item => 
      Object.values(item).some(value => 
        value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  // Export to Excel
  const exportToExcel = () => {
    const filteredData = getFilteredData();
    const csvContent = "data:text/csv;charset=utf-8," + 
      Object.keys(filteredData[0] || {}).join(",") + "\n" +
      filteredData.map(row => Object.values(row).join(",")).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${activeTab}_data_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render table based on data type
  const renderTable = () => {
    const filteredData = getFilteredData();
    
    if (loading) {
      return (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    if (filteredData.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m15 0H3" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No {tabs.find(tab => tab.id === activeTab)?.name} data found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {activeTab === 'dental' && "No dental registrations have been submitted yet."}
              {activeTab === 'cbct' && "No CBCT/OPG center registrations have been submitted yet."}
              {activeTab === 'diagnostic' && "No diagnostic lab registrations have been submitted yet."}
              {activeTab === 'pharma' && "No pharma brand registrations have been submitted yet."}
              {activeTab === 'users' && "No users have registered yet."}
            </p>
            <div className="mt-6">
              <button
                onClick={() => fetchData(activeTab)}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="-ml-1 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh Data
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {Object.keys(filteredData[0]).map((key) => (
                <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {Object.values(item).map((value, idx) => (
                  <td key={idx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                    {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const tabs = [
    { id: 'dental', name: 'Dental Registration', count: data.dental.length },
    { id: 'cbct', name: 'CBCT/OPG Centers', count: data.cbct.length },
    { id: 'diagnostic', name: 'Diagnostic Labs', count: data.diagnostic.length },
    { id: 'pharma', name: 'Pharma Brands', count: data.pharma.length },
    { id: 'users', name: 'Users', count: data.users.length }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Database Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">View and manage all database records</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={exportToExcel}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Excel
              </button>
              <button
                onClick={() => navigate('/admin/analytics')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Analytics Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                {tab.name}
                <span className={`${
                  activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                } ml-2 py-1 px-2 rounded-full text-xs`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Search */}
        <div className="mt-6 mb-4">
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.name} Data
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {getFilteredData().length} records found
            </p>
          </div>
          {renderTable()}
        </div>
      </div>
    </div>
  );
};

export default AdminDataDashboard;