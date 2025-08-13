// Facebook Pixel Implementation
import { utmTracker } from './UTMTracker';

export const FB_PIXEL_ID = '2064189057438416';

// Initialize Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

export const initFacebookPixel = () => {
  if (typeof window !== 'undefined') {
    // Facebook Pixel Base Code
    (function(f: any, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize pixel
    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

// Track Custom Events
export const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    const utmData = utmTracker.getUTMParameters();
    const enhancedParams = {
      ...parameters,
      ...utmData,
      session_id: utmTracker.getSessionId()
    };
    window.fbq('track', eventName, enhancedParams);
  }
};

// Track final step event
export const trackFinalStep = () => {
  trackFacebookEvent('chegou_final', {
    content_name: 'Final Step Reached',
    content_category: 'funnel_completion'
  });
};