import React, { useState, useEffect } from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
);

const AdminAnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalVisitors: 0,
    totalSessions: 0,
    averageSessionDuration: 0,
    topCountries: [],
    topStates: [],
    referralSources: [],
    aiReferrals: [], // New: Track AI assistant referrals
    deviceTypes: [],
    browsers: [],
    popularPages: [],
    conversionRate: 0,
    appointmentBookings: 0,
    socialMediaClicks: [],
    appDownloads: [],
    dailyVisitors: [],
    aiTrafficTrend: [], // New: Daily AI traffic trend
    timeSpent: {},
  });

  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7days');
  const [autoExport, setAutoExport] = useState(true);
  
  // Admin context
  const { adminUser, adminLogout, hasPermission } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate('/admin/login');
  };

  // Fetch analytics data
  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/analytics?range=${dateRange}`);
      const data = await response.json();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  // Export to Excel
  const exportToExcel = async () => {
    try {
      const response = await fetch('/api/admin/analytics/export', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          range: dateRange,
          includePersonalData: false, // Privacy compliant
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `analytics-report-${new Date().toISOString().split('T')[0]}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Failed to export data:', error);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchAnalyticsData, 5 * 60 * 1000);
    
    // Auto-export daily reports if enabled
    if (autoExport) {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(1, 0, 0, 0); // Export at 1 AM daily
      
      const timeUntilExport = tomorrow.getTime() - now.getTime();
      const exportTimer = setTimeout(() => {
        exportToExcel();
        // Set up daily interval
        setInterval(exportToExcel, 24 * 60 * 60 * 1000);
      }, timeUntilExport);
      
      return () => {
        clearInterval(interval);
        clearTimeout(exportTimer);
      };
    }
    
    return () => clearInterval(interval);
  }, [dateRange, autoExport]);

  // Chart configurations
  const countryChartData = {
    labels: analyticsData.topCountries.map(item => item.country),
    datasets: [
      {
        data: analyticsData.topCountries.map(item => item.count),
        backgroundColor: [
          '#2C73D2',
          '#F4A300',
          '#E74C3C',
          '#27AE60',
          '#9B59B6',
          '#F39C12',
          '#3498DB',
          '#E67E22',
          '#1ABC9C',
          '#34495E',
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const stateChartData = {
    labels: analyticsData.topStates.map(item => item.state),
    datasets: [
      {
        data: analyticsData.topStates.map(item => item.count),
        backgroundColor: [
          '#F4A300',
          '#2C73D2',
          '#27AE60',
          '#E74C3C',
          '#9B59B6',
          '#F39C12',
          '#3498DB',
          '#E67E22',
          '#1ABC9C',
          '#34495E',
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const referralChartData = {
    labels: analyticsData.referralSources.map(item => item.source),
    datasets: [
      {
        data: analyticsData.referralSources.map(item => item.count),
        backgroundColor: [
          '#4285F4', // Google Blue
          '#FF0000', // YouTube Red
          '#E4405F', // Instagram Pink
          '#1877F2', // Facebook Blue
          '#2C73D2', // Brand Blue
          '#F4A300', // Brand Orange
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  // New: AI Referrals Chart Data
  const aiReferralChartData = {
    labels: analyticsData.aiReferrals.map(item => item.aiSource),
    datasets: [
      {
        data: analyticsData.aiReferrals.map(item => item.count),
        backgroundColor: [
          '#10A37F', // ChatGPT Green
          '#FF6B35', // Claude Orange
          '#4285F4', // Google Bard/Gemini Blue
          '#FF4081', // Microsoft Copilot Pink
          '#8B5CF6', // Perplexity Purple
          '#F59E0B', // Other AI Yellow
          '#EF4444', // Custom AI Red
          '#06B6D4', // AI Chat Blue
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  // AI Traffic Trend Chart
  const aiTrafficTrendData = {
    labels: analyticsData.aiTrafficTrend.map(item => item.date),
    datasets: [
      {
        label: 'AI-Driven Visitors',
        data: analyticsData.aiTrafficTrend.map(item => item.count),
        borderColor: '#10A37F',
        backgroundColor: 'rgba(16, 163, 127, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const deviceChartData = {
    labels: analyticsData.deviceTypes.map(item => item.device),
    datasets: [
      {
        data: analyticsData.deviceTypes.map(item => item.count),
        backgroundColor: ['#2C73D2', '#F4A300', '#27AE60'],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const dailyVisitorsData = {
    labels: analyticsData.dailyVisitors.map(item => item.date),
    datasets: [
      {
        label: 'Daily Visitors',
        data: analyticsData.dailyVisitors.map(item => item.count),
        borderColor: '#2C73D2',
        backgroundColor: 'rgba(44, 115, 210, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#2C73D2',
        borderWidth: 1,
      },
    },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#2C73D2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Analytics Dashboard
              </h1>
              <p className="text-gray-600">
                Private analytics for admin use only - HIPAA compliant
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              {/* Admin Info */}
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-600">
                  Welcome, <strong>{adminUser?.username}</strong> ({adminUser?.role})
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Logout
                </button>
              </div>
              
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C73D2] focus:border-transparent"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="1year">Last Year</option>
              </select>
              
              {hasPermission('export_data') && (
                <button
                  onClick={exportToExcel}
                  className="px-6 py-2 bg-[#2C73D2] text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
                >
                  <span>📊</span>
                  Export Excel
                </button>
              )}
            </div>
          </div>
          
          {/* Auto Export Toggle */}
          {hasPermission('export_data') && (
            <div className="mt-4 flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoExport}
                  onChange={(e) => setAutoExport(e.target.checked)}
                  className="w-4 h-4 text-[#2C73D2] bg-gray-100 border-gray-300 rounded focus:ring-[#2C73D2]"
                />
                <span className="text-sm text-gray-700">
                  Auto-export daily reports to Excel
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#2C73D2] mb-2">
              {analyticsData.totalVisitors.toLocaleString()}
            </div>
            <div className="text-gray-600">Total Visitors</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#F4A300] mb-2">
              {analyticsData.totalSessions.toLocaleString()}
            </div>
            <div className="text-gray-600">Total Sessions</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#27AE60] mb-2">
              {analyticsData.appointmentBookings.toLocaleString()}
            </div>
            <div className="text-gray-600">Appointments Booked</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#E74C3C] mb-2">
              {analyticsData.conversionRate.toFixed(1)}%
            </div>
            <div className="text-gray-600">Conversion Rate</div>
          </div>

          {/* New: AI Traffic Metric */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-[#10A37F]">
            <div className="text-3xl font-bold text-[#10A37F] mb-2">
              {analyticsData.aiReferrals.reduce((sum, ai) => sum + ai.count, 0).toLocaleString()}
            </div>
            <div className="text-gray-600 flex items-center justify-center gap-1">
              <span>🤖</span>
              <span>AI-Driven Visits</span>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Country Distribution */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Visitors by Country
            </h3>
            <div className="h-64">
              <Pie data={countryChartData} options={chartOptions} />
            </div>
          </div>

          {/* State Distribution */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Visitors by State (India)
            </h3>
            <div className="h-64">
              <Pie data={stateChartData} options={chartOptions} />
            </div>
          </div>

          {/* Referral Sources */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Traffic Sources
            </h3>
            <div className="h-64">
              <Pie data={referralChartData} options={chartOptions} />
            </div>
          </div>

          {/* New: AI Referrals Chart */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#10A37F]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span>🤖</span>
              AI Assistant Referrals
            </h3>
            <div className="h-64">
              <Pie data={aiReferralChartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* AI Traffic Trend - Full Width */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-2 border-[#10A37F]">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span>🤖</span>
            AI-Driven Traffic Trend
          </h3>
          <div className="h-64">
            <Line data={aiTrafficTrendData} options={chartOptions} />
          </div>
        </div>

        {/* Original Charts Grid Continued */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Device Types */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Device Usage
            </h3>
            <div className="h-64">
              <Pie data={deviceChartData} options={chartOptions} />
            </div>
          </div>

          {/* AI Referrals Detailed Table */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#10A37F]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span>🤖</span>
              AI Assistant Details
            </h3>
            <div className="space-y-3">
              {analyticsData.aiReferrals.map((ai, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">
                      {ai.aiSource === 'ChatGPT' ? '🟢' : 
                       ai.aiSource === 'Claude' ? '🟠' : 
                       ai.aiSource === 'Gemini' ? '🔵' : 
                       ai.aiSource === 'Copilot' ? '🔮' : 
                       ai.aiSource === 'Perplexity' ? '🟣' : '🤖'}
                    </span>
                    <div>
                      <span className="font-medium">{ai.aiSource}</span>
                      <div className="text-xs text-gray-500">
                        Conversion: {ai.conversions || 0} appointments
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[#10A37F] font-semibold text-lg">
                      {ai.count.toLocaleString()}
                    </span>
                    <div className="text-xs text-gray-500">
                      {((ai.count / analyticsData.totalVisitors) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
              {analyticsData.aiReferrals.length === 0 && (
                <p className="text-gray-500 text-center py-4">
                  No AI referrals detected yet. Enable AI tracking in your analytics setup.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Daily Visitors Trend */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Daily Visitors Trend
          </h3>
          <div className="h-64">
            <Line data={dailyVisitorsData} options={chartOptions} />
          </div>
        </div>

        {/* Detailed Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Popular Pages */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Most Visited Pages
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-3">Page</th>
                    <th className="text-right py-2 px-3">Views</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.popularPages.map((page, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-3 text-sm">{page.path}</td>
                      <td className="py-2 px-3 text-sm text-right">{page.views.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Social Media Performance */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Social Media Clicks
            </h3>
            <div className="space-y-3">
              {analyticsData.socialMediaClicks.map((social, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">
                      {social.platform === 'YouTube' ? '🎥' : '📸'}
                    </span>
                    <span className="font-medium">{social.platform}</span>
                  </div>
                  <span className="text-[#2C73D2] font-semibold">
                    {social.clicks.toLocaleString()} clicks
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <div className="flex">
            <div className="text-yellow-400 mr-3">⚠️</div>
            <div>
              <p className="text-sm text-yellow-800">
                <strong>Privacy Notice:</strong> This dashboard is for administrative use only. 
                All data is anonymized and HIPAA compliant. No personal medical information 
                is tracked or stored. Location data is aggregated at city/state level only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalyticsDashboard;
