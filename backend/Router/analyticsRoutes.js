const express = require('express');
const router = express.Router();
const {
  trackVisitor,
  updateSessionTime,
  trackConversion,
  trackSocialClick,
  trackEvent,
  getAnalyticsSummary,
  getAiReferralBreakdown,
  getDailyTrend,
  getDetailedAnalytics
} = require('../Controllers/analyticsController');

// Public routes (for tracking)
router.post('/track', trackVisitor);
router.put('/session/time', updateSessionTime);
router.post('/conversion', trackConversion);
router.post('/social-click', trackSocialClick);
router.post('/event', trackEvent);

// Admin routes (for analytics dashboard)
// Note: Add authentication middleware here in production
router.get('/summary', getAnalyticsSummary);
router.get('/ai-referrals', getAiReferralBreakdown);
router.get('/daily-trend', getDailyTrend);
router.get('/detailed', getDetailedAnalytics);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Analytics API is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
