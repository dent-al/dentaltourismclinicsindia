import React, { createContext, useContext, useEffect, useState } from 'react';

const AnalyticsContext = createContext();

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({
    sessionId: null,
    userId: null,
    startTime: null,
    country: null,
    state: null,
    city: null,
    referralSource: null,
    deviceType: null,
    browser: null,
  });

  // Generate unique session ID
  const generateSessionId = () => {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  // Detect device type
  const getDeviceType = () => {
    const userAgent = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(userAgent)) return 'Tablet';
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) return 'Mobile';
    return 'Desktop';
  };

  // Detect browser
  const getBrowser = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Other';
  };

  // Get referral source
  const getReferralSource = () => {
    const referrer = document.referrer;
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check for UTM parameters first
    if (urlParams.get('utm_source')) {
      return urlParams.get('utm_source');
    }
    
    // Check referrer domain
    if (referrer) {
      if (referrer.includes('google.com')) return 'Google Search';
      if (referrer.includes('youtube.com')) return 'YouTube';
      if (referrer.includes('instagram.com')) return 'Instagram';
      if (referrer.includes('facebook.com')) return 'Facebook';
      if (referrer.includes('twitter.com')) return 'Twitter';
      if (referrer.includes('linkedin.com')) return 'LinkedIn';
      return 'External Website';
    }
    
    return 'Direct Visit';
  };

  // Get user location using IP geolocation
  const getUserLocation = async () => {
    try {
      // Using ipapi.co for free geolocation
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      return {
        country: data.country_name || 'Unknown',
        state: data.region || 'Unknown',
        city: data.city || 'Unknown',
        ip: data.ip || 'Unknown'
      };
    } catch (error) {
      console.error('Failed to get location:', error);
      return {
        country: 'Unknown',
        state: 'Unknown',
        city: 'Unknown',
        ip: 'Unknown'
      };
    }
  };

  // Send analytics data to backend
  const sendAnalyticsData = async (eventData) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...sessionData,
          ...eventData,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Failed to send analytics:', error);
      // Store in localStorage as backup
      const storedData = JSON.parse(localStorage.getItem('pendingAnalytics') || '[]');
      storedData.push({
        ...sessionData,
        ...eventData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('pendingAnalytics', JSON.stringify(storedData));
    }
  };

  // Track page view
  const trackPageView = (pagePath, pageTitle) => {
    sendAnalyticsData({
      eventType: 'page_view',
      pagePath,
      pageTitle,
      userAgent: navigator.userAgent,
    });
  };

  // Track button clicks
  const trackButtonClick = (buttonName, buttonType, context) => {
    sendAnalyticsData({
      eventType: 'button_click',
      buttonName,
      buttonType,
      context,
    });
  };

  // Track form submissions
  const trackFormSubmission = (formName, formData) => {
    sendAnalyticsData({
      eventType: 'form_submission',
      formName,
      formData: {
        ...formData,
        // Remove sensitive data
        password: undefined,
        email: formData.email ? 'provided' : 'not_provided',
        phone: formData.phone ? 'provided' : 'not_provided',
      },
    });
  };

  // Track social media clicks
  const trackSocialClick = (platform, action) => {
    sendAnalyticsData({
      eventType: 'social_interaction',
      platform,
      action,
    });
  };

  // Track app download clicks
  const trackAppDownload = (platform, downloadType) => {
    sendAnalyticsData({
      eventType: 'app_download',
      platform,
      downloadType,
    });
  };

  // Track search queries
  const trackSearch = (query, resultsCount, filters) => {
    sendAnalyticsData({
      eventType: 'search',
      query,
      resultsCount,
      filters,
    });
  };

  // Track appointment bookings
  const trackAppointmentBooking = (clinicId, clinicName, appointmentType) => {
    sendAnalyticsData({
      eventType: 'appointment_booking',
      clinicId,
      clinicName,
      appointmentType,
    });
  };

  // Track clinic views
  const trackClinicView = (clinicId, clinicName, viewDuration) => {
    sendAnalyticsData({
      eventType: 'clinic_view',
      clinicId,
      clinicName,
      viewDuration,
    });
  };

  // Track user engagement
  const trackEngagement = (action, element, duration) => {
    sendAnalyticsData({
      eventType: 'user_engagement',
      action,
      element,
      duration,
    });
  };

  // Initialize analytics on mount
  useEffect(() => {
    const initializeAnalytics = async () => {
      const sessionId = generateSessionId();
      const location = await getUserLocation();
      const referralSource = getReferralSource();
      
      const initialData = {
        sessionId,
        startTime: new Date().toISOString(),
        country: location.country,
        state: location.state,
        city: location.city,
        ip: location.ip,
        referralSource,
        deviceType: getDeviceType(),
        browser: getBrowser(),
      };

      setSessionData(initialData);

      // Track session start
      sendAnalyticsData({
        eventType: 'session_start',
        ...initialData,
      });
    };

    initializeAnalytics();

    // Track session end on page unload
    const handleBeforeUnload = () => {
      sendAnalyticsData({
        eventType: 'session_end',
        sessionDuration: Date.now() - new Date(sessionData.startTime).getTime(),
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const value = {
    sessionData,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackSocialClick,
    trackAppDownload,
    trackSearch,
    trackAppointmentBooking,
    trackClinicView,
    trackEngagement,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
