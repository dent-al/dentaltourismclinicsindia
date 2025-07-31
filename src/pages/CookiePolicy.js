import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import { useCookies } from '../contexts/CookieContext';

const CookiePolicy = () => {
  const { t } = useTranslation();
  const { cookieSettings, updateCookieSettings } = useCookies();

  const toggleSetting = (setting) => {
    if (setting === 'essential') return; // Essential cookies cannot be disabled
    
    const newSettings = {
      ...cookieSettings,
      [setting]: !cookieSettings[setting]
    };
    updateCookieSettings(newSettings);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#2C73D2] mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies to enhance your browsing experience, provide personalized content, remember your preferences, 
              and analyze how our website is used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#2C73D2]">Essential Cookies</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Always Active</span>
                    <div className="w-12 h-6 bg-[#2C73D2] rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  These cookies are strictly necessary to provide you with services available through our website and to use some of its features.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Authentication and security cookies</li>
                  <li>Session management cookies</li>
                  <li>Cookie consent preferences</li>
                  <li>Language preferences</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#2C73D2]">Analytics Cookies</h3>
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
                <p className="text-gray-700 mb-3">
                  These cookies collect information about how you use our website, which pages you visit, and any errors you may encounter.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                  <li>Performance monitoring</li>
                  <li>Error tracking</li>
                </ul>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#2C73D2]">Marketing Cookies</h3>
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
                <p className="text-gray-700 mb-3">
                  These cookies are used to deliver advertisements more relevant to you and your interests.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Targeted advertising</li>
                  <li>Social media integration</li>
                  <li>Conversion tracking</li>
                  <li>Remarketing campaigns</li>
                </ul>
              </div>

              {/* Preference Cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#2C73D2]">Preference Cookies</h3>
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
                <p className="text-gray-700 mb-3">
                  These cookies enable the website to remember choices you make and provide enhanced, more personal features.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>User interface preferences</li>
                  <li>Personalized content</li>
                  <li>Saved search preferences</li>
                  <li>Customized layouts</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience 
              and parts of our website may no longer be fully accessible.
            </p>
            <p className="text-gray-700 mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites 
              to set cookies, you may worsen your overall user experience since it will no longer be personalized to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              In some special cases, we also use cookies provided by trusted third parties. Our website may use Google Analytics, 
              which is one of the most widespread and trusted analytics solutions on the web, to help us understand how you use 
              the site and ways that we can improve your experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies or other technologies, please email us at privacy@dentaltourismclinicsindia.com 
              or contact us via our contact page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2C73D2] mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page 
              and updating the "Last updated" date at the top of this policy.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-[#2C73D2] mb-4">Current Cookie Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between items-center">
              <span>Essential Cookies:</span>
              <span className="text-green-600 font-semibold">Always Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Analytics Cookies:</span>
              <span className={cookieSettings.analytics ? 'text-green-600' : 'text-red-600'}>
                {cookieSettings.analytics ? 'Enabled' : 'Disabled'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Marketing Cookies:</span>
              <span className={cookieSettings.marketing ? 'text-green-600' : 'text-red-600'}>
                {cookieSettings.marketing ? 'Enabled' : 'Disabled'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Preference Cookies:</span>
              <span className={cookieSettings.preferences ? 'text-green-600' : 'text-red-600'}>
                {cookieSettings.preferences ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
