import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const PDFViewer = ({ 
  pdfUrl, 
  title, 
  description,
  downloadFileName = 'document.pdf'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = downloadFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>{title} | Dental Tourism Clinics India</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#2C73D2] mb-2">{title}</h1>
              <p className="text-gray-600">{description}</p>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-[#2C73D2] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
              
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#F4A300] text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in New Tab
              </a>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {isLoading && (
            <div className="flex items-center justify-center h-96">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2C73D2] mb-4"></div>
                <p className="text-gray-600">Loading document...</p>
              </div>
            </div>
          )}

          {error ? (
            <div className="flex flex-col items-center justify-center h-96 p-8">
              <div className="text-red-500 text-6xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Unable to load PDF</h3>
              <p className="text-gray-600 text-center mb-4">
                The PDF document could not be displayed in your browser.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  className="bg-[#2C73D2] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Download PDF Instead
                </button>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
              width="100%"
              height="800"
              style={{ border: 'none', display: isLoading ? 'none' : 'block' }}
              title={title}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              className="w-full"
            />
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-600">
              <p>📅 Last updated: {new Date().toLocaleDateString()}</p>
              <p>📄 Document format: PDF</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-600">
                Having trouble viewing this document? 
                <a 
                  href="mailto:support@dentaltourismclinicsindia.com" 
                  className="text-[#2C73D2] hover:underline ml-1"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#2C73D2] hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
