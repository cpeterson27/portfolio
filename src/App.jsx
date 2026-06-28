import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  CreditCard,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Newspaper,
  Orbit,
  RadioTower,
  Rocket,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import headshot from "./assets/cassandra-peterson-headshot.jpg";
import { portfolioData } from "./data/portfolio";
import "./App.css";

const profile = {
  name: "Cassandra Peterson",
  location: "Sacramento, California",
  email: "cpeterson.dev@gmail.com",
  github: "https://github.com/cpeterson27",
  linkedin: "https://www.linkedin.com/in/cassandrapeterson-software-engineer/",
  resume: `${process.env.PUBLIC_URL}/assets/ResumeCassandraPeterson.pdf`,
};

const waitlistHref = `mailto:${profile.email}?subject=Digital product waitlist&body=Hi Cassandra,%0D%0A%0D%0AI'd like to be notified when your digital products are available.`;
const productQuestionHref = `mailto:${profile.email}?subject=Digital product question&body=Hi Cassandra,%0D%0A%0D%0AI have a question about your digital products.`;

const checkoutLinks = {
  aiPromptPacks: process.env.REACT_APP_STRIPE_AI_PROMPT_PACKS_LINK || "",
  notionBuilderOs: process.env.REACT_APP_STRIPE_NOTION_BUILDER_OS_LINK || "",
  automationKits: process.env.REACT_APP_STRIPE_AUTOMATION_KITS_LINK || "",
  developerResources: process.env.REACT_APP_STRIPE_DEVELOPER_RESOURCES_LINK || "",
  founderPortfolioKit: process.env.REACT_APP_STRIPE_FOUNDER_PORTFOLIO_KIT_LINK || "",
};
const isFulfillmentReady = process.env.REACT_APP_FULFILLMENT_READY === "true";
const showDigitalProducts = false;

const navItems = [
  ["Projects", "/projects"],
  ["Build Log", "/build-log"],
  ["Work With Me", "/work-with-me"],
];

const projects = [
  {
    id: "trace",
    name: "Trace",
    label: "Chrome extension",
    image: `${process.env.PUBLIC_URL}/images/trace-browser-memory.png`,
    statement:
      "An MVP Chrome extension for saving, searching, restoring, and organizing browser sessions before tabs and workflows disappear.",
    problem:
      "Research-heavy work creates tab chaos. Trace turns open browser sessions into searchable, reusable workspaces so users can pause, resume, organize, export, and recover context without digging through browser history.",
    features: [
      "Save current browser sessions",
      "Background auto-save with duplicate prevention",
      "Restore sessions in a new window",
      "Search tabs, URLs, tags, and summaries",
      "Pin, tag, rename, and summarize sessions",
      "Copy session links",
      "Import/export sessions as JSON",
      "Collapsible tab lists",
    ],
    stack: ["React", "TypeScript", "Vite", "Chrome Extension APIs", "Chrome Storage API", "Chrome Alarms API", "CSS"],
    outcome: "An active MVP with roadmap paths for AI summaries, semantic search, cloud sync, accounts, subscriptions, and Chrome Web Store release.",
    star: {
      situation: "Research sessions often sprawl across dozens of tabs, making it difficult to preserve context or return to a useful workflow later.",
      task: "Create a Chrome extension that could save, auto-save, search, organize, restore, import, and export sessions without adding a heavy productivity system.",
      action: "Built a React, TypeScript, and Vite extension around Chrome Extension APIs, Chrome Storage API, Chrome Alarms API, background auto-save, duplicate prevention, session restore, search, pinning, tagging, renaming, editable summaries, copied links, JSON import/export, and collapsible tab lists.",
      result: "Shipped an active MVP with clear roadmap paths for AI-generated session summaries, semantic search, cloud sync, user accounts, Stripe subscription billing, and Chrome Web Store release.",
    },
    links: [{ label: "GitHub", href: "https://github.com/cpeterson27/trace-browser-memory" }],
    priority: true,
  },
  {
    id: "standing-break",
    name: "Standing Break Reminder",
    label: "Paid contract | Sabi Ventures LLC",
    image: `${process.env.PUBLIC_URL}/images/standing-break-reminder.jpg`,
    statement:
      "A published Chrome extension built for Sabi Ventures LLC to support healthier desk-work habits.",
    problem:
      "Remote workers and computer-heavy professionals lose track of movement. This extension adds lightweight reminders that encourage standing, stretching, and healthier work rhythms.",
    features: ["Timed reminders", "Chrome notifications", "Persistent settings", "Local storage", "Service worker behavior"],
    stack: ["JavaScript", "React", "Chrome Extension API", "Service Workers"],
    outcome: "Contracted client work shipped to the Chrome Web Store.",
    star: {
      situation: "Sabi Ventures LLC needed a simple wellness-focused Chrome extension that could encourage healthier work habits for desk-based users.",
      task: "Deliver a reliable, lightweight browser extension with reminder behavior, saved preferences, and a clean user experience.",
      action: "Implemented the extension using React, JavaScript, Chrome APIs, local storage, and service worker behavior for notifications.",
      result: "Completed paid contract work that was published to the Chrome Web Store.",
    },
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/standing-break-reminder/lidfpoljnclliodaaboebnkkpemobmfm?pli=1",
      },
    ],
    priority: true,
  },
  {
    id: "sparkle-bows",
    name: "Sparkle Bows Commerce OS",
    label: "Live commerce platform",
    image: `${process.env.PUBLIC_URL}/images/sparklebows-mockup.png`,
    statement:
      "A production ecommerce operating system with Stripe checkout and tax, Shippo label purchasing, admin operations, SEO controls, analytics, customer accounts, and lifecycle marketing.",
    problem:
      "A boutique product business needs more than a storefront. It needs product discovery, cart persistence, checkout, tax, shipping labels, order history, admin operations, SEO, analytics, marketing capture, and secure customer accounts working together.",
    features: [
      "Product catalog and collections",
      "Persistent guest and user carts",
      "Stripe checkout, tax, Elements, and webhooks",
      "Shippo shipment creation and label purchasing",
      "Customer accounts, saved addresses, and order history",
      "Admin products, orders, tracking, finance, SEO, and analytics",
      "Reviews, inventory, policy pages, and JSON-LD SEO",
      "Klaviyo VIP capture and GA4 ecommerce events",
      "Contact form, email delivery, and form protection",
    ],
    stack: [
      "React 19",
      "Create React App",
      "React Router DOM 6",
      "Axios",
      "Tailwind CSS",
      "TanStack React Query",
      "Stripe.js",
      "React Stripe.js",
      "Recharts",
      "React Dropzone",
      "DnD Kit",
      "Lucide React",
      "Node.js",
      "Express",
      "MongoDB & Mongoose",
      "JWT",
      "Refresh Token Cookies",
      "Helmet",
      "Rate Limiting",
      "Mongo Sanitization",
      "Stripe Payment Intents",
      "Stripe Tax",
      "Stripe Webhooks",
      "Stripe Elements",
      "Shippo API",
      "Cloudinary",
      "Resend",
      "Nodemailer",
      "SendGrid Mail",
      "Klaviyo",
      "GA4 Ecommerce Events",
      "Google Tag Manager",
      "Google Maps API",
      "Wave Service Code",
      "Render",
      "Cloudflare",
    ],
    outcome: "A real online business platform designed for daily operations and future growth.",
    star: {
      situation: "A handmade product business needed more than a basic storefront to support real operations and growth.",
      task: "Design and build a full commerce system covering product browsing, cart persistence, payments, taxes, shipping labels, account management, order history, admin operations, SEO, analytics, and marketing integrations.",
      action: "Built a React 19 storefront and Node/Express API with MongoDB, Stripe Payment Intents, Stripe Tax, Stripe Elements, webhooks, Shippo label purchasing, Cloudinary media, Resend/Nodemailer/SendGrid-compatible email, Klaviyo VIP capture, GA4/GTM analytics, Google OAuth, JWT refresh-token cookies, optional 2FA, rate limiting, Helmet, CORS controls, Mongo sanitization, SEO settings, policy pages, and admin workflows.",
      result: "Created a live eCommerce operating system that supports real product sales and business management.",
    },
    links: [
      { label: "Live Demo", href: "https://www.sparklebows.shop/" },
      { label: "Frontend", href: "https://github.com/cpeterson27/sparkle-bows-frontend.git" },
      { label: "Backend", href: "https://github.com/cpeterson27/sparkle-bows-backend.git" },
    ],
    priority: true,
  },
  {
    id: "terrys-auto",
    name: "Terry's Auto Systems Platform",
    label: "Business automation system",
    image: `${process.env.PUBLIC_URL}/images/terrys-auto-service-dashboard.png`,
    statement:
      "A production business website, customer portal, and admin dashboard for appointments, customer records, invoices, expenses, messages, gallery media, and service operations.",
    problem:
      "Local service businesses often run on disconnected tools. This platform centralizes public service content, customer authentication, booking management, invoices, expenses, customer records, gallery media, contact messages, business settings, transactional email, and marketing opt-ins.",
    features: [
      "Public service homepage and contact form",
      "Signup, login, email verification, and password reset",
      "Customer portal and booking management",
      "Appointment booking, rescheduling, cancellation, and admin scheduling",
      "Invoices, expenses, customers, messages, settings, and gallery admin",
      "Cloudinary image/video gallery uploads",
      "Resend transactional email",
      "Klaviyo marketing opt-in",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "lucide-react",
      "Vercel Analytics",
      "Node.js 20",
      "Express",
      "Express TypeScript API",
      "MongoDB & Mongoose",
      "JWT Authentication",
      "Cloudinary",
      "Resend",
      "Klaviyo",
      "Vercel",
      "Render",
    ],
    outcome: "A practical business system that modernizes service operations and customer touchpoints.",
    star: {
      situation: "A local service business had customer, scheduling, invoice, expense, and content workflows spread across disconnected processes.",
      task: "Create one modern web system for public content, customer signup/login, email verification, password reset, customer portal access, appointment management, invoicing, expenses, messages, settings, gallery media, and admin operations.",
      action: "Built a React 18, TypeScript, Vite, and Tailwind client with a Node.js 20 Express TypeScript API, MongoDB/Mongoose models, JWT authentication, booking reschedule/cancel flows, invoice and expense workflows, customer records, Cloudinary image/video gallery uploads, Resend transactional email for verification, password reset, booking, and admin notifications, Klaviyo opt-in integration, Vercel Analytics, Vercel client deployment, and a Render-compatible API deployment.",
      result: "Delivered a practical business management platform that improves visibility, organization, and customer experience.",
    },
    links: [
      { label: "Live Demo", href: "https://www.terrysauto.shop/" },
      { label: "GitHub", href: "https://github.com/cpeterson27/terrys-auto-service.git" },
    ],
  },
  {
    id: "budgetblox",
    name: "BudgetBlox",
    label: "SaaS experiment",
    image: `${process.env.PUBLIC_URL}/images/budgetblox.png`,
    statement:
      "A personal finance dashboard concept for tracking balances, organizing expenses, and building better money habits.",
    problem:
      "Most budget tools feel either too sparse or too heavy. BudgetBlox explores a calmer dashboard model for day-to-day financial visibility.",
    features: ["Balance dashboard", "Expense tracking", "Account views", "Responsive UI", "Persistent data model"],
    stack: ["React", "Vite", "Node.js", "MongoDB", "Cookie-parser", "CORS", "Vercel"],
    outcome: "A SaaS-style finance experiment with room for automation and AI insights.",
    star: {
      situation: "Personal finance tools can feel either overwhelming or too shallow for everyday planning.",
      task: "Explore a calmer SaaS-style dashboard for balances, expenses, and financial visibility.",
      action: "Built a responsive React and MongoDB application with dashboard views, persistent data patterns, and account-focused UX.",
      result: "Created a finance product experiment that can evolve toward insights, automation, and planning tools.",
    },
    links: [
      { label: "Live Demo", href: "https://budgetblox-rxr8z03sm-cassies-projects-67fd5d41.vercel.app/dashboard" },
      { label: "GitHub", href: "https://github.com/cpeterson27/budgetblox.git" },
    ],
  },
  {
    id: "media-dashboard",
    name: "Interactive Media Dashboard",
    label: "Interface system",
    image: `${process.env.PUBLIC_URL}/images/mrbeast.png`,
    statement:
      "A polished dashboard implementation translating a Figma concept into a responsive, animated interface.",
    problem:
      "Design concepts need engineering discipline to become real products. This build focuses on visual accuracy, component structure, and motion quality.",
    features: ["Responsive dashboard", "Design-system thinking", "Motion details", "Reusable components"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    outcome: "A high-fidelity UI build showing product presentation and front-end craft.",
    star: {
      situation: "A polished dashboard concept needed to be translated from design into a real responsive interface.",
      task: "Build the UI with strong visual accuracy, reusable components, accessible structure, and refined motion.",
      action: "Implemented the dashboard with Next.js, React, TypeScript, Tailwind, shadcn/ui, and Framer Motion.",
      result: "Produced a high-fidelity product interface that demonstrates design-to-code execution and front-end polish.",
    },
    links: [
      { label: "Live Demo", href: "https://mrbeast-dashboard.vercel.app/" },
      { label: "GitHub", href: "https://github.com/cpeterson27/mrbeast-dashboard.git" },
    ],
  },
];

const projectStoryOverrides = {
  14: {
    name: "Sparkle Bows Commerce OS",
    label: "Full-stack eCommerce platform",
    image: `${process.env.PUBLIC_URL}/images/sparklebows-mockup.png`,
    statement:
      "A production ecommerce storefront and operations system with Stripe checkout, tax, webhooks, Shippo label purchasing, customer accounts, admin tooling, SEO controls, analytics, and marketing automation.",
    features: [
      "Product catalog, categories, collections, reviews, and inventory",
      "Persistent cart for guests and signed-in users",
      "Stripe checkout with Payment Intents, Tax, Elements, and webhooks",
      "Shippo shipment creation, label purchasing, tracking updates, and actual label cost storage",
      "Customer profile management, saved addresses, and order history",
      "Admin product creation, order management, finance visibility, analytics, site settings, and editable SEO defaults",
      "Cloudinary media",
      "Product SEO fields, JSON-LD structured data, Open Graph metadata, and canonical URLs",
      "GA4 ecommerce events, GTM support, Klaviyo VIP signup, and contact form email delivery",
      "Privacy, terms, refunds, and shipping policy pages",
      "Honeypot and timing-based public form protection",
    ],
    stack: [
      "React 19",
      "Create React App",
      "React Router DOM 6",
      "Axios",
      "Tailwind CSS",
      "PostCSS",
      "Autoprefixer",
      "Lucide React",
      "Recharts",
      "React Dropzone",
      "TanStack React Query",
      "DnD Kit",
      "Stripe.js",
      "React Stripe.js",
      "Node.js",
      "Express.js",
      "MongoDB & Mongoose",
      "JWT",
      "Refresh Token Cookies",
      "bcryptjs",
      "cookie-parser",
      "Helmet",
      "CORS",
      "express-rate-limit",
      "express-mongo-sanitize",
      "Joi",
      "Morgan",
      "Winston",
      "Multer",
      "node-fetch",
      "Google OAuth",
      "Optional 2FA",
      "Recovery Codes",
      "Stripe Payment Intents",
      "Stripe Tax",
      "Stripe Webhooks",
      "Stripe Elements",
      "Shippo API",
      "Cloudinary",
      "Resend",
      "Nodemailer",
      "SendGrid Mail",
      "Klaviyo",
      "GA4",
      "GA4 Ecommerce Events",
      "Google Tag Manager",
      "Google Maps API",
      "Wave Service Code",
      "Render",
      "Cloudflare DNS",
    ],
    star: {
      situation:
        "Sparkle Bows needed more than a pretty storefront. The business needed a real operating system for product sales, shipping, customer accounts, admin management, analytics, and customer communication.",
      task:
        "Design and build a full-stack commerce platform that could support real transactions, tax calculation, account management, admin operations, shipping label purchasing, SEO, analytics, marketing capture, and fulfillment workflows.",
      action:
        "Built the React 19 frontend and Node/Express backend, connected MongoDB/Mongoose models, implemented Stripe Payment Intents, Stripe Tax, Stripe Elements, Stripe webhooks, Shippo shipment creation and label purchasing, JWT auth, refresh-token cookies, Google OAuth, optional 2FA and recovery codes, product/admin/order/review/lead/contact/checkout routes, Cloudinary uploads, Resend/Nodemailer/SendGrid-compatible email, Klaviyo VIP capture, GA4 ecommerce events, GTM support, Google Maps address validation support, Wave service-layer code, editable SEO settings, JSON-LD product data, policy pages, rate limiting, Helmet, CORS allow-listing, Mongo sanitization, and public form protection.",
      result:
        "Launched a live eCommerce platform that supports product discovery, checkout, fulfillment, admin workflows, and future growth for the brand.",
    },
  },
  16: {
    name: "Trace - Browser Memory",
    label: "Chrome extension",
    statement:
      "An MVP Chrome extension for saving, searching, restoring, and organizing browser sessions so users can recover lost tabs and workflows.",
    features: [
      "Manual session save",
      "Background auto-save with duplicate prevention",
      "Restore sessions in a new window",
      "Search saved tabs, URLs, tags, and summaries",
      "Pin favorite sessions",
      "Tag and rename sessions",
      "Edit session summaries",
      "Copy session links",
      "JSON import/export",
      "Collapsible tab lists",
      "Clean Chrome extension popup UI",
    ],
    stack: ["React", "TypeScript", "Vite", "Chrome Extension APIs", "Chrome Storage API", "Chrome Alarms API", "CSS"],
    star: {
      situation:
        "Research-heavy work often turns into tab overload. Important context gets lost when sessions are closed, browser history becomes noisy, and related links are scattered.",
      task:
        "Create a Chrome extension that helps users preserve browser context, group related tabs, search saved session data, and resume work without rebuilding a research session from scratch.",
      action:
        "Built the extension with React, TypeScript, Vite, Chrome Extension APIs, Chrome Storage API, Chrome Alarms API, and CSS. I designed the session model, tab-saving flow, background auto-save, duplicate prevention, tagging and pinning structure, search experience, restore actions, summary editing, copied links, collapsible tab lists, and JSON import/export support.",
      result:
        "Created an active MVP with a clear product direction and roadmap potential for AI-generated summaries, semantic search, cloud sync, user accounts, Stripe subscription billing, and Chrome Web Store release.",
    },
    links: [
      { label: "Chrome Extension Repo", href: "https://github.com/cpeterson27/trace-browser-memory" },
    ],
  },
  15: {
    name: "Terry's Auto Systems Platform",
    label: "Business management system",
    image: `${process.env.PUBLIC_URL}/images/terrys-auto-service-dashboard.png`,
    statement:
      "A production business website, customer portal, and admin dashboard for appointments, customers, invoices, expenses, messages, settings, gallery media, and customer communication.",
    features: [
      "Public homepage with service information, contact form, and gallery media",
      "Customer signup/login with email verification and password reset",
      "Customer portal with booking management",
      "Appointment booking, rescheduling, cancellation, and admin appointment management",
      "Admin dashboard for invoices, expenses, customers, messages, settings, and gallery content",
      "Cloudinary image/video uploads with multiple media files per gallery card",
      "Resend transactional email for verification, password reset, bookings, and admin notifications",
      "Klaviyo marketing opt-in during signup",
      "Admin seed, Cloudinary check, API smoke test, and schema test scripts",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "lucide-react",
      "Vercel Analytics",
      "Axios API Client",
      "Node.js 20",
      "Express",
      "Express TypeScript API",
      "MongoDB & Mongoose",
      "JWT Authentication",
      "Email Verification",
      "Password Reset",
      "Cloudinary",
      "Resend",
      "Klaviyo",
      "Vercel",
      "Render",
    ],
    star: {
      situation:
        "A local auto service business needed a more modern way to present services, manage customer interactions, and organize operational workflows.",
      task:
        "Build a customer-facing website and internal business system that connected services, contact submissions, signup/login, email verification, password reset, appointments, customer portal access, messages, invoices, expenses, settings, gallery content, and email communication.",
      action:
        "Implemented a React 18, TypeScript, Vite, Tailwind frontend and Node.js 20 Express TypeScript backend with MongoDB/Mongoose models, JWT authentication, booking reschedule/cancel flows, invoice and expense management, customer records, admin appointment management, Cloudinary image/video uploads, Resend transactional emails, Klaviyo list opt-in, Vercel Analytics, Vercel client deployment, Render-compatible API deployment, and operational scripts for admin seeding, Cloudinary checks, API smoke tests, and schema tests.",
      result:
        "Delivered a practical business platform that improves customer experience, centralizes admin workflows, and gives the business a stronger digital operating layer.",
    },
  },
  13: {
    name: "Interactive Media Dashboard",
    label: "Dashboard UI system",
    statement:
      "A high-fidelity dashboard implementation focused on visual accuracy, reusable components, accessibility, and polished motion.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    star: {
      situation:
        "A detailed Figma dashboard concept needed to be translated into a responsive, production-quality interface rather than staying as a static design.",
      task:
        "Recreate the design with strong front-end architecture, responsive behavior, component reuse, and smooth interaction details.",
      action:
        "Built the dashboard with Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion while paying close attention to spacing, hierarchy, accessibility, and animation polish.",
      result:
        "Produced a polished interface system that demonstrates design-to-code execution and modern front-end product presentation.",
    },
  },
  1: {
    name: "Standing Break Reminder",
    label: "Paid contract | Sabi Ventures LLC",
    statement:
      "A published Chrome extension built for Sabi Ventures LLC to help desk workers build healthier movement habits.",
    star: {
      situation:
        "Sabi Ventures LLC needed a lightweight wellness extension that could remind computer users to stand, stretch, and move during long desk-work sessions.",
      task:
        "Deliver a reliable Chrome extension with reminder behavior, persistent preferences, and a simple user experience suitable for publishing.",
      action:
        "Built the extension using React, JavaScript, Chrome Extension APIs, local storage, and service workers. I implemented the reminder flow, saved settings, and browser notification behavior.",
      result:
        "Completed paid client contract work that was published on the Chrome Web Store.",
    },
  },
  3: {
    name: "BudgetBlox",
    label: "SaaS experiment",
    statement:
      "A personal finance dashboard for tracking balances, organizing expenses, and building healthier money habits.",
    stack: ["React", "Vite", "Node.js", "MongoDB", "Cookie-parser", "CORS", "Vercel"],
    star: {
      situation:
        "Personal finance tools can feel either too complicated or too thin to support everyday decisions.",
      task:
        "Explore a clean SaaS-style budgeting experience that makes balances and expenses easier to understand at a glance.",
      action:
        "Built a responsive React/Vite application with a dashboard interface, persistent data structure, MongoDB-backed workflows, and account-focused UI patterns.",
      result:
        "Created a finance product experiment that can evolve into automation, budgeting insights, and AI-assisted planning features.",
    },
  },
  2: {
    name: "News Explorer",
    label: "Full-stack news application",
    links: [
      { label: "Live Demo", href: "https://cpeterson27.github.io/News-Explorer-Frontend/" },
      { label: "GitHub", href: "https://github.com/cpeterson27/News-Explorer-Frontend" },
    ],
    star: {
      situation:
        "Readers need a faster way to search current articles and keep useful stories organized for later.",
      task:
        "Build a full-stack news app with search, saved articles, authentication, and a clean reading workflow.",
      action:
        "Created the React frontend, connected REST API requests, built protected save flows, and structured the MongoDB/Express backend around user accounts and saved content.",
      result:
        "Delivered a complete news-search application that demonstrates authentication, API integration, saved data, and a polished user flow.",
    },
  },
  4: {
    label: "Task management app",
    star: {
      situation: "The project focused on building a small but complete interaction pattern around everyday task management.",
      task: "Create a straightforward to-do app with clear add, complete, and delete behavior.",
      action: "Built the interface with HTML, CSS, and JavaScript while practicing DOM updates, form handling, and state changes.",
      result: "Produced a clean front-end utility that strengthened core JavaScript and interaction fundamentals.",
    },
  },
  6: {
    label: "Weather-based recommendation app",
    star: {
      situation: "Users often check the weather and then decide what to wear separately.",
      task: "Build an app that combines forecast data with clothing recommendations in one interface.",
      action: "Connected weather API data to a React UI and mapped temperature conditions to item suggestions.",
      result: "Created a practical recommendation app that demonstrates API use, conditional rendering, and responsive UI behavior.",
    },
  },
  7: {
    label: "Campus guide app",
    star: {
      situation: "New students need an easier way to understand campus resources and navigate university life.",
      task: "Create an organized guide experience with accessible sections and responsive layouts.",
      action: "Built a JavaScript-driven interface with structured content, navigation, and mobile-friendly styling.",
      result: "Delivered a campus guide concept that shows information architecture and front-end presentation skills.",
    },
  },
  8: {
    label: "React routing demo",
    star: {
      situation: "The goal was to practice multi-view React structure and client-side routing.",
      task: "Build a small app that demonstrates routing, component organization, and state-friendly page flow.",
      action: "Implemented the app with React, Vite, JavaScript, and React Router patterns.",
      result: "Created a focused routing demo that helped build the foundation for larger multi-page React apps.",
    },
  },
  9: {
    label: "Interactive photo app",
    star: {
      situation: "The project explored the core interactions behind a lightweight social photo interface.",
      task: "Create a dynamic UI where users can edit profile details, add images, remove cards, and like posts.",
      action: "Built reusable JavaScript components and interactive card behavior with responsive styling.",
      result: "Produced an interactive front-end app that demonstrates DOM control, component thinking, and user interaction polish.",
    },
  },
  10: {
    label: "Responsive landing page",
    star: {
      situation: "The assignment called for a polished brand page with strong layout fundamentals.",
      task: "Build a responsive coffee shop landing page with clean sections, semantic structure, and consistent styling.",
      action: "Implemented the page with HTML, CSS, BEM structure, responsive spacing, and visual hierarchy.",
      result: "Created a polished static site that strengthened layout, typography, and responsive design fundamentals.",
    },
  },
  11: {
    label: "Early personal site",
    star: {
      situation: "This was an early portfolio exercise focused on translating personal background into a web presence.",
      task: "Create a simple page that introduced my interests, design sense, and basic front-end skills.",
      action: "Built the page with HTML and CSS while practicing structure, spacing, imagery, and page styling.",
      result: "Established an early baseline that later evolved into a more product-focused personal brand.",
    },
  },
};

function normalizeUrl(url) {
  return url?.replace(/\.git$/i, "").replace(/\/$/i, "");
}

function normalizePortfolioProject(project) {
  const override = projectStoryOverrides[project.id] || {};
  const gallery = getProjectImages(project);
  const image = override.image || project.image || gallery[0];
  const stack = override.stack || (project.tags || []).slice(0, 5);
  const features = override.features || (stack.length ? stack : ["Responsive interface", "Structured UI", "Front-end fundamentals"]);
  const baseLinks = override.links || [
    project.link && {
      label: project.link.includes("chromewebstore")
        ? "Chrome Web Store"
        : project.link.includes("github.com")
          ? "GitHub"
          : "Live Demo",
      href: project.link,
    },
    project.code && project.code !== project.link && { label: "GitHub", href: project.code },
    project.backendCode && { label: "Backend", href: project.backendCode },
  ];
  const seenLinks = new Set();
  const links = baseLinks.filter(Boolean).filter((link) => {
    const normalized = normalizeUrl(link.href);
    if (seenLinks.has(normalized)) return false;
    seenLinks.add(normalized);
    return true;
  });

  return {
    id: `archive-${project.id}`,
    name: override.name || project.title,
    label: override.label || "Project case study",
    image,
    images: override.image
      ? [override.image, ...gallery.filter((item) => item !== override.image)]
      : gallery,
    statement: override.statement || project.description,
    problem: project.description,
    features,
    stack,
    outcome: override.outcome || "Built as part of my broader engineering foundation and product development practice.",
    star: override.star || {
      situation: project.description,
      task: "Turn the concept into a working web experience with clear user flow and responsive presentation.",
      action: `Built the interface using ${stack.length ? stack.join(", ") : "front-end fundamentals"}, with attention to structure, interaction details, and maintainable implementation.`,
      result: "Completed a functional project that demonstrates applied engineering practice and adds context to my growth as a product-minded developer.",
    },
    links,
  };
}

const projectStories = portfolioData.projects.map(normalizePortfolioProject);

const digitalProducts = [
  {
    icon: Layers3,
    slug: "notion-builder-os",
    name: "Notion Builder OS",
    type: "Notion workspace",
    price: "$49",
    status: "Available",
    deliveryLabel: "Notion template",
    checkoutUrl: checkoutLinks.notionBuilderOs,
    detailPath: "/products/notion-builder-os",
    text: "A focused Notion workspace for moving product ideas from rough notes to clear decisions, weekly shipping, and launch-ready proof.",
    includes: ["Product command center", "Idea and experiment pipeline", "Weekly shipping and launch system"],
  },
  {
    icon: Bot,
    slug: "ai-prompt-packs",
    name: "AI Builder Prompt System",
    type: "PDF prompt workbook",
    price: "$29",
    status: "Available",
    deliveryLabel: "PDF workbook",
    checkoutUrl: checkoutLinks.aiPromptPacks,
    detailPath: "/products/ai-prompt-packs",
    text: "A guided workbook that helps turn a fuzzy product idea into a product brief, offer page, launch plan, and developer handoff. It works alone or alongside Notion Builder OS.",
    includes: ["45 prompts, templates, scorecards, and checklists", "Worked example plus copy/paste workbook sections", "Product brief, offer page, launch plan, and developer handoff"],
  },
  {
    icon: Workflow,
    slug: "automation-kits",
    name: "Automation Kits",
    type: "Workflow recipes",
    price: "Price TBD",
    status: "Planned",
    checkoutUrl: checkoutLinks.automationKits,
    detailPath: "/products/automation-kits",
    text: "Small-business automation blueprints for intake, follow-ups, reporting, customer systems, and repeatable admin.",
    includes: ["Intake flow blueprints", "Follow-up sequences", "Admin workflow maps"],
  },
  {
    icon: Code2,
    slug: "developer-resources",
    name: "Developer Resources",
    type: "Resource library",
    price: "Price TBD",
    status: "Planned",
    checkoutUrl: checkoutLinks.developerResources,
    detailPath: "/products/developer-resources",
    text: "Reusable checklists, launch patterns, front-end polish guides, and implementation notes for modern builders.",
    includes: ["Launch checklists", "Frontend polish notes", "Implementation patterns"],
  },
  {
    icon: BriefcaseBusiness,
    slug: "founder-portfolio-kit",
    name: "Builder Portfolio & Case Study Kit",
    type: "Portfolio storytelling kit",
    price: "Price TBD",
    status: "Planned",
    checkoutUrl: checkoutLinks.founderPortfolioKit,
    detailPath: "/products/founder-portfolio-kit",
    text: "A planned system for turning completed work into credible case studies, portfolio copy, proof points, and a clear builder story. It is not a portfolio website.",
    includes: ["Builder positioning prompts", "Case study structure", "Proof and outcome worksheets"],
  },
];

const aiBuilderDetails = {
  artifacts: [
    ["Product brief", "Clarify the buyer, problem, promise, scope, price, and first version."],
    ["Offer page outline", "Shape the page sections a buyer needs before they trust the product."],
    ["Launch plan", "Map launch content, buyer objections, and go/no-go checks."],
    ["Workflow map", "Turn a messy manual process into steps, risks, owners, and automation ideas."],
    ["Developer handoff", "Convert an idea into user stories, edge cases, acceptance criteria, and tests."],
    ["Checkout review", "Catch trust, delivery, mobile, and post-purchase gaps before customers do."],
  ],
  inside: [
    "Working method: Context Block, Better Answer Loop, Decision Memo, and asset conversion prompts.",
    "Product clarity: value audits, offer positioning, objection maps, MVP scope, and premium upgrade ideas.",
    "Scorecards: paid product value, prompt quality, and launch readiness gates.",
    "Page and checkout review: conversion review, success page rewrite, trust gap finder, and mobile scan test.",
    "Templates: product brief, offer page outline, developer handoff, workflow automation brief, and bonus worksheets.",
  ],
  bestFor: [
    "Early founders shaping a first product or digital offer.",
    "Solo builders who know AI can help but still get generic answers.",
    "Developers who want stronger product thinking before they code.",
  ],
  notFor: [
    "Experienced AI users with a mature prompting system already in place.",
    "Anyone expecting a full course, coaching program, or done-for-you strategy.",
    "People who want novelty prompts instead of practical planning tools.",
  ],
  previews: [
    {
      title: "Paid Product Value Audit",
      text: "Review this paid product idea by outcome, specificity, usefulness, buyer urgency, perceived polish, and what a customer might feel after opening it.",
    },
    {
      title: "Checkout Confidence Audit",
      text: "Identify where a buyer may hesitate, get confused, or worry, then improve button copy, delivery expectations, support language, and reassurance.",
    },
    {
      title: "Developer Handoff Template",
      text: "Feature, user story, goal, non-goals, UI states, data needed, edge cases, failure states, acceptance criteria, tests, and launch notes.",
    },
  ],
};

const notionBuilderDetails = {
  modules: [
    ["Product command center", "See the active product, current milestone, next decision, blockers, and weekly priorities in one place."],
    ["Idea pipeline", "Capture ideas without letting every idea become a project. Sort by stage, value, confidence, and next action."],
    ["Decision log", "Record what changed, why it changed, and what evidence should shape the next move."],
    ["Experiment tracker", "Define the assumption, smallest test, success signal, result, and follow-up before building too much."],
    ["Build and launch log", "Keep shipping notes, release checkpoints, content tasks, and launch assets connected to the product."],
    ["Proof library", "Save customer language, screenshots, outcomes, testimonials, and case-study material while the work is fresh."],
  ],
  workflow: [
    ["01", "Capture", "Add an idea, customer signal, problem, or opportunity without interrupting active work."],
    ["02", "Decide", "Score the idea, name the assumption, and choose whether to test, build, defer, or archive it."],
    ["03", "Ship", "Turn the selected work into a weekly plan with one milestone and visible next actions."],
    ["04", "Learn", "Log results, decisions, proof, and follow-up work so progress compounds instead of disappearing."],
  ],
  bestFor: [
    "Solo builders managing product, content, launch, and development themselves.",
    "Early founders who need a lightweight operating rhythm before adding more tools.",
    "Developers who want decisions and product context beside their implementation work.",
  ],
  notFor: [
    "Large teams needing advanced permissions, resource planning, or enterprise project management.",
    "Anyone looking for a decorative life dashboard with dozens of unrelated trackers.",
    "Teams already committed to a mature Jira, Linear, or dedicated product-ops system.",
  ],
  previews: [
    {
      title: "This week",
      text: "One milestone, three priority outcomes, current blockers, decisions needed, and the smallest useful thing to ship next.",
    },
    {
      title: "Idea review",
      text: "Problem, audience, evidence, expected value, confidence, effort, status, and a clear test-before-build action.",
    },
    {
      title: "Launch room",
      text: "Offer notes, page status, content plan, checkout QA, delivery checks, launch signals, and post-launch learning.",
    },
  ],
};

const productVisuals = {
  "ai-prompt-packs": {
    label: "PDF workbook",
    outcome: "Turn a rough idea into a product brief, offer page, launch plan, and dev handoff.",
    before: "Messy idea",
    after: "Build-ready plan",
    pages: ["Product brief", "Offer page", "Launch plan", "Dev handoff"],
    notes: ["Scorecards", "Templates", "Worked example"],
  },
  "notion-builder-os": {
    label: "Workspace",
    outcome: "Organize product ideas, decisions, content, experiments, and weekly shipping work.",
    before: "Scattered notes",
    after: "Builder dashboard",
    pages: ["Idea pipeline", "Build log", "Launch notes", "Shipping rhythm"],
    notes: ["Pipeline", "Weekly cadence", "Decision log"],
  },
  "automation-kits": {
    label: "Flow maps",
    outcome: "Map repeatable business tasks into workflows that can become automated systems.",
    before: "Manual process",
    after: "Automation map",
    pages: ["Intake flow", "Follow-up sequence", "Reporting loop", "Admin checklist"],
    notes: ["Triggers", "Steps", "Checks"],
  },
  "developer-resources": {
    label: "Resource library",
    outcome: "Use practical build, polish, launch, and QA notes while turning a plan into software.",
    before: "Ready to build",
    after: "Ship checklist",
    pages: ["Frontend polish", "QA checklist", "Launch review", "Implementation notes"],
    notes: ["Patterns", "Tests", "Examples"],
  },
  "founder-portfolio-kit": {
    label: "Positioning kit",
    outcome: "Package finished work into stronger case studies, product stories, and offer pages.",
    before: "Finished work",
    after: "Clear proof",
    pages: ["Builder story", "Case study", "Offer page", "Proof points"],
    notes: ["Prompts", "Templates", "Outline"],
  },
};

const buildPosts = [
  {
    title: "Designing browser memory for research-heavy work",
    category: "Chrome extension lab",
    summary: "What Trace taught me about context, tab overload, and tiny product loops inside the browser.",
  },
  {
    title: "Turning client work into reusable product systems",
    category: "Product thinking",
    summary: "How business dashboards, admin flows, and automations can become repeatable building blocks.",
  },
  {
    title: "AI workflows that make small teams feel bigger",
    category: "AI + automation",
    summary: "A practical look at where AI belongs in operations: intake, summaries, follow-ups, and decision support.",
  },
  {
    title: "Shipping a commerce platform beyond the storefront",
    category: "Engineering notes",
    summary: "Why payments, shipping, lifecycle email, analytics, and admin tools matter as much as the public UI.",
  },
];

const services = [
  ["AI workflow systems", "Map repetitive work into practical AI-assisted workflows for daily operations."],
  ["Operational automations", "Connect forms, emails, dashboards, data, and follow-ups into cleaner systems."],
  ["Modern web experiences", "Design and build polished React interfaces for products, brands, and internal tools."],
  ["Business systems", "Create customer portals, admin dashboards, eCommerce flows, and service workflows."],
  ["Integrations", "Connect APIs, payments, shipping, media, email, analytics, and productivity tools."],
  ["Product strategy", "Clarify the product story, user flow, and launch path before building the wrong thing beautifully."],
];

const metrics = [
  ["Product-first", "engineering"],
  ["Chrome", "extensions"],
  ["AI", "workflows"],
  ["Business", "systems"],
];

function ExternalLink({ href, children, className = "button button-secondary" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

function PageLink({ to, children, className = "button button-primary" }) {
  return (
    <Link className={className} to={to}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

function getProjectImages(project) {
  const sourceImages = project.images || [project.image].filter(Boolean);
  return sourceImages.filter((image) => /\.(png|jpe?g|webp|gif|svg)$/i.test(image));
}

function Eyebrow({ icon: Icon = Sparkles, children }) {
  return (
    <p className="eyebrow">
      <Icon size={15} aria-hidden="true" />
      {children}
    </p>
  );
}

function PageHeader({ eyebrow, title, text, icon }) {
  return (
    <header className="page-header">
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  );
}

function SectionIntro({ eyebrow, title, text, icon }) {
  return (
    <div className="section-intro">
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Layout() {
  const location = useLocation();

  return (
    <div className="site-shell">
      <nav className="nav">
        <Link className="brand" to="/" aria-label="Cassandra Peterson home">
          <span className="brand-mark">
            <svg className="brand-symbol" viewBox="0 0 48 48" role="img" aria-label="Cassandra Peterson brand mark">
              <path className="brand-symbol-bracket" d="M15 15 8 24l7 9" />
              <text className="brand-symbol-letters" x="24" y="29" textAnchor="middle">CP</text>
              <path className="brand-symbol-slash" d="M31 34 37 14" />
              <path className="brand-symbol-bracket" d="M38 15 45 24l-7 9" />
            </svg>
          </span>
          <span>Cassandra Peterson</span>
        </Link>
        <div className="nav-links" aria-label="Primary navigation">
          {navItems.map(([label, to]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </div>
        <Link className="nav-action" to="/work-with-me">
          Start a conversation
        </Link>
      </nav>

      <div className="page-transition" key={location.pathname}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {showDigitalProducts ? (
            <>
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/products/success" element={<ProductSuccessPage />} />
              <Route path="/products/cancel" element={<ProductCancelPage />} />
            </>
          ) : (
            <Route path="/products/*" element={<Navigate to="/" replace />} />
          )}
          <Route path="/build-log" element={<BuildLogPage />} />
          <Route path="/work-with-me" element={<WorkPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="status-pill">
              <RadioTower size={16} aria-hidden="true" />
              Software Engineer | Product Builder | AI + Automation
            </p>
            <h1>Warm, polished web systems for products, teams, and growing businesses.</h1>
            <p className="hero-subtitle">
              I design and engineer product-focused systems for founders, small businesses, and modern teams: business platforms, commerce flows, AI workflows, automation, and polished front-end experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                <Mail size={17} aria-hidden="true" />
                Email Cassandra
              </a>
              <PageLink to="/projects">View product work</PageLink>
              <ExternalLink href={profile.resume} className="button button-secondary">Resume</ExternalLink>
            </div>
          </div>
          <aside className="hero-photo-card" aria-label="Contact Cassandra Peterson">
            <img
              src={headshot}
              alt="Cassandra Peterson"
            />
            <div className="hero-contact-card">
              <strong>Full-stack product engineer</strong>
              <span>Based in {profile.location}</span>
              <span>React interfaces, Node APIs, Stripe flows, automation, and AI-assisted workflows.</span>
              <code>ship({`{`} clarity, polish, systems {`}`});</code>
              <div className="hero-stack" aria-label="Core technical focus">
                <span>React</span>
                <span>Node</span>
                <span>Stripe</span>
                <span>AI workflows</span>
              </div>
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" />
                {profile.email}
              </a>
            </div>
          </aside>
        </div>
        <div className="metrics-strip">
          {metrics.map(([value, label]) => (
            <div className="metric" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section selected-work-section">
        <SectionIntro
          eyebrow="Selected work"
          title="A preview of product-minded engineering work."
          text="A few representative builds are highlighted here. The full projects page includes the complete project archive, links, screenshots, and STAR-based case study notes."
          icon={Orbit}
        />
        <div className="selected-work-layout">
          <div className="selected-work-copy">
            <p>
              These examples show the range I want people to notice first: browser tooling, paid client work, commerce systems, and automation-minded product development.
            </p>
            <PageLink to="/projects">View all projects</PageLink>
          </div>
          <div className="selected-work-list">
            {featured.map((project) => (
              <article className="work-preview-row" key={project.id}>
                <div className="work-preview-image">
                  <img src={project.image} alt={`${project.name} preview`} />
                </div>
                <div className="work-preview-content">
                  <span>{project.label}</span>
                  <h3>{project.name}</h3>
                  <p>{project.statement}</p>
                  <div className="work-preview-actions">
                    {project.links.slice(0, 2).map((link) => (
                      <ExternalLink href={link.href} key={link.href}>
                        {link.label}
                      </ExternalLink>
                    ))}
                    <PageLink to="/projects" className="button button-ghost">Case notes</PageLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-preview-section">
        <div className="about-preview">
          <div className="about-preview-media">
            <img
              src={headshot}
              alt="Cassandra Peterson, software engineer and product builder"
            />
          </div>
          <div className="about-preview-copy">
            <Eyebrow icon={Sparkles}>About Cassandra</Eyebrow>
            <h2>Product-minded engineering with a design background and systems mindset.</h2>
            <p>
              I build modern web systems, Chrome extensions, business tools, and automation-minded product experiences. My work blends full-stack engineering, UI/UX thinking, and a practical interest in how AI can make workflows clearer and more useful.
            </p>
            <p>
              The throughline is turning scattered ideas, manual processes, and rough product concepts into polished digital systems people can actually use.
            </p>
            <div className="about-preview-actions">
              <PageLink to="/projects">See my work</PageLink>
              <PageLink to="/work-with-me" className="button button-secondary">Work with me</PageLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Build log preview"
          title="Notes from product, engineering, and AI experiments."
          icon={Newspaper}
        />
        <div className="build-preview-grid">
          {buildPosts.slice(0, 3).map((post) => (
            <article className="build-card" key={post.title}>
              <span>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

function ProjectsPage() {
  return (
    <main>
      <section className="page-section">
        <PageHeader
          eyebrow="Product showcase"
          title="Projects presented like products, not assignments."
          text="A deeper look at the systems I build: browser tools, client platforms, eCommerce operations, automation layers, and SaaS-style experiments."
          icon={Boxes}
        />
        <div className="case-study-stack">
          {projectStories.map((project) => (
            <article className="case-study" key={project.id}>
              <div className="case-content">
                <div className="case-heading-row">
                  <div>
                    <span className="case-label">{project.label}</span>
                    <h2>{project.name}</h2>
                    <p className="case-statement">{project.statement}</p>
                  </div>
                  <div className="project-links project-links-top">
                    {project.links.map((link) => (
                      <ExternalLink href={link.href} key={link.href}>
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                </div>

                <ProjectGallery project={project} />

                <div className="star-grid">
                  <div className="case-detail">
                    <strong>Situation</strong>
                    <p>{project.star.situation}</p>
                  </div>
                  <div className="case-detail">
                    <strong>Task</strong>
                    <p>{project.star.task}</p>
                  </div>
                  <div className="case-detail">
                    <strong>Action</strong>
                    <p>{project.star.action}</p>
                  </div>
                  <div className="case-detail">
                    <strong>Result</strong>
                    <p>{project.star.result}</p>
                  </div>
                </div>
                <strong className="inline-heading">Key features</strong>
                <div className="feature-list">
                  {project.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
                {project.stack.length > 0 && <strong className="inline-heading">Tech stack</strong>}
                <div className="mini-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <ExternalLink href={link.href} key={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectGallery({ project }) {
  const images = project.images?.length ? project.images : [project.image];
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;
  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };
  const goToNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="case-media">
      <div className="gallery-main-wrap">
        {hasMultipleImages && (
          <button
            className="gallery-nav previous"
            onClick={goToPrevious}
            type="button"
            aria-label={`Previous ${project.name} screenshot`}
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
        )}
        <button
          className="gallery-main-button"
          onClick={() => setModalOpen(true)}
          type="button"
        >
          <img src={activeImage} alt={`${project.name} project preview`} />
          <span>Open gallery</span>
        </button>
        {hasMultipleImages && (
          <button
            className="gallery-nav next"
            onClick={goToNext}
            type="button"
            aria-label={`Next ${project.name} screenshot`}
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        )}
      </div>
      {hasMultipleImages && (
        <div className="gallery-counter">
          {activeIndex + 1} / {images.length}
        </div>
      )}
      {hasMultipleImages && (
        <div className="gallery-strip" aria-label={`${project.name} screenshots`}>
          {images.map((image, index) => (
            <button
              className={image === activeImage ? "active" : ""}
              key={image}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <img src={image} alt={`${project.name} screenshot ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
      {modalOpen && (
        <div
          className="gallery-modal-backdrop"
          role="presentation"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} image gallery`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-modal-header">
              <div>
                <span>{project.label}</span>
                <h3>{project.name}</h3>
              </div>
              <button
                className="gallery-modal-close"
                onClick={() => setModalOpen(false)}
                type="button"
              >
                Close
              </button>
            </div>
            <div className="gallery-modal-stage">
              {hasMultipleImages && (
                <button
                  className="gallery-modal-nav previous"
                  onClick={goToPrevious}
                  type="button"
                  aria-label={`Previous ${project.name} screenshot`}
                >
                  <ChevronLeft size={26} aria-hidden="true" />
                </button>
              )}
              <img src={activeImage} alt={`${project.name} enlarged preview`} />
              {hasMultipleImages && (
                <button
                  className="gallery-modal-nav next"
                  onClick={goToNext}
                  type="button"
                  aria-label={`Next ${project.name} screenshot`}
                >
                  <ChevronRight size={26} aria-hidden="true" />
                </button>
              )}
            </div>
            <div className="gallery-modal-footer">
              <span>{activeIndex + 1} of {images.length}</span>
              {hasMultipleImages && (
                <div className="gallery-modal-thumbs">
                  {images.map((image, index) => (
                    <button
                      className={index === activeIndex ? "active" : ""}
                      key={image}
                      onClick={() => setActiveIndex(index)}
                      type="button"
                    >
                      <img src={image} alt={`${project.name} thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductsPage() {
  const availableProducts = digitalProducts.filter((product) => product.status === "Available");
  const plannedProducts = digitalProducts.filter((product) => product.status === "Planned");
  const buyingGuide = {
    "notion-builder-os": {
      stage: "You know what you are building",
      label: "Keep the work organized and moving",
      what: "A duplicable Notion workspace with connected databases, dashboards, templates, and example records.",
      why: "Choose this when the product is real, but your ideas, decisions, experiments, weekly plans, and customer proof are scattered.",
      result: "One working command center that shows what matters now, what needs a decision, and what should ship next.",
      question: "How do I manage everything without losing focus?",
      accent: "workspace",
    },
    "ai-prompt-packs": {
      stage: "You are still shaping the idea",
      label: "Turn a rough idea into a clear plan",
      what: "A downloadable PDF workbook containing 45 guided AI prompts, planning templates, scorecards, and a worked example.",
      why: "Choose this when you need help defining the buyer, problem, offer, sales page, launch plan, or developer handoff.",
      result: "A build-ready product brief and practical planning documents you can create with the AI tool you already use.",
      question: "What exactly should I build, for whom, and how do I explain it?",
      accent: "workbook",
    },
  };

  return (
    <main className="page-section">
      <PageHeader
        eyebrow="Digital tools for builders"
        title="Turn an idea into a product—and keep the work moving."
        text="Each tool solves a different stage of the job. Start with the problem you have today: making the idea clear or managing the work after it becomes real."
        icon={ShoppingBag}
      />
      <section className="product-stage-picker" aria-labelledby="stage-picker-title">
        <div>
          <span>Choose by your current bottleneck</span>
          <h2 id="stage-picker-title">Where are you stuck?</h2>
        </div>
        <a href="#ai-prompt-packs">
          <Bot size={20} aria-hidden="true" />
          <span>I am still shaping the idea</span>
          <strong>Help me create a clear product plan</strong>
          <ArrowRight size={18} aria-hidden="true" />
        </a>
        <a href="#notion-builder-os">
          <Layers3 size={20} aria-hidden="true" />
          <span>I know what I am building</span>
          <strong>Help me organize and ship the work</strong>
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
      <section className="product-choice-section" aria-label="Products available now">
        {availableProducts.map((product, index) => {
          const guide = buyingGuide[product.slug];
          const Icon = product.icon;

          return (
            <article className={`product-choice-card ${guide.accent}`} id={product.slug} key={product.slug}>
              <div className="product-choice-topline">
                <span>0{index + 1}</span>
                <span>{product.type}</span>
                <span>{guide.stage}</span>
              </div>
              <div className="product-choice-heading">
                <div className="product-choice-icon">
                  <Icon size={25} aria-hidden="true" />
                </div>
                <div>
                  <p>{guide.label}</p>
                  <h2>{product.name}</h2>
                </div>
              </div>
              <ProductVisual product={product} />
              <div className="product-explainer">
                <div>
                  <span>What it is</span>
                  <p>{guide.what}</p>
                </div>
                <div>
                  <span>Choose it when</span>
                  <p>{guide.why}</p>
                </div>
                <div>
                  <span>The outcome</span>
                  <p>{guide.result}</p>
                </div>
              </div>
              <div className="product-choice-includes">
                <strong>You receive</strong>
                <ul className="store-includes">
                  {product.includes.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-choice-footer">
                <div>
                  <strong>{product.price}</strong>
                  <span>Instant email delivery</span>
                </div>
                <div className="product-choice-actions">
                  <PageLink to={product.detailPath} className="store-button store-button-secondary">
                    See everything inside
                  </PageLink>
                  {product.checkoutUrl && isFulfillmentReady ? (
                    <a className="store-button store-button-primary" href={product.checkoutUrl}>
                      Buy {product.name}
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  ) : (
                    <a className="store-button store-button-primary" href={`${waitlistHref}%0D%0A%0D%0AProduct interest: ${encodeURIComponent(product.name)}`}>
                      Request access
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <section className="product-fit-section" aria-labelledby="product-fit-title">
        <div className="product-fit-heading">
          <span>The simplest difference</span>
          <h2 id="product-fit-title">Two questions. Two practical tools.</h2>
          <p>Match the question you are asking to the tool designed to answer it.</p>
        </div>
        <div className="product-fit-flow">
          <div>
            <Bot size={21} aria-hidden="true" />
            <span>AI Builder Prompt System</span>
            <strong>{buyingGuide["ai-prompt-packs"].question}</strong>
            <p>Use the workbook to shape the strategy and produce a clear plan.</p>
          </div>
          <span className="product-fit-divider">or</span>
          <div>
            <Layers3 size={21} aria-hidden="true" />
            <span>Notion Builder OS</span>
            <strong>{buyingGuide["notion-builder-os"].question}</strong>
            <p>Use the workspace to operate the product and keep progress visible.</p>
          </div>
        </div>
        <a className="product-fit-help" href={productQuestionHref}>
          Still unsure? Tell me where you are stuck
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </section>
      <section className="product-roadmap-section" aria-labelledby="roadmap-title">
        <div className="store-section-heading">
          <span>Coming later</span>
          <h2 id="roadmap-title">More practical tools are being built.</h2>
          <p>These are upcoming product directions. Join the interest list if one solves a problem you want help with next.</p>
        </div>
        <div className="product-roadmap-list">
          {plannedProducts.map((product) => {
            const Icon = product.icon;

            return (
              <article key={product.slug}>
                <Icon size={20} aria-hidden="true" />
                <div>
                  <span>In development</span>
                  <h3>{product.name}</h3>
                  <p>{product.text}</p>
                </div>
                <a href={`${waitlistHref}%0D%0A%0D%0AProduct interest: ${encodeURIComponent(product.name)}`}>
                  Follow progress
                </a>
              </article>
            );
          })}
        </div>
      </section>
      <div className="store-checkout-note">
        <div>
          <CreditCard size={19} aria-hidden="true" />
          <span>Secure checkout through Stripe.</span>
        </div>
        <div>
          <Mail size={19} aria-hidden="true" />
          <span>Digital access is delivered automatically by email.</span>
        </div>
      </div>
    </main>
  );
}

function ProductVisual({ product, featured = false }) {
  const visual = productVisuals[product.slug];

  return (
    <div className={featured ? "product-visual featured" : "product-visual"} aria-label={`${product.name} preview`}>
      <div className="product-visual-cover">
        <span>{visual.label}</span>
        <strong>{product.name}</strong>
        <p>{visual.outcome}</p>
        <div className="product-visual-lines">
          {visual.pages.map((page) => (
            <i key={page}>{page}</i>
          ))}
        </div>
      </div>
      <div className="product-visual-flow">
        <span>{visual.before}</span>
        <ArrowRight size={15} aria-hidden="true" />
        <span>{visual.after}</span>
      </div>
      <div className="product-visual-notes">
        {visual.notes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </div>
    </div>
  );
}

function ProductDetailPage() {
  const { slug } = useParams();
  const product = digitalProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="page-section">
        <div className="checkout-status">
          <Eyebrow icon={ShoppingBag}>Product shelf</Eyebrow>
          <h1>That product page is not available.</h1>
          <p>Return to the product shelf to see the current catalog.</p>
          <div className="checkout-status-actions">
            <PageLink to="/products">Back to products</PageLink>
          </div>
        </div>
      </main>
    );
  }

  if (product.slug === "notion-builder-os") {
    return (
      <main className="page-section">
        <div className="product-detail-hero">
          <div>
            <Eyebrow icon={Layers3}>Digital product</Eyebrow>
            <h1>{product.name}</h1>
            <p>
              {product.text} It is designed as a practical operating system for one active product—not an oversized second brain.
            </p>
            <div className="store-hero-meta" aria-label={`${product.name} details`}>
              <span>{product.price}</span>
              <span>Notion template</span>
              <span>4-step workflow</span>
              <span>Instant email delivery</span>
            </div>
            <div className="product-detail-actions">
              {product.checkoutUrl && isFulfillmentReady ? (
                <a className="store-button store-button-primary" href={product.checkoutUrl}>
                  <ShoppingBag size={17} aria-hidden="true" />
                  Buy now
                </a>
              ) : (
                <a className="store-button store-button-primary" href={`${waitlistHref}%0D%0A%0D%0AProduct interest: ${encodeURIComponent(product.name)}`}>
                  <Mail size={17} aria-hidden="true" />
                  Request access
                </a>
              )}
              <PageLink to="/products" className="store-button store-button-secondary">
                Back to shelf
              </PageLink>
            </div>
          </div>
          <ProductVisual product={product} featured />
        </div>

        <section className="product-proof-section" aria-labelledby="notion-builder-modules-title">
          <div className="product-proof-intro">
            <Eyebrow icon={Layers3}>The product foundation</Eyebrow>
            <h2 id="notion-builder-modules-title">One workspace for deciding what matters and shipping it.</h2>
            <p>
              Each module earns its place by helping a builder capture, decide, ship, or learn without turning the workspace into another project to maintain.
            </p>
          </div>

          <div className="product-artifact-grid">
            {notionBuilderDetails.modules.map(([title, text]) => (
              <article className="product-proof-card" key={title}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <article className="product-proof-panel">
            <div className="product-proof-panel-heading">
              <h3>The working rhythm</h3>
              <span>Capture → learn</span>
            </div>
            <div className="product-workflow-grid">
              {notionBuilderDetails.workflow.map(([number, title, text]) => (
                <div className="product-workflow-step" key={number}>
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="product-proof-panel">
            <div className="product-proof-panel-heading">
              <h3>Honest fit</h3>
              <span>Built to stay focused</span>
            </div>
            <div className="product-fit-grid">
              <div>
                <strong>Best for</strong>
                <ul className="product-proof-list compact">
                  {notionBuilderDetails.bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Not for</strong>
                <ul className="product-proof-list compact">
                  {notionBuilderDetails.notFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="product-preview-grid" aria-label="Planned Notion workspace views">
            {notionBuilderDetails.previews.map((preview) => (
              <article className="product-preview-card" key={preview.title}>
                <span>Workspace view</span>
                <h3>{preview.title}</h3>
                <p>{preview.text}</p>
              </article>
            ))}
          </div>

          <div className="product-delivery-note">
            <Rocket size={19} aria-hidden="true" />
            <span>After checkout, the Notion template link is emailed automatically to the address used at purchase. Buyers can duplicate it into their own private workspace.</span>
          </div>
        </section>
      </main>
    );
  }

  if (product.slug !== "ai-prompt-packs") {
    return (
      <main className="page-section">
        <div className="product-detail-hero planned">
          <div>
            <Eyebrow icon={product.icon}>Product page in progress</Eyebrow>
            <h1>{product.name}</h1>
            <p>{product.text}</p>
            <ul className="store-includes">
              {product.includes.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="product-detail-actions">
              <a className="store-button store-button-primary" href={`${waitlistHref}%0D%0A%0D%0AProduct interest: ${encodeURIComponent(product.name)}`}>
                <ShoppingBag size={17} aria-hidden="true" />
                Notify me
              </a>
              <PageLink to="/products" className="store-button store-button-secondary">
                Back to shelf
              </PageLink>
            </div>
          </div>
          <ProductVisual product={product} featured />
        </div>
      </main>
    );
  }

  return (
    <main className="page-section">
      <div className="product-detail-hero">
        <div>
          <Eyebrow icon={Bot}>Digital product</Eyebrow>
          <h1>{product.name}</h1>
          <p>{product.text} It gives buyers structured prompts, scorecards, examples, and worksheets they can turn into real product artifacts.</p>
          <div className="store-hero-meta" aria-label={`${product.name} details`}>
            <span>{product.price}</span>
            <span>Digital PDF</span>
            <span>45 prompts and tools</span>
            <span>Automatic email delivery</span>
          </div>
          <div className="product-detail-actions">
            {product.checkoutUrl && isFulfillmentReady ? (
              <a className="store-button store-button-primary" href={product.checkoutUrl}>
                <ShoppingBag size={17} aria-hidden="true" />
                Buy now
              </a>
            ) : (
              <a className="store-button store-button-primary" href={`${waitlistHref}%0D%0A%0D%0AProduct interest: ${encodeURIComponent(product.name)}`}>
                <ShoppingBag size={17} aria-hidden="true" />
                Request early access
              </a>
            )}
            <a className="store-button store-button-secondary" href={productQuestionHref}>
              <Mail size={17} aria-hidden="true" />
              Ask a question
            </a>
          </div>
        </div>
        <ProductVisual product={product} featured />
      </div>
      <section className="product-proof-section" aria-labelledby="ai-builder-preview-title">
        <div className="product-proof-intro">
          <Eyebrow icon={Sparkles}>What buyers get</Eyebrow>
          <h2 id="ai-builder-preview-title">A workbook built around usable outputs, not random prompts.</h2>
          <p>
            This product is for people who want AI to help them produce usable planning assets, not just better chat replies. The page below shows the artifacts, sections, fit, and sample prompts before checkout.
          </p>
        </div>

        <div className="product-artifact-grid">
          {aiBuilderDetails.artifacts.map(([title, text]) => (
            <article className="product-proof-card" key={title}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="product-proof-layout">
          <article className="product-proof-panel">
            <div className="product-proof-panel-heading">
              <h3>What is inside</h3>
              <span>45 total items</span>
            </div>
            <ul className="product-proof-list">
              {aiBuilderDetails.inside.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="product-proof-panel">
            <div className="product-proof-panel-heading">
              <h3>Honest fit</h3>
              <span>No mystery box</span>
            </div>
            <div className="product-fit-grid">
              <div>
                <strong>Best for</strong>
                <ul className="product-proof-list compact">
                  {aiBuilderDetails.bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Not for</strong>
                <ul className="product-proof-list compact">
                  {aiBuilderDetails.notFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div className="product-preview-grid" aria-label="Sample workbook sections">
          {aiBuilderDetails.previews.map((preview) => (
            <article className="product-preview-card" key={preview.title}>
              <span>Preview sample</span>
              <h3>{preview.title}</h3>
              <p>{preview.text}</p>
            </article>
          ))}
        </div>

        <div className="product-delivery-note">
          <Rocket size={19} aria-hidden="true" />
          <span>After checkout, the PDF is emailed automatically to the address used at purchase. If delivery fails, buyers can reply for support.</span>
        </div>
      </section>
    </main>
  );
}

function ProductSuccessPage() {
  return (
    <main className="page-section">
      <div className="checkout-status">
        <Eyebrow icon={CheckCircle2}>Payment received</Eyebrow>
        <h1>Your product is on the way.</h1>
        <p>
          Stripe has confirmed your checkout. Your product access email will be sent automatically to the address used at checkout.
        </p>
        <div className="checkout-status-actions">
          <PageLink to="/products">Back to products</PageLink>
          <a className="button button-secondary" href={productQuestionHref}>Need help?</a>
        </div>
      </div>
    </main>
  );
}

function ProductCancelPage() {
  return (
    <main className="page-section">
      <div className="checkout-status">
        <Eyebrow icon={CreditCard}>Checkout canceled</Eyebrow>
        <h1>No payment was completed.</h1>
        <p>
          Your checkout was canceled, so nothing was charged. You can return to the product shelf whenever you are ready.
        </p>
        <div className="checkout-status-actions">
          <PageLink to="/products">Return to products</PageLink>
          <a className="button button-secondary" href={productQuestionHref}>Ask a question</a>
        </div>
      </div>
    </main>
  );
}

function BuildLogPage() {
  return (
    <main className="page-section">
      <PageHeader
        eyebrow="Build in public"
        title="A founder journal for experiments, lessons, and product thinking."
        text="A future home for engineering notes, AI workflow breakdowns, UI explorations, launch reflections, and the messy middle of building useful things."
        icon={Newspaper}
      />
      <div className="lab-layout">
        <div className="lab-feed">
          {buildPosts.map((post, index) => (
            <article className="lab-post" key={post.title}>
              <span>0{index + 1} / {post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <Link to="/work-with-me">
                Discuss this direction
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <aside className="lab-sidebar">
          <h3>Lab themes</h3>
          {["AI workflows", "Chrome extensions", "SaaS experiments", "Product UX", "Small-business systems", "Build notes"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </aside>
      </div>
    </main>
  );
}

function WorkPage() {
  return (
    <main>
      <section className="page-section">
        <PageHeader
          eyebrow="Work with me"
          title="AI, automation, and modern web systems for teams that want to move cleaner."
          text="This is not generic freelancing. I help turn messy workflows, outdated tools, and product ideas into intentional digital systems."
          icon={Workflow}
        />
        <div className="service-grid">
          {services.map(([title, text]) => (
            <article className="service-card" key={title}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section work-detail-grid">
        <div className="work-photo-card">
          <img
            src={headshot}
            alt="Cassandra Peterson"
          />
        </div>
        <div className="work-detail-copy">
          <Eyebrow icon={BriefcaseBusiness}>Collaboration model</Eyebrow>
          <h2>Bring the workflow. I will help shape the system.</h2>
          <p>
            The best projects usually start with something operational: a repeat task, a fragmented customer process, a manual admin flow, or a product idea that needs technical shape.
          </p>
        </div>
        <div className="contact-panel">
          <h3>Start a conversation</h3>
          <p>Based in {profile.location} and open to freelance projects, collaborations, startup conversations, and product-minded engineering opportunities.</p>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true" /> Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} aria-hidden="true" /> LinkedIn</a>
          </div>
          <ExternalLink href={profile.resume} className="button button-primary">
            View resume
          </ExternalLink>
        </div>
      </section>
    </main>
  );
}

function CtaBand() {
  return (
    <section className="section">
      <div className="cta-band">
        <div>
          <Eyebrow icon={BriefcaseBusiness}>Work with me</Eyebrow>
          <h2>Need a sharper product, workflow, or automation system?</h2>
          <p>I help businesses and founders turn fragmented operations into polished digital systems.</p>
        </div>
        <PageLink to="/work-with-me">Start here</PageLink>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>{profile.name}</span>
      <span>Software Engineer | {profile.location}</span>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
