const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

let analyticsInitialized = false;

function loadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || analyticsInitialized) {
    return;
  }

  if (!document.querySelector(`script[data-ga-id="${GA_MEASUREMENT_ID}"]`)) {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    gaScript.dataset.gaId = GA_MEASUREMENT_ID;
    document.head.appendChild(gaScript);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: window.location.pathname + window.location.search,
  });

  analyticsInitialized = true;
}

export function initializeAnalytics() {
  loadGoogleAnalytics();
}
