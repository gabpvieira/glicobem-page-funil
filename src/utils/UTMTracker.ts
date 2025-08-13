// UTM Tracking Utility for GlicoBem Funnel
// Integrates with UTMify system for campaign attribution

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
}

export class UTMTracker {
  private static instance: UTMTracker;
  private utmParams: UTMParams = {};
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.captureUTMParameters();
  }

  static getInstance(): UTMTracker {
    if (!UTMTracker.instance) {
      UTMTracker.instance = new UTMTracker();
    }
    return UTMTracker.instance;
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private captureUTMParameters(): void {
    const urlParams = new URLSearchParams(window.location.search);
    
    const utmKeys: (keyof UTMParams)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
      'gclid',
      'fbclid'
    ];

    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        this.utmParams[key] = value;
        localStorage.setItem(`utm_${key}`, value);
      } else {
        // Try to get from localStorage if not in URL
        const storedValue = localStorage.getItem(`utm_${key}`);
        if (storedValue) {
          this.utmParams[key] = storedValue;
        }
      }
    });

    // Store session info
    localStorage.setItem('utm_session_id', this.sessionId);
  }

  getUTMParameters(): UTMParams {
    return { ...this.utmParams };
  }

  getSessionId(): string {
    return this.sessionId;
  }

  // Track funnel progression with UTM context
  trackFunnelProgress(step: number, action: string): void {
    const utmData = this.getUTMParameters();
    
    // Send to UTMify if available
    if (window.utmify && window.utmify.track) {
      window.utmify.track('funnel_progress', {
        step: step,
        action: action,
        session_id: this.sessionId,
        ...utmData
      });
    }

    // Also send custom event for compatibility
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'funnel_progress',
        step: step,
        action: action,
        session_id: this.sessionId,
        ...utmData
      });
    }
  }

  // Track conversion with full attribution
  trackConversion(value?: number): void {
    const utmData = this.getUTMParameters();
    
    if (window.utmify && window.utmify.track) {
      window.utmify.track('conversion', {
        value: value || 19.90,
        currency: 'BRL',
        session_id: this.sessionId,
        ...utmData
      });
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion',
        value: value || 19.90,
        currency: 'BRL',
        session_id: this.sessionId,
        ...utmData
      });
    }
  }

  // Build URL with preserved UTM parameters
  buildUTMUrl(baseUrl: string): string {
    const url = new URL(baseUrl);
    const utmData = this.getUTMParameters();
    
    Object.entries(utmData).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  }

  // Clear stored UTM data (useful for testing)
  clearUTMData(): void {
    const utmKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
      'gclid',
      'fbclid'
    ];

    utmKeys.forEach(key => {
      localStorage.removeItem(`utm_${key}`);
    });
    localStorage.removeItem('utm_session_id');
  }
}

// Extend Window interface for UTMify
declare global {
  interface Window {
    utmify?: {
      track: (event: string, data: any) => void;
    };
    dataLayer?: any[];
  }
}

// Export singleton instance
export const utmTracker = UTMTracker.getInstance();