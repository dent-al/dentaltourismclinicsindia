import { useEffect } from 'react';
import { startImageProtectionMonitor } from '../utils/imageProtection';

const CopyProtection = () => {
  useEffect(() => {
    // Start image protection monitoring
    const imageObserver = startImageProtectionMonitor();
    // Disable right-click context menu
    const disableRightClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable text selection
    const disableSelection = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable drag and drop
    const disableDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts for copying
    const disableKeyboardShortcuts = (e) => {
      // Disable Ctrl+C, Ctrl+A, Ctrl+S, Ctrl+X, Ctrl+V, Ctrl+Z, Ctrl+Y
      if (e.ctrlKey && (
        e.keyCode === 67 || // Ctrl+C
        e.keyCode === 65 || // Ctrl+A
        e.keyCode === 83 || // Ctrl+S
        e.keyCode === 88 || // Ctrl+X
        e.keyCode === 86 || // Ctrl+V
        e.keyCode === 90 || // Ctrl+Z
        e.keyCode === 89 || // Ctrl+Y
        e.keyCode === 85 || // Ctrl+U (view source)
        e.keyCode === 73 || // Ctrl+I (inspect)
        e.keyCode === 74 || // Ctrl+J (console)
        e.keyCode === 75 || // Ctrl+K (console)
        e.keyCode === 85    // Ctrl+U (view source)
      )) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Disable F12 (Developer Tools)
      if (e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Disable Ctrl+Shift+C (Element Selector)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Disable print screen
    const disablePrintScreen = (e) => {
      if (e.keyCode === 44) {
        e.preventDefault();
        return false;
      }
    };

    // Detect developer tools
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        // Developer tools detected - blur content
        document.body.style.filter = 'blur(5px)';
        document.body.style.pointerEvents = 'none';
        
        // Show warning
        const warningDiv = document.createElement('div');
        warningDiv.innerHTML = `
          <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            font-family: Arial, sans-serif;
            font-size: 24px;
            text-align: center;
          ">
            <div>
              <h2>⚠️ Developer Tools Detected</h2>
              <p>This content is protected. Please close developer tools to continue.</p>
              <p style="font-size: 16px; margin-top: 20px;">
                Protected by Dental Tourism Clinics India
              </p>
            </div>
          </div>
        `;
        warningDiv.id = 'devtools-warning';
        if (!document.getElementById('devtools-warning')) {
          document.body.appendChild(warningDiv);
        }
      } else {
        // Developer tools closed - restore content
        document.body.style.filter = '';
        document.body.style.pointerEvents = '';
        const warning = document.getElementById('devtools-warning');
        if (warning) {
          warning.remove();
        }
      }
    };

    // Console warning message
    const showConsoleWarning = () => {
      console.clear();
      console.log('%c🚫 STOP!', 'color: red; font-size: 50px; font-weight: bold;');
      console.log('%cThis is a browser feature intended for developers. Content on this page is protected by copyright law.', 'color: red; font-size: 16px;');
      console.log('%cUnauthorized copying, reproduction, or distribution is strictly prohibited.', 'color: red; font-size: 16px;');
      console.log('%c© Dental Tourism Clinics India - All Rights Reserved', 'color: #2C73D2; font-size: 14px; font-weight: bold;');
    };

    // Apply CSS protection
    const applyCSSProtection = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Disable text selection */
        * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }

        /* Disable image dragging */
        img {
          -webkit-user-drag: none !important;
          -khtml-user-drag: none !important;
          -moz-user-drag: none !important;
          -o-user-drag: none !important;
          user-drag: none !important;
          pointer-events: none !important;
        }

        /* Allow text selection only for input fields */
        input, textarea, [contenteditable] {
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
          user-select: text !important;
        }

        /* Disable highlighting */
        ::selection {
          background: transparent !important;
        }
        ::-moz-selection {
          background: transparent !important;
        }

        /* Disable image context menu */
        img::selection {
          background: transparent !important;
        }

        /* Prevent image saving */
        img {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          draggable: false !important;
        }

        /* Hide scrollbars when dev tools open */
        body.devtools-open {
          overflow: hidden !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Disable image saving via context menu
    const protectImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        img.addEventListener('contextmenu', disableRightClick);
        img.addEventListener('dragstart', disableDragStart);
        img.addEventListener('selectstart', disableSelection);
        img.setAttribute('draggable', 'false');
        img.setAttribute('unselectable', 'on');
      });
    };

    // Initialize protection
    applyCSSProtection();
    showConsoleWarning();

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('selectstart', disableSelection);
    document.addEventListener('dragstart', disableDragStart);
    document.addEventListener('keydown', disableKeyboardShortcuts);
    document.addEventListener('keyup', disablePrintScreen);
    document.addEventListener('keydown', disablePrintScreen);

    // Protect images
    protectImages();

    // Monitor for new images (for dynamic content)
    const observer = new MutationObserver(() => {
      protectImages();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Detect developer tools periodically
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // Console warning interval
    const consoleInterval = setInterval(showConsoleWarning, 3000);

    // Disable view source
    window.addEventListener('beforeunload', (e) => {
      // Clear console on page unload
      console.clear();
    });

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('selectstart', disableSelection);
      document.removeEventListener('dragstart', disableDragStart);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      document.removeEventListener('keyup', disablePrintScreen);
      document.removeEventListener('keydown', disablePrintScreen);
      
      clearInterval(devToolsInterval);
      clearInterval(consoleInterval);
      observer.disconnect();
      imageObserver.disconnect();

      // Remove warning if exists
      const warning = document.getElementById('devtools-warning');
      if (warning) {
        warning.remove();
      }

      // Restore body styles
      document.body.style.filter = '';
      document.body.style.pointerEvents = '';
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CopyProtection;
