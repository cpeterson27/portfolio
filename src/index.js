import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeAnalytics } from './lib/analytics';

initializeAnalytics();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>
);

// This app does not ship a service worker. Clear any old registration so browsers
// stop trying to fetch a missing /service-worker.js file.
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    })
    .catch((err) => console.warn('Service worker cleanup failed:', err));
}
