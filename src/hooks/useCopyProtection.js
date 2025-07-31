import { useEffect, useCallback } from 'react';

const useCopyProtection = () => {
  // Disable print functionality
  const disablePrint = useCallback(() => {
    // Override print function
    window.print = () => {
      alert('Printing is disabled on this website to protect content.');
      return false;
    };

    // Disable Ctrl+P
    const handlePrintKeyboard = (e) => {
      if (e.ctrlKey && e.keyCode === 80) {
        e.preventDefault();
        alert('Printing is disabled on this website to protect content.');
        return false;
      }
    };

    document.addEventListener('keydown', handlePrintKeyboard);
    return () => document.removeEventListener('keydown', handlePrintKeyboard);
  }, []);

  // Disable text selection with custom message
  const disableTextSelection = useCallback(() => {
    const showSelectionWarning = () => {
      const selection = window.getSelection();
      if (selection.toString().length > 0) {
        selection.removeAllRanges();
        
        // Show toast notification
        const toast = document.createElement('div');
        toast.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #dc3545;
          color: white;
          padding: 15px 20px;
          border-radius: 8px;
          z-index: 99999;
          font-family: Arial, sans-serif;
          font-size: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          animation: slideIn 0.3s ease;
        `;
        toast.innerHTML = '🚫 Content selection is disabled to protect intellectual property';
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
          if (toast.parentNode) {
            toast.remove();
          }
        }, 3000);
      }
    };

    document.addEventListener('selectstart', showSelectionWarning);
    document.addEventListener('mouseup', showSelectionWarning);

    return () => {
      document.removeEventListener('selectstart', showSelectionWarning);
      document.removeEventListener('mouseup', showSelectionWarning);
    };
  }, []);

  // Detect screenshot attempts
  const detectScreenshots = useCallback(() => {
    let screenshotDetected = false;

    // Detect when page becomes hidden (potential screenshot)
    const handleVisibilityChange = () => {
      if (document.hidden && !screenshotDetected) {
        screenshotDetected = true;
        
        // Log screenshot attempt
        console.warn('Potential screenshot attempt detected');
        
        // Show warning when page becomes visible again
        setTimeout(() => {
          if (!document.hidden) {
            alert('⚠️ Screenshot detection: This content is protected by copyright. Unauthorized capture is prohibited.');
          }
          screenshotDetected = false;
        }, 100);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Protect against automated scraping
  const antiScraping = useCallback(() => {
    // Detect rapid requests or automated behavior
    let requestCount = 0;
    const startTime = Date.now();

    const trackActivity = () => {
      requestCount++;
      const timeElapsed = Date.now() - startTime;
      
      // If more than 50 interactions in 10 seconds, likely a bot
      if (requestCount > 50 && timeElapsed < 10000) {
        document.body.style.display = 'none';
        alert('Automated access detected. Please access this site manually.');
        window.location.reload();
      }
    };

    // Track various events that might indicate automation
    ['click', 'scroll', 'keydown', 'mousemove'].forEach(event => {
      document.addEventListener(event, trackActivity);
    });

    return () => {
      ['click', 'scroll', 'keydown', 'mousemove'].forEach(event => {
        document.removeEventListener(event, trackActivity);
      });
    };
  }, []);

  // Disable drag and drop for all elements
  const disableDragDrop = useCallback(() => {
    const preventDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Show warning for drag attempts
      const warning = document.createElement('div');
      warning.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #ffc107;
        color: #333;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 99999;
        font-family: Arial, sans-serif;
        font-size: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      `;
      warning.textContent = '⚠️ Drag and drop is disabled for content protection';
      
      document.body.appendChild(warning);
      setTimeout(() => warning.remove(), 2000);
      
      return false;
    };

    document.addEventListener('dragstart', preventDrag);
    document.addEventListener('drop', preventDrag);
    document.addEventListener('dragover', preventDrag);

    return () => {
      document.removeEventListener('dragstart', preventDrag);
      document.removeEventListener('drop', preventDrag);
      document.removeEventListener('dragover', preventDrag);
    };
  }, []);

  // Main protection initialization
  useEffect(() => {
    const cleanupFunctions = [
      disablePrint(),
      disableTextSelection(),
      detectScreenshots(),
      antiScraping(),
      disableDragDrop()
    ];

    // Add copyright notice to console
    console.log(
      '%c© Dental Tourism Clinics India',
      'color: #2C73D2; font-size: 16px; font-weight: bold; background: #f0f8ff; padding: 10px; border-radius: 5px;'
    );
    console.log(
      '%cAll content on this website is protected by copyright law. Unauthorized copying, reproduction, or distribution is strictly prohibited.',
      'color: #dc3545; font-size: 12px; font-weight: bold;'
    );

    // Override common developer shortcuts
    const blockDevTools = (e) => {
      // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
        alert('Developer tools access is restricted to protect content.');
        return false;
      }
    };

    document.addEventListener('keydown', blockDevTools);

    // Cleanup on unmount
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
      document.removeEventListener('keydown', blockDevTools);
    };
  }, [disablePrint, disableTextSelection, detectScreenshots, antiScraping, disableDragDrop]);

  return {
    // Return utility functions if needed
    showProtectionWarning: (message) => {
      alert(`🛡️ Content Protection: ${message}`);
    }
  };
};

export default useCopyProtection;
