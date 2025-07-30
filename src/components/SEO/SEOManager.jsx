import React, { useState, useEffect } from 'react';
import { useSEO } from '../contexts/SEOContext';

const SEOManager = () => {
  const {
    seoData,
    globalKeywords,
    seoSettings,
    updatePageSEO,
    addGlobalKeyword,
    removeGlobalKeyword,
    updateSeoSettings
  } = useSEO();

  const [activeTab, setActiveTab] = useState('homepage');
  const [newKeyword, setNewKeyword] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const pages = [
    { key: 'homepage', label: 'Homepage' },
    { key: 'clinics', label: 'Clinics' },
    { key: 'treatments', label: 'Treatments' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ];

  const handlePageSEOUpdate = (field, value) => {
    updatePageSEO(activeTab, { [field]: value });
  };

  const handleAddKeyword = () => {
    if (newKeyword.trim()) {
      addGlobalKeyword(newKeyword.trim());
      setNewKeyword('');
    }
  };

  const handleKeywordKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddKeyword();
    }
  };

  const currentPageSEO = seoData[activeTab] || {};

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SEO Management Dashboard</h1>
        <p className="text-gray-600">Manage SEO settings, keywords, and meta information for your dental tourism website.</p>
      </div>

      {/* Global SEO Settings */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Global SEO Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
            <input
              type="text"
              value={seoSettings.siteName}
              onChange={(e) => updateSeoSettings({ siteName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site URL</label>
            <input
              type="url"
              value={seoSettings.siteUrl}
              onChange={(e) => updateSeoSettings({ siteUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Global Keywords Management */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Global Keywords</h2>
        
        {/* Add New Keyword */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            onKeyPress={handleKeywordKeyPress}
            placeholder="Add new keyword..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleAddKeyword}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add Keyword
          </button>
        </div>

        {/* Keywords List */}
        <div className="flex flex-wrap gap-2">
          {globalKeywords.map((keyword, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 border border-green-300"
            >
              {keyword}
              <button
                onClick={() => removeGlobalKeyword(keyword)}
                className="ml-2 text-green-600 hover:text-green-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Page-specific SEO Settings */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Page-specific SEO</h2>
        
        {/* Page Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {pages.map((page) => (
            <button
              key={page.key}
              onClick={() => setActiveTab(page.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === page.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>

        {/* SEO Form for Active Page */}
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Page Title ({currentPageSEO.title?.length || 0}/60 characters)
            </label>
            <input
              type="text"
              value={currentPageSEO.title || ''}
              onChange={(e) => handlePageSEOUpdate('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter page title..."
            />
            {currentPageSEO.title?.length > 60 && (
              <p className="text-red-500 text-sm mt-1">Title is too long. Keep it under 60 characters.</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description ({currentPageSEO.description?.length || 0}/160 characters)
            </label>
            <textarea
              value={currentPageSEO.description || ''}
              onChange={(e) => handlePageSEOUpdate('description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter meta description..."
            />
            {currentPageSEO.description?.length > 160 && (
              <p className="text-red-500 text-sm mt-1">Description is too long. Keep it under 160 characters.</p>
            )}
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Page Keywords</label>
            <textarea
              value={currentPageSEO.keywords || ''}
              onChange={(e) => handlePageSEOUpdate('keywords', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter keywords separated by commas..."
            />
            <p className="text-gray-500 text-sm mt-1">Separate keywords with commas</p>
          </div>

          {/* Focus Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Focus Keywords (Primary SEO targets)</label>
            <input
              type="text"
              value={currentPageSEO.focusKeywords?.join(', ') || ''}
              onChange={(e) => handlePageSEOUpdate('focusKeywords', e.target.value.split(',').map(k => k.trim()).filter(k => k))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter 2-3 primary keywords..."
            />
            <p className="text-gray-500 text-sm mt-1">Enter 2-3 main keywords you want to rank for</p>
          </div>
        </div>

        {/* SEO Preview */}
        <div className="mt-8 p-4 bg-white border border-gray-300 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">SEO Preview</h3>
          <div className="space-y-2">
            <div className="text-blue-600 text-lg font-medium hover:underline cursor-pointer">
              {currentPageSEO.title || 'Page Title'}
            </div>
            <div className="text-green-700 text-sm">
              {seoSettings.siteUrl}/{activeTab === 'homepage' ? '' : activeTab}
            </div>
            <div className="text-gray-600 text-sm">
              {currentPageSEO.description || 'Meta description will appear here...'}
            </div>
          </div>
        </div>

        {/* SEO Tips */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">SEO Tips:</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Keep titles under 60 characters for full display in search results</li>
            <li>• Write descriptions between 120-160 characters</li>
            <li>• Use focus keywords naturally in title and description</li>
            <li>• Include location-based keywords for local SEO</li>
            <li>• Make titles compelling to improve click-through rates</li>
          </ul>
        </div>
      </div>

      {/* Keyword Density Analysis */}
      <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Keyword Analysis for {pages.find(p => p.key === activeTab)?.label}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">Focus Keywords</h4>
            <div className="space-y-1">
              {currentPageSEO.focusKeywords?.map((keyword, index) => (
                <span key={index} className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                  {keyword}
                </span>
              )) || <span className="text-gray-500 text-sm">No focus keywords set</span>}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">Title Optimization</h4>
            <div className="text-sm">
              <p className={`${currentPageSEO.title?.length > 60 ? 'text-red-600' : 'text-green-600'}`}>
                Length: {currentPageSEO.title?.length || 0}/60 chars
              </p>
              <p className={`${currentPageSEO.focusKeywords?.some(k => currentPageSEO.title?.toLowerCase().includes(k.toLowerCase())) ? 'text-green-600' : 'text-red-600'}`}>
                Contains focus keyword: {currentPageSEO.focusKeywords?.some(k => currentPageSEO.title?.toLowerCase().includes(k.toLowerCase())) ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">Description Optimization</h4>
            <div className="text-sm">
              <p className={`${currentPageSEO.description?.length > 160 ? 'text-red-600' : 'text-green-600'}`}>
                Length: {currentPageSEO.description?.length || 0}/160 chars
              </p>
              <p className={`${currentPageSEO.focusKeywords?.some(k => currentPageSEO.description?.toLowerCase().includes(k.toLowerCase())) ? 'text-green-600' : 'text-red-600'}`}>
                Contains focus keyword: {currentPageSEO.focusKeywords?.some(k => currentPageSEO.description?.toLowerCase().includes(k.toLowerCase())) ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOManager;
