import React from 'react';

const PDFPlaceholder = ({ title, message }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">📄</div>
          <h1 className="text-3xl font-bold text-[#2C73D2] mb-4">{title}</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <div className="text-yellow-600 text-lg font-semibold mb-2">
              📋 Document Setup Required
            </div>
            <p className="text-gray-700 mb-4">{message}</p>
            <div className="text-sm text-gray-600 text-left bg-gray-50 p-4 rounded">
              <strong>To setup this document:</strong><br/>
              1. Upload your PDF to: <code className="bg-gray-200 px-1 rounded">public/documents/</code><br/>
              2. Name it appropriately (see README.md for details)<br/>
              3. Refresh this page
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <a
              href="/"
              className="bg-[#2C73D2] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </a>
            <a
              href="mailto:support@dentaltourismclinicsindia.com"
              className="bg-[#F4A300] text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFPlaceholder;
