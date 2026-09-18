# Web Analytics & Strategy Formulation — Quiz

### Lecture 1 (18 August 2026)

Q1. How is "Analytics" defined in the lecture?

A. A technical process unrelated to storytelling
B. A story with/backed by data, used to make projections and reasoned decisions
C. Only the process of collecting cookies
D. A synonym for SEO

**Answer:** B
**Explanation:** Analytics is defined as a "story with data" / backed by data, used to make projections and use intelligence to make reasoned decisions.

Q2. According to the lecture, which of the following is measured by Google Search Console rather than GA4?

A. Sessions
B. Time spent
C. Average position
D. Leads/Sales

**Answer:** C
**Explanation:** Google Search Console tracks search performance metrics such as Keywords, Impressions, Clicks, CTR, and Average position, while GA4 tracks website/user behaviour like Users, Sessions, Time spent, and Leads/Sales.

Q3. Which Core Web Vital measures the visual/layout stability of a page while it loads?

A. LCP
B. INP
C. CLS
D. CTR

**Answer:** C
**Explanation:** CLS (Cumulative Layout Shift) measures visual/layout stability during loading; LCP measures loading speed and INP measures responsiveness after interaction.

Q4. According to the lecture, which of the following is NOT listed as a reason data may not be collected by GA4?

A. Rejected cookie consent
B. Incognito/private browsing mode
C. A high number of returning visitors
D. Website not loading correctly, blocking the tracking code

**Answer:** C
**Explanation:** The lecture lists rejected cookie consent, incognito mode, website loading issues, and cache-related tracking issues as reasons data may not be collected — a high number of returning visitors is not one of them.

Q5. What is the default GA4 session timeout duration discussed in class?

A. 10 minutes
B. 30 minutes
C. 1 hour
D. 7 hours 55 minutes

**Answer:** B
**Explanation:** The default GA4 session timeout is 30 minutes, though it is adjustable up to 7 hours 55 minutes.

Q6. What is the purpose of Google Tag Manager (GTM), according to the lecture?

A. It is a browser extension to verify tracking code
B. It is a dashboard used to manage and deploy multiple tags across a site
C. It replaces the need for GA4 entirely
D. It is used only for SEO audits

**Answer:** B
**Explanation:** GTM is a dashboard to manage and deploy multiple tags across a website, distinct from the Google Analytics Debugger, which verifies tracking code is firing correctly.

### Lecture 2 (25 August 2026)

Q1. According to the lecture, what should you do if a creator/blogger claims they sent a specific number of visitors to your site?

A. Accept the number automatically, since analytics tools rarely differ
B. Ask for screenshots/evidence and compare with your own analytics
C. Ignore the claim entirely without investigation
D. Assume their analytics tool is more accurate than yours

**Answer:** B
**Explanation:** The lecture cautions that two websites' analytics don't automatically reconcile, so such claims should be verified with screenshots/evidence.

Q2. What is the key difference between "Channel" and "Source" in analytics terminology?

A. Channel is a specific origin; Source is a broad category
B. Channel is a broad category (e.g., Social); Source is a specific origin (e.g., Facebook)
C. They are interchangeable terms
D. Channel only applies to paid traffic

**Answer:** B
**Explanation:** Channel refers to a broad category such as Social or Organic Search, while Source is the specific origin within that channel, such as Facebook.

Q3. According to GA4's definition discussed in class, which of the following alone can qualify a session as "engaged"?

A. Staying on the site for at least 10 seconds
B. Viewing exactly 1 page
C. Leaving the site within 5 seconds
D. Rejecting cookie consent

**Answer:** A
**Explanation:** GA4 defines an engaged session using OR logic — any one of: staying 10+ seconds, completing a valuable event/conversion, or viewing 2+ pages qualifies.

Q4. A user searches for a brand's name on Google and clicks the resulting listing. According to the lecture, how is this traffic classified?

A. Direct traffic
B. Organic Search
C. Referral traffic
D. Unassigned traffic

**Answer:** B
**Explanation:** The lecture clarifies that searching a brand name on Google and clicking the result counts as Organic Search, not Direct — only a manually typed URL counts as Direct.

Q5. Why might a website unexpectedly show 20–25% traffic from outside its target country (e.g., an India-only business)?

A. This is always a sign of a highly successful international campaign
B. It can signal spam/bot traffic and should be investigated
C. It means the website's SEO ranking has improved
D. It is guaranteed to be genuine organic interest

**Answer:** B
**Explanation:** The lecture notes that unexpectedly high international traffic for a geographically-focused business can signal spam/bot traffic, warranting investigation rather than assumption.

Q6. According to the lecture, why do education-focused websites like NMIMS tend to skew more toward desktop traffic than typical mobile-heavy sites?

A. Students do not own smartphones
B. Complex forms, applications, and high-value transactions lead users to prefer desktop for these tasks
C. Desktop devices load pages faster in general
D. Mobile browsing is banned on college networks

**Answer:** B
**Explanation:** The lecture attributes this to complex forms, applications and important/high-value transactions, for which users prefer desktop devices.

### Lecture 3 (1 September 2026)

Q1. What is the Brand Visibility formula discussed in class?

A. Brand Mentions ÷ Total Website Visitors × 100
B. Brand Mentions ÷ Total Relevant Category Mentions × 100
C. Total Category Mentions ÷ Brand Mentions × 100
D. Brand Mentions − Category Mentions

**Answer:** B
**Explanation:** Brand Visibility = Brand Mentions ÷ Total Relevant Category Mentions × 100 — e.g., 47 mentions out of 100 category searches = 47%.

Q2. According to the lecture, what does "Citation Analysis" in AI visibility tools identify?

A. The sentiment of brand mentions
B. Which websites AI cited as sources when generating an answer
C. The exact prompt that led to a brand mention
D. The core average visibility across a category

**Answer:** B
**Explanation:** Citation Analysis identifies which websites AI cited as sources (AI Answer → Citation → Source Website), useful for spotting SEO/PR/backlink opportunities.

Q3. Which UTM parameter is used to distinguish between two different creative variants of the same campaign?

A. utm_source
B. utm_medium
C. utm_campaign
D. utm_content

**Answer:** D
**Explanation:** utm_content is used to distinguish creative variants, e.g. "creative_a" vs "creative_b," while utm_source, utm_medium, and utm_campaign identify platform, traffic type, and campaign name respectively.

Q4. In the UTM naming rules discussed in class, which of the following is correct?

A. UTM values are not case-sensitive
B. Multiple "?" symbols can be used in one URL for multiple parameters
C. UTM parameters are case-sensitive and should avoid spaces
D. Spaces in UTM values are automatically handled correctly by all platforms

**Answer:** C
**Explanation:** The lecture states UTM values are case-sensitive (e.g., "Facebook" ≠ "facebook") and should avoid spaces, using hyphens or underscores instead.

Q5. According to the important update noted in the lecture, which attribution models remain selectable today in Google Ads and GA4?

A. First Click and Linear only
B. Last Click and Data-Driven only
C. Position-Based and Time Decay only
D. All models remain fully selectable

**Answer:** B
**Explanation:** Google officially deprecated First Click, Linear, Time Decay, and Position-Based as selectable models in 2023 — only Last Click and Data-Driven remain selectable (with existing conversions auto-migrated to Data-Driven).

Q6. In the Position-Based attribution model example discussed in class (Instagram → Google → Email → Purchase), how is credit distributed?

A. 100% to Instagram
B. Equal credit (⅓) to each channel
C. 40% Instagram, 20% Google, 40% Email
D. 100% to Email only

**Answer:** C
**Explanation:** Position-Based attribution gives 40% credit to the first channel, 40% to the last channel, and 20% split among middle channels — in this journey: Instagram 40%, Google 20%, Email 40%.

### Lecture 4 (8 September 2026)

Q1. According to the "Last Click exception" discussed in class, what happens if Direct is the last channel in a conversion path?

A. Direct still receives 100% of the credit
B. The second-last source receives the credit instead
C. No channel receives any credit
D. Credit is split equally among all channels

**Answer:** B
**Explanation:** If Direct is the last touchpoint, it does not get 100% credit — the second-last source receives it instead, reflecting the idea that a Direct visit may just be a recalled/bookmarked URL first seen via another channel.

Q2. In the "Ads Preferred" attribution model, what happens if there is no Google Ads touchpoint in the conversion path?

A. The first channel automatically receives 100% credit
B. The last channel gets full credit
C. No credit is attributed at all
D. Data-Driven attribution is used instead

**Answer:** B
**Explanation:** The Ads Preferred exception states that if there's no Google Ads touchpoint in the path, the last channel in the path receives full credit.

Q3. According to the lecture, what does GA4's Real-Time report show?

A. Data from the past 24 hours
B. The last 30 minutes of activity
C. Data from the previous calendar month
D. Only e-commerce transactions

**Answer:** B
**Explanation:** GA4's Real-Time data shows the last 30 minutes of activity, useful for verifying that a fresh campaign or tracking setup is working.

Q4. Which Google product discussed in class is specifically focused on mobile app advertising?

A. Google Merchant Center
B. Google AdMob
C. DV360
D. Google Business Profile

**Answer:** B
**Explanation:** Google AdMob was discussed as the platform for mobile app advertising, distinct from Merchant Center (shopping ads), DV360 (programmatic display/video), and Business Profile (local presence).

Q5. According to the professor's noted preference, which acquisition report is considered more important for reporting purposes?

A. User Acquisition
B. Traffic Acquisition (by session)
C. Lead Acquisition
D. Non-Google Campaigns

**Answer:** B
**Explanation:** The professor noted that sessions are more important for reporting, favouring Traffic Acquisition (acquisition by session) over User Acquisition.

Q6. In the GA4 Exercise on the Google Merchandise Store demo, which answer was identified for the Date/Performance question about the highest-traffic weekend days?

A. Weekdays only
B. Sat & Sun
C. A single specific weekday
D. Referral traffic only

**Answer:** B
**Explanation:** The exercise's Date/Performance answers identified "Sat & Sun" as the relevant answer within that part of the demo exercise.

### Lecture 5 (15 September 2026)

Q1. What is the purpose of "Annotations" in GA4, according to the lecture?

A. To automatically fix tracking errors
B. To add notes directly to reports, explaining changes or highlighting important observations
C. To create custom dashboards
D. To delete outdated events

**Answer:** B
**Explanation:** Annotations let users add notes to GA4 reports to record events, explain data changes, or highlight important observations such as traffic spikes or campaign launches.

Q2. What is TasteWP, as discussed in class?

A. A GA4 reporting dashboard
B. A tool for creating temporary WordPress test sites
C. A UTM parameter generator
D. An SEO auditing tool

**Answer:** B
**Explanation:** TasteWP is a tool for creating temporary WordPress test sites, used for experimenting with themes, plugins, and the backend without affecting a live website.

Q3. According to the lecture, when does Enhanced Measurement start collecting website interactions like scrolls and outbound clicks?

A. Automatically the moment a GA4 property is created
B. Only after it is enabled/configured at the web data stream level
C. Only if Google Tag Manager is also installed
D. Only for e-commerce websites

**Answer:** B
**Explanation:** The lecture stresses that Enhanced Measurement is not activated simply by creating a GA4 property — it must be enabled at the web data stream level.

Q4. Which of the three WordPress + GA4 integration techniques discussed involves adding the Google tag directly to the site's HTML?

A. Plugins
B. Google Tag Manager
C. Direct Tracking Code
D. Enhanced Measurement

**Answer:** C
**Explanation:** Direct Tracking Code involves adding the Google tag directly to the site's HTML, immediately after the opening `<head>` tag, as opposed to using a plugin or GTM as an intermediary layer.

Q5. According to the lecture, what does GA4's "Landing Page" dimension represent?

A. The last page a user visits before leaving
B. The page associated with the first page view in a session
C. Only the website's homepage
D. A page with the highest bounce rate

**Answer:** B
**Explanation:** The Landing Page dimension is defined as the page associated with the first page view in a session — it can be the homepage, a product page, or any page where the visitor first arrives.

Q6. If a website uses a shared header file across multiple pages, how should the GA4 tracking tag be added according to the lecture?

A. Add the tag separately to every single page
B. Edit the shared header file once, and the tag applies to all pages using it
C. Tags cannot be added to pages using a shared header
D. Use a different plugin for each page

**Answer:** B
**Explanation:** For a shared header file, editing that one file places the tag on all pages using it, whereas an independent landing page not using the shared header needs the tag added separately.

### Subject Revision Check
- Analytics = "story with data"; GA4 vs Search Console; Core Web Vitals (LCP, INP, CLS)
- Cookies, 30-minute sessions, reasons data isn't collected
- Channel vs Source; Bounce Rate vs Engaged Sessions
- AI Brand Visibility, Citation Analysis, Sentiment Analysis
- UTM parameters, naming rules, and why they matter
- Attribution models, the 2023 deprecations, and the Last Click / Ads Preferred exceptions
- GA4 reports, the Google product ecosystem, and GA4 exercise answers
- Annotations, Enhanced Measurement, WordPress + GA4 integration, Landing Page dimension

**For Review:** The notes flag the "5A" funnel model's exact stage sequence as needing a correction check against Kotler's model — no question has been built on the specific order of 5A stages, since the notes themselves mark this as unconfirmed.
