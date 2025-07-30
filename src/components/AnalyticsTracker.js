import React from 'react';
import { useAnalytics } from '../contexts/AnalyticsContext';
import { useLocation } from 'react-router-dom';

// Hook to track page views automatically
export const usePageTracking = () => {
  const { trackPageView } = useAnalytics();
  const location = useLocation();

  React.useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname, trackPageView]);
};

// Component to wrap buttons for automatic click tracking
export const AnalyticsButton = ({ 
  children, 
  buttonName, 
  buttonType, 
  context, 
  onClick, 
  ...props 
}) => {
  const { trackButtonClick } = useAnalytics();

  const handleClick = (e) => {
    trackButtonClick(buttonName, buttonType, context);
    if (onClick) onClick(e);
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

// Component to wrap links for automatic click tracking
export const AnalyticsLink = ({ 
  children, 
  linkName, 
  linkType, 
  context, 
  onClick, 
  ...props 
}) => {
  const { trackButtonClick } = useAnalytics();

  const handleClick = (e) => {
    trackButtonClick(linkName, linkType, context);
    if (onClick) onClick(e);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
};

// Higher-order component to add analytics to any component
export const withAnalytics = (WrappedComponent, analyticsProps) => {
  return function AnalyticsWrappedComponent(props) {
    const analytics = useAnalytics();
    
    return (
      <WrappedComponent 
        {...props} 
        analytics={analytics}
        {...analyticsProps}
      />
    );
  };
};

export default {
  usePageTracking,
  AnalyticsButton,
  AnalyticsLink,
  withAnalytics,
};
