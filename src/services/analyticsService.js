// analyticsService.js
// Service for tracking analytics events and fetching analytics data

import axios from "axios";

const API_BASE_URL = "/api";

export const trackEvent = async (eventName, eventData = {}) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/event`, {
      event: eventName,
      ...eventData,
    });
    return res.data;
  } catch (error) {
    console.error("Error tracking event:", error);
    throw error;
  }
};

export const getAnalyticsSummary = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/summary`);
    return res.data;
  } catch (error) {
    console.error("Error fetching analytics summary:", error);
    throw error;
  }
};

export const getDailyTrend = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/daily-trend`);
    return res.data;
  } catch (error) {
    console.error("Error fetching daily trend:", error);
    throw error;
  }
};

export const getAiReferralBreakdown = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/ai-referrals`);
    return res.data;
  } catch (error) {
    console.error("Error fetching AI referral breakdown:", error);
    throw error;
  }
};

export const initializeAnalytics = () => {
  // Stub: Add actual analytics initialization logic here if needed
  console.log("Analytics initialized.");
};

export default {
  trackEvent,
  getAnalyticsSummary,
  getDailyTrend,
  getAiReferralBreakdown,
  initializeAnalytics,
};
