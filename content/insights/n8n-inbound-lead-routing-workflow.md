---
title: "How to build an inbound lead routing workflow in n8n"
description: "A practical blueprint for routing inbound leads with n8n: capture from a form or webhook, validate, de-duplicate against your CRM, score, assign an owner and alert them in seconds."
date: 2026-10-10
author: omoniyi-akinnusi
keywords: ["n8n lead routing", "inbound lead routing", "n8n HubSpot workflow", "lead routing automation", "speed to lead"]
---

The quickest win in most sales teams is not more leads. It is responding faster to the ones they already get. Inbound leads that sit in a shared inbox for a day go cold, while a reply within minutes, while the buyer is still thinking about you, starts a very different conversation.

Here is the inbound routing workflow we build in n8n. It works with HubSpot, a Google Sheet or most other CRMs.

## What the workflow does

1. Receives a new lead from a form or webhook
2. Cleans and validates the details
3. Checks whether the person or company already exists in the CRM
4. Enriches and scores the lead
5. Assigns an owner using clear rules
6. Creates or updates the CRM record
7. Alerts the owner on Slack, email or WhatsApp
8. Logs every step, and raises an alert if anything fails

## Step 1: Capture the lead

Start with a **Webhook** node. Your website form, a Typeform, a landing page builder or a chatbot posts the lead to the webhook URL as JSON:

```json
{
  "name": "Ada Obi",
  "email": "ada@example.com",
  "company": "Example Ltd",
  "message": "We need help with outbound",
  "source": "website"
}
```

Respond to the form straight away so the visitor is not left waiting while the rest of the workflow runs.

## Step 2: Clean and validate

Use a **Code** or **Set** node to trim spaces, lower-case the email and split full names. Then check the basics:

- Is the email address properly formed?
- Is it a personal address such as Gmail, or a company domain? Both can be valid, but they may route differently.
- Is the message obviously spam?

Send anything that fails to a review list instead of deleting it. False positives happen.

## Step 3: De-duplicate against the CRM

Search the CRM for the email address, and the company by domain. This is the step most simple automations skip, and it is why CRMs fill up with duplicates.

- **Contact exists:** update it and keep the existing owner. Someone may already be talking to this person.
- **Company exists, contact does not:** create the contact under that company and route to the account owner.
- **Neither exists:** carry on to enrichment and assignment.

## Step 4: Enrich and score

For new leads, look up the company: industry, size, location and website. You can call an enrichment API, send the domain to Clay, or ask an AI model to summarise the company's website. Ask the model for structured JSON output and validate it before using it.

Then apply a simple, readable score. For example:

| Rule | Points |
|---|---|
| Company size in your target range | +30 |
| Industry in your ICP | +25 |
| Business email address | +15 |
| Message mentions budget or a timeline | +20 |
| Located in a market you serve | +10 |

Keep the rules visible to the sales team. A score nobody understands is a score nobody trusts.

## Step 5: Assign an owner

Use a **Switch** node for clear routing rules: by region, company size, product interest or score. For leads with no clear owner, use round robin. Store a counter in a sheet or database and increment it with each assignment.

High-scoring leads can skip the queue and go straight to a senior rep.

## Step 6: Write to the CRM and alert the owner

Create or update the contact and company, attach the original message and score, and set the owner. Then alert that person immediately with everything they need in one message: who, which company, what they asked for, the score, and a link to the record.

## Step 7: Handle failures properly

APIs time out and credentials expire. Add an **Error Trigger** workflow that catches failures and sends an alert with the lead's details, so nobody is lost silently. Log every run with its outcome, which also gives you the data to measure response times later.

## What to measure

- **Time to first response**, from submission to the first human reply
- **Duplicate rate** caught by the de-duplication step
- **Lead-to-meeting rate** by source and by score band

Once routing is reliable, it becomes the foundation for everything else: enrichment, signals and outbound all feed the same pipeline.

Want this built for your team? See our [AI and workflow automation service](/services/ai-workflow-automation) or [get in touch](/contact).
