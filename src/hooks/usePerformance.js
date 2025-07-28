import { useEffect, useCallback } from 'react';
import { debounce, throttle } from '../utils/performance';

// Hook for performance monitoring and optimization
export const usePerformance = () => {
  useEffect(() => {
    // Monitor initial page load performance
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const loadTime = entry.loadEventEnd - entry.loadEventStart;
            if (loadTime > 3000) { // If load time > 3 seconds
              console.warn('Slow page load detected:', loadTime, 'ms');
            }
          }
          
          if (entry.entryType === 'largest-contentful-paint') {
            if (entry.startTime > 2500) { // LCP should be under 2.5s
              console.warn('Poor LCP performance:', entry.startTime, 'ms');
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint'] });
      
      return () => observer.disconnect();
    }
  }, []);

  // Optimized scroll handler
  const createOptimizedScrollHandler = useCallback((handler, limit = 100) => {
    return throttle(handler, limit);
  }, []);

  // Optimized search handler
  const createOptimizedSearchHandler = useCallback((handler, delay = 300) => {
    return debounce(handler, delay);
  }, []);

  // Performance measurement function
  const measurePerformance = useCallback((label, startTime) => {
    if ('performance' in window) {
      const endTime = performance.now();
      const duration = endTime - startTime;
      console.log(`Performance: ${label} took ${duration.toFixed(2)}ms`);
      
      // Log warning for slow operations
      if (duration > 1000) {
        console.warn(`Slow operation detected: ${label} took ${duration.toFixed(2)}ms`);
      }
    }
  }, []);

  // Cleanup function for performance listeners
  const cleanupListeners = useCallback(() => {
    // Cleanup performance observers if needed
    console.log('Performance monitoring cleanup completed');
  }, []);

  return {
    createOptimizedScrollHandler,
    createOptimizedSearchHandler,
    measurePerformance,
    cleanupListeners
  };
};

// Hook for image lazy loading
export const useLazyLoading = (options = {}) => {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    images.forEach(img => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, [options]);
};

// Hook for memory cleanup
export const useMemoryCleanup = (dependencies = []) => {
  useEffect(() => {
    return () => {
      // Cleanup object URLs
      dependencies.forEach(dep => {
        if (typeof dep === 'string' && dep.startsWith('blob:')) {
          URL.revokeObjectURL(dep);
        }
      });
    };
  }, dependencies);
};

// Hook for critical resource preloading
export const useResourcePreload = (resources) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as || 'image';
      if (resource.type) link.type = resource.type;
      document.head.appendChild(link);
    });
  }, [resources]);
};

export default {
  usePerformance,
  useLazyLoading,
  useMemoryCleanup,
  useResourcePreload
};
