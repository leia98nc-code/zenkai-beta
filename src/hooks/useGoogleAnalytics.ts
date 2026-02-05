import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-T8GNJZJWKE';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie_consent_analytics') === 'true';

    if (hasConsent && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  const hasConsent = localStorage.getItem('cookie_consent_analytics') === 'true';

  if (hasConsent && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Pre-defined event trackers
export const trackSignUp = (method: string = 'email') => {
  trackEvent('sign_up', { method });
};

export const trackLogin = (method: string = 'email') => {
  trackEvent('login', { method });
};

export const trackCtaClick = (ctaName: string, location?: string) => {
  trackEvent('cta_click', { cta_name: ctaName, cta_location: location });
};
