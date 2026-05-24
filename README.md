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

## Digital Product Fulfillment

The storefront is hosted on GitHub Pages. Automated delivery runs from a separate Node service because GitHub Pages cannot receive Stripe webhooks or send email.

### Local Frontend Env

Add the public Stripe Payment Link to `.env` before building the GitHub Pages site:

```bash
REACT_APP_STRIPE_AI_PROMPT_PACKS_LINK=https://buy.stripe.com/...
REACT_APP_FULFILLMENT_READY=false
```

Deploy the storefront:

```bash
npm run deploy
```

Set `REACT_APP_FULFILLMENT_READY=true` only after the hosted webhook has been tested successfully. Until then, the Products page will keep checkout closed so customers cannot buy before automated delivery is working.

### Fulfillment Service Env

Run the Node service locally with:

```bash
npm run start:server
```

For Render, use the included `render.yaml`. It deploys the backend from the `server` directory:

```txt
rootDir: server
buildCommand: npm ci
startCommand: npm start
healthCheckPath: /health
```

Required production environment variables:

```bash
STOREFRONT_URL=https://cpeterson27.github.io,http://localhost:3000
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_AI_PROMPT_PACKS_PRICE_ID=price_...
RESEND_API_KEY=re_...
FULFILLMENT_FROM_EMAIL=Cassandra Peterson <delivery@your-domain.com>
FULFILLMENT_REPLY_TO=cpeterson.dev@gmail.com
```

Recommended for duplicate webhook protection:

```bash
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

### Stripe Setup

In Stripe:

1. Create the `AI Prompt Packs` product and price.
2. Create a Payment Link for that price.
3. Set the Payment Link success redirect to:

```txt
https://cpeterson27.github.io/portfolio/products/success
```

4. Set the cancellation redirect to:

```txt
https://cpeterson27.github.io/portfolio/products/cancel
```

5. Add a webhook endpoint pointing to the hosted fulfillment service:

```txt
https://YOUR-FULFILLMENT-DOMAIN/stripe/webhook
```

6. Subscribe the endpoint to:

```txt
checkout.session.completed
```

The webhook verifies Stripe's signature, matches the purchased Stripe product or price, generates the AI Prompt Packs PDF, and emails it to the checkout customer through Resend.

### Frontend / Backend Split

Frontend:

- Root app
- React
- Hosted on GitHub Pages
- Deploy with `npm run deploy`
- Uses only public `REACT_APP_*` variables

Backend:

- `server/`
- Express
- Hosted on Render
- Deploy with `render.yaml`
- Uses Stripe, Resend, and optional Upstash secrets

Run the backend fulfillment tests without charging a card:

```bash
npm run test:server
```
