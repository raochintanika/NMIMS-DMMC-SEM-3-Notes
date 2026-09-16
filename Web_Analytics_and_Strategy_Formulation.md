# Web Analytics & Strategy Formulation

### **Credits:** 3

---

## Lecture 1
**Date:** 18 August 2026

## 1. Analytics
### Analytics = Story With Data
- Story with data / backed by data
- Make projections
- Use intelligence to make decisions with reason

## 2. Data
- Web & App → First-party data
- Google/Meta Ads → Second-party data
- **Note:** Meta's "Pixel" (analogous to Google's tag) tracks a user's journey for ad platforms.

## 3. Google Analytics & Search Console
**Google Analytics (GA4)** — website/user behaviour: Users, Sessions, Time spent, Pages consumed, Leads/Sales.

**Google Search Console** — search performance: Keywords, Impressions, Clicks, CTR, Average position.

**Combining data:** Search Console can be linked to GA4 to view both data sets together.

## 4. SEO Auditing
**SEOptimer** — a website SEO auditing tool.

## 5. Core Web Vitals
Core Web Vitals measure **user experience**:
- **LCP (Largest Contentful Paint):** loading speed of the largest visible element.
- **INP (Interaction to Next Paint):** responsiveness after a user interaction.
- **CLS (Cumulative Layout Shift):** visual/layout stability while loading.

*(Fact-check: INP officially replaced "FID" as the responsiveness metric in March 2024 — your notes already use the current metric, correctly.)*

## 6. Website Performance
Page weight affects load speed — e.g., 10 images × 100 KB vs. 160 images × 10 KB. Content structure/size directly impacts performance.

## 7. JavaScript & CSS
- **JavaScript:** the "brain" of a website — interactivity/decision-making.
- **CSS (Cascading Style Sheets):** website aesthetics — font, colour, buttons, layout.

## 8. Cookies & Google Analytics
GA4 drops a cookie on landing to track a user.

**Cookie data captured:** Time, Location, Device, Page, Product, Duration, Name, Gender, Email/login info.   

*(Note: name/gender/email are only captured if the site itself collects and passes this data to GA4 — GA4's own cookie doesn't inherently know PII like this. Worth keeping in mind for privacy/compliance context.)*

**Basic flow:**
User lands → GA4 → Cookie → Data tracked → Data sent → GA4 servers → Processed → Report

## 9. Reasons Data May Not Be Collected
1. Rejected cookie consent
2. Incognito/private mode
3. Website not loading correctly (blocks tracking code)
4. Cache-related tracking issues

## 10. What Does GA4 Track?
**Source examples:** Direct, Organic, Ads, Backlinks, Social Media, Pinterest, Email
(Unidentifiable sources can inflate "Direct" traffic.)

**Channel (default groupings):** Direct, Organic, Ads, Referral

**Landing Page:** first page a user enters (often homepage, but can be any page via ad/link).

**Exit Page:** last page before leaving — via closing browser, third-party link, or inactivity.

## 11. GA4 Session
Default session timeout: **30 minutes** (adjustable up to 7 hrs 55 min). GA4 has no visibility into what a user does after leaving the site.

## 12. GA4 Implementation
GA4 code must be placed on every page of the site.
**Google Tag Manager (GTM):** dashboard to manage/deploy multiple tags across a site.

## 13. Google Analytics Debugger
Browser extension to verify analytics code is present and firing correctly.

### Quick Revision

| Term | Meaning |
|---|---|
| Analytics | Story backed by data |
| Search Console | Keywords, impressions, clicks, CTR, avg. position |
| GA4 | Users, sessions, time, pages, leads/sales |
| LCP | Largest Contentful Paint |
| INP | Interaction to Next Paint |
| CLS | Cumulative Layout Shift |
| GTM | Manage multiple tags |
| GA Debugger | Verify tracking implementation |

---

## Lecture 2
**Date:** 25 August 2026

## 1. Analytics Across Different Websites
Two websites' analytics don't automatically reconcile. If a creator/blogger claims "I sent you X visitors," don't assume it matches your own analytics — **ask for screenshots/evidence and compare.**

## 2. Website Journey Terminology
- **Landing Page:** first page a user reaches
- **Source:** where the user came from
- **Exit Page:** last page before leaving

**Simple journey:** Source → Landing Page → Website Journey → Exit Page

## 3. Channels vs Sources
- **Channel = broad category** (e.g. Social, Referral, Direct, Organic Search/SEO, Paid Search/Ads)
- **Source = specific origin** (e.g. Channel: Social → Source: Facebook, or a specific Facebook post)

## 4. Similarweb
Used for website traffic/market data: **similarweb.com** — explored **without logging in**.  
Navigation: Products → Free Tools → Top Websites → select Category + Geography (class used **India, all categories**).  

*(Note: free-tool navigation paths can shift with UI updates — verify menu names still match if revisiting.)*

## 5. Website Data vs App Data
Website data (desktop + mobile web) and app data are **separate** in Similarweb. E.g., Amazon/Flipkart get major traffic via apps, but Similarweb's website rankings only reflect web traffic — always clarify which you're analysing.

## 6. Similarweb — Top Websites
India's top sites discussed: Google, YouTube, Instagram, WhatsApp, ChatGPT, Amazon, Wikipedia.
**Use case:** understanding where audiences spend time helps build broad media plans.

## 7. Similarweb — Paid Data
Free version = limited view. Paid version adds detailed audience segments, city-level data, demographics — useful for large campaigns.

## 8. Homework
Explore for India: Trending Websites, Top Android Apps, Top iOS Apps.

## 9. User vs Session
- **User/Visitor:** a person visiting the site
- **Session:** a **30-minute tracking window** — repeat visits within 30 min = same session; after 30 min = new session. (User stays the same; session count can rise.)

## 10. Why the Session Concept Matters
Prevents inflation from repeated refreshing/re-visits — the 30-min window groups short-term repeat activity together.

## 11. Bounce Rate vs Engaged Sessions
- **Bounce rate:** user leaves without meaningful action (traditionally negative).
- **Engaged session:** user does something meaningful.
- Industry has shifted focus from bounce rate → engagement.

## 12. What Makes a Session "Engaged"?
Any **one** of the following qualifies (GA4 uses OR, not AND):
1. Stays 10+ seconds
2. Completes a valuable event/conversion
3. Views 2+ pages

*(Fact-check: GA4's official definition matches this — 10+ seconds, a key event, OR 2+ pageviews/screenviews — confirmed via Google's documentation.)*

## 13. Events
An **event** = any trackable website action (page load, scroll, video watched, search, form submission).
- **Default events:** tracked automatically (page load, scroll)
- **Custom events:** marketer-defined, business-specific (video watched, form filled)

Key question: *"What user actions are valuable to my client/business?"*

## 14. Conversion
A business-valuable action (e.g., an education site's enquiry form submission).

*(Note: GA4 renamed "conversions" to "Key Events" in 2024 — both terms are used interchangeably in practice/older material, so this doesn't conflict with your notes.)*

## 15. Channels in GA4
Direct, Organic Search, Paid Search, Social, Referral, Other/default, **Unassigned**.

## 16. Unassigned Traffic
Occurs when GA4 can't identify a source (info not passed to analytics).  

**Example:** WhatsApp link clicks may not pass referral data → shows as Direct or Unassigned depending on the system.  
Unassigned has become more common as tracking has evolved; older systems dumped more unidentified traffic into Direct.

## 17. Referral Traffic
Traffic from a link on another website. **Third-party site → link → your site.**

## 18. Paid Search vs Display Ads
- **Paid Search:** Google Search text ads
- **Display:** banner ads
Both paid, different environments.

## 19. Direct Traffic
Occurs via typed URL or bookmark — but doesn't always mean the user "memorised" it. A user may have first discovered the site via email/ads/WhatsApp, saved the URL, and returned directly later.

## 20. Search vs Direct
Searching a brand name on Google and clicking the result = **Organic Search**, not Direct — even if the user already knew the brand. Only a manually typed URL counts as Direct.

## 21. Website Analysis — NMIMS Example
Visits split: ~50% Desktop, ~49% Mobile — notable since most sites skew mobile-heavy.

## 22. Why Education Sites Skew Desktop
Complex forms, applications, and high-value/important transactions → users prefer desktop for these tasks.

## 23. First-Time vs Repeat Users
- First-time visitors: more likely mobile.
- Repeat visitors: higher desktop share (e.g. jewellery, real estate, lifestyle sites).
Journey: First visit (mobile discovery) → Repeat visit (more considered) → Desktop more likely.

## 24. Visit Duration
Example discussed: ~2.5 minutes. **Benchmark: >2 minutes = good.**

## 25. Pages per Visit
Example: ~6 pages/visit. **Benchmark: >3 pages = healthy** (varies by site type — a blog needs fewer pages than an e-commerce site).

## 26. Improving Visit Duration
Comparison tools, interactive elements/animations, videos, better mobile formatting (less text, bullet points), and internal navigation prompts.

## 27. Increasing Pages per Visit
"Related/recommended products" widgets; keep forms simple (2–3 fields for a basic enquiry).

## 28. Content Structure
Use short snippets, bullet points, clear sections, "read more" links to ease consumption.

## 29. Clickable Elements & Navigation
Avoid banners that *look* clickable but aren't — always give users a real path forward (buttons, links).

## 30. Website Engagement
More pathways (nav links, related content, videos, banners) → longer stay, more pages, deeper engagement.

## 31. Geographic Traffic
Unexpected high international traffic (e.g. 20–25% from outside India for an India-only business) can signal **spam/bot traffic** — investigate rather than assume it's genuine.

## 32. Channel Split — NMIMS Example
~Direct 41%, Organic Search 44%. Interesting because even an established brand's "Direct-seeming" traffic (brand-name Google searches) counts as Organic Search, not Direct.

### Quick Revision
- **Journey:** Source → Landing Page → Website Journey → Exit Page
- **Channel** = broad group; **Source** = specific origin
- **Session** = 30-min window
- **Bounce** = no meaningful action; **Engaged** = meaningful action (10s+ / conversion / 2+ pages)   
**Visit duration:** >2 min good | **Pages/visit:** >3 healthy
- Similarweb: always separate website vs app data

---

## Lecture 3
**Date:** 1 September 2026

## 33. AI Brand Visibility
New area: analysing how a brand appears in AI-generated answers — Brand Visibility, Prompt Tracking, Citation Analysis, Sentiment Analysis.

**Brand Visibility formula:**
`Brand Mentions ÷ Total Relevant Category Mentions × 100`
Example: 47 mentions / 100 category searches = **47%**

## 34. My Brand Visibility
Same concept applied to your own brand specifically — "out of all relevant category searches, how often was my brand mentioned?"

## 35. Core Average
- **Core = your category** (e.g., yoga pants/leggings for an activewear brand)
- **Core Average** = average visibility level across brands within that category — a benchmark to compare against.

## 36. Brand Mention Share
How often your *specific brand name* is mentioned in AI answers — compared against competitors.

## 37–38. AI Visibility Tabs
Tabs explored: Brand Overview, Prompt Tracking, Citation Analysis, Sentiment Analysis. Activity: identify 4–5 client-relevant findings from these.

**Brand Overview:** general presence/visibility snapshot, incl. competitive visibility.

## 39. Prompt Tracking
Identifies the **exact prompt/question** that led to a brand being mentioned — reveals content opportunities.

## 40–41. Citation Analysis
Identifies **which websites AI cited as sources** (AI Answer → Citation → Source Website). Useful for spotting SEO/digital PR/backlink opportunities beyond your own site.

## 42. Sentiment Analysis
Classifies brand mentions as Positive/Negative/Neutral — ties into **ORM (Online Reputation Management)**.

## 43. Client Analysis Framework
Don't just report numbers — explain what they *mean* for the client (why mentioned/not mentioned, which prompts, which sites, what sentiment, where the opportunities are).

## 44–46. UTM Tracking
Tracks traffic at a granular level via URL parameters:
- `utm_source` — platform (Facebook, Google, Email)
- `utm_medium` — traffic type (Social, CPC, Email)
- `utm_campaign` — campaign name (e.g. `diwali`)
- `utm_content` — distinguishes creative variants (e.g. `creative_a` vs `creative_b`)

## 47. UTM Naming Rules
- **Case-sensitive** — `Facebook` ≠ `facebook` ≠ `FACEBOOK`. Pick one convention, stay consistent.
- **No spaces** — use `diwali-sale` or `diwali_sale`.

## 48. UTM URL Rule
Only **one `?`** per URL; additional parameters joined with `&`.

- https://example.com/?utm_source=facebook&utm_medium=social&utm_campaign=diwali

- https://example.com/product?id=123&utm_source=facebook&utm_medium=social


## 49. Why UTM Matters
Goes beyond "traffic came from Facebook" → tells you exact source, medium, campaign, and creative variant.
Flow: Campaign → UTM → Website → Analytics → Analysis

## 50–57. Enhanced Measurement (GA4 auto-tracking)
Page view, Scroll (bottom-of-page), Click/outbound links, Video engagement (start/progress/completion), File downloads, Form interactions (start/submit/field drop-off).

- **Scroll tracking:** if users reach the bottom, add more useful content there; if not, improve the top section.
- **Outbound clicks:** you can track the click leaving your site, but **not** what happens after, on the third-party site.
- **Form drop-off example:** Name → Email → DOB → drop-off may signal friction (too many fields, sensitive info, confusing UX, trust issues).

## 58. Special Tracking Setup Needed For
Carousels/horizontal scroll, logins, pop-ups, social embeds, third-party links — these often need custom event setup beyond default tracking.

## 59–68. Attribution
**Attribution** = deciding which channel gets credit for a conversion.
Example journey: Instagram → Google → Email → Purchase

| Model | Credit Given |
|---|---|
| Data-Driven | ML-based, weighted by actual conversion-path data |
| First Click | 100% to first channel (Instagram) |
| Last Click | 100% to last channel (Email) |
| Linear | Equal credit to all (⅓ each here) |
| Position-Based | **40% first + 40% last + 20% split among middle** channels (Instagram 40%, Google 20%, Email 40%) |
| Time Decay | More credit to channels closer to conversion (Email > Google > Instagram) |
| Ads Preferred | 100% to the last **Google Ads** touchpoint (if any) |

> ⚠️ **Important update (verified):** Google officially **deprecated First Click, Linear, Time Decay, and Position-Based** as selectable attribution models in Google Ads and GA4 in 2023 — only **Last Click** and **Data-Driven** remain selectable today (existing conversions using the old models were auto-migrated to Data-Driven).  

"Ads-preferred last click" also still exists. These models are still worth knowing conceptually (and may appear in exams/theory), but note they're no longer live options in the actual GA4/Google Ads interface.

### Quick Revision
- **Brand Visibility:** Mentions ÷ Category Mentions × 100
- **Citation Analysis:** which site did AI cite as a source
- **UTM:** Source → Medium → Campaign → Content; one `?`, `&` for the rest; case-sensitive, no spaces
- **Attribution:**   
First Click 100%→first | Last Click 100%→last | Linear equal | Position-Based 40/40/20 | Time Decay favours recency | Data-Driven ML-based | Ads Preferred 100%→last Google Ads touch

**Overall mental model:**  
Traffic → Behaviour → Engagement → Conversion → Attribution → Insight → Optimisation
AI visibility: Prompt → AI Answer → Brand Mention → Citation → Sentiment → Opportunity
Campaign tracking: Source → Medium → Campaign → Content → Analytics

---

## Lecture 4
**Date:** 8 September 2026

### Attribution — Exceptions
- **Last Click exception:** If **Direct** is the last channel, it does *not* get 100% credit — the **second-last source** gets it instead.  

Reasoning: a Direct visit may just reflect the user recalling/bookmarking a URL first seen via another channel. *(This matches the old "Last Non-Direct Click" logic Google Analytics historically used by default.)*

- **Ads Preferred exception:** If there's no Google Ads touchpoint in the path, the last channel gets full credit.

- **Data-Driven example from class:** 0.7 Direct, 0.2 Search, 0.1 WhatsApp (illustrates ML-weighted, not rule-based, credit).

## GA4 Demo Account — Key Points
- GA4 tracks **properties you own** (websites/apps) — not third-party platforms like social media.
- A tracked website/app = a **"property."**
- **UTM parameters** (added to URLs) ≠ **GA4 tracking code** (tracks on-site behaviour after arrival) — different mechanisms working together.
- **Real-time data:** shows the last 30 minutes — useful for verifying a fresh campaign/tracking setup is working.

### GA4 Reports Covered

| Report | Purpose |
|---|---|
| Real-time Overview | Current site activity |
| Geography | Where active users are from |
| Events | Page views, scrolls, add-to-cart, purchases |
| Event Count | All recorded events (can be noisy — filter to what matters) |
| Key Events | Marked important events for reporting |
| User Acquisition | Acquisition by user |
| Traffic Acquisition | Acquisition by session — **professor noted sessions are more important for reporting** |
| User Acquisition Cohort | Purchase value trends over 120 days |
| Lead Acquisition | Lead-specific reporting |
| Non-Google Campaigns | Campaign report from UTM parameters |

## Google Products/Platforms Discussed
- **Google Ads** — paid advertising
- **Google AdSense** — publisher ad monetisation
- **GDN (Google Display Network)** — display ad inventory across partner sites
- **Google AdMob** — mobile app advertising
- **DV360** — programmatic display/video ad platform
- **Google Business Profile** — local business presence
- **Merchant Center** — shopping ads
- **Search Console** — SEO data/inputs

## GA4 Concepts Practised
- **Acquisition:** where did the user come from?
- **Cross-Network:** a Google Ads feature spanning multiple channels in one campaign/report view.
- **New vs Returning Users:** analysed by date range.
- **Date Comparison:** "Previous Period" (generally preferred by the professor) vs. "Previous Period — Match Day of Week."
- **Avg. Engagement Time per User** / **Engaged Sessions per Active User.**

## GA4 Exercise — Google Merchandise Store Demo
**A. Acquisition/Source-Medium:** 
1) Newsletter Feb 2025/Email 
2) Direct + Google Organic 
3) Referral 
4) A: Google/CPC  
B: Direct + Google Organic + Referral  

**B. Date/Performance:** 
1) 6 August 
2) Sat & Sun 
3) 23–29 August 
4) Referral  

**C. Non-Google Campaigns:** 
1) Organic 
2) Referral / ref-analytics.appspot.com

### Quick Revision
- **Last Click exception:** Direct as last touch → credit goes to the second-last source instead
- **UTM:** Source + Medium + Campaign via URL
- **GA4 Property:** any website/app you track
- **Real-Time:** last 30 minutes of activity
- **Sessions > Users** for acquisition reporting (per professor)
- **Non-Google Campaign report:** UTM-based, non-Google-Ads traffic

## Lecture 5

**Date:** 15 September 2026

## 1. Annotations in GA4

**Annotations** let you add notes directly to GA4 reports to record events, explain changes in data, or highlight important observations.

**Common uses:**

| Use case | Example |
|---|---|
| Traffic changes | Spikes or dips in traffic |
| Marketing | Campaign launches |
| Product | Product launches |
| General | Other important performance changes |

---

## 2. Engagement & Events Reports

GA4 reports can be customized to analyse specific parts of the data.

| Feature | What it does |
|---|---|
| **Comparison** | Evaluate different subsets of data side by side |
| **Filters** | Narrow the data shown in a report |

Reports can also be customized and **shared** with others.

---

## 3. Site Simulator Tool — TasteWP

**TasteWP** is a tool for creating **temporary WordPress test sites**.

**Used for:**
- Experimenting with WordPress
- Testing themes and plugins
- Working with the WordPress backend without affecting a live website

**Steps discussed:**
1. Create a temporary WordPress site
2. Access the **WordPress Admin/Backend**
3. Install or manage **Plugins**
4. Edit and test the site

---

## 4. Enhanced Measurement

**Enhanced Measurement** automatically collects certain website interactions once it's **enabled for a web data stream**.

**Examples:**
- Scrolls
- Site search
- Outbound clicks

These events can be viewed in GA4 reports.

> ⚠️ **Important:** Enhanced Measurement isn't activated just by creating a GA4 property — it must be enabled/configured at the **web data stream** level.

---

## 5. Setting Up Events

GA4 events measure specific interactions or occurrences on a website or app.

**Examples:** Page views · Clicks · Searches · Purchases

**Event conditions discussed:**

| Condition type | Example |
|---|---|
| **URL-based** | Trigger an event when a specific page/URL is viewed |
| **Click-based** | Track a specific click interaction |

> ℹ️ These are examples of event *conditions*, not the only two GA4 event types overall. GA4 also has automatically collected, enhanced measurement, recommended, and custom events.

---

## 6. Integrating WordPress with GA4 — 3 Techniques

| # | Technique | How it works |
|---|---|---|
| a | **Plugins** | A WordPress plugin connects the site to Google Analytics |
| b | **Google Tag Manager** | Acts as the tag-management layer between the site and tracking tools |
| c | **Direct Tracking Code** | The Google tag is added directly to the site's HTML, immediately after the opening `<head>` tag |

**Placement rules:**
- **Shared header file** across pages → edit that one file to place the tag on all pages using it
- **Independent landing page** (not using the shared header) → add the tag to that page separately

> 💡 **Key idea:** The Google tag needs to be present on every page you want Google Analytics to measure.

---

## 7. Pages & Landing Pages

### Page
An individual webpage a visitor views on a website. (For apps, the equivalent is generally a **screen**.)

### Landing Page
The **first page** a visitor lands on when arriving at a website.

- GA4's **Landing page** dimension = the page associated with the **first page view in a session**
- Can be the homepage, a product page, a blog post, a sign-up page — any page where the visitor first arrives

---

## 8. Analysing Events & Purchases

**Key question:** Which user actions, pages, or journeys are associated with more purchases?

To answer this, track relevant events and analyse their relationship with **purchases/key events**:
- Which pages receive the most engagement?
- Which clicks lead to important actions?
- Which landing pages are associated with better outcomes?
- Which user journeys lead to purchases?

*The exact answer depends on the website's data and the events being tracked.*

---

## 9. Basic GA4 + WordPress Setup Flow

```
→ Create/Access WordPress Site 
→ Add Plugin or Tracking Method 
→ Connect GA4 → Set Up Tracking/Events 
→ Test & Analyse Data
```

**Direct Google tag implementation:**
```
→ GA4 Web Data Stream 
→ Google Tag 
→ Website <head> 
→ Data Collection
```

---

## Quick Revision — Lecture 5

| Concept | Summary |
|---|---|
| **Annotations** | Add notes/context to explain important changes in GA4 data |
| **Comparison** | Compare subsets of data side by side |
| **Filters** | Narrow the data shown in reports |
| **TasteWP** | Temporary WordPress testing/sandbox tool |
| **Enhanced Measurement** | Auto-collects selected interactions (Scrolls, Site Search, Outbound Clicks) once enabled |
| **Events** | Measure specific user interactions/occurrences |
| **Event conditions** | URL-based · Click-based |
| **GA4 + WordPress** | Plugins · Google Tag Manager · Direct Google tag |
| **Direct tag placement** | Immediately after the opening `<head>` tag |
| **Shared header** | Edit once → tag applies to all pages using it |
| **Independent landing page** | Add tag separately |
| **Landing Page** | First page a visitor lands on in a session |

**Core idea:** Track meaningful user actions, analyse the data, and identify which interactions and journeys contribute to important outcomes such as purchases.

---

<script src="assets/top-button.js"></script>