# My Portfolio

A modern, responsive portfolio website built with React.

- LINK (https://cpeterson27.github.io/portfolio/)

## Google Analytics

This project is set up for Google Analytics 4 with an environment variable.

Create a `.env` file in the project root and add:

```bash
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your GA4 Measurement ID from Google Analytics.

After adding it, restart `npm start` or run a new production build before deploying so the tracking ID is included.
