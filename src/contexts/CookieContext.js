import React, { createContext, useContext, useState, useEffect } from 'react';
import { CookieManager } from '../utils/cookieUtils';

const CookieContext = createContext();

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};

export const CookieProvider = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState(null);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Initialize cookie state from stored cookies
    const hasConsent = CookieManager.hasConsent();
    setCookieConsent(hasConsent);

    // Load cookie settings
    const settings = CookieManager.getCookie('cookie-settings');
    if (settings) {
      try {
        setCookieSettings(JSON.parse(settings));
      } catch (error) {
        console.error('Error parsing cookie settings:', error);
      }
    }

    // Set up user session tracking
    if (hasConsent) {
      trackUserSession();
    }
  }, []);

  const trackUserSession = () => {
    // Set session start time
    if (!CookieManager.getSessionData('session-start')) {
      CookieManager.setSessionData('session-start', Date.now());
    }

    // Update last activity
    CookieManager.setSessionData('last-activity', Date.now());

    // Track page views (if analytics enabled)
    const currentSettings = JSON.parse(CookieManager.getCookie('cookie-settings') || '{}');
    if (currentSettings.analytics) {
      const pageViews = parseInt(CookieManager.getAnalyticsCookie('page-views') || '0') + 1;
      CookieManager.setAnalyticsCookie('page-views', pageViews.toString());
    }
  };

  const updateCookieSettings = (newSettings) => {
    setCookieSettings(newSettings);
    CookieManager.setCookie('cookie-settings', JSON.stringify(newSettings), { expires: 365 });
    
    // Handle analytics cookies
    if (!newSettings.analytics) {
      // Clear analytics cookies
      const allCookies = CookieManager.getAllCookies();
      Object.keys(allCookies).forEach(name => {
        if (name.startsWith('analytics-')) {
          CookieManager.removeCookie(name);
        }
      });
    }

    // Handle marketing cookies
    if (!newSettings.marketing) {
      // Clear marketing cookies
      const allCookies = CookieManager.getAllCookies();
      Object.keys(allCookies).forEach(name => {
        if (name.startsWith('marketing-')) {
          CookieManager.removeCookie(name);
        }
      });
    }
  };

  const giveConsent = (settings = null) => {
    setCookieConsent(true);
    CookieManager.setConsent(true);
    
    if (settings) {
      updateCookieSettings(settings);
    }
    
    trackUserSession();
  };

  const revokeConsent = () => {
    setCookieConsent(false);
    CookieManager.setConsent(false);
    CookieManager.clearNonEssentialCookies();
    setCookieSettings({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
  };

  // Analytics functions (only work if analytics cookies are enabled)
  const trackEvent = (eventName, eventData = {}) => {
    if (cookieSettings.analytics && cookieConsent) {
      // Store event in analytics cookie
      const events = JSON.parse(CookieManager.getAnalyticsCookie('events') || '[]');
      events.push({
        name: eventName,
        data: eventData,
        timestamp: Date.now()
      });
      
      // Keep only last 50 events to prevent cookie size issues
      if (events.length > 50) {
        events.splice(0, events.length - 50);
      }
      
      CookieManager.setAnalyticsCookie('events', JSON.stringify(events));
    }
  };

  const trackPageView = (page) => {
    if (cookieSettings.analytics && cookieConsent) {
      trackEvent('page_view', { page, url: window.location.href });
    }
  };

  // User preference functions
  const setUserPreference = (key, value) => {
    if (cookieSettings.preferences && cookieConsent) {
      const preferences = CookieManager.getUserPreferences() || {};
      preferences[key] = value;
      CookieManager.setUserPreferences(preferences);
    }
  };

  const getUserPreference = (key, defaultValue = null) => {
    if (cookieSettings.preferences && cookieConsent) {
      const preferences = CookieManager.getUserPreferences() || {};
      return preferences[key] || defaultValue;
    }
    return defaultValue;
  };

  // Marketing functions
  const setMarketingData = (key, value) => {
    if (cookieSettings.marketing && cookieConsent) {
      CookieManager.setMarketingCookie(key, JSON.stringify(value));
    }
  };

  const getMarketingData = (key) => {
    if (cookieSettings.marketing && cookieConsent) {
      const data = CookieManager.getMarketingCookie(key);
      return data ? JSON.parse(data) : null;
    }
    return null;
  };

  const value = {
    // State
    cookieConsent,
    cookieSettings,
    
    // Actions
    giveConsent,
    revokeConsent,
    updateCookieSettings,
    
    // Analytics
    trackEvent,
    trackPageView,
    
    // Preferences
    setUserPreference,
    getUserPreference,
    
    // Marketing
    setMarketingData,
    getMarketingData,
    
    // Utilities
    hasConsent: () => cookieConsent,
    canUseAnalytics: () => cookieSettings.analytics && cookieConsent,
    canUseMarketing: () => cookieSettings.marketing && cookieConsent,
    canUsePreferences: () => cookieSettings.preferences && cookieConsent,
    
    // Direct cookie manager access
    cookieManager: CookieManager
  };

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
};

export default CookieProvider;
