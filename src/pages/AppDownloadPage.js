import React, { useState, useEffect } from "react";
import FullPageLoader from "../components/FullPageLoader";
import { usePageTracking } from "../components/AnalyticsTracker";
import { useAnalytics } from "../contexts/AnalyticsContext";

const AppDownloadPage = () => {
  const [loading, setLoading] = useState(true);
  const { trackAppDownload, trackButtonClick } = useAnalytics();
  
  // Track page view
  usePageTracking();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleAppDownload = (platform, downloadType) => {
    trackAppDownload(platform, downloadType);
  };

  const handleEmailSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      trackButtonClick('Email Signup', 'form_submit', 'app_download_page');
      // Handle email signup logic here
      alert('Thank you! We\'ll notify you when the app is available.');
      e.target.reset();
    }
  };

  if (loading) return <FullPageLoader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C73D2] mb-4 sm:mb-6 leading-tight">
            Download Our Mobile App
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Get instant access to top dental clinics, book appointments, and manage your dental health 
            journey right from your smartphone. Available on both iOS and Android.
          </p>
        </div>

        {/* App Preview Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left side - App Features */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Why Download Our App?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2C73D2] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg sm:text-xl">🏥</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">
                      Find Clinics Instantly
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Locate the best dental clinics near you with advanced filters and real-time availability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F4A300] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg sm:text-xl">📅</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">
                      Easy Appointment Booking
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Book, reschedule, or cancel appointments with just a few taps. Get instant confirmations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2C73D2] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg sm:text-xl">💬</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">
                      Direct Chat with Dentists
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Get quick consultations and ask questions directly to verified dental professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F4A300] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg sm:text-xl">🔔</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">
                      Smart Reminders
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Never miss an appointment with smart notifications and dental health reminders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2C73D2] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg sm:text-xl">💳</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">
                      Secure Digital Payments
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Pay safely with multiple payment options and get digital receipts instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - App Download */}
          <div className="text-center order-1 lg:order-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
              {/* App Icon */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#2C73D2] to-[#F4A300] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl sm:text-5xl lg:text-6xl">🦷</span>
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 px-2">
                Dental Tourism Clinics India
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                Your trusted dental care companion
              </p>

              {/* Download Buttons */}
              <div className="space-y-3 sm:space-y-4">
                {/* Play Store Button */}
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleAppDownload('Google Play', 'store_redirect')}
                  className="block w-full bg-black text-white rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-6 hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <div className="text-xl sm:text-2xl">📱</div>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="text-base sm:text-lg font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="https://apps.apple.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleAppDownload('App Store', 'store_redirect')}
                  className="block w-full bg-black text-white rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-6 hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <div className="text-xl sm:text-2xl">🍎</div>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="text-base sm:text-lg font-semibold">App Store</div>
                    </div>
                  </div>
                </a>

                {/* Coming Soon Badge */}
                <div className="inline-block bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Coming Soon - Q1 2025
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                Scan QR Code to Download
              </h4>
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl">📱</div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 px-2">
                Point your camera at the QR code to get the download link
              </p>
            </div>
          </div>
        </div>

        {/* App Screenshots Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8 px-2">
            App Screenshots
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg sm:rounded-xl aspect-[9/16] flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-500">
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">📱</div>
                  <div className="text-xs sm:text-sm">Screenshot {i}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 mx-2 sm:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            Join Thousands of Happy Users
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C73D2] mb-1 sm:mb-2">50K+</div>
              <div className="text-sm sm:text-base text-gray-600">Downloads</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#F4A300] mb-1 sm:mb-2">4.8★</div>
              <div className="text-sm sm:text-base text-gray-600">App Rating</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#2C73D2] mb-1 sm:mb-2">1000+</div>
              <div className="text-sm sm:text-base text-gray-600">Partner Clinics</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#F4A300] mb-1 sm:mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#2C73D2] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl lg:text-2xl">🔒</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Secure & Private</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Your medical data is encrypted and protected with industry-standard security measures.
            </p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#F4A300] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl lg:text-2xl">⚡</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Optimized for speed with instant loading and seamless user experience.
            </p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 text-center sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#2C73D2] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl lg:text-2xl">🌍</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Pan India Coverage</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Access to dental clinics across all major cities and towns in India.
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-center text-white mx-2 sm:mx-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Get Notified When We Launch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90 px-2">
            Be the first to know when our mobile app is available for download
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <form onSubmit={handleEmailSignup} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
              />
              <button 
                type="submit"
                className="bg-white text-[#2C73D2] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadPage;
