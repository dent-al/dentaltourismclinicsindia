import React, { useState, useEffect } from 'react';
import { useAnalytics } from '../contexts/AnalyticsContext';

const FloatingSocialButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { trackSocialClick } = useAnalytics();

  // Show buttons after a short delay when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Social media links - replace with your actual URLs
  const socialLinks = {
    youtube: 'https://www.youtube.com/@dentaltourismclinicsindia',
    instagram: 'https://www.instagram.com/dentaltourismclinicsindia',
  };

  const handleSocialClick = (platform, action) => {
    trackSocialClick(platform, action);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col items-end space-y-3">
      {/* Expanded Social Buttons */}
      {isExpanded && (
        <div className="flex flex-col space-y-3 animate-slideUp">
          {/* YouTube Button */}
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick('YouTube', 'subscribe_click')}
            className="group relative bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounceIn"
            style={{ animationDelay: '0.1s' }}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Subscribe on YouTube
            </div>
          </a>

          {/* Instagram Button */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick('Instagram', 'follow_click')}
            className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounceIn"
            style={{ animationDelay: '0.2s' }}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Follow on Instagram
            </div>
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-gradient-to-r from-[#2C73D2] to-[#F4A300] hover:from-[#1e5bb8] hover:to-[#e09000] text-white p-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isExpanded ? (
          // Close icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Social media icon
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.384,18.068 L24,23.684 L23.684,24 L18.068,18.384 C16.335,19.786 14.173,20.618 11.809,20.618 C5.293,20.618 0,15.325 0,8.809 C0,2.293 5.293,-3.10862447e-15 11.809,-3.10862447e-15 C18.325,-3.10862447e-15 23.618,2.293 23.618,8.809 C23.618,11.173 22.786,13.335 21.384,15.068 L18.384,18.068 Z M20.618,8.809 C20.618,3.951 16.667,0 11.809,0 C6.951,0 3,3.951 3,8.809 C3,13.667 6.951,17.618 11.809,17.618 C16.667,17.618 20.618,13.667 20.618,8.809 Z"/>
            <circle cx="7" cy="7" r="1"/>
            <circle cx="17" cy="7" r="1"/>
            <circle cx="7" cy="17" r="1"/>
            <circle cx="17" cy="17" r="1"/>
          </svg>
        )}
      </button>

      {/* Pulse effect */}
      {!isExpanded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] rounded-full animate-ping opacity-20"></div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FloatingSocialButtons;
