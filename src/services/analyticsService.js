// Analytics API service for React frontend
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// Create axios instance
const analyticsAPI = axios.create({
  baseURL: `${API_BASE_URL}/api/analytics`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Generate unique visitor ID
export const generateVisitorId = () => {
  let visitorId = localStorage.getItem('visitorId');
  if (!visitorId) {
    visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('visitorId', visitorId);
  }
  return visitorId;
};

// Generate unique session ID
export const generateSessionId = () => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

// Track page visit
export const trackPageVisit = async (pageData) => {
  try {
    const sessionId = generateSessionId();
    const visitorId = generateVisitorId();
    
    const trackingData = {
      sessionId,
      visitorId,
      pageUrl: window.location.href,
      pageTitle: document.title,
      referrer: document.referrer,
      ...pageData
    };

    const response = await analyticsAPI.post('/track', trackingData);
    return response.data;
  } catch (error) {
    console.error('Error tracking page visit:', error);
    return null;
  }
};

// Update session time
export const updateSessionTime = async (timeSpent) => {
  try {
    const sessionId = generateSessionId();
    
    const response = await analyticsAPI.put('/session/time', {
      sessionId,
      timeSpent,
      exitTime: new Date().toISOString()
    });
    
    return response.data;
  } catch (error) {
    console.error('Error updating session time:', error);
    return null;
  }
};

// Track conversion
export const trackConversion = async (conversionType, conversionValue = null) => {
  try {
    const sessionId = generateSessionId();
    
    const response = await analyticsAPI.post('/conversion', {
      sessionId,
      conversionType,
      conversionValue
    });
    
    return response.data;
  } catch (error) {
    console.error('Error tracking conversion:', error);
    return null;
  }
};

// Track social media click
export const trackSocialClick = async (platform, link) => {
  try {
    const sessionId = generateSessionId();
    
    const response = await analyticsAPI.post('/social-click', {
      sessionId,
      platform,
      link
    });
    
    return response.data;
  } catch (error) {
    console.error('Error tracking social click:', error);
    return null;
  }
};

// Track custom event
export const trackEvent = async (eventName, eventData = {}) => {
  try {
    const sessionId = generateSessionId();
    
    const response = await analyticsAPI.post('/event', {
      sessionId,
      eventName,
      eventData
    });
    
    return response.data;
  } catch (error) {
    console.error('Error tracking event:', error);
    return null;
  }
};

// Admin Analytics APIs
export const getAnalyticsSummary = async (dateRange = 7) => {
  try {
    const response = await analyticsAPI.get(`/summary?range=${dateRange}`);
    return response.data;
  } catch (error) {
    console.error('Error getting analytics summary:', error);
    throw error;
  }
};

export const getAiReferralBreakdown = async (dateRange = 7) => {
  try {
    const response = await analyticsAPI.get(`/ai-referrals?range=${dateRange}`);
    return response.data;
  } catch (error) {
    console.error('Error getting AI referral breakdown:', error);
    throw error;
  }
};

export const getDailyTrend = async (dateRange = 30) => {
  try {
    const response = await analyticsAPI.get(`/daily-trend?range=${dateRange}`);
    return response.data;
  } catch (error) {
    console.error('Error getting daily trend:', error);
    throw error;
  }
};

export const getDetailedAnalytics = async (options = {}) => {
  try {
    const {
      dateRange = 7,
      page = 1,
      limit = 100,
      aiOnly = false
    } = options;
    
    const response = await analyticsAPI.get(`/detailed?range=${dateRange}&page=${page}&limit=${limit}&aiOnly=${aiOnly}`);
    return response.data;
  } catch (error) {
    console.error('Error getting detailed analytics:', error);
    throw error;
  }
};

// AI Detection Helper
export const detectAiReferral = () => {
  const referrer = document.referrer.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();
  
  // Check referrer patterns
  const aiReferrerPatterns = [
    'chat.openai.com',
    'chatgpt.com',
    'claude.ai',
    'bard.google.com',
    'gemini.google.com',
    'copilot.microsoft.com',
    'perplexity.ai',
    'you.com',
    'phind.com'
  ];
  
  // Check user agent patterns
  const aiUserAgentPatterns = [
    'gptbot',
    'chatgpt',
    'claude',
    'bard',
    'gemini',
    'copilot'
  ];
  
  let isAiReferral = false;
  let aiSource = null;
  let confidence = 0;
  
  // Check referrer
  for (const pattern of aiReferrerPatterns) {
    if (referrer.includes(pattern)) {
      isAiReferral = true;
      confidence = 0.9;
      
      if (pattern.includes('openai') || pattern.includes('chatgpt')) {
        aiSource = 'ChatGPT';
      } else if (pattern.includes('claude')) {
        aiSource = 'Claude';
      } else if (pattern.includes('bard') || pattern.includes('gemini')) {
        aiSource = 'Gemini';
      } else if (pattern.includes('copilot')) {
        aiSource = 'Copilot';
      } else if (pattern.includes('perplexity')) {
        aiSource = 'Perplexity';
      } else {
        aiSource = 'Other AI';
      }
      break;
    }
  }
  
  // Check user agent if no referrer match
  if (!isAiReferral) {
    for (const pattern of aiUserAgentPatterns) {
      if (userAgent.includes(pattern)) {
        isAiReferral = true;
        confidence = 0.7;
        aiSource = 'Other AI';
        break;
      }
    }
  }
  
  // Check URL parameters for AI tracking
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  
  if (utmSource && (utmSource.toLowerCase().includes('ai') || utmSource.toLowerCase().includes('chatgpt'))) {
    isAiReferral = true;
    confidence = 0.8;
    aiSource = utmSource.includes('chatgpt') ? 'ChatGPT' : 'Other AI';
  }
  
  if (utmMedium && utmMedium.toLowerCase().includes('ai')) {
    isAiReferral = true;
    confidence = Math.max(confidence, 0.6);
    if (!aiSource) aiSource = 'Other AI';
  }
  
  return {
    isAiReferral,
    aiSource,
    aiConfidence: confidence
  };
};

// Initialize analytics tracking
export const initializeAnalytics = () => {
  // Track page visit on load
  const aiDetection = detectAiReferral();
  trackPageVisit(aiDetection);
  
  // Track time spent on page
  let startTime = Date.now();
  let lastActivityTime = Date.now();
  
  // Update activity time on user interaction
  const updateActivity = () => {
    lastActivityTime = Date.now();
  };
  
  document.addEventListener('click', updateActivity);
  document.addEventListener('scroll', updateActivity);
  document.addEventListener('keypress', updateActivity);
  
  // Send time data periodically and on page unload
  const sendTimeData = () => {
    const timeSpent = Math.floor((lastActivityTime - startTime) / 1000);
    if (timeSpent > 0) {
      updateSessionTime(timeSpent);
    }
  };
  
  // Send data every 30 seconds
  setInterval(sendTimeData, 30000);
  
  // Send data on page unload
  window.addEventListener('beforeunload', sendTimeData);
  
  // Track page visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      sendTimeData();
    }
  });
  
  return {
    trackConversion,
    trackSocialClick,
    trackEvent
  };
};

export default {
  trackPageVisit,
  updateSessionTime,
  trackConversion,
  trackSocialClick,
  trackEvent,
  getAnalyticsSummary,
  getAiReferralBreakdown,
  getDailyTrend,
  getDetailedAnalytics,
  detectAiReferral,
  initializeAnalytics,
  generateVisitorId,
  generateSessionId
};
