// Every project here is a real build in a public GitHub repository, except where
// status says otherwise. Do not add metrics that were not measured.

export type Project = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  kind: string; // e.g. "AI voice agent"
  status: "Built" | "Coming soon";
  summary: string;
  problem: string;
  how: { step: string; detail: string }[];
  stack: string[];
  useCases: string[];
  next: string[];
  repo?: string;
  image?: string; // path in /public/work
  service: string; // related service slug
};

export const projects: Project[] = [
  {
    slug: "ai-outbound-call-agent",
    name: "AI outbound call agent",
    title: "AI Outbound Call Agent with n8n, ElevenLabs and Twilio",
    metaDescription:
      "How we built an AI voice agent that calls customers from a Google Sheet, verifies identity in real time and logs every transcript automatically, using n8n, ElevenLabs and Twilio.",
    kind: "AI voice agent",
    status: "Built",
    summary:
      "A voice agent that calls customers from a list, verifies who it is speaking to during the call and writes the transcript back to the records afterwards.",
    problem:
      "Verification and follow-up calls are repetitive, hard to scale and rarely recorded properly. Fintechs, lenders, real estate and subscription businesses make thousands of them, and the answers end up in notebooks instead of the database.",
    how: [
      { step: "Start the campaign", detail: "The workflow runs on a schedule or on demand, reads phone numbers and customer records from a Google Sheet and places calls through an ElevenLabs voice agent on a Twilio number." },
      { step: "Verify during the call", detail: "While the call is live, the agent checks the customer's details against the sheet through a webhook and records any new information the customer gives." },
      { step: "Log the outcome", detail: "When the call ends, the transcript is sent back to n8n and written into the customer's row for follow-up and reporting." },
    ],
    stack: ["n8n", "ElevenLabs", "Twilio", "Google Sheets", "Webhooks"],
    useCases: ["Customer verification campaigns", "Payment and renewal reminders", "Feedback and survey calls", "Lead qualification calls"],
    next: ["Sync to HubSpot or Salesforce instead of a sheet", "SMS follow-up for unanswered calls", "Call analytics dashboard", "Time-zone-aware scheduling"],
    repo: "https://github.com/Neyoak1/AI-Call-Agent",
    image: "/work/ai-outbound-call-agent.png",
    service: "ai-voice-and-chat-agents",
  },
  {
    slug: "noventis-schools",
    name: "Noventis Schools",
    title: "WhatsApp Lead and Enrolment Management for Nigerian Schools",
    metaDescription:
      "Noventis Schools: a WhatsApp-first lead and enrolment management system built for Nigerian private schools, turning parent enquiries into tracked admissions.",
    kind: "WhatsApp CRM",
    status: "Built",
    summary:
      "WhatsApp lead and enrolment management for Nigerian private schools, so every parent enquiry is captured, followed up and tracked through to admission.",
    problem:
      "Nigerian parents contact schools on WhatsApp first. Enquiries arrive on staff phones, follow-up depends on who saw the message, and admissions teams cannot tell how many enquiries became enrolments.",
    how: [
      { step: "Capture every enquiry", detail: "Messages to the school's WhatsApp number are captured as leads with the parent's details and the child's class of interest." },
      { step: "Follow up consistently", detail: "Parents receive timely, consistent follow-up about visits, fees and admission steps instead of depending on whoever saw the message." },
      { step: "Track to enrolment", detail: "Each lead moves through clear stages, so the school can see where parents drop off and how many enquiries became admissions." },
    ],
    stack: ["WhatsApp", "n8n", "Google Sheets", "AI assistant"],
    useCases: ["Private school admissions", "Any WhatsApp-led sales process", "Service businesses with phone-first customers"],
    next: ["Enrolment funnel dashboard for school owners", "Term-start re-engagement campaigns"],
    repo: "https://github.com/Neyoak1/noventis-schools",
    service: "ai-voice-and-chat-agents",
  },
  {
    slug: "whatsapp-ai-assistant",
    name: "WhatsApp AI assistant",
    title: "WhatsApp AI Personal Assistant Built with n8n and Gemini",
    metaDescription:
      "A WhatsApp AI assistant built with n8n and Google Gemini that handles email, calendar, client lookups and research through a central agent with specialised tools.",
    kind: "AI agent",
    status: "Built",
    summary:
      "An assistant that lives in WhatsApp and handles email, scheduling, client lookups and research through one central agent coordinating specialised tools.",
    problem:
      "Founders and small sales teams run their day from WhatsApp but keep switching apps to send an email, check a calendar or look up a client. Each switch costs time and attention.",
    how: [
      { step: "Listen on WhatsApp", detail: "Incoming WhatsApp messages trigger the workflow through the WhatsApp Business API." },
      { step: "Route to the right tool", detail: "A central AI agent powered by Google Gemini decides which tool to use: email, calendar and client data in Google Sheets, or web research." },
      { step: "Reply with context", detail: "Memory keeps track of the conversation, so follow-up requests make sense and replies come back in the same chat." },
    ],
    stack: ["n8n", "WhatsApp Business API", "Google Gemini", "Google Sheets", "Gmail"],
    useCases: ["Founder and sales assistant", "Customer service triage", "Scheduling and follow-up"],
    next: ["CRM as the client database", "Approval step before sending emails"],
    repo: "https://github.com/Neyoak1/N8N-Workflow",
    image: "/work/whatsapp-ai-assistant.jpg",
    service: "ai-workflow-automation",
  },
  {
    slug: "telegram-knowledge-assistant",
    name: "Telegram knowledge assistant",
    title: "Telegram AI Assistant with Google Drive and Supabase (RAG)",
    metaDescription:
      "A Telegram AI assistant that answers questions from your own documents: files dropped in Google Drive are embedded with Gemini into a Supabase vector store and used in chat.",
    kind: "Retrieval assistant",
    status: "Built",
    summary:
      "A Telegram assistant that answers from your own documents. Drop a file in Google Drive and it becomes knowledge the assistant can use in chat.",
    problem:
      "Sales and support teams lose time hunting for answers in shared folders. A generic chatbot does not know your pricing, policies or product details, and makes things up when asked.",
    how: [
      { step: "Ingest documents", detail: "A new TXT or CSV file in Google Drive triggers a flow that reads it, splits it into chunks and embeds each chunk with Gemini." },
      { step: "Store as vectors", detail: "The embeddings are stored in a Supabase vector store (pgvector), so the assistant can search by meaning rather than keywords." },
      { step: "Answer in Telegram", detail: "When someone asks a question in Telegram, the agent retrieves the most relevant passages and answers from them." },
    ],
    stack: ["n8n", "Telegram Bot API", "Google Drive", "Google Gemini", "Supabase pgvector"],
    useCases: ["Sales enablement assistant", "Support knowledge base", "Internal onboarding bot"],
    next: ["PDF and DOCX ingestion", "Source citations in every answer"],
    repo: "https://github.com/Neyoak1/AI-Powered-Telegram-Chatbot",
    image: "/work/telegram-knowledge-assistant.png",
    service: "ai-workflow-automation",
  },
  {
    slug: "telegram-lead-generation-bot",
    name: "Telegram lead generation bot",
    title: "AI Lead Generation Bot for Telegram Built with n8n",
    metaDescription:
      "An AI lead generation bot on Telegram, built with n8n and Google Gemini, that researches and returns lead information on request and remembers the conversation.",
    kind: "Lead generation",
    status: "Built",
    summary:
      "A Telegram bot that finds and returns lead information on request, with memory so follow-up questions refine the search.",
    problem:
      "Early-stage founders and solo sellers spend hours compiling lead lists by hand before a single message is sent.",
    how: [
      { step: "Ask in plain language", detail: "A user describes the leads they want in a Telegram message." },
      { step: "Research with a tool", detail: "A Gemini-powered agent calls a lead scraping tool to gather matching businesses and contact details." },
      { step: "Refine with memory", detail: "Conversation memory lets the user narrow or expand the search without starting again." },
    ],
    stack: ["n8n", "Telegram Bot API", "Google Gemini", "Lead scraping tool"],
    useCases: ["Founder-led prospecting", "Market research", "Starter CRM for small teams"],
    next: ["Enrichment and verification before export", "Push qualified leads to a CRM"],
    repo: "https://github.com/Neyoak1/Lead-Generation-Bot",
    image: "/work/telegram-lead-generation-bot.png",
    service: "gtm-engineering",
  },
  {
    slug: "trigger-based-outbound-engine",
    name: "Trigger-based outbound engine",
    title: "Trigger-Based Outbound Engine (Clay + CRM)",
    metaDescription:
      "A signal-based outbound system that detects account triggers, scores fit in Clay, drafts sourced outreach for human approval and measures results by signal.",
    kind: "GTM engineering",
    status: "Built",
    summary:
      "Our flagship GTM engineering build: a system that spots timely account signals, scores fit, drafts sourced outreach for a person to approve and reports which signals produce meetings.",
    problem:
      "Outbound sent without a reason gets ignored. The best reason to contact an account is something that just changed there, but tracking those changes across hundreds of accounts by hand is impossible.",
    how: [
      { step: "Detect signals", detail: "Watch target accounts for hiring, funding, leadership changes and other public events." },
      { step: "Score fit", detail: "Enrich each account in Clay and score it against the ICP with a transparent model." },
      { step: "Draft and approve", detail: "Generate a sourced account brief and draft message; a person reviews before anything is sent." },
      { step: "Measure by signal", detail: "Track replies and meetings by signal type to learn which triggers are worth acting on." },
    ],
    stack: ["Clay", "HubSpot", "n8n", "OpenAI", "Instantly"],
    useCases: ["B2B SaaS outbound", "Agency pipeline generation"],
    next: ["Full workflow walkthrough and repository coming soon", "Expanded signal library: product launches, new markets, tech stack changes"],
    service: "gtm-engineering",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
