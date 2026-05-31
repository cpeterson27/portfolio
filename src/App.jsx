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
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { portfolioData } from "./data/portfolio";
import "./App.css";

const profile = {
  name: "Cassandra Peterson",
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

const navItems = [
  ["Projects", "/projects"],
  ["Products", "/products"],
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
      "Browser memory for saving, organizing, and restoring research sessions before context disappears.",
    problem:
      "Research-heavy work creates tab chaos. Trace turns open browser sessions into searchable, reusable workspaces so users can pause, resume, and organize context without digging through history.",
    features: ["Session capture", "Tagged tab groups", "Fast restore actions", "Manual import/export", "Browser-local storage"],
    stack: ["React", "TypeScript", "Vite", "Chrome Extension API"],
    outcome: "A focused productivity tool concept with strong AI summarization potential.",
    star: {
      situation: "Research sessions often sprawl across dozens of tabs, making it difficult to preserve context or return to a useful workflow later.",
      task: "Create a Chrome extension that could capture, organize, search, and restore browser sessions without adding a heavy productivity system.",
      action: "Built a React and TypeScript extension around Chrome Storage, tagged sessions, restore actions, and import/export flows.",
      result: "Shipped a focused browser-memory tool concept with clear expansion paths for AI summaries and research automation.",
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
      "A modern operating layer for appointments, customer records, invoices, expenses, and service content.",
    problem:
      "Local businesses often run on disconnected tools. This platform centralizes customer workflows, service information, media, admin operations, and transactional email.",
    features: ["Customer portal", "Appointment scheduling", "Invoices", "Expense tracking", "Admin dashboard", "Email workflows"],
    stack: ["React", "TypeScript", "Express", "MongoDB", "JWT", "Resend"],
    outcome: "A practical business system that modernizes service operations and customer touchpoints.",
    star: {
      situation: "A local service business had customer, scheduling, invoice, expense, and content workflows spread across disconnected processes.",
      task: "Create one modern web system for public content, customer interactions, and admin operations.",
      action: "Built a React, TypeScript, Express, and MongoDB platform with appointment scheduling, customer records, invoices, expenses, media, and email flows.",
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
    stack: ["React", "Vite", "Node.js", "MongoDB", "Vercel"],
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
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
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
      "A browser-memory tool for saving, organizing, searching, and restoring research sessions before context disappears.",
    star: {
      situation:
        "Research-heavy work often turns into tab overload. Important context gets lost when sessions are closed, browser history becomes noisy, and related links are scattered.",
      task:
        "Create a Chrome extension that helps users preserve browser context, group related tabs, and resume work without rebuilding a research session from scratch.",
      action:
        "Built the extension with React, TypeScript, Vite, Chrome Storage, and Chrome Extension APIs. I designed the session model, tab-saving flow, tagging structure, search experience, restore actions, and import/export support.",
      result:
        "Created a focused productivity tool with a clear product direction and strong future potential for AI summaries, research automation, and workflow memory.",
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
      "A service-business platform for appointments, customers, invoices, expenses, gallery media, and admin operations.",
    star: {
      situation:
        "A local auto service business needed a more modern way to present services, manage customer interactions, and organize operational workflows.",
      task:
        "Build a customer-facing website and internal business system that connected appointments, accounts, messages, invoices, expenses, gallery content, and email communication.",
      action:
        "Implemented a React/TypeScript frontend, Node/Express backend, MongoDB models, JWT authentication, appointment scheduling, invoice and expense management, customer records, Cloudinary media, and Resend/Klaviyo integrations.",
      result:
        "Delivered a practical business platform that improves customer experience, centralizes admin workflows, and gives the business a stronger digital operating layer.",
    },
  },
  13: {
    name: "Interactive Media Dashboard",
    label: "Dashboard UI system",
    statement:
      "A high-fidelity dashboard implementation focused on visual accuracy, reusable components, accessibility, and polished motion.",
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
    icon: Bot,
    slug: "ai-prompt-packs",
    name: "AI Builder Prompt System",
    type: "Prompt workbook",
    price: "$29",
    status: "Ready first",
    checkoutUrl: checkoutLinks.aiPromptPacks,
    text: "A practical AI workbook for turning messy product ideas into sellable, buildable plans.",
    includes: ["45 prompts, templates, scorecards, and checklists", "Worked example plus copy/paste workbook sections", "Built for early builders, not advanced AI users"],
  },
  {
    icon: Layers3,
    slug: "notion-builder-os",
    name: "Notion Builder OS",
    type: "Template",
    price: "$49",
    status: "Next up",
    checkoutUrl: checkoutLinks.notionBuilderOs,
    text: "A workspace for product ideas, launch notes, experiments, content planning, and weekly shipping rhythms.",
    includes: ["Idea pipeline", "Build log workspace", "Weekly shipping tracker"],
  },
  {
    icon: Workflow,
    slug: "automation-kits",
    name: "Automation Kits",
    type: "Workflow recipes",
    price: "$39",
    status: "Planned",
    checkoutUrl: checkoutLinks.automationKits,
    text: "Small-business automation blueprints for intake, follow-ups, reporting, customer systems, and repeatable admin.",
    includes: ["Intake flow blueprints", "Follow-up sequences", "Admin workflow maps"],
  },
  {
    icon: Code2,
    slug: "developer-resources",
    name: "Developer Resources",
    type: "Resource library",
    price: "$19",
    status: "Planned",
    checkoutUrl: checkoutLinks.developerResources,
    text: "Reusable checklists, launch patterns, front-end polish guides, and implementation notes for modern builders.",
    includes: ["Launch checklists", "Frontend polish notes", "Implementation patterns"],
  },
  {
    icon: BriefcaseBusiness,
    slug: "founder-portfolio-kit",
    name: "Founder Portfolio Kit",
    type: "Positioning kit",
    price: "$59",
    status: "Planned",
    checkoutUrl: checkoutLinks.founderPortfolioKit,
    text: "A template system for developers who want to present as product-minded builders, not resume pages.",
    includes: ["Portfolio positioning prompts", "Case study structure", "Offer page outline"],
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
          <span className="brand-mark">CP</span>
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
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/success" element={<ProductSuccessPage />} />
          <Route path="/products/cancel" element={<ProductCancelPage />} />
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
            <h1>Building AI-powered products, automations, and modern web systems.</h1>
            <p className="hero-subtitle">
              I design and engineer product-focused systems for founders, small businesses, and modern teams: browser tools, business platforms, commerce flows, AI workflows, and operational automation.
            </p>
            <div className="hero-actions">
              <PageLink to="/projects">View product work</PageLink>
              <PageLink to="/products" className="button button-secondary">Explore products</PageLink>
              <PageLink to="/work-with-me" className="button button-ghost">Work with me</PageLink>
            </div>
          </div>
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

      <section className="section split-section">
        <div>
          <SectionIntro
            eyebrow="Currently building"
            title="Digital products, AI workflows, and business automation systems."
            text="The next layer is productized: prompt packs, templates, automation kits, build notes, and SaaS experiments shaped by real project work."
            icon={Rocket}
          />
          <PageLink to="/products">See the product shelf</PageLink>
        </div>
        <div className="signal-list">
          {digitalProducts.slice(0, 4).map(({ icon: Icon, name, text }) => (
            <div className="signal-item" key={name}>
              <Icon size={18} aria-hidden="true" />
              <div>
                <strong>{name}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-preview-section">
        <div className="about-preview">
          <div className="about-preview-media">
            <img
              src={`${process.env.PUBLIC_URL}/images/cassandra-founder.png`}
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
  const featuredProduct = digitalProducts[0];
  const readyProducts = digitalProducts.filter((product) => product.checkoutUrl);

  return (
    <main className="page-section">
      <PageHeader
        eyebrow="Digital product shelf"
        title="Practical digital products for builders, teams, and modern workflows."
        text="A growing shelf of prompt systems, templates, automation guides, and developer resources shaped by real product work. AI Builder is live now, with the next products planned around the same practical builder workflow."
        icon={Bot}
      />
      <div className="store-hero">
        <div>
          <span>Featured ready product</span>
          <h2>{featuredProduct.name}</h2>
          <p>{featuredProduct.text}</p>
          <div className="store-hero-meta" aria-label={`${featuredProduct.name} details`}>
            <span>{featuredProduct.price}</span>
            <span>Digital download</span>
            <span>Stripe checkout</span>
            <span>More products in progress</span>
          </div>
          <ul className="store-includes">
            {featuredProduct.includes.map((item) => (
              <li key={item}>
                <CheckCircle2 size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="store-hero-actions">
          {featuredProduct.checkoutUrl && isFulfillmentReady ? (
            <a className="store-button store-button-primary" href={featuredProduct.checkoutUrl}>
              <ShoppingBag size={17} aria-hidden="true" />
              Buy now
            </a>
          ) : (
            <a className="store-button store-button-primary" href={`${waitlistHref}%0D%0A%0D%0AProduct interest: ${encodeURIComponent(featuredProduct.name)}`}>
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
      <div className="store-checkout-note">
        <div>
          <CreditCard size={19} aria-hidden="true" />
          <span>{readyProducts.length && isFulfillmentReady ? `${readyProducts.length} product${readyProducts.length === 1 ? "" : "s"} connected to Stripe with automated delivery.` : "Checkout will open after automated delivery is connected."}</span>
        </div>
        <div>
          <ShieldCheck size={19} aria-hidden="true" />
          <span>Payments are handled by Stripe; no card details are stored on this site.</span>
        </div>
      </div>
      <div className="store-section-heading">
        <h2>All products</h2>
        <p>AI Builder is ready now. The other products are the next pieces in the shelf: templates, automation kits, developer resources, and positioning tools.</p>
      </div>
      <div className="storefront-grid">
        {digitalProducts.map(({ checkoutUrl, icon: Icon, includes, name, price, status, text, type }) => (
          <article className="store-card" key={name}>
            <div className="store-card-top">
              <Icon size={22} aria-hidden="true" />
              <span>{type}</span>
            </div>
            <div className="store-card-status">
              <span>{status}</span>
              <strong>{price}</strong>
            </div>
            <h3>{name}</h3>
            <p>{text}</p>
            <ul className="store-includes compact">
              {includes.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            {checkoutUrl && isFulfillmentReady ? (
              <a className="store-button" href={checkoutUrl}>
                Buy now
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            ) : (
              <a className="store-button store-button-muted" href={`${waitlistHref}%0D%0A%0D%0AProduct interest: ${encodeURIComponent(name)}`}>
                Notify me
              </a>
            )}
          </article>
        ))}
      </div>
      <section className="product-proof-section" aria-labelledby="ai-builder-preview-title">
        <div className="product-proof-intro">
          <Eyebrow icon={Sparkles}>Featured product preview</Eyebrow>
          <h2 id="ai-builder-preview-title">A closer look at AI Builder Prompt System.</h2>
          <p>
            Since this is the product available to buy today, here is the extra detail a customer should see before checkout. It is for people who want AI to help them produce usable planning assets, not just better chat replies.
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
          Stripe has confirmed your checkout. The AI Builder Prompt System PDF will be sent automatically to the email address used at checkout.
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
            src={`${process.env.PUBLIC_URL}/images/cassandra-work-with-me.png`}
            alt="Cassandra Peterson working at a laptop"
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
          <p>Open to freelance projects, collaborations, startup conversations, and product-minded engineering opportunities.</p>
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
      <span>Software Engineer | Product Builder | AI + Automation</span>
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
