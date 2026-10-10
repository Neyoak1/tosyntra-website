---
title: "How to set up cold email infrastructure: domains, mailboxes and DNS"
description: "A step-by-step guide to cold email infrastructure: why you need secondary domains, how many mailboxes to buy, setting up SPF, DKIM and DMARC, warming up and connecting a sending tool."
date: 2026-10-10
author: omoniyi-akinnusi
keywords: ["cold email infrastructure", "cold email setup", "secondary domains cold email", "SPF DKIM DMARC", "email warm up", "cold email mailboxes"]
---

Before any outbound campaign, there is plumbing to set up: the domains you send from, the mailboxes on them and the DNS records that tell inbox providers you are legitimate. Get it wrong and your messages land in spam no matter how good they are. Get it badly wrong and you damage the domain your whole company uses.

This is the setup we use for our own outbound and for clients. If you just want the numbers, use our [cold email infrastructure calculator](/tools/cold-email-infrastructure-calculator).

## Step 1: Never send cold email from your main domain

Your main domain, the one on your website and your team's everyday email, carries your company's sending reputation. Cold email always produces some bounces and spam complaints. If those pile up on your main domain, ordinary emails to customers, investors and partners can start landing in spam too.

So cold email goes out from **secondary domains**: separate domains that look related to your brand. If your company is `acme.com`, you might register `getacme.com`, `tryacme.com` or `acmehq.com`.

A few rules:

- Use `.com` where you can. Unusual extensions tend to look less trustworthy to recipients and filters.
- Avoid hyphens, numbers and anything that looks like a misspelling of another brand.
- Point each secondary domain at your main website with a redirect, so anyone who visits it lands somewhere real.

## Step 2: Decide how many mailboxes you need

Each mailbox should send a modest number of cold emails a day. Many senders keep it to roughly 30 to 50 per mailbox per day, including follow-ups, and spread a campaign across many mailboxes instead of pushing one hard. Two or three mailboxes per domain is a common setup.

The arithmetic is simple:

- **Mailboxes needed** = emails per day ÷ emails per mailbox per day
- **Domains needed** = mailboxes ÷ mailboxes per domain

For 300 emails a day at 30 per mailbox, that is 10 mailboxes, which at 2 per domain means 5 domains. Leave some headroom so you can rest a mailbox if its numbers drop.

Name mailboxes after real people on your team, such as `firstname@getacme.com`, and give each one a real name, profile photo and signature.

## Step 3: Set up SPF, DKIM and DMARC

These three DNS records prove the email really comes from you. Gmail and Yahoo have required authentication from bulk senders since early 2024, and in practice every sending domain should have all three.

- **SPF** lists the servers allowed to send email for your domain. Your email provider gives you the exact record, for example `v=spf1 include:_spf.google.com ~all` for Google Workspace.
- **DKIM** adds a cryptographic signature to each message. You generate the key inside your email provider and publish it as a DNS record.
- **DMARC** tells receiving servers what to do with mail that fails the checks and where to send reports. A sensible start is `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`, tightened to `quarantine` once everything passes.

Add the records at your domain registrar, wait for them to propagate, then check them with a free tool such as MXToolbox or your provider's own checker. Do this for every sending domain.

## Step 4: Warm up before you send

A brand-new mailbox that suddenly sends hundreds of cold emails looks like spam. Warm-up builds a sending history gradually: the mailbox exchanges real-looking emails with a network of other inboxes, which open and reply to them.

Most sending platforms include warm-up. Plan on around two to four weeks before full volume, then keep warm-up running at a low level alongside campaigns.

## Step 5: Connect a sending platform

Cold email platforms such as Instantly or Smartlead let you connect many mailboxes, rotate sending between them, schedule follow-ups and track replies. Connect every mailbox, set daily limits per mailbox, and turn on bounce protection so a campaign pauses if too many addresses are invalid.

## Step 6: Protect your lists and your reputation

Infrastructure only stays healthy if the data going through it is clean.

- **Verify every email address** before sending. High bounce rates damage reputation quickly.
- **Keep spam complaints very low.** Google advises keeping the spam rate reported in Postmaster Tools below 0.3%, and well under that is better.
- **Make it easy to opt out**, and honour opt-outs straight away.
- **Write to people with a reason.** Relevant, specific messages get replies and fewer complaints. That is where enrichment and signals come in.
- **Check the laws that apply** to the countries you send to. Rules on commercial email differ between places such as the UK, the EU, the US and Nigeria.

## A simple checklist

1. Register secondary domains and redirect them to your main site
2. Create mailboxes with real names, photos and signatures
3. Add SPF, DKIM and DMARC to every domain and verify them
4. Warm up for two to four weeks
5. Connect mailboxes to your sending platform with daily limits
6. Verify your list, then launch small and watch bounces and replies

Work out your own numbers with the [calculator](/tools/cold-email-infrastructure-calculator), or [ask us to set it up](/services/outbound-infrastructure) for you.
