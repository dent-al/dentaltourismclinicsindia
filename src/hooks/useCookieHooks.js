import { useEffect, useState } from 'react';
import { useCookies } from '../contexts/CookieContext';

// Custom hook for managing user preferences with cookies
export const useUserPreferences = () => {
  const { 
    setUserPreference, 
    getUserPreference, 
    canUsePreferences 
  } = useCookies();

  const setPreference = (key, value) => {
    if (canUsePreferences()) {
      setUserPreference(key, value);
    } else {
      // Store in sessionStorage as fallback
      sessionStorage.setItem(`pref-${key}`, JSON.stringify(value));
    }
  };

  const getPreference = (key, defaultValue = null) => {
    if (canUsePreferences()) {
      return getUserPreference(key, defaultValue);
    } else {
      // Fallback to sessionStorage
      const stored = sessionStorage.getItem(`pref-${key}`);
      return stored ? JSON.parse(stored) : defaultValue;
    }
  };

  return { setPreference, getPreference };
};

// Custom hook for analytics tracking
export const useAnalytics = () => {
  const { trackEvent, trackPageView, canUseAnalytics } = useCookies();

  const track = (eventName, eventData = {}) => {
    if (canUseAnalytics()) {
      trackEvent(eventName, eventData);
    }
  };

  const trackPage = (page) => {
    if (canUseAnalytics()) {
      trackPageView(page);
    }
  };

  return { track, trackPage, canTrack: canUseAnalytics };
};

// Custom hook for managing authentication with cookies
export const useAuthCookies = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { cookieManager } = useCookies();

  useEffect(() => {
    const token = cookieManager.getAuthToken();
    setIsAuthenticated(!!token);
  }, [cookieManager]);

  const login = (token, userData = {}) => {
    cookieManager.setAuthToken(token);
    if (Object.keys(userData).length > 0) {
      cookieManager.setSessionData('user', userData);
    }
    setIsAuthenticated(true);
  };

  const logout = () => {
    cookieManager.removeAuthToken();
    cookieManager.removeCookie('session-user');
    setIsAuthenticated(false);
  };

  const getUser = () => {
    return cookieManager.getSessionData('user');
  };

  const updateUser = (userData) => {
    cookieManager.setSessionData('user', userData);
  };

  return {
    isAuthenticated,
    login,
    logout,
    getUser,
    updateUser,
    getToken: () => cookieManager.getAuthToken()
  };
};

// Custom hook for marketing and conversion tracking
export const useMarketing = () => {
  const { setMarketingData, getMarketingData, canUseMarketing } = useCookies();

  const trackConversion = (conversionType, value = null) => {
    if (canUseMarketing()) {
      const conversions = getMarketingData('conversions') || [];
      conversions.push({
        type: conversionType,
        value,
        timestamp: Date.now()
      });
      setMarketingData('conversions', conversions);
    }
  };

  const setUtmSource = (source, medium = null, campaign = null) => {
    if (canUseMarketing()) {
      setMarketingData('utm', { source, medium, campaign, timestamp: Date.now() });
    }
  };

  const getUtmData = () => {
    if (canUseMarketing()) {
      return getMarketingData('utm');
    }
    return null;
  };

  const setReferrer = (referrer) => {
    if (canUseMarketing()) {
      setMarketingData('referrer', { url: referrer, timestamp: Date.now() });
    }
  };

  return {
    trackConversion,
    setUtmSource,
    getUtmData,
    setReferrer,
    canTrack: canUseMarketing
  };
};

// Custom hook for session management
export const useSession = () => {
  const { cookieManager } = useCookies();

  const getSessionData = (key) => {
    return cookieManager.getSessionData(key);
  };

  const setSessionData = (key, value) => {
    cookieManager.setSessionData(key, value);
  };

  const getSessionDuration = () => {
    const start = getSessionData('session-start');
    if (start) {
      return Date.now() - start;
    }
    return 0;
  };

  const updateLastActivity = () => {
    setSessionData('last-activity', Date.now());
  };

  const isSessionExpired = (maxDuration = 24 * 60 * 60 * 1000) => { // 24 hours default
    const lastActivity = getSessionData('last-activity');
    if (lastActivity) {
      return Date.now() - lastActivity > maxDuration;
    }
    return false;
  };

  return {
    getSessionData,
    setSessionData,
    getSessionDuration,
    updateLastActivity,
    isSessionExpired
  };
};

// Custom hook for language preferences with cookies
export const useLanguageCookie = () => {
  const { cookieManager } = useCookies();

  const setLanguage = (language) => {
    cookieManager.setLanguagePreference(language);
  };

  const getLanguage = () => {
    return cookieManager.getLanguagePreference();
  };

  return { setLanguage, getLanguage };
};
