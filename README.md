# Tosyntra Growth Systems: website

Next.js site for tosyntra.com. Every page is generated as static HTML, so it is fast and easy for Google to read.

## Run it on your computer

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Put it live on Vercel

1. Create a new **empty** GitHub repository (for example `tosyntra-website`) and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Tosyntra website"
   git branch -M main
   git remote add origin https://github.com/Neyoak1/tosyntra-website.git
   git push -u origin main
   ```
2. In Vercel: **Add New > Project**, import the repository and press **Deploy**. No settings need changing.
3. Connect the domain: **Project > Settings > Domains**, add `tosyntra.com` and `www.tosyntra.com`. Vercel shows the exact DNS records to add. In Namecheap, go to **Domain List > Manage > Advanced DNS** and add them. Do **not** delete the MX, SPF, DKIM or DMARC records that run your tosyntra.com mailboxes.
4. Set `tosyntra.com` (without www) as the primary domain so all traffic goes to one address.

## Environment variables (Vercel > Project > Settings > Environment Variables)

| Name | What it does |
|---|---|
| `SMTP_PASSWORD` | **Required for the contact form.** The password of the omoniyi@tosyntra.com mailbox. Form messages are emailed to omoniyi@tosyntra.com through Namecheap Private Email, with the visitor as Reply-To so you can answer directly. Until it is set, the form offers to send the message from the visitor's own email app instead. |
| `SMTP_USER` | Optional. Defaults to `omoniyi@tosyntra.com`. |
| `SMTP_HOST` / `SMTP_PORT` | Optional. Default to `mail.privateemail.com` and `465` (Namecheap Private Email). |
| `CONTACT_TO` | Optional. Send form messages to a different address. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | The code from Google Search Console's HTML tag method. |
| `NEXT_PUBLIC_SITE_URL` | Optional. Defaults to `https://tosyntra.com`. |

After adding or changing a variable, redeploy (Deployments > ... > Redeploy) so it takes effect. Then send yourself a test message from /contact.

## Where to change things

| To change | Edit |
|---|---|
| Email, WhatsApp, founder bios, LinkedIn links | `lib/site.ts` |
| Skills and tools list | `lib/skills.ts` |
| Services, their FAQs and tools | `lib/services.ts` |
| Case studies | `lib/work.ts` (screenshots go in `public/work/`) |
| Articles | `content/insights/*.md` |
| Colours and fonts | `app/globals.css` (top of the file) |

### Publishing a new article

Copy any file in `content/insights/`, rename it (the file name becomes the URL), update the details between the `---` lines and write in Markdown. Push to GitHub and Vercel publishes it. It is added to the article list, the sitemap, `llms.txt` and gets its own share image automatically.

## SEO already built in

- Unique title, description and canonical URL on every page
- Structured data: organisation with both founders, person profiles, services, FAQs, articles, breadcrumbs
- `sitemap.xml`, `robots.txt` (previews are kept out of Google), `llms.txt` for AI search
- Automatic share images for LinkedIn, WhatsApp and X
- Fast static pages with self-hosted fonts

## After launch

1. Add the site to **Google Search Console** and **Bing Webmaster Tools**, then submit `https://tosyntra.com/sitemap.xml`.
2. Create a **Tosyntra LinkedIn company page** and put its URL in `linkedinCompany` in `lib/site.ts`.
3. Put `https://tosyntra.com` on both founders' LinkedIn profiles, the GitHub profile and every GitHub README.
4. Publish one article a week, ideally the write-up of whatever was built that week.
