# Product Requirements Document (PRD)

## Product Name

**VGROW Careers – Education Consultancy Platform**

## Product Vision

To build a high-performance, zero-cost, full-featured education consultancy platform to help VGrow Careers dominate the Hyderabad and South Indian overseas education market. The platform must enable content control via an easy-to-use CMS, provide seamless lead capture, support high SEO rankings, and drive user growth and revenue.

---

## Target Audience

* Students and parents in India (starting from Telangana/Hyderabad)
* Education seekers targeting India and overseas universities
* Consultants and partner institutions

---

## Core Goals

1. Zero-cost architecture (except hosting)
2. Seamless lead generation via forms, ConvertKit, WhatsApp (commented), and Calendly
3. Git-backed, non-technical-friendly CMS (TinaCMS)
4. High SEO, accessibility, and performance standards
5. Admin control over all frontend content from `/admin`

---

## Features & Requirements

### 1. Tech Stack

* **Framework**: Astro (preferred) or Next.js (SSG)
* **Styling**: Tailwind CSS + Headless UI
* **CMS**: TinaCMS (lifetime-free, Git-backed, in-context editing)
* **Hosting**: Netlify or Vercel (single app deployment)
* **Data**: Markdown + YAML content, Netlify Forms, GitHub Issues
* **CI/CD**: GitHub Actions

---

### 2. Pages & Routes

| Page              | URL                                                          | Purpose                                       |
| ----------------- | ------------------------------------------------------------ | --------------------------------------------- |
| Home              | `/`                                                          | Overview, consultation CTA, featured content  |
| Universities      | `/universities`                                              | Filterable list by country, fees, income tier |
| University Detail | `/universities/india/{slug}` & `/universities/abroad/{slug}` | SEO-optimized details                         |
| Blogs             | `/blogs`                                                     | Filtered sections: Exams, Jobs, Visa, etc.    |
| Blog Detail       | `/blogs/{slug}`                                              | Long-form article with SEO schema             |
| Contact           | `/contact`                                                   | Lead form (Netlify + fallback)                |
| Webinars          | `/webinars`                                                  | Event listing + signup form                   |
| Downloads         | `/downloads`                                                 | Gated resources with email capture            |
| Admin             | `/admin`                                                     | TinaCMS access with GitHub OAuth              |

---

### 3. Integrations

* **ConvertKit** (email form placeholder)
* **WhatsApp API** (commented code placeholder)
* **Calendly** (consultation CTA with `.env` link)

---

### 4. CMS Models

#### University

```yaml
title:
region:
country:
fees_range:
income_tier: ["lower", "middle", "upper"]
slug:
featured: true/false
image:
partner_url:
meta:
  title:
  description:
```

#### Blog

```yaml
title:
date:
categories: ["Exams", "Jobs", "Visa"]
tags:
slug:
featured:
image:
excerpt:
meta:
  title:
  description:
```

---

### 5. SEO & Performance

* Dynamic OpenGraph/Twitter metadata
* Auto sitemap and robots.txt
* JSON-LD schemas for: Article, Organization, University
* Lighthouse score: ≥90 (Accessibility, Performance, SEO)
* Image lazy loading and optimization

---

### 6. Admin Features

* GitHub OAuth login
* Edit homepage sections, blogs, and universities
* Form submission dashboard (leads, interest charts)
* YAML-based homepage structure
* Google Form fallback support

---

### 7. Forms & Data Handling

* Netlify Forms (default)
* Fallback: Google Forms with prefilled entry links
* Lead capture to Google Sheets or GitHub Issues (Netlify Functions)
* Honeypot + token protection

---

### 8. CI/CD & Deployment

* One-click deploy to Netlify/Vercel
* `netlify.toml` or `vercel.json`
* GitHub Actions for:

  * Linting
  * Type-checking
  * WCAG 2.1 accessibility testing

---

### 9. Localization Strategy

* Default language: English
* Placeholder structure for Telugu, Hindi i18n
* Region-specific homepage content toggles (Telangana, Andhra, TN)

---

### 10. Monetization & Growth

* Lead capture via webinars and downloads
* Affiliate banners in university pages
* High-ranking blog content for SEO leads
* ConvertKit flows for drip campaigns
* WhatsApp & Calendly for warm conversions

---

## Success KPIs

* 1000+ quality leads/month within 3 months
* Page 1 rankings for 10+ blog keywords in 6 months
* 10+ paid student conversions/month by month 4
* ₹8 Cr (\$1M) in consultancy sales within 6 months

---

## Ownership & Credits

Built by Cursor AI IDE (Copilot/X), designed by Open Source tools, deployed via Netlify/Vercel, fully maintained by client post-handoff.

---

## Final Notes

* All 3rd-party keys stored in `.env`
* Fully OSS, lifetime-free stack
* Build cost = ₹0
* Hosting cost = ₹ minimal (Netlify/Vercel free tier)
