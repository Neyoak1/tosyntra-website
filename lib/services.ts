export type Service = {
  slug: string;
  name: string;
  title: string; // SEO title
  metaDescription: string;
  summary: string;
  problem: string;
  builds: { name: string; detail: string }[];
  deliverables: string[];
  stack: string[];
  faqs: { q: string; a: string }[];
  relatedWork: string[];
};

export const services: Service[] = [
  {
    slug: "gtm-engineering",
    name: "GTM engineering",
    title: "GTM Engineering Services for B2B Teams",
    metaDescription:
      "GTM engineering services from Tosyntra: ICP definition, Clay enrichment, lead scoring, signal-based prospecting and CRM sync, built and documented for your sales team.",
    summary:
      "We design and build the system that finds the right accounts, researches them, scores them and puts them in front of your reps with a reason to reach out.",
    problem:
      "Most sales teams still research accounts by hand, buy lists that go stale in weeks and send the same message to everyone. Reps spend their best hours on work that does not need a person, and the pipeline still depends on luck.",
    builds: [
      { name: "ICP and scoring model", detail: "A written ideal customer profile turned into a transparent score your team can read and challenge." },
      { name: "Enrichment waterfalls", detail: "Clay tables that try several data providers in order, validate what comes back and log the cost per record." },
      { name: "Signal-based prospecting", detail: "Triggers such as hiring, funding, leadership changes and tech adoption that tell you when an account is worth contacting." },
      { name: "AI account research", detail: "Short, sourced account briefs generated for each prospect, with uncertain findings flagged instead of guessed." },
      { name: "CRM sync", detail: "Clean, de-duplicated records pushed into HubSpot or your CRM with ownership and routing rules." },
    ],
    deliverables: [
      "A working system in your own accounts, not ours",
      "An operating manual and architecture diagram",
      "A recorded walkthrough for your team",
      "A cost model per 1,000 enriched accounts",
    ],
    stack: ["Clay", "HubSpot", "n8n", "OpenAI and Gemini", "Apollo", "Google Sheets"],
    faqs: [
      { q: "What is GTM engineering?", a: "GTM engineering is the practice of building the technical systems behind sales and marketing: data, enrichment, automation, AI research and CRM workflows. A GTM engineer sits between sales, RevOps and engineering, and builds what a sales team would otherwise do by hand." },
      { q: "Do we need Clay to work with you?", a: "No. Clay is often the fastest option, but we choose tools around the job and your budget. Many systems can run on n8n, Google Sheets and a CRM you already pay for." },
      { q: "How long does a first build take?", a: "A focused first system, such as an enriched and scored list of target accounts synced to your CRM, usually takes two to four weeks, depending on how clean your data is and how quickly we get access." },
      { q: "Do you work with teams in other countries?", a: "Yes. We are fully remote and work with B2B teams worldwide, including the US, UK, Europe, the Middle East and Africa, with a few hours of overlap with your working day." },
    ],
    relatedWork: ["trigger-based-outbound-engine", "telegram-lead-generation-bot"],
  },
  {
    slug: "ai-workflow-automation",
    name: "AI and workflow automation",
    title: "AI & n8n Workflow Automation Services",
    metaDescription:
      "n8n and AI workflow automation for sales and operations: lead capture and routing, AI agents, document assistants and integrations between the tools you already use.",
    summary:
      "We connect the tools your team already uses and put AI to work where it saves real time, with a person still in control of anything that matters.",
    problem:
      "Leads arrive in one place, get copied into another and are followed up from a third. Every handoff is a chance to lose a lead or a day. AI can help, but only when it is wired into the process rather than bolted on.",
    builds: [
      { name: "Lead capture and routing", detail: "Forms and inbound messages validated, de-duplicated and routed to the right person within seconds." },
      { name: "AI agents with tools", detail: "Agents that read, look things up, update records and draft replies, with memory and clear limits on what they may do." },
      { name: "Document and knowledge assistants", detail: "Retrieval-based assistants that answer from your own documents, built on a vector store you control." },
      { name: "Integrations", detail: "APIs and webhooks connecting CRMs, sheets, email, WhatsApp, Telegram and payment tools." },
      { name: "Error handling and alerts", detail: "Retries, fallbacks and alerts, so a failed step is noticed and fixed instead of silently dropping data." },
    ],
    deliverables: [
      "Workflows exported and handed over, running on your account",
      "Error logging and alerting",
      "Documentation of every trigger, step and credential",
      "A handover session with your team",
    ],
    stack: ["n8n", "Make", "Zapier", "Google Gemini", "OpenAI", "Supabase", "Airtable"],
    faqs: [
      { q: "Why n8n?", a: "n8n is flexible, can be self-hosted and is far cheaper at volume than per-task tools. We still use Make or Zapier when a client already runs on them." },
      { q: "Will AI send messages to our customers on its own?", a: "Only if you want it to. By default we keep a human approval step before anything customer-facing goes out, and we log what the AI produced." },
      { q: "Who owns the workflows?", a: "You do. Everything is built in your accounts, and you receive the exported workflows and documentation." },
    ],
    relatedWork: ["whatsapp-ai-assistant", "telegram-knowledge-assistant"],
  },
  {
    slug: "outbound-infrastructure",
    name: "Outbound and cold email infrastructure",
    title: "Cold Email Infrastructure & Outbound Setup",
    metaDescription:
      "Cold email infrastructure set up properly: secondary domains, mailboxes, SPF, DKIM and DMARC, warm-up, sending tools and campaign tracking, so outbound reaches the inbox.",
    summary:
      "We set up the domains, mailboxes and sending stack for outbound, then connect it to your prospect data so every campaign is measured.",
    problem:
      "Sending cold email from your main domain puts your company's everyday email at risk. Badly configured domains land in spam, and teams only find out after a campaign has burned through their best list.",
    builds: [
      { name: "Domain and mailbox plan", detail: "Secondary sending domains and mailboxes sized to your target volume, kept separate from your main domain." },
      { name: "Authentication", detail: "SPF, DKIM and DMARC records configured and checked on every sending domain." },
      { name: "Warm-up and sending tools", detail: "Mailboxes warmed and connected to a sending platform such as Instantly or Smartlead." },
      { name: "Campaign data flow", detail: "Enriched, verified prospects flowing from Clay or your list into campaigns, with replies routed back to your CRM." },
    ],
    deliverables: [
      "Domains and mailboxes configured and documented",
      "Deliverability checklist and monitoring routine",
      "Sequences connected to your prospect data",
      "Reporting on replies, meetings and bounces",
    ],
    stack: ["Namecheap", "Google Workspace", "Instantly", "Smartlead", "Clay", "HubSpot"],
    faqs: [
      { q: "Why not send cold email from our main domain?", a: "If your sending reputation drops, your main domain's ordinary email to customers and partners can start landing in spam too. Secondary domains keep that risk contained." },
      { q: "How many domains and mailboxes do we need?", a: "It depends on how many emails you plan to send. Our free planner works it out from your target volume." },
      { q: "How long before we can send?", a: "New mailboxes usually need a few weeks of warm-up before full volume. We plan campaigns around that rather than rushing it." },
    ],
    relatedWork: ["trigger-based-outbound-engine"],
  },
  {
    slug: "ai-voice-and-chat-agents",
    name: "AI voice and chat agents",
    title: "AI Voice Agents & WhatsApp Chatbots for Sales",
    metaDescription:
      "AI voice agents and WhatsApp and Telegram assistants that call, verify, qualify and follow up with customers, logging every conversation into your records.",
    summary:
      "We build agents that talk to your customers on the phone, on WhatsApp and on Telegram, and write every conversation back to your records.",
    problem:
      "In many markets, from Latin America and India to Africa and the Middle East, customers answer WhatsApp and phone calls long before they answer email. Teams end up making the same calls and sending the same messages all day, and the details never reach the CRM.",
    builds: [
      { name: "Outbound AI calling", detail: "Voice agents that call a list, verify identity, capture answers and log transcripts automatically." },
      { name: "WhatsApp assistants", detail: "Assistants that answer enquiries, qualify leads, book follow-ups and hand over to a person when needed." },
      { name: "Telegram bots", detail: "Bots for lead capture, internal research and answering questions from your documents." },
      { name: "Conversation logging", detail: "Every call and chat summarised and written back to your sheet or CRM for reporting." },
    ],
    deliverables: [
      "A tested agent with a written script and guardrails",
      "Telephony or messaging setup",
      "Conversation logs feeding your records",
      "A review routine for quality and compliance",
    ],
    stack: ["ElevenLabs", "Twilio", "WhatsApp Business API", "Telegram", "n8n", "Google Gemini"],
    faqs: [
      { q: "Will customers know they are speaking to AI?", a: "We recommend telling them, and we design scripts that do. It is the right thing to do and it builds trust." },
      { q: "Which markets is this best for?", a: "Anywhere your buyers prefer WhatsApp or phone over email. WhatsApp-first workflows work especially well across Africa, Latin America, India and the Middle East, and voice agents suit verification and follow-up calls in any market." },
    ],
    relatedWork: ["ai-outbound-call-agent", "noventis-schools", "whatsapp-ai-assistant"],
  },
  {
    slug: "gtm-analytics",
    name: "GTM analytics and dashboards",
    title: "GTM Analytics, RevOps Reporting & Dashboards",
    metaDescription:
      "GTM analytics and RevOps reporting: pipeline, outbound and conversion dashboards built on a single source of truth, so you know which campaigns and signals actually work.",
    summary:
      "We define the metrics that matter, clean the data behind them and build dashboards your team will actually use to decide what to do next.",
    problem:
      "Most teams can say how many emails went out but not which signal, segment or message produced a meeting. Without trustworthy numbers, every decision about where to spend time is a guess.",
    builds: [
      { name: "Metric definitions", detail: "Clear, agreed definitions for replies, meetings, qualified pipeline and conversion at each stage." },
      { name: "Data quality checks", detail: "Duplicates, missing fields and broken records found and fixed before they distort reporting." },
      { name: "Dashboards", detail: "Pipeline, outbound and channel performance views in Excel, Power BI or your CRM." },
      { name: "Experiment tracking", detail: "A simple log of what was tested, what changed and what it did to results." },
    ],
    deliverables: [
      "A metrics dictionary your whole team can read",
      "Live dashboards fed from one source of truth",
      "A weekly review template",
      "Data quality report with fixes",
    ],
    stack: ["Excel", "Power BI", "SQL", "HubSpot reporting", "Google Sheets"],
    faqs: [
      { q: "Do we need a data warehouse?", a: "Not to start. Many teams get most of the value from a well-structured spreadsheet or CRM report. We recommend a warehouse only when volume demands it." },
      { q: "Can you work with the tools we already have?", a: "Yes. We build in Excel, Power BI or your CRM's own reporting, whichever your team already opens every day." },
    ],
    relatedWork: ["ai-outbound-call-agent"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
