// Facebook Pixel Implementation
import { utmTracker } from './UTMTracker';

export const FB_PIXEL_ID = '648351014264709';

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

// Track Page View
export const trackPageView = () => {
  trackFacebookEvent('PageView');
};

// Track 50% View Event for Step 4
export const trackStep4View = () => {
  trackFacebookEvent('Step4Viewed', {
    content_name: 'Step 4 Social Proof',
    content_category: 'funnel',
    value: 0.5,
    currency: 'BRL'
  });
};

// Track Custom Funnel Events
export const trackFunnelEvent = (step: number, eventType: string) => {
  trackFacebookEvent(`Funnel_Step${step}_${eventType}`, {
    step: step,
    event_type: eventType,
    content_name: `Step ${step}`,
    content_category: 'funnel_progression'
  });
};