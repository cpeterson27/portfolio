const aiPromptPacks = {
  id: "ai-prompt-packs",
  name: "AI Builder Prompt System",
  filename: "ai-builder-prompt-system-cassandra-peterson.pdf",
  subject: "Your AI Builder Prompt System is ready",
  intro:
    "A practical prompt workbook for founders, builders, and solo operators who want to turn fuzzy ideas into clearer products, sharper pages, better content, and implementation-ready plans. This is not a list of cute one-line prompts. It is a system for thinking, deciding, reviewing, and shipping with AI as a working partner.",
  sections: [
    {
      title: "Start Here: The Working Method",
      prompts: [
        {
          title: "The Context Block",
          body:
            "Use this before any prompt in the pack.\n\nCopy this structure and fill it in: I am working on [product/business/project]. The audience is [audience]. The problem is [problem]. The current state is [what exists now]. My constraint is [time, budget, skill, platform, confidence, messy data, etc.]. I need help producing [specific output]. A good answer should be [format, tone, depth, examples, risks, tradeoffs].\n\nWhy it matters: Most weak AI answers come from weak context. This block gives the model enough material to act like a useful collaborator instead of a fortune cookie.",
        },
        {
          title: "The Better Answer Loop",
          body:
            "Use when the first answer is generic.\n\nPrompt: The answer is too broad. Challenge your own assumptions, ask me five clarifying questions, and then give me a more specific version. Prioritize practical decisions over motivational language. If there are tradeoffs, name them plainly.\n\nOutput to save: The improved answer, the open questions, and the decision you made after reviewing it.",
        },
        {
          title: "Turn This Into a Real Asset",
          body:
            "Use after AI gives you a useful answer.\n\nPrompt: Convert this response into a usable asset. Give me a polished version as a [checklist, page section, product brief, email, issue ticket, launch plan, workflow map, content calendar, or SOP]. Remove filler. Keep the language specific to my audience and goal.\n\nOutput to save: One clean artifact you can reuse, publish, or hand to a developer.",
        },
        {
          title: "Decision Memo",
          body:
            "Use when you are stuck between options.\n\nPrompt: I am deciding between [option A], [option B], and [option C]. Compare them by customer value, build effort, risk, speed to launch, future flexibility, and confidence level. Recommend one option and explain what would make you change your recommendation.\n\nOutput to save: A one-page decision memo with chosen path, reasons, risks, and next action.",
        },
      ],
    },
    {
      title: "Product Clarity and Offer Design",
      prompts: [
        {
          title: "Product Clarity Sprint",
          body:
            "Use when the idea still feels fuzzy.\n\nPrompt: Act as a senior product strategist. I am building [product]. The audience is [audience]. The current idea is [idea]. Help me clarify the core problem, the painful before-state, the desired after-state, the main promise, the first user journey, and the smallest paid version I can launch. Give me a prioritized plan with tradeoffs.\n\nOutput to save: Product promise, target buyer, first version scope, and a launch checklist.",
        },
        {
          title: "Paid Product Value Audit",
          body:
            "Use before selling a digital product.\n\nPrompt: Review this paid product idea: [describe product]. Is it worth the price of [price]? Evaluate by outcome, specificity, usefulness, ease of implementation, buyer urgency, perceived polish, and what a customer might feel after opening it. Tell me what is missing and what would make it feel worth 2x the price.\n\nOutput to save: Improvement list ranked by customer value.",
        },
        {
          title: "Offer Positioning Matrix",
          body:
            "Use when you need better product copy.\n\nPrompt: Help me position [product] for [audience]. Generate five offer angles. For each, include the buyer problem, emotional driver, practical outcome, proof angle, what is included, and a concise sales-page headline.\n\nOutput to save: One primary angle and two backup angles.",
        },
        {
          title: "Customer Objection Map",
          body:
            "Use before publishing the product page.\n\nPrompt: List the likely objections someone would have before buying [product]. Include objections about price, trust, usefulness, time, skill level, and whether they can get this for free elsewhere. For each objection, write a response, a product improvement, and a page section that could address it.\n\nOutput to save: FAQ section and product-page improvements.",
        },
        {
          title: "MVP Scope Filter",
          body:
            "Use when the product is becoming too big.\n\nPrompt: Review this feature/content list: [features]. Separate it into launch-critical, strong bonus, useful later, and distracting. Explain why each item belongs there and suggest the leanest version that still feels valuable and complete.\n\nOutput to save: Final launch scope.",
        },
        {
          title: "Premium Upgrade Ideas",
          body:
            "Use when you want a higher-value version.\n\nPrompt: I have a starter product: [product]. Suggest ten ways to make it feel more premium without overbuilding. Include templates, examples, walkthroughs, checklists, worksheets, bonus files, support options, and implementation aids. Rank by perceived value and effort.\n\nOutput to save: Upgrade roadmap for version two.",
        },
      ],
    },
    {
      title: "Page, UX, and Checkout Review",
      prompts: [
        {
          title: "Product Page Conversion Review",
          body:
            "Use before turning on the Buy button.\n\nPrompt: Review this product page: [paste copy or describe layout]. Evaluate clarity, trust, visual hierarchy, offer strength, buyer reassurance, price justification, missing proof, mobile scanning, and conversion friction. Give me a prioritized punch list with exact copy improvements.\n\nOutput to save: Product-page revision checklist.",
        },
        {
          title: "Checkout Confidence Audit",
          body:
            "Use when payment works technically but may not feel trustworthy.\n\nPrompt: Analyze this checkout flow: [describe flow]. Identify moments where the buyer may hesitate, get confused, or worry. Suggest improvements for button copy, confirmation copy, refund/support language, delivery expectations, and post-purchase reassurance.\n\nOutput to save: Checkout trust checklist.",
        },
        {
          title: "Success Page Rewrite",
          body:
            "Use after payment confirmation.\n\nPrompt: Rewrite this success page for a digital product purchase: [current copy]. The customer should feel reassured that payment worked, know when and how the product will arrive, know what to do if they need help, and feel good about the purchase.\n\nOutput to save: Final success page copy.",
        },
        {
          title: "Mobile Scan Test",
          body:
            "Use for any product or landing page.\n\nPrompt: Evaluate this page for mobile scanning: [paste page structure]. Tell me what a buyer understands in the first 5 seconds, what they may miss, what feels too vague, and what should become a clearer action. Give me a before/after hierarchy.\n\nOutput to save: Mobile-first layout priorities.",
        },
        {
          title: "Trust Gap Finder",
          body:
            "Use when a product feels good to you but may not be convincing to buyers.\n\nPrompt: Find the trust gaps in this offer: [offer/page]. What claims need proof? What terms need examples? What buyer fears are unaddressed? What would make this feel safer to buy from a solo creator?\n\nOutput to save: Trust-building improvements.",
        },
      ],
    },
    {
      title: "Content and Launch Messaging",
      prompts: [
        {
          title: "Content Pillar Builder",
          body:
            "Use when you need consistent marketing content.\n\nPrompt: I want to create content around [topic/product]. Build five content pillars for [audience]. For each pillar, include the buyer belief it supports, example post ideas, proof points, and a soft product tie-in.\n\nOutput to save: Content pillar map.",
        },
        {
          title: "Launch Week Calendar",
          body:
            "Use when a product is almost ready.\n\nPrompt: Create a 7-day launch content plan for [product]. Include the theme of each day, one short post idea, one longer post idea, one email idea, the buyer question being answered, and the CTA. Keep it practical and non-cringey.\n\nOutput to save: Launch calendar.",
        },
        {
          title: "Build-In-Public Update",
          body:
            "Use when sharing progress without sounding fake.\n\nPrompt: Turn this progress update into a build-in-public post: [notes]. Make it honest, useful, and specific. Include a short version, a longer version, and a closing line that invites conversation without sounding salesy.\n\nOutput to save: Publish-ready post.",
        },
        {
          title: "Email Launch Sequence",
          body:
            "Use when you need more than one announcement.\n\nPrompt: Write a three-email launch sequence for [product]. Email 1 should introduce the problem and product. Email 2 should show what is inside and who it is for. Email 3 should handle objections and invite action. Keep the tone helpful and direct.\n\nOutput to save: Three emails ready for editing.",
        },
        {
          title: "Case Study Extractor",
          body:
            "Use to turn project work into marketing proof.\n\nPrompt: Using this project description: [project], create a concise case study with problem, constraints, process, decisions, outcome, and reusable lessons. Make it useful for a portfolio, product page, or founder note.\n\nOutput to save: Case study draft.",
        },
      ],
    },
    {
      title: "Workflow and Automation Planning",
      prompts: [
        {
          title: "Manual Process Mapper",
          body:
            "Use when a business process feels messy.\n\nPrompt: I currently do this process manually: [process]. Break it into steps, identify repeatable decisions, data needed, failure points, handoff risks, and automation opportunities. Recommend a phased automation plan that starts simple.\n\nOutput to save: Workflow map and automation roadmap.",
        },
        {
          title: "Tool Stack Simplifier",
          body:
            "Use when tools are multiplying.\n\nPrompt: Review this workflow and tool stack: [workflow/tools]. Identify duplicate tools, fragile handoffs, missing ownership, security concerns, and simple automations that would reduce admin time.\n\nOutput to save: Keep/remove/automate list.",
        },
        {
          title: "Client Intake System",
          body:
            "Use for service businesses or freelance workflows.\n\nPrompt: Design a client intake flow for [service/business]. Include form fields, qualification logic, follow-up email, internal notes, next actions after submission, and what should happen if the lead is not a fit.\n\nOutput to save: Intake SOP.",
        },
        {
          title: "Fulfillment SOP",
          body:
            "Use after someone purchases a digital product or service.\n\nPrompt: Create a fulfillment SOP for [product/service]. Include payment confirmation, customer email, file delivery, failure states, support response, refund/escalation process, and post-purchase follow-up.\n\nOutput to save: Fulfillment checklist.",
        },
        {
          title: "Automation Risk Review",
          body:
            "Use before automating customer-facing flows.\n\nPrompt: Review this automation plan: [plan]. Identify what can fail, what the user would experience, what should be logged, what should be retried, and when a human should be alerted.\n\nOutput to save: Risk and monitoring checklist.",
        },
      ],
    },
    {
      title: "Implementation and Developer Handoff",
      prompts: [
        {
          title: "Feature Build Brief",
          body:
            "Use when moving from idea to code.\n\nPrompt: Turn this product idea into an implementation brief for a developer: [idea]. Include user story, expected behavior, edge cases, data needs, UI states, acceptance criteria, and test checklist.\n\nOutput to save: Developer-ready feature brief.",
        },
        {
          title: "Bug Report Upgrade",
          body:
            "Use when a bug report is too vague.\n\nPrompt: Rewrite this rough bug report into a developer-ready issue: [bug notes]. Include reproduction steps, expected behavior, actual behavior, likely area, screenshots needed, severity, and acceptance criteria.\n\nOutput to save: Clear issue ticket.",
        },
        {
          title: "Test Plan Generator",
          body:
            "Use before shipping.\n\nPrompt: Create a practical test plan for [feature/product]. Include happy path, failed payment or error states, mobile checks, browser checks, accessibility checks, email checks, analytics checks, and rollback concerns.\n\nOutput to save: QA checklist.",
        },
        {
          title: "Release Readiness Check",
          body:
            "Use when you are tempted to ship fast.\n\nPrompt: Review this upcoming release: [release notes]. Create a launch checklist covering UX, copy, analytics, payment flow, email delivery, error states, mobile, accessibility, privacy, and rollback concerns. Flag anything that should block launch.\n\nOutput to save: Go/no-go checklist.",
        },
        {
          title: "Code Review Assistant",
          body:
            "Use when reviewing a pull request or code change.\n\nPrompt: Review this change: [summary/code]. Focus on bugs, data loss, security, edge cases, user-facing regressions, missing tests, and unclear assumptions. Give findings first, then suggested fixes.\n\nOutput to save: Review notes.",
        },
      ],
    },
    {
      title: "Bonus Worksheets",
      prompts: [
        {
          title: "One-Page Product Brief",
          body:
            "Fill this in before building or selling.\n\nProduct name:\nAudience:\nPainful before-state:\nDesired after-state:\nCore promise:\nWhat is included:\nWhat is not included:\nPrice:\nWhy it is worth that price:\nDelivery method:\nSupport promise:\nFirst version launch date:\nKnown risks:\nNext improvement:",
        },
        {
          title: "Product Page Checklist",
          body:
            "Before publishing, confirm the page includes: who it is for, what problem it solves, what is inside, what outcome the buyer gets, how delivery works, price, support path, proof or credibility, FAQs, refund/support expectations, mobile readability, and a clear action button.",
        },
        {
          title: "Post-Purchase Experience Checklist",
          body:
            "After checkout, confirm the customer receives: clear success page, confirmation email, product attachment or access link, support contact, order reference, what to do next, and reassurance that they can reply if something breaks.",
        },
        {
          title: "Version Two Upgrade Plan",
          body:
            "After launch, collect: buyer questions, refund reasons, support replies, which sections people use, what felt unclear, what examples were missing, and what could become a template or bonus. Use that to improve the product before raising the price.",
        },
      ],
    },
  ],
};

module.exports = { aiPromptPacks };
