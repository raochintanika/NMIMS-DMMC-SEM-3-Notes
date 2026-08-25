# Web Analytics & Strategic Formulation
### *Credits:* 3  


### Lecture — 18 August 2026

## 1. Analytics

### Analytics = Story With Data

Class framing:
- Story with data
- Story backed by data
- Make projections
- Use intelligence to make decisions with reason

## 2. Data

- Web & App - First-party data
- Google/Meta ads - Second-party data

**Note**: If Meta has to record the full journey, a code called Pixel tracks everything (like google tag)

## 3. Google Analytics & Search Console

### Google Analytics
Used to understand website/user behaviour:
- Users
- Sessions
- Time spent
- Pages consumed
- Leads/Sales

### Google Search Console
Used for search performance:
- Keywords
- Impressions
- Clicks
- CTR
- Average position

### Combining Data
Search Console + Google Analytics can be combined into a dashboard to view data together on GA4.

## 4. SEO Auditing

**SEOptimer** a SEO tool for auditing a website.

## 5. Core Web Vitals

Core Web Vitals -  **user experience**.

### LCP — Largest Contentful Paint
Largest contentful element's loading/paint timing.

### INP — Interaction to Next Paint
Measures responsiveness after a user interaction.

### CLS — Cumulative Layout Shift
Measures visual/layout instability while the page loads.

## 6. Website Performance

Website download size - examples such as:
- 10 images × 100 KB each
- 160 images × 10 KB each

The broader point is that website size/content structure affects loading and performance.

## 7. JavaScript & CSS

### JavaScript (JS)
Described as the **“brain” of a website** — involved in decision-making/interactive elements.

### CSS
**Cascading Style Sheets** — takes care of website aesthetics/design.

Examples:
- Font size
- Colour
- Buttons
- Visual design rules

## 8. Cookies & Google Analytics

GA4 drops cookies in the browser for tracking when a user lands on a website.

### Cookie Data Captured:
- Time
- Location
- Device
- Page
- Product
- Duration
- Name
- Gender
- Email/login information

### Basic Flow
**User lands on website → GA4 → Cookie → Data tracked → Data sent → GA4 servers → Data processed → Report**

## 9. Reasons Data May Not Be Collected

1. Rejected cookie
2. Incognito mode
3. Website not loading correctly, preventing tracking code/cookies from working
4. Cache-related/tracking problems noted in class

## 10. What Does GA4 Track?

### Source
Examples:
- Direct
- Organic
- Ads
- Backlinks
- Social Media
- Pinterest
- Email

The direct traffic can be inflated when the original source is not identifiable.

### Channel
Default sources/channels recognized by GA4, including:
- Direct
- Organic
- Ads
- Referral

### Landing Page
The first page a user enters on. Often the homepage, but it can be a specific page reached through an ad/link.

### Exit Page
The last page a user visits before leaving the website.

Possible exit situations:
- Closing browser
- Third-party link
- Leaving page untouched for a long time

## 11. GA4 Session

**GA4 session expires after 30 minutes (default).**

The GA4 does not necessarily know what the user does after leaving the website.

## 12. GA4 Implementation

**GA4 code needs to be placed on every page of the website.**

### Google Tag Manager
**Multiple-tag dashboard** where tags can be managed/placed across website pages.

## 13. Google Analytics Debugger

A browser extension/tool used to check whether a website has the required analytics code and whether the code is working.

## Quick Revision

**Analytics:** Story backed by data.

**Search Console:** Keywords, impressions, clicks, CTR, average position.

**GA4:** Users, sessions, time, pages, leads/sales.

**LCP:** Largest Contentful Paint.

**INP:** Interaction to Next Paint.

**CLS:** Cumulative Layout Shift.

**Cookies:** Browser-based tracking mechanism used in analytics implementations.

**GTM:** Manage multiple tags.

**GA Debugger:** Check analytics implementation/debugging.

---

### Lecture — 25 August 2026
---

## 1. Analytics Across Different Websites

When two different websites are involved, their analytics data does not automatically communicate with each other.

### Example

A blogger says:

> "I sent so many people to your website."

The brand cannot simply assume that the traffic reported by the blogger's analytics is the same traffic being reported by the brand's analytics.

### Key Learning

When working with another website/creator:

- Ask for screenshots or evidence.
- Compare the analytics data.
- Do not automatically assume that analytics from two different websites will match.

> **Important:** Analytics systems on different websites generally operate independently.

---

## 2. Website Journey Terminology

A user's website journey can be understood through three important terms:

### Landing Page

The **first page** a user reaches when entering a website.

### Source

Where the user came from before reaching the website.

### Exit Page

The **last page** the user visits before leaving the website.

### Simple Journey

**Source → Landing Page → Website Journey → Exit Page**

---

## 3. Channels vs Sources

These two terms are related but different.

## Channels

Channels are **default/high-level groups of traffic sources** that analytics tools understand.

Examples:

- Organic Search / SEO
- Paid Search / Ads
- Social
- Referral
- Direct

### Sources

Sources are more specific.

For example:

**Channel:** Social  
**Source:** Facebook

Or:

**Channel:** Social  
**Source:** A particular Facebook post

Another example:

**Channel:** Referral  
**Source:** A particular third-party website

### Simple Difference

**Channel = broad category**

**Source = specific origin**

---

## 4. Similarweb

The class used **Similarweb** to understand website traffic and market-level data.

Website:

**similarweb.com**

The professor instructed students to explore Similarweb **without logging in**.

### Navigation discussed

**Products → Free Tools → Top Websites**

Students could select:

- Category
- Geography

For the activity, the focus was on **India** and **all categories**.

---

## 5. Similarweb — Website Data vs App Data

An important distinction:

### Website Data

Data about people accessing websites through:

- Desktop
- Mobile web

### App Data

Data about people using mobile applications.

These should be considered separately.

### Example

Amazon and Flipkart receive significant traffic through their apps.

However, when looking at the website rankings in Similarweb, the data being viewed is **website traffic**, not the complete picture of app usage.

> **Important:** Always understand whether the data you are analysing represents website usage or app usage.

---

## 6. Similarweb — Top Websites

Similarweb can show the most visited websites for a selected geography/category.

The class looked at the **top websites in India**.

Examples discussed included:

- Google
- YouTube
- Instagram
- WhatsApp
- ChatGPT
- Amazon
- Wikipedia

### Why This Matters for Media Planning

If a marketer wants to create a broad media plan, they need to understand:

- Where people spend their time
- Which websites have large audiences
- Which platforms can provide large-scale reach

Similarweb can therefore be useful for understanding the digital media landscape.

---

## 7. Similarweb — Paid Data

The free version provides a limited view of the data.

A paid version can provide additional information such as:

- More detailed audience segments
- City-level information
- Demographic information
- Other audience characteristics

This can be useful when planning large-scale media campaigns.

---

## 8. Similarweb Homework

Explore the following sections for **India**:

1. **Trending Websites**
2. **Top Android Apps**
3. **Top iOS Apps**

Look at what is currently popular/trending.

---

## 9. User vs Session

### User / Visitor

A person who visits a website is referred to as a:

- User
- Visitor

### Session

A session is a **30-minute tracking window**.

If a user repeatedly visits a website within the 30-minute window, those visits are counted as part of the same session.

If the user returns after the 30-minute window, it becomes a **new session**.

#### Example

**User visits → returns within 30 minutes → same session**

**User visits → returns after 30 minutes → new session**

#### Important

The **user remains the same**, but the number of sessions can increase.

---

## 10. Why the Session Concept Matters

The professor explained that the session concept helps prevent artificial inflation/manipulation of website traffic numbers.

### Example

Someone could repeatedly refresh a website to artificially increase:

- Visits
- Traffic
- Page views

A session-based tracking window helps distinguish repeated activity within the same short period.

### Key Learning

> A session provides a tracking window that helps analytics measure website behaviour more meaningfully.

---

## 11. Bounce Rate vs Engaged Sessions

The lecture compared two concepts:

### Bounce Rate

A user lands on the website and leaves **without doing anything meaningful**.

It is traditionally viewed as a negative metric.

### Engaged Session

A user lands on the website and performs meaningful activity.

The lecture presented bounce rate and engaged sessions as opposite ways of looking at user behaviour.

### Industry Shift

Earlier, the industry focused heavily on **bounce rate**.

Today, there is greater focus on **engagement** rather than simply measuring what users did not do.

---

## 12. What Makes a Session Engaged?

The lecture discussed three indicators of meaningful engagement.

A user may be considered engaged if they:

### 1. Stay for more than 10 seconds

The user spends at least 10 seconds on the website.

### 2. Complete a valuable event/conversion

For example:

- Fill a form
- Complete an important action
- Perform another action that the marketer considers valuable

### 3. Move forward to another page

The user clicks and loads another page on the website.

---

## 13. Events

An **event** is an action that takes place on a website and can be tracked.

### Examples

- Page load
- Scroll
- Video watched
- Search performed
- Form submission
- Other valuable user actions

### Two Types Discussed

#### Default Events

Events that analytics tools can track automatically.

Example:

- Page loading
- Certain scrolling activity

#### Custom Events

Events that a marketer decides to specifically track because they are important to the business.

Examples:

- Video watched
- Specific form filled
- Particular action completed

### Important Marketing Principle

The marketer must decide:

> **"What user actions are valuable to my client/business?"**

Those actions can then be tracked as events.

---

## 14. Conversion

A conversion is an action that is valuable to the business.

### Example

For an education website:

- Filling an enquiry form
- Completing an important application/action

The marketer can track these valuable actions as conversions.

---

#$ 15. Channels in Google Analytics

Channels are default groups of traffic sources.

Examples discussed:

- Direct
- Organic Search
- Paid Search
- Social
- Referral
- Other/default categories
- Unassigned

### Important

**Channel = default/broad grouping**

**Source = more specific origin**

---

## 16. Unassigned Traffic

Sometimes analytics cannot identify where a user came from.

This can happen when information about the user's origin is not passed to the analytics system.

### Example: WhatsApp

When someone clicks a website link inside WhatsApp, the platform may not pass all referral information to the website.

The analytics tool may therefore:

- Treat the traffic as Direct, or
- Classify it as Unassigned, depending on the analytics system and available information.

### Important Change

The professor explained that **Unassigned** has become more common as analytics systems have evolved.

Older systems could push more unidentified traffic into **Direct**.

---

## 17. Referral Traffic

### Referral

Traffic sent to your website by another third-party website.

### Example

A website publishes a link to your website.

A user clicks that link and arrives at your website.

That traffic can be classified as **Referral**.

### Simple Example

**Third-party website → Link → Your website**

---

## 18. Paid Search vs Display Ads

Different paid channels can be identified separately.

### Paid Search

Example:

**Google Search Ads / text ads**

### Display Advertising

Example:

**Banner/display ads**

Both are paid forms of traffic but represent different advertising environments.

---

## 19. Direct Traffic

Direct traffic can occur when a user:

- Types the URL directly
- Uses a saved/bookmarked URL
- Returns through a URL already stored in the browser

### Important Concept

Direct traffic does not always mean:

> "The user memorised the URL."

A user may have discovered the website through another marketing channel earlier.

### Example

**Email / Ads / WhatsApp → User discovers website → URL gets saved**

Later:

**User returns using saved URL → Direct traffic**

Therefore, previous marketing activity can indirectly contribute to future direct traffic.

---

## 20. Search vs Direct

If a user types a brand name into a search engine and clicks the result, that is **Organic Search**, not Direct.

### Example

User searches:

> "NMIMS"

on Google and clicks the NMIMS website.

This is classified as:

**Organic Search / SEO**

Even though the user already knew the brand.

### Direct

If the user directly enters the website URL into the browser, it can be classified as Direct.

---

## 21. Website Analysis — NMIMS

The class used website-analysis data to study the NMIMS website.

One of the metrics discussed was **Visits**.

### Device Distribution

The NMIMS website showed approximately:

- **50% Desktop**
- **49% Mobile**

This was considered interesting because many websites typically receive more traffic from mobile devices.

---

## 22. Why Can Education Websites Have More Desktop Traffic?

The professor discussed possible reasons.

Education websites can involve:

- Student portals
- Complex forms
- Applications
- Important transactions
- Large amounts of information

Users may prefer desktop/laptop devices for complex or high-value actions.

### General Principle

Users may prefer desktop when they need to:

- Complete complicated forms
- Make expensive purchases
- Perform complex tasks
- Carry out important transactions

---

## 23. First-Time vs Repeat Users

An important observation from the lecture:

### First-Time Users

First-time visitors are more likely to use **mobile**.

### Repeat Users

Repeat visitors may have a higher share of **desktop/laptop traffic**.

The professor used examples such as:

- Jewellery
- Real estate
- Lifestyle websites

### Possible Journey

**First visit → Mobile discovery**

↓

**Repeat visit → More considered activity**

↓

**Desktop may become more likely**

---

## 24. Visit Duration

### Visit Duration

The average amount of time a user spends on a website.

An example discussed in class showed approximately:

**2.5 minutes**

### Healthy Benchmark Discussed

> **More than 2 minutes = good visit duration**

---

## 25. Pages per Visit

### Pages per Visit

The average number of pages a user views during a visit.

An example discussed:

**Approximately 6 pages per visit**

### Healthy Benchmark Discussed

> **More than 3 pages = healthy**

However, benchmarks depend heavily on the type of website.

### Example

A blog may naturally have fewer pages per visit because users may only need to read one article.

An e-commerce website may have more pages because users:

- Browse products
- Compare products
- View product pages
- Add items to cart
- Continue shopping

---

## 26. How to Improve Visit Duration

To increase the time users spend on a website, marketers can use:

### 1. Comparison Tools

Useful particularly for:

- E-commerce
- Education
- Products/services with multiple options

### 2. Interactive Elements

Examples:

- Interactive tools
- Animations
- Interactive content

### 3. Videos

Videos can encourage users to spend more time on a page.

### 4. Better Mobile Formatting

For mobile users:

- Use less text
- Use bullet points
- Make content easier to scan
- Improve readability

### 5. Internal Navigation

Give users reasons and opportunities to move to another page.

---

## 27. How to Increase Pages per Visit

Encourage users to explore more pages.

### E-commerce Examples

- Popular products
- Related products
- "You may also like"
- "Other people also liked"
- Recommended products

These widgets can encourage users to continue browsing.

### Forms

Forms should generally be simple when possible.

For example:

- 2–3 fields for a simple enquiry

However, more detailed forms may be necessary for applications or other important processes.

---

## 28. Content Structure

Long blocks of text can make a website difficult to consume.

Useful techniques include:

- Short snippets
- Paragraphs
- Bullet points
- Clear sections
- "Read more" options where appropriate

The objective is to make information easier to consume and encourage users to continue exploring.

---

## 29. Clickable Elements & Website Navigation

A website should give users clear opportunities to move forward.

### Example Discussed

A banner may visually look like a button but not actually be clickable.

This can create a poor user experience.

### Key Learning

Important website elements should provide clear navigation opportunities when appropriate.

Examples:

- Clickable banners
- Buttons
- Navigation links
- Product links
- Internal links

### Simple Principle

> **If you want users to continue their journey, give them something useful to click.**

---

## 30. Website Engagement

A website should provide multiple ways for users to explore.

Examples:

- Navigation links
- Product links
- Related content
- Interactive elements
- Videos
- Clickable banners
- Recommendations

More useful pathways can encourage users to:

**Stay longer → Visit more pages → Engage more deeply**

---

## 31. Geographic Traffic

The website analysis showed traffic from outside India.

The professor highlighted that unexpected international traffic can sometimes indicate **spam traffic**.

### Important

If a client is primarily an Indian business with no obvious international audience, unexpectedly high international traffic should be investigated.

For example:

> 20–25% traffic from outside India

could require investigation into whether the traffic is genuine.

### Key Learning

> Unexpected geographic traffic should be investigated rather than automatically treated as genuine customer traffic.

---

## 32. Channel Split — NMIMS Example

The website analysis showed approximately:

- **Direct — 41%**
- **Organic Search — 44%**

This was discussed as an interesting result for an established brand.

### Important Insight

For a very well-established brand, Direct traffic might normally be expected to be strong.

However, people searching for the brand through Google can still be classified as **Organic Search**.

### Example

User searches:

> "NMIMS"

on Google.

Then clicks the NMIMS website.

That is still:

**Organic Search**

—not Direct.

---

## Quick Revision

### Website Journey

Source → Landing Page → Website Journey → Exit Page

### Channel vs Source

Channel = broad/default group

Source = specific origin

### Session

30-minute tracking window

### Bounce Rate

User arrives and leaves without meaningful engagement.

### Engaged Session

User performs meaningful activity.

Examples:

- Stays >10 seconds
- Completes a valuable event/conversion
- Moves to another page

### Event

A trackable user action.

### Conversion

A valuable action for the business.

### Referral

Traffic from another website.

### Direct

Traffic where the source is identified/classified as direct.

### Visit Duration

How long users stay.

**Lecture benchmark: >2 minutes = good**

### Pages per Visit

Average pages viewed.

Benchmark: >3 pages = healthy

### Website Engagement

More useful content + links + interactions → More exploration

### Similarweb

Useful for understanding:

- Website traffic
- Rankings
- Digital landscape
- Device distribution
- Audience/market information

**Always distinguish website data from app data.**