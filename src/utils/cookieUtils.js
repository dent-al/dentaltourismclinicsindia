import Cookies from 'js-cookie';

// Cookie utility functions for managing application cookies
export class CookieManager {
  
  // Set a cookie with options
  static setCookie(name, value, options = {}) {
    const defaultOptions = {
      expires: 30, // 30 days by default
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      ...options
    };
    
    return Cookies.set(name, value, defaultOptions);
  }

  // Get a cookie value
  static getCookie(name) {
    return Cookies.get(name);
  }

  // Remove a cookie
  static removeCookie(name) {
    return Cookies.remove(name);
  }

  // Check if cookie consent has been given
  static hasConsent() {
    return this.getCookie('cookie-consent') === 'true';
  }

  // Set cookie consent
  static setConsent(consent = true) {
    this.setCookie('cookie-consent', consent.toString(), { expires: 365 });
  }

  // User preferences cookies
  static setUserPreferences(preferences) {
    this.setCookie('user-preferences', JSON.stringify(preferences), { expires: 365 });
  }

  static getUserPreferences() {
    const prefs = this.getCookie('user-preferences');
    return prefs ? JSON.parse(prefs) : null;
  }

  // Language preference
  static setLanguagePreference(language) {
    this.setCookie('language-preference', language, { expires: 365 });
  }

  static getLanguagePreference() {
    return this.getCookie('language-preference');
  }

  // Authentication cookies
  static setAuthToken(token) {
    this.setCookie('auth-token', token, { 
      expires: 7, // 7 days for auth token
      secure: true,
      httpOnly: false // Note: httpOnly can't be set from client-side JS
    });
  }

  static getAuthToken() {
    return this.getCookie('auth-token');
  }

  static removeAuthToken() {
    this.removeCookie('auth-token');
  }

  // Session cookies
  static setSessionData(key, value) {
    this.setCookie(`session-${key}`, JSON.stringify(value), { expires: 1 }); // 1 day
  }

  static getSessionData(key) {
    const data = this.getCookie(`session-${key}`);
    return data ? JSON.parse(data) : null;
  }

  // Analytics and tracking cookies (only if consent given)
  static setAnalyticsCookie(name, value) {
    if (this.hasConsent()) {
      this.setCookie(`analytics-${name}`, value, { expires: 90 });
    }
  }

  static getAnalyticsCookie(name) {
    if (this.hasConsent()) {
      return this.getCookie(`analytics-${name}`);
    }
    return null;
  }

  // Marketing cookies (only if consent given)
  static setMarketingCookie(name, value) {
    if (this.hasConsent()) {
      this.setCookie(`marketing-${name}`, value, { expires: 30 });
    }
  }

  static getMarketingCookie(name) {
    if (this.hasConsent()) {
      return this.getCookie(`marketing-${name}`);
    }
    return null;
  }

  // Clear all non-essential cookies
  static clearNonEssentialCookies() {
    const allCookies = Cookies.get();
    
    Object.keys(allCookies).forEach(cookieName => {
      // Keep essential cookies
      if (!cookieName.startsWith('auth-') && 
          !cookieName.startsWith('session-') && 
          cookieName !== 'cookie-consent' &&
          cookieName !== 'language-preference' &&
          cookieName !== 'user-preferences') {
        this.removeCookie(cookieName);
      }
    });
  }

  // Get all cookies
  static getAllCookies() {
    return Cookies.get();
  }

  // Cookie compliance helpers
  static getCookiesByCategory() {
    const allCookies = this.getAllCookies();
    
    return {
      essential: Object.keys(allCookies).filter(name => 
        name.startsWith('auth-') || 
        name.startsWith('session-') || 
        name === 'cookie-consent' ||
        name === 'language-preference'
      ),
      analytics: Object.keys(allCookies).filter(name => 
        name.startsWith('analytics-')
      ),
      marketing: Object.keys(allCookies).filter(name => 
        name.startsWith('marketing-')
      ),
      preferences: Object.keys(allCookies).filter(name => 
        name === 'user-preferences' ||
        name.startsWith('ui-')
      )
    };
  }
}

// Export individual functions for convenience
export const {
  setCookie,
  getCookie,
  removeCookie,
  hasConsent,
  setConsent,
  setUserPreferences,
  getUserPreferences,
  setLanguagePreference,
  getLanguagePreference,
  setAuthToken,
  getAuthToken,
  removeAuthToken,
  setSessionData,
  getSessionData,
  setAnalyticsCookie,
  getAnalyticsCookie,
  setMarketingCookie,
  getMarketingCookie,
  clearNonEssentialCookies,
  getAllCookies,
  getCookiesByCategory
} = CookieManager;

export default CookieManager;
