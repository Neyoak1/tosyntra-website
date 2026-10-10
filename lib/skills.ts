// GTM engineering skills and tools. Shown on /skills, summarised on the home page
// and included in structured data so search engines connect these terms to Tosyntra.

export type SkillGroup = {
  slug: string;
  name: string;
  summary: string;
  skills: string[];
  tools: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    slug: "gtm-strategy",
    name: "GTM strategy and targeting",
    summary: "Deciding who to sell to, why now and what to say, before anything is automated.",
    skills: ["ICP definition", "Account segmentation", "Lead scoring models", "Messaging and positioning"],
    tools: ["LinkedIn Sales Navigator"],
  },
  {
    slug: "data-enrichment",
    name: "Data, enrichment and signals",
    summary: "Building accurate prospect data and spotting the moments when an account is ready to buy.",
    skills: ["Clay tables and workflows", "Waterfall enrichment", "AI account research", "Signal-based prospecting", "Email verification"],
    tools: ["Clay", "Apollo"],
  },
  {
    slug: "outbound",
    name: "Outbound and deliverability",
    summary: "Getting relevant messages into the inbox and measuring what happens next.",
    skills: ["Cold email infrastructure", "SPF, DKIM and DMARC", "Inbox warm-up", "Sequence copywriting"],
    tools: ["Instantly", "Smartlead"],
  },
  {
    slug: "automation-ai",
    name: "Automation and AI",
    summary: "Connecting tools so data moves on its own, and using AI where it saves real time.",
    skills: ["Workflow automation", "APIs and webhooks", "AI agents", "Prompt engineering", "AI voice and chat agents"],
    tools: ["n8n", "Make", "Zapier", "OpenAI", "Gemini", "ElevenLabs"],
  },
  {
    slug: "crm",
    name: "CRM and RevOps",
    summary: "Keeping records clean and getting every lead to the right person fast.",
    skills: ["CRM setup", "Lead routing", "Data deduplication"],
    tools: ["HubSpot"],
  },
  {
    slug: "analytics",
    name: "Analytics and reporting",
    summary: "Turning activity into numbers that show what actually produces pipeline.",
    skills: ["GTM metrics", "Dashboards", "SQL"],
    tools: ["Excel", "Power BI", "Google Sheets"],
  },
];

// A short list for the home page and structured data
export const topSkills = [
  "GTM engineering",
  "Clay",
  "Waterfall enrichment",
  "Signal-based prospecting",
  "Lead scoring",
  "Cold email infrastructure",
  "n8n",
  "API integrations",
  "AI agents",
  "AI voice agents",
  "HubSpot",
  "Lead routing",
  "Dashboards",
];
