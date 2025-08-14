// UTMify Pixel Implementation
import { utmTracker } from './UTMTracker';

export const UTMIFY_PIXEL_ID = '689d17b25638e9e99a7ca732';

// Initialize UTMify Pixel
declare global {
  interface Window {
    pixelId: string;
  }
}

export const initUTMifyPixel = () => {
  if (typeof window !== 'undefined') {
    // UTMify Pixel Implementation
    window.pixelId = UTMIFY_PIXEL_ID;
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    script.setAttribute('src', 'https://cdn.utmify.com.br/scripts/pixel/pixel.js');
    document.head.appendChild(script);
  }
};

// Track final step event (mantido para compatibilidade)
export const trackFinalStep = () => {
  // O UTMify pixel gerencia automaticamente os eventos
  // Mantemos esta função para compatibilidade com o código existente
  console.log('Final step reached - tracked by UTMify pixel');
};