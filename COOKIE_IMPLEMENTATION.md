# Cookie Implementation Guide

## Overview
This implementation provides a comprehensive cookie management system for the Dental Tourism Clinics India website, including GDPR compliance, user consent management, and various cookie types for different purposes.

## Features

### 🍪 **Cookie Types Supported**
- **Essential Cookies**: Required for basic website functionality
- **Analytics Cookies**: Track user behavior and website performance  
- **Marketing Cookies**: Support advertising and conversion tracking
- **Preference Cookies**: Store user settings and personalization

### 🔒 **GDPR Compliant**
- User consent banner with customizable settings
- Granular control over cookie categories
- Easy opt-out and data deletion
- Transparent privacy practices

### 🛠 **Easy Integration**
- React Context API for global state management
- Custom hooks for common cookie operations
- TypeScript-ready utility functions
- Automatic cleanup of non-essential cookies

## Quick Start

### 1. Installation
The following packages are already installed:
```bash
npm install js-cookie react-cookie-consent
```

### 2. Basic Usage

#### Wrap your app with CookieProvider:
```jsx
import { CookieProvider } from './contexts/CookieContext';

function App() {
  return (
    <CookieProvider>
      {/* Your app components */}
      <CookieConsent />
    </CookieProvider>
  );
}
```

#### Use cookies in components:
```jsx
import { useCookies } from '../contexts/CookieContext';

function MyComponent() {
  const { cookieConsent, trackEvent } = useCookies();
  
  const handleClick = () => {
    trackEvent('button_clicked', { page: 'homepage' });
  };
  
  return (
    <button onClick={handleClick}>
      Track This Click
    </button>
  );
}
```

## Components

### 🎨 **CookieConsent Component**
- Displays GDPR-compliant consent banner
- Customizable settings modal
- Toggle switches for each cookie category
- Modern, responsive design

**Usage:**
```jsx
import CookieConsent from './components/CookieConsent';

// Add to your app root
<CookieConsent />
```

### 📊 **CookiePolicy Page**
- Complete cookie policy documentation
- Interactive cookie preferences
- Current settings display
- Legal compliance text

**Access:** `/cookie-policy`

## Utility Functions

### 🔧 **CookieManager Class**
Central utility for all cookie operations:

```jsx
import { CookieManager } from './utils/cookieUtils';

// Basic operations
CookieManager.setCookie('user-pref', 'value', { expires: 30 });
const value = CookieManager.getCookie('user-pref');
CookieManager.removeCookie('user-pref');

// Authentication
CookieManager.setAuthToken('jwt-token');
const token = CookieManager.getAuthToken();

// Analytics (only if consent given)
CookieManager.setAnalyticsCookie('page-views', '5');

// Marketing (only if consent given)  
CookieManager.setMarketingCookie('campaign', 'summer-2024');

// User preferences
CookieManager.setUserPreferences({ theme: 'dark', language: 'en' });
```

## Custom Hooks

### 📈 **useAnalytics**
```jsx
import { useAnalytics } from '../hooks/useCookieHooks';

function Component() {
  const { track, trackPage, canTrack } = useAnalytics();
  
  useEffect(() => {
    trackPage('/current-page');
  }, []);
  
  const handleEvent = () => {
    track('user_interaction', { type: 'click', element: 'button' });
  };
}
```

### 👤 **useUserPreferences**
```jsx
import { useUserPreferences } from '../hooks/useCookieHooks';

function ThemeSelector() {
  const { setPreference, getPreference } = useUserPreferences();
  const theme = getPreference('theme', 'light');
  
  const changeTheme = (newTheme) => {
    setPreference('theme', newTheme);
  };
}
```

### 🔐 **useAuthCookies**
```jsx
import { useAuthCookies } from '../hooks/useCookieHooks';

function LoginComponent() {
  const { isAuthenticated, login, logout, getUser } = useAuthCookies();
  
  const handleLogin = (token, userData) => {
    login(token, userData);
  };
}
```

### 🎯 **useMarketing**
```jsx
import { useMarketing } from '../hooks/useCookieHooks';

function CheckoutComponent() {
  const { trackConversion, setUtmSource } = useMarketing();
  
  const handlePurchase = () => {
    trackConversion('purchase', { value: 99.99, currency: 'USD' });
  };
}
```

## Cookie Categories Explained

### ✅ **Essential Cookies**
- **Always enabled** - Cannot be disabled
- Used for: Authentication, security, session management
- Examples: Login status, CSRF tokens, consent preferences

### 📊 **Analytics Cookies**
- **User controllable**
- Used for: Website performance analysis, user behavior tracking
- Examples: Page views, bounce rate, user flow analysis
- Compliance: Anonymized data collection

### 🎯 **Marketing Cookies**
- **User controllable**
- Used for: Advertising, conversion tracking, remarketing
- Examples: Campaign attribution, conversion pixels, audience building
- Compliance: Clear opt-out mechanisms

### 🎨 **Preference Cookies**
- **User controllable**
- Used for: Personalization, user settings, UI preferences
- Examples: Theme selection, language preference, layout settings

## Privacy & Compliance

### 🛡️ **GDPR Compliance**
- ✅ Clear consent mechanisms
- ✅ Granular control over cookie types
- ✅ Easy withdrawal of consent
- ✅ Data minimization practices
- ✅ Transparent privacy notices

### 🌍 **International Support**
- Multi-language consent banners
- Region-specific privacy regulations
- Configurable consent requirements
- Automatic browser language detection

## Configuration

### 🎛️ **Cookie Settings**
Default cookie expiration times:
- **Essential**: 30 days
- **Analytics**: 90 days  
- **Marketing**: 30 days
- **Preferences**: 365 days
- **Auth tokens**: 7 days

### 🔧 **Customization Options**
```jsx
// Customize cookie banner appearance
const customStyles = {
  banner: {
    background: 'linear-gradient(90deg, #2C73D2 0%, #F4A300 100%)',
    color: 'white'
  }
};

// Custom consent requirements
const consentConfig = {
  requireExplicitConsent: true,
  showPreferenceToggle: true,
  autoAcceptEssential: true
};
```

## Best Practices

### ✅ **Do's**
- Always check consent before setting non-essential cookies
- Use semantic cookie names with prefixes (`analytics-`, `marketing-`)
- Set appropriate expiration times
- Provide clear descriptions of cookie purposes
- Implement proper error handling
- Regular cleanup of expired cookies

### ❌ **Don'ts**
- Don't set marketing/analytics cookies without consent
- Don't store sensitive data in cookies
- Don't set overly long expiration times
- Don't track users without clear notice
- Don't make essential functionality dependent on optional cookies

## Testing

### 🧪 **Manual Testing**
1. Visit `/cookie-policy` to manage cookie settings
2. Toggle cookie preferences in settings
3. Check browser developer tools for cookie values
4. Test with different consent combinations

### 🔍 **Browser Testing**
- Clear all cookies and test first-visit experience
- Verify cookie consent persists across sessions
- Test cookie deletion when consent is withdrawn
- Confirm proper fallbacks when cookies are disabled

## Troubleshooting

### ❗ **Common Issues**

**Cookies not being set:**
- Check if user has given consent for cookie type
- Verify cookie policy allows the specific cookie
- Ensure proper error handling in cookie operations

**Consent banner not appearing:**
- Check if consent has already been given
- Verify CookieProvider wraps the application
- Ensure CookieConsent component is rendered

**Analytics not tracking:**
- Confirm analytics cookies are enabled
- Check if `canUseAnalytics()` returns true
- Verify event tracking implementation

## Support

For questions or issues with the cookie implementation:

1. Check this documentation first
2. Review the cookie policy page at `/cookie-policy`
3. Examine existing implementations in the codebase
4. Contact the development team

## Legal Notice

This implementation provides technical tools for cookie management but does not constitute legal advice. Ensure compliance with applicable privacy laws (GDPR, CCPA, etc.) in your jurisdiction. Consult with legal professionals for specific compliance requirements.

---

**Last Updated:** July 2025  
**Version:** 1.0.0
