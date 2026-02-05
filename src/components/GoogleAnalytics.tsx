import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-T8GNJZJWKE';

const GoogleAnalytics = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie_consent_analytics') === 'true';

    if (hasConsent && !isLoaded) {
      // Create and inject GA4 script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
      });

      setIsLoaded(true);
    }

    // Listen for consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie_consent_analytics') {
        if (e.newValue === 'true' && !isLoaded) {
          window.location.reload(); // Reload to load GA4
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isLoaded]);

  return null;
};

export default GoogleAnalytics;
