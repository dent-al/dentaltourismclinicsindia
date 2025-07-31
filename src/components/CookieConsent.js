import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CookieManager } from '../utils/cookieUtils';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: true
  });

  useEffect(() => {
    // Check if user has already given consent
    if (!CookieManager.hasConsent()) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookieSettings({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    CookieManager.setConsent(true);
    CookieManager.setCookie('cookie-settings', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    }), { expires: 365 });
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    setCookieSettings({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
    CookieManager.setConsent(false);
    CookieManager.setCookie('cookie-settings', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    }), { expires: 365 });
    CookieManager.clearNonEssentialCookies();
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    CookieManager.setConsent(true);
    CookieManager.setCookie('cookie-settings', JSON.stringify(cookieSettings), { expires: 365 });
    
    // Clear non-essential cookies if they're not allowed
    if (!cookieSettings.analytics) {
      const allCookies = CookieManager.getAllCookies();
      Object.keys(allCookies).forEach(name => {
        if (name.startsWith('analytics-')) {
          CookieManager.removeCookie(name);
        }
      });
    }
    
    if (!cookieSettings.marketing) {
      const allCookies = CookieManager.getAllCookies();
      Object.keys(allCookies).forEach(name => {
        if (name.startsWith('marketing-')) {
          CookieManager.removeCookie(name);
        }
      });
    }
    
    setShowBanner(false);
    setShowSettings(false);
  };

  const toggleSetting = (setting) => {
    if (setting === 'essential') return; // Essential cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-[#2C73D2] shadow-2xl z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6 text-[#F4A300]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <h3 className="font-bold text-[#2C73D2] text-lg">🍪 Cookie Notice</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences by clicking "Customize Settings".
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Essential cookies are always enabled to ensure the website functions properly.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 min-w-max">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 border-2 border-[#2C73D2] text-[#2C73D2] rounded-lg hover:bg-[#2C73D2] hover:text-white transition-all duration-200 text-sm font-medium"
              >
                Customize Settings
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 text-sm font-medium"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white rounded-lg hover:from-[#F4A300] hover:to-[#2C73D2] transition-all duration-200 text-sm font-medium shadow-lg"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#2C73D2]">Cookie Settings</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-gray-700 mb-6">
                Manage your cookie preferences below. You can enable or disable different types of cookies. 
                Essential cookies cannot be disabled as they are necessary for the website to function.
              </p>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#2C73D2]">Essential Cookies</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Always On</span>
                      <div className="w-12 h-6 bg-[#2C73D2] rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They include authentication, security, and basic functionality cookies.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#2C73D2]">Analytics Cookies</h3>
                    <button
                      onClick={() => toggleSetting('analytics')}
                      className="relative"
                    >
                      <div className={`w-12 h-6 rounded-full transition-colors ${
                        cookieSettings.analytics ? 'bg-[#2C73D2]' : 'bg-gray-300'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          cookieSettings.analytics ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#2C73D2]">Marketing Cookies</h3>
                    <button
                      onClick={() => toggleSetting('marketing')}
                      className="relative"
                    >
                      <div className={`w-12 h-6 rounded-full transition-colors ${
                        cookieSettings.marketing ? 'bg-[#2C73D2]' : 'bg-gray-300'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          cookieSettings.marketing ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are used to deliver advertisements more relevant to you and your interests.
                  </p>
                </div>

                {/* Preference Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#2C73D2]">Preference Cookies</h3>
                    <button
                      onClick={() => toggleSetting('preferences')}
                      className="relative"
                    >
                      <div className={`w-12 h-6 rounded-full transition-colors ${
                        cookieSettings.preferences ? 'bg-[#2C73D2]' : 'bg-gray-300'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          cookieSettings.preferences ? 'translate-x-6' : 'translate-x-0.5'
                        }`}></div>
                      </div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies enable the website to remember choices you make and provide enhanced, more personal features.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white rounded-lg hover:from-[#F4A300] hover:to-[#2C73D2] transition-all duration-200 shadow-lg"
                >
                  Save Settings
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-2 bg-[#2C73D2] text-white rounded-lg hover:bg-[#1a5299] transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
