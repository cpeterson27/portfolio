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

// Strong guard: skip service worker registration in VS Code webviews, file://, or other non-secure contexts
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  const protocol = window.location.protocol || '';
  const host = window.location.hostname || '';
  const ua = (navigator && navigator.userAgent) || '';

  const runningInVscode = ua.toLowerCase().includes('vscode') || protocol.startsWith('vscode') || protocol === 'file:';
  const isLocalhost = host === 'localhost' || host === '127.0.0.1' || host.startsWith('192.168.');
  const isSecure = protocol === 'https:' || isLocalhost;

  if (!runningInVscode && isSecure) {
    const swPath = `${process.env.PUBLIC_URL || ''}/service-worker.js`;
    navigator.serviceWorker
      .register(swPath)
      .then((r) => console.info('Service worker registered:', r.scope))
      .catch((err) => console.warn('Service worker registration failed:', err));
  } else {
    console.info('Service worker registration skipped (VSCode/file/preview or insecure context).');
  }
}
