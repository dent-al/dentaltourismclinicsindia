const Analytics = require('../Models/Analytics.model');
const geoip = require('geoip-lite');
const UAParser = require('ua-parser-js');

// Track visitor analytics
const trackVisitor = async (req, res) => {
  try {
    const {
      sessionId,
      visitorId,
      pageUrl,
      pageTitle,
      referrer,
      isAiReferral,
      aiSource,
      aiConfidence
    } = req.body;

    // Get IP address
    const ipAddress = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
    
    // Get geographic information
    const geo = geoip.lookup(ipAddress);
    
    // Parse user agent
    const parser = new UAParser(req.headers['user-agent']);
    const uaResult = parser.getResult();
    
    // Determine device type
    let deviceType = 'unknown';
    if (uaResult.device.type) {
      deviceType = uaResult.device.type;
    } else if (uaResult.os.name) {
      if (uaResult.os.name.toLowerCase().includes('android') || 
          uaResult.os.name.toLowerCase().includes('ios')) {
        deviceType = 'mobile';
      } else {
        deviceType = 'desktop';
      }
    }

    // Create analytics entry
    const analyticsData = new Analytics({
      sessionId,
      visitorId,
      pageUrl,
      pageTitle,
      referrer,
      isAiReferral: isAiReferral || false,
      aiSource: aiSource || null,
      aiConfidence: aiConfidence || 0,
      userAgent: req.headers['user-agent'],
      deviceType,
      browser: `${uaResult.browser.name} ${uaResult.browser.version}`,
      os: `${uaResult.os.name} ${uaResult.os.version}`,
      country: geo ? geo.country : null,
      state: geo ? geo.region : null,
      city: geo ? geo.city : null,
      ipAddress: ipAddress
    });

    await analyticsData.save();

    res.status(201).json({
      success: true,
      message: 'Analytics data tracked successfully',
      data: {
        id: analyticsData._id,
        sessionId: analyticsData.sessionId,
        isAiReferral: analyticsData.isAiReferral,
        aiSource: analyticsData.aiSource
      }
    });

  } catch (error) {
    console.error('Error tracking visitor:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to track visitor data',
      error: error.message
    });
  }
};

// Update session time spent
const updateSessionTime = async (req, res) => {
  try {
    const { sessionId, timeSpent, exitTime } = req.body;

    const updated = await Analytics.findOneAndUpdate(
      { sessionId },
      { 
        timeSpent,
        exitTime: exitTime ? new Date(exitTime) : new Date()
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Session time updated successfully'
    });

  } catch (error) {
    console.error('Error updating session time:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update session time',
      error: error.message
    });
  }
};

// Track conversion
const trackConversion = async (req, res) => {
  try {
    const { sessionId, conversionType, conversionValue } = req.body;

    const updated = await Analytics.findOneAndUpdate(
      { sessionId },
      { 
        isConversion: true,
        conversionType,
        conversionValue
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Conversion tracked successfully'
    });

  } catch (error) {
    console.error('Error tracking conversion:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to track conversion',
      error: error.message
    });
  }
};

// Track social media clicks
const trackSocialClick = async (req, res) => {
  try {
    const { sessionId, platform, link } = req.body;

    const updated = await Analytics.findOneAndUpdate(
      { sessionId },
      { 
        $push: {
          socialClicks: {
            platform,
            link,
            timestamp: new Date()
          }
        }
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Social click tracked successfully'
    });

  } catch (error) {
    console.error('Error tracking social click:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to track social click',
      error: error.message
    });
  }
};

// Track custom events
const trackEvent = async (req, res) => {
  try {
    const { sessionId, eventName, eventData } = req.body;

    const updated = await Analytics.findOneAndUpdate(
      { sessionId },
      { 
        $push: {
          events: {
            eventName,
            eventData,
            timestamp: new Date()
          }
        }
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Event tracked successfully'
    });

  } catch (error) {
    console.error('Error tracking event:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to track event',
      error: error.message
    });
  }
};

// Get analytics summary (Admin only)
const getAnalyticsSummary = async (req, res) => {
  try {
    const { range = '7' } = req.query;
    const dateRange = parseInt(range);

    const summary = await Analytics.getAnalyticsSummary(dateRange);
    
    res.status(200).json({
      success: true,
      data: summary,
      dateRange: `${dateRange} days`
    });

  } catch (error) {
    console.error('Error getting analytics summary:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get analytics summary',
      error: error.message
    });
  }
};

// Get AI referral breakdown (Admin only)
const getAiReferralBreakdown = async (req, res) => {
  try {
    const { range = '7' } = req.query;
    const dateRange = parseInt(range);

    const breakdown = await Analytics.getAiReferralBreakdown(dateRange);
    
    res.status(200).json({
      success: true,
      data: breakdown,
      dateRange: `${dateRange} days`
    });

  } catch (error) {
    console.error('Error getting AI referral breakdown:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get AI referral breakdown',
      error: error.message
    });
  }
};

// Get daily trend (Admin only)
const getDailyTrend = async (req, res) => {
  try {
    const { range = '30' } = req.query;
    const dateRange = parseInt(range);

    const trend = await Analytics.getDailyTrend(dateRange);
    
    res.status(200).json({
      success: true,
      data: trend,
      dateRange: `${dateRange} days`
    });

  } catch (error) {
    console.error('Error getting daily trend:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get daily trend',
      error: error.message
    });
  }
};

// Get detailed analytics (Admin only)
const getDetailedAnalytics = async (req, res) => {
  try {
    const { 
      range = '7',
      page = 1,
      limit = 100,
      aiOnly = false 
    } = req.query;
    
    const dateRange = parseInt(range);
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - dateRange);

    const query = { timestamp: { $gte: startDate } };
    if (aiOnly === 'true') {
      query.isAiReferral = true;
    }

    const analytics = await Analytics.find(query)
      .sort({ timestamp: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum)
      .select('-ipAddress'); // Don't expose IP addresses

    const totalCount = await Analytics.countDocuments(query);

    res.status(200).json({
      success: true,
      data: analytics,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalCount / limitNum),
        totalCount,
        hasNext: pageNum < Math.ceil(totalCount / limitNum),
        hasPrev: pageNum > 1
      },
      dateRange: `${dateRange} days`
    });

  } catch (error) {
    console.error('Error getting detailed analytics:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get detailed analytics',
      error: error.message
    });
  }
};

module.exports = {
  trackVisitor,
  updateSessionTime,
  trackConversion,
  trackSocialClick,
  trackEvent,
  getAnalyticsSummary,
  getAiReferralBreakdown,
  getDailyTrend,
  getDetailedAnalytics
};
