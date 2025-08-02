// AI Referral Tracker Utility
// This utility helps detect when visitors come from AI assistants

class AITracker {
  constructor() {
    this.aiSources = {
      'chatgpt': 'ChatGPT',
      'openai': 'ChatGPT',
      'chat.openai.com': 'ChatGPT',
      'claude': 'Claude',
      'claude.ai': 'Claude',
      'anthropic': 'Claude',
      'gemini': 'Gemini',
      'bard.google.com': 'Gemini',
      'bard': 'Gemini',
      'copilot': 'Microsoft Copilot',
      'bing.com/chat': 'Microsoft Copilot',
      'perplexity': 'Perplexity',
      'perplexity.ai': 'Perplexity',
      'you.com': 'You.com AI',
      'character.ai': 'Character.AI',
      'poe.com': 'Poe',
      'huggingface': 'HuggingFace',
    };
  }

  // Detect AI referral from various sources
  detectAIReferral() {
    const referrer = document.referrer.toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source')?.toLowerCase() || '';
    const utmMedium = urlParams.get('utm_medium')?.toLowerCase() || '';
    
    // Check referrer domain
    for (const [key, value] of Object.entries(this.aiSources)) {
      if (referrer.includes(key)) {
        return {
          aiSource: value,
          detectionMethod: 'referrer',
          fullReferrer: document.referrer
        };
      }
    }

    // Check UTM parameters
    if (utmSource.includes('ai') || utmMedium.includes('ai')) {
      return {
        aiSource: this.mapUTMToAI(utmSource),
        detectionMethod: 'utm',
        utmSource: utmSource,
        utmMedium: utmMedium
      };
    }

    // Check for AI-specific URL parameters
    const aiParam = urlParams.get('ai_source');
    if (aiParam) {
      return {
        aiSource: this.mapUTMToAI(aiParam.toLowerCase()),
        detectionMethod: 'url_param',
        aiParam: aiParam
      };
    }

    // Check for specific query patterns that suggest AI usage
    const query = urlParams.get('q') || urlParams.get('query') || '';
    if (this.isAIGeneratedQuery(query)) {
      return {
        aiSource: 'Unknown AI',
        detectionMethod: 'query_pattern',
        query: query
      };
    }

    return null;
  }

  // Map UTM source to AI name
  mapUTMToAI(source) {
    const mapping = {
      'chatgpt': 'ChatGPT',
      'openai': 'ChatGPT',
      'claude': 'Claude',
      'anthropic': 'Claude',
      'gemini': 'Gemini',
      'bard': 'Gemini',
      'copilot': 'Microsoft Copilot',
      'perplexity': 'Perplexity',
      'ai': 'Unknown AI'
    };

    return mapping[source] || 'Unknown AI';
  }

  // Check if query looks AI-generated
  isAIGeneratedQuery(query) {
    const aiIndicators = [
      'dental clinic near me with good reviews',
      'best dental tourism destination',
      'affordable dental treatment in india',
      'dental implants cost comparison',
      'root canal treatment abroad',
      'dental surgery medical tourism'
    ];

    const queryLower = query.toLowerCase();
    return aiIndicators.some(indicator => 
      queryLower.includes(indicator) || 
      this.calculateSimilarity(queryLower, indicator) > 0.7
    );
  }

  // Simple similarity check
  calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = this.levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }

  // Levenshtein distance calculation
  levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  // Track the AI referral
  async trackAIReferral(aiData) {
    try {
      // Send to your analytics endpoint
      const response = await fetch('/api/analytics/ai-referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...aiData,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          sessionId: this.getSessionId(),
          pageUrl: window.location.href
        }),
      });

      if (response.ok) {
        console.log('AI referral tracked successfully');
        
        // Store in localStorage to avoid duplicate tracking
        localStorage.setItem('ai_referral_tracked', JSON.stringify({
          tracked: true,
          aiSource: aiData.aiSource,
          timestamp: new Date().toISOString()
        }));
      }
    } catch (error) {
      console.error('Failed to track AI referral:', error);
    }
  }

  // Get or create session ID
  getSessionId() {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  // Initialize AI tracking
  init() {
    // Only track once per session
    const alreadyTracked = localStorage.getItem('ai_referral_tracked');
    if (alreadyTracked) {
      const tracked = JSON.parse(alreadyTracked);
      // Check if tracked within last 24 hours
      const hoursSinceTracked = (new Date() - new Date(tracked.timestamp)) / (1000 * 60 * 60);
      if (hoursSinceTracked < 24) {
        return; // Don't track again
      }
    }

    const aiReferral = this.detectAIReferral();
    
    if (aiReferral) {
      console.log('AI referral detected:', aiReferral);
      this.trackAIReferral(aiReferral);
      
      // Optional: Show a welcome message for AI users
      this.showAIWelcomeMessage(aiReferral.aiSource);
    }
  }

  // Show welcome message for AI users
  showAIWelcomeMessage(aiSource) {
    // You can customize this based on your UI
    const message = `Welcome! We see you found us through ${aiSource}. We're here to help with your dental needs! 🦷`;
    
    // You could show this in a toast, banner, or console
    console.log(message);
    
    // Optional: Add to page if you have a notification system
    if (window.showNotification) {
      window.showNotification(message, 'info');
    }
  }
}

// Export the tracker
export const aiTracker = new AITracker();

// Auto-initialize when loaded
if (typeof window !== 'undefined') {
  // Initialize after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => aiTracker.init());
  } else {
    aiTracker.init();
  }
}

export default AITracker;
