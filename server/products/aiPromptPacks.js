const aiPromptPacks = {
  id: "ai-prompt-packs",
  name: "AI Prompt Packs",
  filename: "ai-prompt-packs-cassandra-peterson.pdf",
  subject: "Your AI Prompt Packs are ready",
  intro:
    "A practical prompt system for planning better products, reviewing UX with more clarity, creating content with direction, and building in public with less blank-page friction.",
  sections: [
    {
      title: "How to Use This Pack",
      prompts: [
        {
          title: "Start With Context",
          body:
            "Before using any prompt, add your product, audience, goal, constraints, current state, and what a useful answer should include. Better context creates better output.",
        },
        {
          title: "Ask for Options, Then Decide",
          body:
            "Use AI to generate multiple approaches, compare tradeoffs, and clarify risks. Do not outsource judgment; use the answer to sharpen your own.",
        },
        {
          title: "Turn Answers Into Assets",
          body:
            "Every useful response should become a decision, checklist, product note, content draft, test plan, or implementation task.",
        },
      ],
    },
    {
      title: "Product Planning Prompts",
      prompts: [
        {
          title: "Product Clarity Sprint",
          body:
            "Act as a senior product strategist. I am building [product]. The audience is [audience]. The current idea is [idea]. Help me clarify the core problem, the main promise, the first user journey, and the smallest paid version I can launch. Give me a prioritized plan with tradeoffs.",
        },
        {
          title: "MVP Scope Filter",
          body:
            "Review this feature list: [features]. Separate it into launch-critical, useful later, risky distraction, and unclear. Explain why each item belongs where it does and suggest the leanest version that still feels valuable.",
        },
        {
          title: "Offer Positioning",
          body:
            "Help me position [product] for [audience]. Generate five clear offers, each with a promise, buyer pain point, outcome, proof angle, and reason to buy now. Keep the tone practical and specific.",
        },
        {
          title: "Customer Objection Map",
          body:
            "List the likely objections someone would have before buying [product]. For each objection, write a concise response, a product improvement that would reduce the concern, and a page section that could address it.",
        },
      ],
    },
    {
      title: "UX Review Prompts",
      prompts: [
        {
          title: "Landing Page Review",
          body:
            "Review this page copy and structure: [paste page]. Evaluate clarity, trust, visual hierarchy, conversion friction, mobile concerns, and missing information. Give me a prioritized punch list.",
        },
        {
          title: "Checkout Flow Audit",
          body:
            "Act as a conversion-focused UX reviewer. Analyze this checkout flow: [describe flow]. Identify moments where the buyer may hesitate, get confused, or lose trust. Suggest improvements for copy, layout, reassurance, and post-purchase expectations.",
        },
        {
          title: "Empty State Rewrite",
          body:
            "Rewrite this empty state for a product experience: [empty state]. Make it clear, useful, and action-oriented without sounding overly playful or generic. Provide three versions with different tones.",
        },
        {
          title: "Mobile Scan Test",
          body:
            "Evaluate this interface for mobile scanning: [describe or paste content]. Identify what the user needs to understand in the first 5 seconds, what should be reduced, and what should become a clearer action.",
        },
      ],
    },
    {
      title: "Content Strategy Prompts",
      prompts: [
        {
          title: "Content Pillar Builder",
          body:
            "I want to create content around [topic/product]. Build five content pillars for [audience]. For each pillar, include the buyer belief it supports, example post ideas, and a soft product tie-in.",
        },
        {
          title: "Build-In-Public Post",
          body:
            "Turn this progress update into a build-in-public post: [notes]. Make it honest, useful, and specific. Include a short version, a longer version, and a closing line that invites conversation without sounding salesy.",
        },
        {
          title: "Launch Week Calendar",
          body:
            "Create a 7-day launch content plan for [product]. Include the theme of each day, one post idea, one email idea, the buyer question being answered, and the CTA.",
        },
        {
          title: "Case Study Extractor",
          body:
            "Using this project description: [project], create a concise case study with problem, constraints, process, decisions, outcome, and reusable lessons. Make it useful for a portfolio or product page.",
        },
      ],
    },
    {
      title: "Workflow Automation Prompts",
      prompts: [
        {
          title: "Manual Process Mapper",
          body:
            "I currently do this process manually: [process]. Break it into steps, identify repeatable decisions, data needed, failure points, and automation opportunities. Recommend a phased automation plan.",
        },
        {
          title: "Tool Stack Simplifier",
          body:
            "Review this workflow and tool stack: [workflow/tools]. Identify duplicate tools, fragile handoffs, missing ownership, and simple automations that would reduce admin time.",
        },
        {
          title: "Client Intake System",
          body:
            "Design a client intake flow for [service/business]. Include form fields, qualification logic, follow-up email, internal notes, and next actions after submission.",
        },
      ],
    },
    {
      title: "Implementation Prompts",
      prompts: [
        {
          title: "Feature Build Brief",
          body:
            "Turn this product idea into an implementation brief for a developer: [idea]. Include user story, expected behavior, edge cases, data needs, UI states, acceptance criteria, and test checklist.",
        },
        {
          title: "Bug Report Upgrade",
          body:
            "Rewrite this rough bug report into a developer-ready issue: [bug notes]. Include reproduction steps, expected behavior, actual behavior, likely area, screenshots needed, severity, and acceptance criteria.",
        },
        {
          title: "Release Readiness Check",
          body:
            "Review this upcoming release: [release notes]. Create a launch checklist covering UX, copy, analytics, payment flow, email delivery, error states, mobile, accessibility, and rollback concerns.",
        },
      ],
    },
  ],
};

module.exports = { aiPromptPacks };
