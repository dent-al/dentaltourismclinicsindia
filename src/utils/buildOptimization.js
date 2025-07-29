// Additional performance optimizations for Create React App
// This file provides build-time optimizations

// Environment variables for optimization
process.env.GENERATE_SOURCEMAP = 'false';
process.env.REACT_APP_BUILD_TIME = new Date().toISOString();

// Webpack Bundle Analyzer configuration (for development)
if (process.env.NODE_ENV === 'development') {
  console.log('🚀 Performance Tips:');
  console.log('1. Use lazy loading for components');
  console.log('2. Optimize images (use WebP, compress)');
  console.log('3. Enable gzip compression on server');
  console.log('4. Use CDN for static assets');
  console.log('5. Implement proper caching strategies');
}

// Service Worker registration helper
export const registerSW = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Performance monitoring
export const initPerformanceMonitoring = () => {
  // Monitor Core Web Vitals
  if ('performance' in window) {
    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('LCP:', entry.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          console.log('CLS:', entry.value);
        }
      }
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

export default {
  registerSW,
  initPerformanceMonitoring
};
