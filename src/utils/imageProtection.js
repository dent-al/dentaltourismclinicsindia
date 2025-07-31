// Utility function to add protection to images
export const protectImages = () => {
  // Add protection class to all images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.classList.add('protected-image');
    img.setAttribute('draggable', 'false');
    img.setAttribute('unselectable', 'on');
    img.style.webkitUserSelect = 'none';
    img.style.mozUserSelect = 'none';
    img.style.msUserSelect = 'none';
    img.style.userSelect = 'none';
    img.style.webkitUserDrag = 'none';
    img.style.webkitTouchCallout = 'none';
    
    // Add right-click protection
    img.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      showImageProtectionWarning();
      return false;
    });
    
    // Add drag protection
    img.addEventListener('dragstart', (e) => {
      e.preventDefault();
      showImageProtectionWarning();
      return false;
    });
  });
};

// Show warning when someone tries to save images
const showImageProtectionWarning = () => {
  const warning = document.createElement('div');
  warning.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #dc3545, #c82333);
    color: white;
    padding: 30px 40px;
    border-radius: 15px;
    z-index: 99999;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border: 2px solid #fff;
    animation: warningPulse 0.5s ease;
    max-width: 400px;
  `;
  
  warning.innerHTML = `
    <div style="font-size: 48px; margin-bottom: 15px;">🛡️</div>
    <h3 style="margin: 0 0 10px 0; font-size: 20px;">Image Protected</h3>
    <p style="margin: 0 0 15px 0; line-height: 1.4;">
      This image is protected by copyright law. 
      Unauthorized downloading or use is prohibited.
    </p>
    <p style="margin: 0; font-size: 12px; opacity: 0.9;">
      © Dental Tourism Clinics India
    </p>
  `;
  
  // Add animation CSS
  if (!document.getElementById('warning-animation-css')) {
    const style = document.createElement('style');
    style.id = 'warning-animation-css';
    style.textContent = `
      @keyframes warningPulse {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.05); }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(warning);
  
  // Auto-remove after 4 seconds
  setTimeout(() => {
    if (warning.parentNode) {
      warning.style.animation = 'warningPulse 0.3s ease reverse';
      setTimeout(() => warning.remove(), 300);
    }
  }, 4000);
  
  // Remove on click
  warning.addEventListener('click', () => {
    warning.style.animation = 'warningPulse 0.3s ease reverse';
    setTimeout(() => warning.remove(), 300);
  });
};

// Add global CSS for image protection
export const addImageProtectionCSS = () => {
  if (!document.getElementById('image-protection-css')) {
    const style = document.createElement('style');
    style.id = 'image-protection-css';
    style.textContent = `
      /* Enhanced image protection */
      img.protected-image {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        -webkit-touch-callout: none !important;
        pointer-events: auto !important;
        position: relative;
      }
      
      /* Add invisible overlay to images */
      img.protected-image::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent;
        z-index: 1;
        pointer-events: none;
      }
      
      /* Prevent image highlighting */
      img.protected-image::selection {
        background: transparent !important;
      }
      
      img.protected-image::-moz-selection {
        background: transparent !important;
      }
      
      /* Disable long press on mobile */
      img.protected-image {
        -webkit-touch-callout: none !important;
        -webkit-user-select: none !important;
        -khtml-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      
      /* Additional protection for Safari */
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        img.protected-image {
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
};

// Monitor for new images and protect them
export const startImageProtectionMonitor = () => {
  // Protect existing images
  protectImages();
  addImageProtectionCSS();
  
  // Watch for new images
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          if (node.tagName === 'IMG') {
            // New image added
            node.classList.add('protected-image');
            protectImages();
          } else if (node.querySelectorAll) {
            // Check for images in added content
            const newImages = node.querySelectorAll('img');
            if (newImages.length > 0) {
              protectImages();
            }
          }
        }
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  return observer;
};
