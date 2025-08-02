const mongoose = require('mongoose');

// Analytics Schema for tracking website visits and AI referrals
const analyticsSchema = new mongoose.Schema({
  // Visitor Information
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  visitorId: {
    type: String,
    required: true
  },
  
  // Page Information
  pageUrl: {
    type: String,
    required: true
  },
  pageTitle: String,
  referrer: String,
  
  // AI Referral Tracking
  isAiReferral: {
    type: Boolean,
    default: false
  },
  aiSource: {
    type: String,
    enum: ['ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Perplexity', 'Other AI', null],
    default: null
  },
  aiConfidence: {
    type: Number,
    min: 0,
    max: 1,
    default: 0
  },
  
  // Device & Browser Information
  userAgent: String,
  deviceType: {
    type: String,
    enum: ['desktop', 'mobile', 'tablet', 'unknown'],
    default: 'unknown'
  },
  browser: String,
  os: String,
  
  // Geographic Information
  country: String,
  state: String,
  city: String,
  ipAddress: String,
  
  // Visit Details
  timestamp: {
    type: Date,
    default: Date.now
  },
  timeSpent: {
    type: Number,
    default: 0 // in seconds
  },
  exitTime: Date,
  
  // Conversion Tracking
  isConversion: {
    type: Boolean,
    default: false
  },
  conversionType: {
    type: String,
    enum: ['appointment', 'registration', 'contact', 'download', null],
    default: null
  },
  conversionValue: Number,
  
  // Social Media Clicks
  socialClicks: [{
    platform: String,
    timestamp: Date,
    link: String
  }],
  
  // Custom Events
  events: [{
    eventName: String,
    eventData: mongoose.Schema.Types.Mixed,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true,
  collection: 'analytics'
});

// Indexes for better query performance
analyticsSchema.index({ timestamp: -1 });
analyticsSchema.index({ visitorId: 1 });
analyticsSchema.index({ isAiReferral: 1 });
analyticsSchema.index({ aiSource: 1 });
analyticsSchema.index({ country: 1 });
analyticsSchema.index({ deviceType: 1 });

// Virtual for calculating session duration
analyticsSchema.virtual('sessionDuration').get(function() {
  if (this.exitTime) {
    return Math.floor((this.exitTime - this.timestamp) / 1000); // in seconds
  }
  return 0;
});

// Static method to get analytics summary
analyticsSchema.statics.getAnalyticsSummary = async function(dateRange = 7) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - dateRange);
  
  const summary = await this.aggregate([
    {
      $match: {
        timestamp: { $gte: startDate }
      }
    },
    {
      $group: {
        _id: null,
        totalVisitors: { $addToSet: '$visitorId' },
        totalSessions: { $sum: 1 },
        aiReferrals: {
          $sum: { $cond: ['$isAiReferral', 1, 0] }
        },
        conversions: {
          $sum: { $cond: ['$isConversion', 1, 0] }
        },
        avgTimeSpent: { $avg: '$timeSpent' },
        deviceTypes: { $push: '$deviceType' },
        countries: { $push: '$country' },
        aiSources: { $push: '$aiSource' }
      }
    },
    {
      $project: {
        totalUniqueVisitors: { $size: '$totalVisitors' },
        totalSessions: 1,
        aiReferrals: 1,
        conversions: 1,
        conversionRate: {
          $multiply: [
            { $divide: ['$conversions', '$totalSessions'] },
            100
          ]
        },
        avgTimeSpent: { $round: ['$avgTimeSpent', 2] },
        deviceTypes: 1,
        countries: 1,
        aiSources: 1
      }
    }
  ]);
  
  return summary[0] || {};
};

// Static method to get AI referral breakdown
analyticsSchema.statics.getAiReferralBreakdown = async function(dateRange = 7) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - dateRange);
  
  return await this.aggregate([
    {
      $match: {
        timestamp: { $gte: startDate },
        isAiReferral: true
      }
    },
    {
      $group: {
        _id: '$aiSource',
        count: { $sum: 1 },
        avgConfidence: { $avg: '$aiConfidence' },
        uniqueVisitors: { $addToSet: '$visitorId' }
      }
    },
    {
      $project: {
        aiSource: '$_id',
        count: 1,
        avgConfidence: { $round: ['$avgConfidence', 3] },
        uniqueVisitors: { $size: '$uniqueVisitors' }
      }
    },
    {
      $sort: { count: -1 }
    }
  ]);
};

// Static method to get daily trend
analyticsSchema.statics.getDailyTrend = async function(dateRange = 30) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - dateRange);
  
  return await this.aggregate([
    {
      $match: {
        timestamp: { $gte: startDate }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: '$timestamp' },
          month: { $month: '$timestamp' },
          day: { $dayOfMonth: '$timestamp' }
        },
        visitors: { $addToSet: '$visitorId' },
        sessions: { $sum: 1 },
        aiReferrals: {
          $sum: { $cond: ['$isAiReferral', 1, 0] }
        },
        conversions: {
          $sum: { $cond: ['$isConversion', 1, 0] }
        }
      }
    },
    {
      $project: {
        date: {
          $dateFromParts: {
            year: '$_id.year',
            month: '$_id.month',
            day: '$_id.day'
          }
        },
        uniqueVisitors: { $size: '$visitors' },
        sessions: 1,
        aiReferrals: 1,
        conversions: 1
      }
    },
    {
      $sort: { date: 1 }
    }
  ]);
};

module.exports = mongoose.model('Analytics', analyticsSchema);
