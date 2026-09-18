// Semester 3 Notes — Quiz Data
// Self-contained quiz data, no fetch() / no runtime Markdown parsing.
// Questions transcribed exactly from the quizzes/*.md files.
// NOTE: each question now also carries a "topic" field (derived from the
// lecture it came from in the source markdown) so quiz.html can build a
// "Topics to Revise" list. This does not change question/answer/explanation
// content, answer keys, or loadQuiz().

const quizData = {

    "digital-laws": [
        {
            question: "According to the lecture, media is described as the \"4th pillar of democracy\" alongside which institutions?",
            options: [
                { letter: "A", text: "Legislature, Executive, Judiciary" },
                { letter: "B", text: "Government, Corporations, NGOs" },
                { letter: "C", text: "Legislature, Executive, Media Houses" },
                { letter: "D", text: "Judiciary, Police, Executive" }
            ],
            answer: "A",
            topic: "Media, Echo Chambers & Algorithmic Bias",
            explanation: "The lecture describes media as the 4th pillar of democracy, alongside the legislature, executive, and judiciary."
        },
        {
            question: "What is an \"Echo Chamber,\" as defined in class?",
            options: [
                { letter: "A", text: "A method of fact-checking news content" },
                { letter: "B", text: "A bubble where a person's opinions are reinforced based on the data/content they keep receiving" },
                { letter: "C", text: "A legal defence against defamation" },
                { letter: "D", text: "A type of algorithmic bias correction tool" }
            ],
            answer: "B",
            topic: "Media, Echo Chambers & Algorithmic Bias",
            explanation: "An Echo Chamber is a bubble where a person's opinions are reinforced based on the data/content they keep receiving, usually via algorithmic recommendation."
        },
        {
            question: "According to the lecture's distinction, what differentiates \"Evolution\" from \"Appropriation\" in content/culture?",
            options: [
                { letter: "A", text: "Evolution and Appropriation are identical concepts" },
                { letter: "B", text: "Evolution is organic change within the same context/culture; Appropriation is borrowing from another culture/context, often without credit" },
                { letter: "C", text: "Appropriation always happens within the same community" },
                { letter: "D", text: "Evolution only applies to legal contexts" }
            ],
            answer: "B",
            topic: "Media, Echo Chambers & Algorithmic Bias",
            explanation: "Evolution refers to content/meaning changing naturally within the same context, while Appropriation refers to taking content/meaning and using it in a different context, commonly without credit."
        },
        {
            question: "What is an \"Infodemic,\" as discussed in class?",
            options: [
                { letter: "A", text: "A pandemic caused by social media" },
                { letter: "B", text: "An overload of information — accurate or not — that makes it hard to find trustworthy sources" },
                { letter: "C", text: "A legal term for defamation involving multiple parties" },
                { letter: "D", text: "A form of algorithmic bias" }
            ],
            answer: "B",
            topic: "Media, Echo Chambers & Algorithmic Bias",
            explanation: "An Infodemic is an overload of information (accurate or not) that makes it hard for people to find trustworthy sources; the term originated in public health but is now used more broadly."
        },
        {
            question: "According to the formula discussed for endorsements, how is \"Economic Associative Value\" calculated?",
            options: [
                { letter: "A", text: "Recognition Value − Commercial Value" },
                { letter: "B", text: "Recognition Value + Commercial Value" },
                { letter: "C", text: "Commercial Value ÷ Recognition Value" },
                { letter: "D", text: "Recognition Value × Commercial Value" }
            ],
            answer: "B",
            topic: "Media, Echo Chambers & Algorithmic Bias",
            explanation: "The lecture presents the formula: Recognition Value + Commercial Value = Economic Associative Value."
        },
        {
            question: "What is \"Algorithmic Bias,\" according to the lecture?",
            options: [
                { letter: "A", text: "A bias intentionally added by content creators" },
                { letter: "B", text: "Bias built into a program/platform because it was trained on unbalanced or unfair data" },
                { letter: "C", text: "A legal defence in defamation cases" },
                { letter: "D", text: "A form of echo chamber specific to news apps" }
            ],
            answer: "B",
            topic: "Media, Echo Chambers & Algorithmic Bias",
            explanation: "Algorithmic Bias is defined as bias built into a program or platform because it was trained on unbalanced or unfair data."
        },
        {
            question: "What does \"Right of Publicity (ROP)\" refer to, according to the lecture?",
            options: [
                { letter: "A", text: "The right to publish news without restriction" },
                { letter: "B", text: "The right related to the commercial use of a celebrity/influencer's identity, including name, image, and likeness" },
                { letter: "C", text: "A government-issued press credential" },
                { letter: "D", text: "The right to sue for false statements only" }
            ],
            answer: "B",
            topic: "Right of Publicity, Privacy & Defamation",
            explanation: "ROP covers the commercial use of a celebrity/influencer's identity — including name, image, likeness, voice, persona, and personality rights."
        },
        {
            question: "According to the \"Fame ↑ → Privacy ↓\" principle discussed in class, what happens to a public figure's Right to Privacy as their fame increases?",
            options: [
                { letter: "A", text: "Their privacy protections increase proportionally" },
                { letter: "B", text: "Their privacy becomes harder to maintain, especially on matters of public interest" },
                { letter: "C", text: "Fame has no relationship with privacy" },
                { letter: "D", text: "Privacy rights are eliminated entirely once someone becomes famous" }
            ],
            answer: "B",
            topic: "Right of Publicity, Privacy & Defamation",
            explanation: "As fame increases, privacy becomes harder to maintain — courts generally hold public figures to a narrower zone of privacy, especially on matters of public interest."
        },
        {
            question: "What is the key difference between Libel and Slander, according to the lecture?",
            options: [
                { letter: "A", text: "Libel is spoken; Slander is written" },
                { letter: "B", text: "Libel is harm through written/published communication; Slander is harm through spoken communication" },
                { letter: "C", text: "They are the same, just used in different countries" },
                { letter: "D", text: "Libel applies only to celebrities; Slander applies only to private individuals" }
            ],
            answer: "B",
            topic: "Right of Publicity, Privacy & Defamation",
            explanation: "Libel refers to reputational harm through written or published communication, while Slander refers to harm through spoken communication."
        },
        {
            question: "Which of the following is listed as one of the key elements needed to establish defamation?",
            options: [
                { letter: "A", text: "The statement must be made anonymously" },
                { letter: "B", text: "The statement must be published to a third party" },
                { letter: "C", text: "The statement must be made by a public figure" },
                { letter: "D", text: "The statement must involve financial loss" }
            ],
            answer: "B",
            topic: "Right of Publicity, Privacy & Defamation",
            explanation: "The key elements of defamation include a defamatory statement, a false statement, specific reference to an identifiable person, and publication to a third party."
        },
        {
            question: "In the Manisha Koirala v. Shashilal Nair case discussed in class, what was the outcome?",
            options: [
                { letter: "A", text: "The court granted the injunction to stop the release of the scenes" },
                { letter: "B", text: "The court dismissed her plea for an injunction" },
                { letter: "C", text: "The case was settled out of court" },
                { letter: "D", text: "The film was permanently banned" }
            ],
            answer: "B",
            topic: "Right of Publicity, Privacy & Defamation",
            explanation: "The Bombay High Court dismissed Manisha Koirala's plea for an injunction against the release of the scenes, despite her claims of defamation, invasion of privacy, and breach of contract."
        },
        {
            question: "Which of the following is listed as a defence against defamation in the lecture?",
            options: [
                { letter: "A", text: "Popularity of the speaker" },
                { letter: "B", text: "Truth" },
                { letter: "C", text: "Financial compensation to the affected party" },
                { letter: "D", text: "Anonymity of the source" }
            ],
            answer: "B",
            topic: "Right of Publicity, Privacy & Defamation",
            explanation: "The defences against defamation discussed are Truth, Public Interest, Good Faith, and Privileged Communication."
        }
    ],

    "ott": [
        {
            question: "According to the lecture, what does OTT stand for and what does it mean?",
            options: [
                { letter: "A", text: "Online Television Technology — cable-based delivery" },
                { letter: "B", text: "Over The Top — content/services delivered over the internet, bypassing traditional broadcast/cable infrastructure" },
                { letter: "C", text: "Optimal Traffic Targeting — an ad-buying method" },
                { letter: "D", text: "Over The Television — a satellite delivery system" }
            ],
            answer: "B",
            topic: "OTT Basics, TRP & Monetisation Models",
            explanation: "OTT = Over The Top, referring to content/services delivered over the internet, bypassing traditional broadcast/cable infrastructure; Netflix was used as the class example."
        },
        {
            question: "How is TRP (Television Rating Point) measured, according to the lecture?",
            options: [
                { letter: "A", text: "By counting every household in the country" },
                { letter: "B", text: "Based on sampling, not a full population count" },
                { letter: "C", text: "Only through online surveys" },
                { letter: "D", text: "By tracking OTT platform logins" }
            ],
            answer: "B",
            topic: "OTT Basics, TRP & Monetisation Models",
            explanation: "TRP is based on sampling rather than a full population count — in India it is measured via a panel of households, extrapolated to represent the whole population."
        },
        {
            question: "In the lecture, \"Hoarding\" was discussed in two different contexts. What were they?",
            options: [
                { letter: "A", text: "Outdoor billboard advertising and TV rating measurement" },
                { letter: "B", text: "IP tracking/approximation for audience exposure, and Netflix's \"Hoarding\" PR campaign" },
                { letter: "C", text: "Content licensing and subscription pricing" },
                { letter: "D", text: "Frequency capping and budget scheduling" }
            ],
            answer: "B",
            topic: "OTT Basics, TRP & Monetisation Models",
            explanation: "The two uses of \"Hoarding\" discussed were Hoarding Data (IP tracking/approximation for audience exposure) and the Netflix \"Hoarding\" Campaign (a PR stunt/brand-positioning example) — the notes flag these as distinct concepts to confirm with the professor."
        },
        {
            question: "Which OTT monetization model relies on a recurring subscription fee, according to the lecture?",
            options: [
                { letter: "A", text: "TVOD" },
                { letter: "B", text: "AVOD" },
                { letter: "C", text: "FVOD" },
                { letter: "D", text: "SVOD" }
            ],
            answer: "D",
            topic: "OTT Basics, TRP & Monetisation Models",
            explanation: "SVOD (Subscription VOD) involves a recurring subscription fee, distinguishing it from TVOD (pay/rent per title), AVOD (ad-funded, free to watch), and FVOD (free content, not necessarily ad-funded)."
        },
        {
            question: "According to the Traditional TV vs OTT comparison table, which trait describes OTT rather than Traditional TV?",
            options: [
                { letter: "A", text: "Fixed schedule / EPG" },
                { letter: "B", text: "Family/group viewing" },
                { letter: "C", text: "On-demand, individual consumption" },
                { letter: "D", text: "Limited user-level tracking" }
            ],
            answer: "C",
            topic: "OTT Basics, TRP & Monetisation Models",
            explanation: "OTT is described as on-demand with individual consumption, non-linear and globally accessible, contrasting with Traditional TV's fixed schedule, group viewing, and limited tracking."
        },
        {
            question: "What is TVOD, as defined in the lecture?",
            options: [
                { letter: "A", text: "Free content used for sampling/engagement" },
                { letter: "B", text: "Pay or rent per title, such as renting a new release for a limited window" },
                { letter: "C", text: "A recurring subscription fee" },
                { letter: "D", text: "Content monetized entirely through advertisements" }
            ],
            answer: "B",
            topic: "OTT Basics, TRP & Monetisation Models",
            explanation: "TVOD (Transactional VOD) means paying or renting per title, such as renting a new release for a limited window, sometimes with early access."
        },
        {
            question: "What does FAST stand for, according to the lecture?",
            options: [
                { letter: "A", text: "Fully Automated Streaming Technology" },
                { letter: "B", text: "Free Ad-Supported Streaming Television" },
                { letter: "C", text: "Fast Access Subscription Television" },
                { letter: "D", text: "Flexible Ad Streaming Technology" }
            ],
            answer: "B",
            topic: "OTT Ecosystem, Hybrid Monetisation & Engagement",
            explanation: "FAST = Free Ad-Supported Streaming Television — linear, scheduled (EPG-style) programming delivered over the internet and funded by ads, requiring no subscription or login."
        },
        {
            question: "In the OTT Ecosystem flow discussed in class, what is the correct order?",
            options: [
                { letter: "A", text: "Internet → Cloud → CDN → Content → User Device" },
                { letter: "B", text: "Content → Cloud → CDN → Internet → User Device" },
                { letter: "C", text: "Content → CDN → Cloud → Internet → User Device" },
                { letter: "D", text: "User Device → CDN → Cloud → Internet → Content" }
            ],
            answer: "B",
            topic: "OTT Ecosystem, Hybrid Monetisation & Engagement",
            explanation: "The OTT Ecosystem flow is Content → Cloud → CDN → Internet → User Device, where Cloud stores/processes content and CDN distributes it efficiently to the device."
        },
        {
            question: "In the OTT case study discussed (\"Anfiction,\" 18M installs), why was a hybrid monetisation model (SVOD + AVOD + FVOD) chosen?",
            options: [
                { letter: "A", text: "Because a single model always maximises revenue" },
                { letter: "B", text: "To cater to young audiences with varying time-on-platform, occasional viewing, and different willingness to pay" },
                { letter: "C", text: "Because advertising was banned on the platform" },
                { letter: "D", text: "Because subscription-only models are illegal for children's content" }
            ],
            answer: "B",
            topic: "OTT Ecosystem, Hybrid Monetisation & Engagement",
            explanation: "The hybrid model was chosen to cater to young audiences, varying time-on-platform, occasional viewers, and different willingness to pay across the user base."
        },
        {
            question: "According to the lecture, what is the key distinction between a \"User\" and an \"Active User\"?",
            options: [
                { letter: "A", text: "A User has installed/has an account, but is not necessarily active; an Active User actually engages with the platform" },
                { letter: "B", text: "They are the same thing" },
                { letter: "C", text: "A User is always more engaged than an Active User" },
                { letter: "D", text: "An Active User refers only to paying subscribers" }
            ],
            answer: "A",
            topic: "OTT Ecosystem, Hybrid Monetisation & Engagement",
            explanation: "A User has installed the app or has an account but is not necessarily active, while an Active User actually engages — watching, clicking, browsing, or interacting."
        },
        {
            question: "Which of the following is listed as an OTT engagement tactic in the lecture?",
            options: [
                { letter: "A", text: "Reducing content variety" },
                { letter: "B", text: "Personalised recommendations" },
                { letter: "C", text: "Removing watchlists" },
                { letter: "D", text: "Eliminating notifications" }
            ],
            answer: "B",
            topic: "OTT Ecosystem, Hybrid Monetisation & Engagement",
            explanation: "Engagement tactics listed include Personalised recommendations, Notifications, Offers, Watchlist, Watch Party, Rewards, Newer content, and Nostalgia value/calendar."
        },
        {
            question: "What does CLV/LTV represent in the context of OTT platforms, according to the lecture?",
            options: [
                { letter: "A", text: "The cost of acquiring a new customer" },
                { letter: "B", text: "A user's long-term value to the platform, beyond just acquisition" },
                { letter: "C", text: "The cost of content localisation" },
                { letter: "D", text: "The frequency of ad impressions per user" }
            ],
            answer: "B",
            topic: "OTT Ecosystem, Hybrid Monetisation & Engagement",
            explanation: "CLV/LTV (Customer/Lifetime Value) represents the goal of understanding a user's long-term value to the platform, rather than focusing on acquisition alone."
        }
    ],

    "media-planning": [
        {
            question: "What is the primary objective of media planning, according to the lecture?",
            options: [
                { letter: "A", text: "Maximize ROI *after* ad space is purchased" },
                { letter: "B", text: "Maximize ROI *before* ad space is purchased" },
                { letter: "C", text: "Minimize creative production costs" },
                { letter: "D", text: "Guarantee the highest possible impressions regardless of audience" }
            ],
            answer: "B",
            topic: "Media Strategy & Reach/Frequency",
            explanation: "Media planning is a strategic process focused on maximizing ROI *before* ad space is purchased, by deciding where, when and how ads are shown."
        },
        {
            question: "In the Media Mix hierarchy discussed in class, what comes immediately after \"Platform\"?",
            options: [
                { letter: "A", text: "Channel" },
                { letter: "B", text: "Media Vehicle" },
                { letter: "C", text: "Content Format" },
                { letter: "D", text: "Campaign Phase" }
            ],
            answer: "B",
            topic: "Media Strategy & Reach/Frequency",
            explanation: "The Media Mix hierarchy discussed is Channel → Platform → Media Vehicle → Content Format."
        },
        {
            question: "An ad generates 80 impressions and reaches 20 unique people. What is the frequency?",
            options: [
                { letter: "A", text: "2" },
                { letter: "B", text: "4" },
                { letter: "C", text: "400" },
                { letter: "D", text: "0.25" }
            ],
            answer: "B",
            topic: "Media Strategy & Reach/Frequency",
            explanation: "Frequency = Impressions ÷ Reach = 80 ÷ 20 = 4, matching the class example."
        },
        {
            question: "According to the lecture, which statement best describes the relationship between Earned, Owned and Paid media?",
            options: [
                { letter: "A", text: "Earned media is entirely independent of Owned and Paid media" },
                { letter: "B", text: "Earned media depends on Owned and Paid media" },
                { letter: "C", text: "Paid media depends on Earned media" },
                { letter: "D", text: "Owned media depends on Earned media" }
            ],
            answer: "B",
            topic: "Media Strategy & Reach/Frequency",
            explanation: "The notes state \"Earned depends on Owned + Paid\" — media coverage and word-of-mouth build on a brand's own channels and its paid efforts."
        },
        {
            question: "In the O2 \"Be More Dog\" campaign example, what key principle did the lecture highlight?",
            options: [
                { letter: "A", text: "Focus all budget on a single platform for consistency" },
                { letter: "B", text: "Diversify across multiple platforms while staying true to the core idea" },
                { letter: "C", text: "Avoid outdoor/offline activities entirely" },
                { letter: "D", text: "Use only paid media, with no owned or earned channels" }
            ],
            answer: "B",
            topic: "Media Strategy & Reach/Frequency",
            explanation: "The campaign used multiple platforms (YouTube, Vine, X, blogs, TV, retail, etc.) while keeping the core idea consistent — illustrating diversification, awareness and shareability."
        },
        {
            question: "In the three Campaign Phases discussed, which phase is described as having \"maximum intensity\"?",
            options: [
                { letter: "A", text: "Teaser" },
                { letter: "B", text: "Launch" },
                { letter: "C", text: "Sustenance" },
                { letter: "D", text: "Optimization" }
            ],
            answer: "B",
            topic: "Media Strategy & Reach/Frequency",
            explanation: "The Launch phase delivers the main campaign at maximum intensity, while Teaser builds curiosity beforehand and Sustenance maintains attention afterward (and can be extended)."
        },
        {
            question: "In the communication process model discussed in class, what does \"Noise\" refer to?",
            options: [
                { letter: "A", text: "The volume of paid media spend" },
                { letter: "B", text: "Anything that interferes with the intended communication at any stage" },
                { letter: "C", text: "The frequency of ad exposure" },
                { letter: "D", text: "A KPI used to measure feedback" }
            ],
            answer: "B",
            topic: "Communication Process & CRO",
            explanation: "Noise is anything that distorts intended communication — such as language/cultural barriers, tech issues, or competition — and can occur at any stage between Sender and Receiver."
        },
        {
            question: "What is the key learning highlighted by the Coca-Cola Holiday Campaign example?",
            options: [
                { letter: "A", text: "Positive intended messages always generate positive reactions" },
                { letter: "B", text: "A campaign can receive negative reactions even with a positive intended message" },
                { letter: "C", text: "Feedback is not important once a campaign launches" },
                { letter: "D", text: "Noise only affects traditional media, not digital campaigns" }
            ],
            answer: "B",
            topic: "Communication Process & CRO",
            explanation: "The lecture noted that \"what we intended to communicate\" is not always \"what the audience actually understood,\" so even a positive intended message can generate negative reactions."
        },
        {
            question: "What does CRO (Conversion Rate Optimization) aim to achieve, according to the lecture?",
            options: [
                { letter: "A", text: "Increasing traffic by increasing ad spend" },
                { letter: "B", text: "Getting a higher ROI/conversion rate from existing traffic, without increasing spend" },
                { letter: "C", text: "Reducing frequency to avoid overexposure" },
                { letter: "D", text: "Improving brand recall regardless of conversions" }
            ],
            answer: "B",
            topic: "Communication Process & CRO",
            explanation: "CRO is defined as improving the ROI/conversion rate from *existing* traffic without additional spend — same budget, better conversion performance."
        },
        {
            question: "Which of the following is listed as a \"Trust Builder\" CRO lever?",
            options: [
                { letter: "A", text: "Retargeting" },
                { letter: "B", text: "Cart Abandonment Optimization" },
                { letter: "C", text: "Reviews and testimonials" },
                { letter: "D", text: "Personalised Marketing" }
            ],
            answer: "C",
            topic: "Communication Process & CRO",
            explanation: "Trust Builders include reviews, ratings, testimonials, unboxing/influencer videos, founder presence, and similar elements that build customer confidence."
        },
        {
            question: "According to the lecture, which of these is a typical column in a Media Plan document?",
            options: [
                { letter: "A", text: "Frequency Cap Duration" },
                { letter: "B", text: "Budget" },
                { letter: "C", text: "Noise Type" },
                { letter: "D", text: "Encoding Format" }
            ],
            answer: "B",
            topic: "Communication Process & CRO",
            explanation: "Typical Media Plan columns discussed are Platform, Audience, Objective, Budget, Time & Schedule, and KPIs."
        },
        {
            question: "A marketer notices many customers add items to their cart but don't complete the purchase. Which CRO lever specifically addresses this scenario?",
            options: [
                { letter: "A", text: "Creative Optimization" },
                { letter: "B", text: "Cart Abandonment Optimization" },
                { letter: "C", text: "Landing Page Optimization" },
                { letter: "D", text: "Trust Builders" }
            ],
            answer: "B",
            topic: "Communication Process & CRO",
            explanation: "Cart Abandonment Optimization directly targets users who added items to cart but did not purchase, using retargeting, discounts, and urgency messaging."
        },
        {
            question: "In the funnel discussed in class (Awareness → Findability → Reputation → Conversion → Advocacy), which metric belongs to the \"Findability\" stage?",
            options: [
                { letter: "A", text: "Impressions" },
                { letter: "B", text: "Clicks" },
                { letter: "C", text: "Sales" },
                { letter: "D", text: "Follower growth" }
            ],
            answer: "B",
            topic: "Marketing Funnel & CPM",
            explanation: "Findability is measured via Clicks, Landing Page Views, Video Views and Engagement, while Impressions belongs to Awareness and Sales to Conversion."
        },
        {
            question: "Which reputation-measurement tool discussed in class is used for social listening/mention monitoring?",
            options: [
                { letter: "A", text: "Modash" },
                { letter: "B", text: "Brand24" },
                { letter: "C", text: "Comscore" },
                { letter: "D", text: "Statista" }
            ],
            answer: "B",
            topic: "Marketing Funnel & CPM",
            explanation: "Brand24 was described as a tool for social listening and mention monitoring, while Modash is used for influencer/follower analysis."
        },
        {
            question: "A campaign generates 150 impressions and reaches 50 unique people. What is the frequency?",
            options: [
                { letter: "A", text: "2" },
                { letter: "B", text: "3" },
                { letter: "C", text: "5" },
                { letter: "D", text: "7,500" }
            ],
            answer: "B",
            topic: "Marketing Funnel & CPM",
            explanation: "Frequency = Impressions ÷ Reach = 150 ÷ 50 = 3, matching the class example."
        },
        {
            question: "According to the lecture, when is a YouTube skippable in-stream ad counted as a \"view\"?",
            options: [
                { letter: "A", text: "As soon as the ad starts playing" },
                { letter: "B", text: "After 30 seconds are watched (or the full ad, if shorter), or on interaction" },
                { letter: "C", text: "Only if the viewer clicks the CTA" },
                { letter: "D", text: "Non-skippable ads always count as views" }
            ],
            answer: "B",
            topic: "Marketing Funnel & CPM",
            explanation: "A skippable in-stream ad view is counted at 30 seconds watched (or the full ad if shorter) or on interaction with the CTA/card/banner; non-skippable ads don't generate a \"view\" metric at all."
        },
        {
            question: "What principle did the lecture emphasize regarding marketing funnel models such as AIDA, 5A, and See-Think-Do-Care?",
            options: [
                { letter: "A", text: "Only one specific model should ever be used" },
                { letter: "B", text: "Advocacy should always be included, whichever model is chosen" },
                { letter: "C", text: "Awareness is not necessary if Conversion metrics are strong" },
                { letter: "D", text: "These models apply only to traditional media" }
            ],
            answer: "B",
            topic: "Marketing Funnel & CPM",
            explanation: "The lecture stressed: \"Whichever model you use, always include Advocacy.\""
        },
        {
            question: "What is the correct formula for CPM (Cost Per Mille) discussed in class?",
            options: [
                { letter: "A", text: "Spend ÷ Clicks" },
                { letter: "B", text: "Spend ÷ Impressions" },
                { letter: "C", text: "(Spend ÷ Impressions) × 1,000" },
                { letter: "D", text: "(Spend ÷ Clicks) × 1,000" }
            ],
            answer: "C",
            topic: "Marketing Funnel & CPM",
            explanation: "CPM = (Spend ÷ Impressions) × 1,000, giving cost per 1,000 impressions — e.g., ₹1,000 spend ÷ 50,000 impressions × 1,000 = ₹20."
        },
        {
            question: "According to the lecture, how should a marketer remarket to a user who reached the product page but did not proceed?",
            options: [
                { letter: "A", text: "Show a generic brand-awareness ad" },
                { letter: "B", text: "Remarket with an offer/discount" },
                { letter: "C", text: "Stop targeting the user entirely" },
                { letter: "D", text: "Send a loyalty reward immediately" }
            ],
            answer: "B",
            topic: "Remarketing, CTR, CAC & ROI",
            explanation: "For users who reached the product page without action, the lecture recommends remarketing with an offer/discount — distinct from the homepage or cart-stage remarketing actions."
        },
        {
            question: "What is the correct formula for CTR (Click-Through Rate) as discussed in class?",
            options: [
                { letter: "A", text: "(Conversions ÷ Clicks) × 100" },
                { letter: "B", text: "(Clicks ÷ Impressions) × 100" },
                { letter: "C", text: "Spend ÷ Clicks" },
                { letter: "D", text: "(Impressions ÷ Clicks) × 100" }
            ],
            answer: "B",
            topic: "Remarketing, CTR, CAC & ROI",
            explanation: "CTR = (Clicks ÷ Impressions) × 100. Being a ratio, it allows fair comparison between campaigns regardless of scale."
        },
        {
            question: "Ad A has 5,00,000 impressions and 1% CTR; Ad B has 1,20,000 impressions and 2% CTR. According to the lecture's reasoning, which ad \"wins\" on CTR?",
            options: [
                { letter: "A", text: "Ad A, because it has more impressions" },
                { letter: "B", text: "Ad B, despite having fewer impressions" },
                { letter: "C", text: "Both perform identically" },
                { letter: "D", text: "Neither — CTR cannot be compared across campaigns" }
            ],
            answer: "B",
            topic: "Remarketing, CTR, CAC & ROI",
            explanation: "This example shows that raw impression/click counts can mislead — CTR, being a ratio, shows Ad B performs better despite fewer impressions."
        },
        {
            question: "What does CAC (Customer Acquisition Cost) measure, according to the lecture's formula?",
            options: [
                { letter: "A", text: "Marketing Spend ÷ New Customers Acquired only" },
                { letter: "B", text: "(Marketing Spend + Sales Spend) ÷ New Customers Acquired" },
                { letter: "C", text: "Revenue from Ads ÷ Ad Spend" },
                { letter: "D", text: "Average Order Value × Purchase Frequency" }
            ],
            answer: "B",
            topic: "Remarketing, CTR, CAC & ROI",
            explanation: "CAC = (Marketing Spend + Sales Spend) ÷ New Customers Acquired. The lecture emphasized including sales-side costs (CRM, sales team, etc.), not just ad spend."
        },
        {
            question: "In the class ROI example (₹75,000 spend, 250 new customers, ₹1,000 avg. purchase value, ₹600 fulfilment cost/order), what was the calculated ROI?",
            options: [
                { letter: "A", text: "25%" },
                { letter: "B", text: "33.3%" },
                { letter: "C", text: "50%" },
                { letter: "D", text: "100%" }
            ],
            answer: "B",
            topic: "Remarketing, CTR, CAC & ROI",
            explanation: "Net profit before ad spend = ₹1,00,000; ROI = (1,00,000 − 75,000) ÷ 75,000 × 100 = 33.3%."
        },
        {
            question: "What is the key distinction between ROAS and ROI, as discussed in the lecture?",
            options: [
                { letter: "A", text: "ROAS focuses on profit; ROI focuses on revenue" },
                { letter: "B", text: "ROAS focuses on revenue; ROI accounts for cost/net profit" },
                { letter: "C", text: "They are calculated identically" },
                { letter: "D", text: "ROAS applies only to offline media" }
            ],
            answer: "B",
            topic: "Remarketing, CTR, CAC & ROI",
            explanation: "ROAS = Revenue from Ads ÷ Ad Spend, focusing on revenue, while ROI = ((Gain − Cost) ÷ Cost) × 100, factoring in net gain after cost."
        },
        {
            question: "According to the lecture, what is the main focus of Media Buying as opposed to Media Planning?",
            options: [
                { letter: "A", text: "Research and targeting" },
                { letter: "B", text: "Execution and placement" },
                { letter: "C", text: "Setting long-term brand objectives" },
                { letter: "D", text: "Persona development" }
            ],
            answer: "B",
            topic: "Media Buying, A/B Testing & UTM Rules",
            explanation: "Buying focuses on execution — negotiation, purchasing, and optimisation — while Planning focuses on strategy: research, targeting and budgeting."
        },
        {
            question: "Which of the following is an example of a self-serve advertising platform discussed in class?",
            options: [
                { letter: "A", text: "Vogue collaborations" },
                { letter: "B", text: "Meta" },
                { letter: "C", text: "A radio station" },
                { letter: "D", text: "A billboard vendor" }
            ],
            answer: "B",
            topic: "Media Buying, A/B Testing & UTM Rules",
            explanation: "Meta (along with Google and Amazon) was discussed as a self-serve platform where advertisers run ads through a dashboard without contacting a person directly; Vogue/collaborations was the non-self-serve example."
        },
        {
            question: "In A/B testing, what important rule did the professor emphasize?",
            options: [
                { letter: "A", text: "Test as many parameters as possible simultaneously" },
                { letter: "B", text: "Change only one parameter at a time" },
                { letter: "C", text: "Always test creative and landing page together" },
                { letter: "D", text: "A/B testing should only be used for email campaigns" }
            ],
            answer: "B",
            topic: "Media Buying, A/B Testing & UTM Rules",
            explanation: "The professor stressed changing only one variable at a time (e.g., only the landing page) while keeping others, like creative, targeting and placement, constant."
        },
        {
            question: "According to the lecture, a Daily Budget is generally more suitable for which situation?",
            options: [
                { letter: "A", text: "Long-established brands with tested audiences" },
                { letter: "B", text: "Shorter campaigns and new/untested audiences" },
                { letter: "C", text: "Campaigns needing platform-paced spending over months" },
                { letter: "D", text: "Campaigns with no need for close control" }
            ],
            answer: "B",
            topic: "Media Buying, A/B Testing & UTM Rules",
            explanation: "Daily budgets were discussed as suitable for shorter campaigns, new/untested audiences, smaller budgets, and situations needing close day-to-day control."
        },
        {
            question: "What is the important rule about UTM parameters emphasized in class?",
            options: [
                { letter: "A", text: "UTMs should always be added to internal website links for consistency" },
                { letter: "B", text: "UTMs should be used for external traffic sources, not internal website navigation" },
                { letter: "C", text: "UTM parameters are only relevant for email campaigns" },
                { letter: "D", text: "UTM values are not case-sensitive" }
            ],
            answer: "B",
            topic: "Media Buying, A/B Testing & UTM Rules",
            explanation: "The lecture and the class UTM quiz confirmed that using UTMs on internal links can overwrite the original traffic source; UTMs should be used on external links bringing traffic to the site."
        },
        {
            question: "Which research tool was discussed in class as commonly requiring a paid subscription for detailed reports?",
            options: [
                { letter: "A", text: "Comscore" },
                { letter: "B", text: "Nielsen" },
                { letter: "C", text: "Statista" },
                { letter: "D", text: "Google Analytics" }
            ],
            answer: "C",
            topic: "Media Buying, A/B Testing & UTM Rules",
            explanation: "The lecture noted that Statista provides reports across topics, but many detailed reports require a paid subscription."
        }
    ],

    "ecommerce": [
        {
            question: "According to the lecture, what are the five digital marketing channels discussed for e-commerce?",
            options: [
                { letter: "A", text: "SEO, SEM, Content Marketing, Email Marketing, Social Media Marketing" },
                { letter: "B", text: "SEO, PR, Affiliate Marketing, Direct Mail, TV" },
                { letter: "C", text: "SEM, Display, OTT, Radio, Print" },
                { letter: "D", text: "Content, Influencer, Retail Media, Affiliate, SMS" }
            ],
            answer: "A",
            topic: "Digital Marketing Channels & Customer Journey",
            explanation: "The lecture explicitly lists SEO, SEM, Content Marketing, Email Marketing, and Social Media Marketing as the five channels."
        },
        {
            question: "What is the key difference between SEO and SEM highlighted in class?",
            options: [
                { letter: "A", text: "SEO is paid visibility; SEM is organic visibility" },
                { letter: "B", text: "SEO = earn visibility; SEM = pay for visibility" },
                { letter: "C", text: "SEO and SEM are the same thing" },
                { letter: "D", text: "SEM is slower than SEO" }
            ],
            answer: "B",
            topic: "Digital Marketing Channels & Customer Journey",
            explanation: "The lecture defines SEO as earning visibility (organic) and SEM as paying for visibility (paid search)."
        },
        {
            question: "In the Nykaa case study, what approach did the lecture highlight for driving product discovery?",
            options: [
                { letter: "A", text: "Heavy paid advertising with minimal content" },
                { letter: "B", text: "Product guides and educational content leading to discovery" },
                { letter: "C", text: "Exclusive reliance on influencer marketing" },
                { letter: "D", text: "Cold email campaigns only" }
            ],
            answer: "B",
            topic: "Digital Marketing Channels & Customer Journey",
            explanation: "The Nykaa case study highlighted product guides and educational content in the flow: Search → Educational Content → Product Discovery → Consideration → Purchase."
        },
        {
            question: "According to the lecture, what is the overall customer journey model for e-commerce?",
            options: [
                { letter: "A", text: "Attract → Convert → Retain" },
                { letter: "B", text: "Discover → Consider → Buy → Come Back" },
                { letter: "C", text: "Awareness → Interest → Desire → Action" },
                { letter: "D", text: "Plan → Reach → Act → Convert" }
            ],
            answer: "B",
            topic: "Digital Marketing Channels & Customer Journey",
            explanation: "The e-commerce customer journey discussed is Discover → Consider → Buy → Come Back."
        },
        {
            question: "Which statement best reflects the lecture's framing of \"Attention is the new shelf space\"?",
            options: [
                { letter: "A", text: "Physical retail shelf space no longer matters at all" },
                { letter: "B", text: "Capturing consumer attention online is analogous to securing shelf space in traditional retail" },
                { letter: "C", text: "Only paid ads can capture consumer attention online" },
                { letter: "D", text: "Shelf space is irrelevant to digital marketing" }
            ],
            answer: "B",
            topic: "Digital Marketing Channels & Customer Journey",
            explanation: "The lecture frames attention as the modern equivalent of retail shelf space, driving the flow Attention → Awareness → Consideration → Purchase."
        },
        {
            question: "What is the primary strength of Email Marketing, according to the \"How the Channels Work Together\" table?",
            options: [
                { letter: "A", text: "Long-term organic traffic" },
                { letter: "B", text: "Education and authority" },
                { letter: "C", text: "Relationship and loyalty" },
                { letter: "D", text: "Brand voice and visibility" }
            ],
            answer: "C",
            topic: "Digital Marketing Channels & Customer Journey",
            explanation: "Email's main role is Purchase → Retention, with its strength being relationship and loyalty, distinct from SEO's organic traffic or Social's brand voice."
        },
        {
            question: "Which e-commerce segment do Blinkit, Zepto, and Instamart belong to, according to the lecture?",
            options: [
                { letter: "A", text: "Horizontal Marketplaces" },
                { letter: "B", text: "Quick Commerce" },
                { letter: "C", text: "D2C & Social Commerce" },
                { letter: "D", text: "Value & Reseller Commerce" }
            ],
            answer: "B",
            topic: "Quick Commerce, GEO/AEO & DPDP Act",
            explanation: "Blinkit, Zepto, Instamart and Amazon Now are categorised under Quick Commerce, characterised by fast delivery and growing ad revenue."
        },
        {
            question: "What new concept did the lecture introduce as part of SEO's evolution in 2026?",
            options: [
                { letter: "A", text: "CRM Optimization" },
                { letter: "B", text: "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization)" },
                { letter: "C", text: "CPM Bidding Strategy" },
                { letter: "D", text: "Retail Media Auctions" }
            ],
            answer: "B",
            topic: "Quick Commerce, GEO/AEO & DPDP Act",
            explanation: "The lecture introduced GEO and AEO — optimizing for visibility inside AI-generated answers, becoming a citable source, not just ranking in classic search."
        },
        {
            question: "In the Myntra example under Email Marketing, what key learning was emphasized?",
            options: [
                { letter: "A", text: "Send as many emails as possible to maximise reach" },
                { letter: "B", text: "Right trigger + Right message + Right moment" },
                { letter: "C", text: "Email marketing is less effective than SEM" },
                { letter: "D", text: "Avoid behaviour-triggered flows" }
            ],
            answer: "B",
            topic: "Quick Commerce, GEO/AEO & DPDP Act",
            explanation: "Myntra's behaviour-triggered flows (cart abandonment, post-purchase) illustrated the principle: Right trigger + Right message + Right moment."
        },
        {
            question: "According to the lecture, what does India's DPDP Act relate to in the context of digital marketing?",
            options: [
                { letter: "A", text: "Retail media auction rules" },
                { letter: "B", text: "Consent becoming part of marketing execution, not just a legal formality" },
                { letter: "C", text: "SEO ranking algorithms" },
                { letter: "D", text: "Quick-commerce delivery regulations" }
            ],
            answer: "B",
            topic: "Quick Commerce, GEO/AEO & DPDP Act",
            explanation: "The lecture discussed the Digital Personal Data Protection (DPDP) Act as making consent an operational part of marketing execution, not merely a legal box to tick."
        },
        {
            question: "Which career path is associated with the \"Content\" channel in the lecture's career opportunities list?",
            options: [
                { letter: "A", text: "PPC Analyst" },
                { letter: "B", text: "Content Marketing Manager" },
                { letter: "C", text: "CRM/Lifecycle Marketing Manager" },
                { letter: "D", text: "Social Media Manager" }
            ],
            answer: "B",
            topic: "Quick Commerce, GEO/AEO & DPDP Act",
            explanation: "Content Marketing was linked to roles such as Content Marketing Manager, Brand Storyteller, and Creator Partnerships Lead."
        },
        {
            question: "In the Mamaearth integrated example, which combination of channels was used?",
            options: [
                { letter: "A", text: "Only SEO and Content" },
                { letter: "B", text: "SEO + SEM + Content + Email + Social" },
                { letter: "C", text: "Only Social Media and Email" },
                { letter: "D", text: "SEM and Affiliate Marketing only" }
            ],
            answer: "B",
            topic: "Quick Commerce, GEO/AEO & DPDP Act",
            explanation: "Mamaearth's integrated example combined SEO (ingredient blogs), SEM (sponsored placements), Content (YouTube/Insta education), Email (replenishment reminders), and Social (influencer/UGC community)."
        },
        {
            question: "What does the \"S\" in SMART goals stand for, according to the lecture?",
            options: [
                { letter: "A", text: "Sustainable" },
                { letter: "B", text: "Specific" },
                { letter: "C", text: "Strategic" },
                { letter: "D", text: "Social" }
            ],
            answer: "B",
            topic: "SMART Goals, Budgeting & E-commerce Types",
            explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound."
        },
        {
            question: "According to the lecture's example budget allocation, which category received the largest share?",
            options: [
                { letter: "A", text: "Content & Influencer Marketing" },
                { letter: "B", text: "Retention: Email & WhatsApp" },
                { letter: "C", text: "Performance Marketing" },
                { letter: "D", text: "Testing: New Channels & New Creatives" }
            ],
            answer: "C",
            topic: "SMART Goals, Budgeting & E-commerce Types",
            explanation: "The example allocation gave 50% to Performance Marketing — the largest share — followed by 25% Content & Influencer, 15% Retention, and 10% Testing."
        },
        {
            question: "Which e-commerce type does IndiaMART represent, according to the lecture's examples?",
            options: [
                { letter: "A", text: "B2C" },
                { letter: "B", text: "B2B" },
                { letter: "C", text: "C2C" },
                { letter: "D", text: "D2C" }
            ],
            answer: "B",
            topic: "SMART Goals, Budgeting & E-commerce Types",
            explanation: "IndiaMART was given as the example for B2B (Business to Business) e-commerce, where one business sells to another."
        },
        {
            question: "According to the lecture's funnel-based channel selection, which metric corresponds to the \"Consideration\" stage?",
            options: [
                { letter: "A", text: "Reach/Impressions" },
                { letter: "B", text: "CTR" },
                { letter: "C", text: "Conversion Rate" },
                { letter: "D", text: "Repeat Purchase" }
            ],
            answer: "B",
            topic: "SMART Goals, Budgeting & E-commerce Types",
            explanation: "The funnel-based KPIs are Awareness → Reach/Impressions, Consideration → CTR, Purchase → Conversion Rate, Retention → Repeat Purchase."
        },
        {
            question: "What is described as a key advantage of e-commerce marketing over traditional marketing?",
            options: [
                { letter: "A", text: "Higher production costs" },
                { letter: "B", text: "Measurability — digital activities can be tracked and measured" },
                { letter: "C", text: "Guaranteed higher sales" },
                { letter: "D", text: "Simpler creative requirements" }
            ],
            answer: "B",
            topic: "SMART Goals, Budgeting & E-commerce Types",
            explanation: "The lecture contrasts traditional marketing as broadcast-oriented with e-commerce/digital marketing's ability to measure user behaviour, responses and outcomes."
        },
        {
            question: "According to the E-Commerce Evolution timeline discussed in class, which period is associated with \"Quick Commerce\" as the major development?",
            options: [
                { letter: "A", text: "1994–2000" },
                { letter: "B", text: "2007–2012" },
                { letter: "C", text: "2020–2023" },
                { letter: "D", text: "2024–2026" }
            ],
            answer: "C",
            topic: "SMART Goals, Budgeting & E-commerce Types",
            explanation: "The timeline lists 2020–2023 as the Quick Commerce era, following 2016–2019 (E-Commerce) and preceding 2024–2026 (AI)."
        }
    ],

    "mobile": [
        {
            question: "According to the lecture, what does mobile marketing use to communicate with and influence consumers?",
            options: [
                { letter: "A", text: "Only mobile apps" },
                { letter: "B", text: "Mobile devices, apps, and networks through specific touchpoints" },
                { letter: "C", text: "Only SMS messaging" },
                { letter: "D", text: "Traditional broadcast channels adapted for mobile" }
            ],
            answer: "B",
            topic: "Mobile Marketing Types & Objectives",
            explanation: "Mobile marketing is defined as the use of mobile devices, apps, and networks through specific touchpoints to communicate with and influence consumers."
        },
        {
            question: "Which of the following is listed as one of the six types of mobile marketing discussed in class?",
            options: [
                { letter: "A", text: "Radio Advertising" },
                { letter: "B", text: "Location-Based Marketing" },
                { letter: "C", text: "Print Advertising" },
                { letter: "D", text: "Outdoor Hoardings" }
            ],
            answer: "B",
            topic: "Mobile Marketing Types & Objectives",
            explanation: "The six types listed are Mobile Ads, Mobile Messaging, Push Notifications, Mobile App Marketing, Location-Based Marketing, and Mobile Commerce."
        },
        {
            question: "What four factors were identified as making mobile marketing effective?",
            options: [
                { letter: "A", text: "Reach + Frequency + Impressions + Budget" },
                { letter: "B", text: "Relevance + Timing + Value + Consent" },
                { letter: "C", text: "Creative + Copy + Design + Placement" },
                { letter: "D", text: "Awareness + Interest + Desire + Action" }
            ],
            answer: "B",
            topic: "Mobile Marketing Types & Objectives",
            explanation: "The lecture states effectiveness comes from Relevance + Timing + Value + Consent."
        },
        {
            question: "According to the \"FOR\" debate point discussed in class, what advantage does mobile marketing offer?",
            options: [
                { letter: "A", text: "Lower personalization than other channels" },
                { letter: "B", text: "Ability to measure the complete cycle and reach audiences instantly" },
                { letter: "C", text: "No need for targeting" },
                { letter: "D", text: "It works exclusively for app-based businesses" }
            ],
            answer: "B",
            topic: "Mobile Marketing Types & Objectives",
            explanation: "The \"FOR\" mobile marketing debate point states it can be more personalized, better at targeting, reach audiences instantly, and measure the complete cycle."
        },
        {
            question: "In the Objectives of Mobile Marketing sequence, what comes immediately after \"Lead Generation\"?",
            options: [
                { letter: "A", text: "Awareness" },
                { letter: "B", text: "App Acquisition" },
                { letter: "C", text: "Retention" },
                { letter: "D", text: "Loyalty" }
            ],
            answer: "B",
            topic: "Mobile Marketing Types & Objectives",
            explanation: "The objectives sequence is Awareness → Lead Generation → App Acquisition → Sales & Conversion → Engagement → Retention → Loyalty."
        },
        {
            question: "In the FreshBite case study, what is the \"Mobile Moment\" concept described as?",
            options: [
                { letter: "A", text: "A discount applied only on mobile devices" },
                { letter: "B", text: "Targeting the exact moment a consumer needs the product, e.g. a lunchtime ping" },
                { letter: "C", text: "The moment a user installs the app" },
                { letter: "D", text: "A one-time onboarding notification" }
            ],
            answer: "B",
            topic: "Mobile Ad Formats & Mobile Moments",
            explanation: "The \"Mobile Moment\" refers to reaching the consumer at the precise moment of need, such as a 12 PM lunch ping or dinner-hour reminder — relevance at the point of need."
        },
        {
            question: "Which ad format is described as allowing users to try a demo before downloading an app?",
            options: [
                { letter: "A", text: "Interstitial Ads" },
                { letter: "B", text: "Playable Ads" },
                { letter: "C", text: "Banner Ads" },
                { letter: "D", text: "Rich Media Ads" }
            ],
            answer: "B",
            topic: "Mobile Ad Formats & Mobile Moments",
            explanation: "Playable Ads are interactive, mostly used in mobile gaming, letting users try a demo before downloading — associated with high engagement and app acquisition."
        },
        {
            question: "According to the lecture, what is the key distinction between In-Stream and Out-Stream video ads?",
            options: [
                { letter: "A", text: "In-Stream plays inside an existing video; Out-Stream plays outside a video player (e.g., mid-article)" },
                { letter: "B", text: "In-Stream is only for mobile games; Out-Stream is only for websites" },
                { letter: "C", text: "They are identical concepts with different names" },
                { letter: "D", text: "Out-Stream requires stronger existing viewing intent than In-Stream" }
            ],
            answer: "A",
            topic: "Mobile Ad Formats & Mobile Moments",
            explanation: "In-Stream plays inside existing video content (e.g., YouTube pre-roll) where the user is already watching video, while Out-Stream plays outside a video player, extending video reach to users who are browsing/reading."
        },
        {
            question: "Why is \"In-App Advertising\" described as different from formats like banner or video ads?",
            options: [
                { letter: "A", text: "It cannot use banners or videos at all" },
                { letter: "B", text: "It describes a placement, not a creative format — a banner, video, native, rewarded, or rich-media unit can all be delivered in-app" },
                { letter: "C", text: "It is only usable for cross-promotion" },
                { letter: "D", text: "It is not measurable" }
            ],
            answer: "B",
            topic: "Mobile Ad Formats & Mobile Moments",
            explanation: "The lecture clarifies that \"In-App\" describes placement, not creative format; an in-app ad can take the form of any other format, such as banner, video, native, rewarded, or rich-media."
        },
        {
            question: "In the class scenario recommendations, which formats were recommended for a new smartphone launch, and why?",
            options: [
                { letter: "A", text: "Notification-Led and Banner, because they are cheapest" },
                { letter: "B", text: "Video, Rich Media, and Interstitial, because the launch needs awareness, demonstration, and high visibility" },
                { letter: "C", text: "Playable only, because gaming audiences are the target" },
                { letter: "D", text: "Cross-Promotional Ads only" }
            ],
            answer: "B",
            topic: "Mobile Ad Formats & Mobile Moments",
            explanation: "A new smartphone launch was matched with Video, Rich Media and Interstitial formats to deliver awareness, product demonstration, and high visibility."
        },
        {
            question: "What is the main objective of the \"6-second challenge\" described in the lecture?",
            options: [
                { letter: "A", text: "To fully explain all product features within 6 seconds" },
                { letter: "B", text: "To capture curiosity and attention quickly, given constant consumer distraction" },
                { letter: "C", text: "To replace all 30-second video ads" },
                { letter: "D", text: "To increase CPM rates" }
            ],
            answer: "B",
            topic: "Mobile Ad Formats & Mobile Moments",
            explanation: "A 6-second video can't do what a 30-second video does; its objective is simply curiosity and attention — introducing the brand/product and prompting \"learn more.\""
        },
        {
            question: "According to the lecture, what do the three core questions \"Where, What, and Who\" refer to in mobile advertising?",
            options: [
                { letter: "A", text: "Where = Budget, What = Audience, Who = Timing" },
                { letter: "B", text: "Where = Ad placement, What = Ad type and format, Who = Target audience" },
                { letter: "C", text: "Where = Creative, What = Platform, Who = Objective" },
                { letter: "D", text: "Where = Timing, What = Budget, Who = Placement" }
            ],
            answer: "B",
            topic: "Ad Placement, Type/Format & Targeting",
            explanation: "The lecture frames Where as ad placement, What as ad type and ad format, and Who as the target audience."
        },
        {
            question: "What is the key distinction the lecture draws between \"Ad Type\" and \"Ad Format\"?",
            options: [
                { letter: "A", text: "They mean exactly the same thing" },
                { letter: "B", text: "Ad Type is the communication objective/experience; Ad Format is the creative shape, size, style, and delivery" },
                { letter: "C", text: "Ad Type refers only to video; Ad Format refers only to banners" },
                { letter: "D", text: "Ad Format determines the target audience; Ad Type determines the budget" }
            ],
            answer: "B",
            topic: "Ad Placement, Type/Format & Targeting",
            explanation: "Ad Type refers to the communication objective or advertising experience, while Ad Format refers to the creative shape, size, style, and way the ad is delivered."
        },
        {
            question: "In the Xiaomi calendar example, what lesson does the lecture draw?",
            options: [
                { letter: "A", text: "Calendars should never be used for advertising" },
                { letter: "B", text: "Even a utility app like a calendar can become an effective ad placement if the communication is relevant to the user's context" },
                { letter: "C", text: "Calendar ads always perform worse than banner ads" },
                { letter: "D", text: "Xiaomi discontinued using the calendar for ads due to poor performance" }
            ],
            answer: "B",
            topic: "Ad Placement, Type/Format & Targeting",
            explanation: "The example shows that relevance and context can make even a utility touchpoint like a calendar an effective advertising placement."
        },
        {
            question: "For the Duolingo subscription-upgrade example discussed in class, which format was recommended to \"give users a sneak peek of additional features\"?",
            options: [
                { letter: "A", text: "Banner" },
                { letter: "B", text: "Playable" },
                { letter: "C", text: "Notification-Led" },
                { letter: "D", text: "Interstitial" }
            ],
            answer: "B",
            topic: "Ad Placement, Type/Format & Targeting",
            explanation: "The Playable format was recommended to give users a sneak peek of premium features before committing to a subscription upgrade."
        },
        {
            question: "Why does the lecture describe Interstitial ads as more suitable for a one-day offer than a month-long generic discount?",
            options: [
                { letter: "A", text: "Interstitials are cheaper for long campaigns" },
                { letter: "B", text: "Interstitials are high-impact and relatively expensive, better matched to time-sensitive, major promotions" },
                { letter: "C", text: "Interstitials cannot be used for discounts" },
                { letter: "D", text: "Interstitials always have low visibility" }
            ],
            answer: "B",
            topic: "Ad Placement, Type/Format & Targeting",
            explanation: "Interstitial/full-screen ads are high-impact and relatively expensive, making them more suitable for one-day offers or major launches than for a generic long-running discount."
        },
        {
            question: "Which targeting type is illustrated by the example of a travel blog showing a travel-agency (SOTC) advertisement?",
            options: [
                { letter: "A", text: "Demographic Targeting" },
                { letter: "B", text: "Geographic Targeting" },
                { letter: "C", text: "Contextual Targeting" },
                { letter: "D", text: "Device-Based Targeting" }
            ],
            answer: "C",
            topic: "Ad Placement, Type/Format & Targeting",
            explanation: "Contextual targeting is based on the content or environment the consumer is currently viewing — a travel-related ad on a travel blog is contextually relevant."
        }
    ],

    "analytics": [
        {
            question: "How is \"Analytics\" defined in the lecture?",
            options: [
                { letter: "A", text: "A technical process unrelated to storytelling" },
                { letter: "B", text: "A story with/backed by data, used to make projections and reasoned decisions" },
                { letter: "C", text: "Only the process of collecting cookies" },
                { letter: "D", text: "A synonym for SEO" }
            ],
            answer: "B",
            topic: "Analytics Basics & Core Web Vitals",
            explanation: "Analytics is defined as a \"story with data\" / backed by data, used to make projections and use intelligence to make reasoned decisions."
        },
        {
            question: "According to the lecture, which of the following is measured by Google Search Console rather than GA4?",
            options: [
                { letter: "A", text: "Sessions" },
                { letter: "B", text: "Time spent" },
                { letter: "C", text: "Average position" },
                { letter: "D", text: "Leads/Sales" }
            ],
            answer: "C",
            topic: "Analytics Basics & Core Web Vitals",
            explanation: "Google Search Console tracks search performance metrics such as Keywords, Impressions, Clicks, CTR, and Average position, while GA4 tracks website/user behaviour like Users, Sessions, Time spent, and Leads/Sales."
        },
        {
            question: "Which Core Web Vital measures the visual/layout stability of a page while it loads?",
            options: [
                { letter: "A", text: "LCP" },
                { letter: "B", text: "INP" },
                { letter: "C", text: "CLS" },
                { letter: "D", text: "CTR" }
            ],
            answer: "C",
            topic: "Analytics Basics & Core Web Vitals",
            explanation: "CLS (Cumulative Layout Shift) measures visual/layout stability during loading; LCP measures loading speed and INP measures responsiveness after interaction."
        },
        {
            question: "According to the lecture, which of the following is NOT listed as a reason data may not be collected by GA4?",
            options: [
                { letter: "A", text: "Rejected cookie consent" },
                { letter: "B", text: "Incognito/private browsing mode" },
                { letter: "C", text: "A high number of returning visitors" },
                { letter: "D", text: "Website not loading correctly, blocking the tracking code" }
            ],
            answer: "C",
            topic: "Analytics Basics & Core Web Vitals",
            explanation: "The lecture lists rejected cookie consent, incognito mode, website loading issues, and cache-related tracking issues as reasons data may not be collected — a high number of returning visitors is not one of them."
        },
        {
            question: "What is the default GA4 session timeout duration discussed in class?",
            options: [
                { letter: "A", text: "10 minutes" },
                { letter: "B", text: "30 minutes" },
                { letter: "C", text: "1 hour" },
                { letter: "D", text: "7 hours 55 minutes" }
            ],
            answer: "B",
            topic: "Analytics Basics & Core Web Vitals",
            explanation: "The default GA4 session timeout is 30 minutes, though it is adjustable up to 7 hours 55 minutes."
        },
        {
            question: "What is the purpose of Google Tag Manager (GTM), according to the lecture?",
            options: [
                { letter: "A", text: "It is a browser extension to verify tracking code" },
                { letter: "B", text: "It is a dashboard used to manage and deploy multiple tags across a site" },
                { letter: "C", text: "It replaces the need for GA4 entirely" },
                { letter: "D", text: "It is used only for SEO audits" }
            ],
            answer: "B",
            topic: "Analytics Basics & Core Web Vitals",
            explanation: "GTM is a dashboard to manage and deploy multiple tags across a website, distinct from the Google Analytics Debugger, which verifies tracking code is firing correctly."
        },
        {
            question: "According to the lecture, what should you do if a creator/blogger claims they sent a specific number of visitors to your site?",
            options: [
                { letter: "A", text: "Accept the number automatically, since analytics tools rarely differ" },
                { letter: "B", text: "Ask for screenshots/evidence and compare with your own analytics" },
                { letter: "C", text: "Ignore the claim entirely without investigation" },
                { letter: "D", text: "Assume their analytics tool is more accurate than yours" }
            ],
            answer: "B",
            topic: "Channels, Sources & Engaged Sessions",
            explanation: "The lecture cautions that two websites' analytics don't automatically reconcile, so such claims should be verified with screenshots/evidence."
        },
        {
            question: "What is the key difference between \"Channel\" and \"Source\" in analytics terminology?",
            options: [
                { letter: "A", text: "Channel is a specific origin; Source is a broad category" },
                { letter: "B", text: "Channel is a broad category (e.g., Social); Source is a specific origin (e.g., Facebook)" },
                { letter: "C", text: "They are interchangeable terms" },
                { letter: "D", text: "Channel only applies to paid traffic" }
            ],
            answer: "B",
            topic: "Channels, Sources & Engaged Sessions",
            explanation: "Channel refers to a broad category such as Social or Organic Search, while Source is the specific origin within that channel, such as Facebook."
        },
        {
            question: "According to GA4's definition discussed in class, which of the following alone can qualify a session as \"engaged\"?",
            options: [
                { letter: "A", text: "Staying on the site for at least 10 seconds" },
                { letter: "B", text: "Viewing exactly 1 page" },
                { letter: "C", text: "Leaving the site within 5 seconds" },
                { letter: "D", text: "Rejecting cookie consent" }
            ],
            answer: "A",
            topic: "Channels, Sources & Engaged Sessions",
            explanation: "GA4 defines an engaged session using OR logic — any one of: staying 10+ seconds, completing a valuable event/conversion, or viewing 2+ pages qualifies."
        },
        {
            question: "A user searches for a brand's name on Google and clicks the resulting listing. According to the lecture, how is this traffic classified?",
            options: [
                { letter: "A", text: "Direct traffic" },
                { letter: "B", text: "Organic Search" },
                { letter: "C", text: "Referral traffic" },
                { letter: "D", text: "Unassigned traffic" }
            ],
            answer: "B",
            topic: "Channels, Sources & Engaged Sessions",
            explanation: "The lecture clarifies that searching a brand name on Google and clicking the result counts as Organic Search, not Direct — only a manually typed URL counts as Direct."
        },
        {
            question: "Why might a website unexpectedly show 20–25% traffic from outside its target country (e.g., an India-only business)?",
            options: [
                { letter: "A", text: "This is always a sign of a highly successful international campaign" },
                { letter: "B", text: "It can signal spam/bot traffic and should be investigated" },
                { letter: "C", text: "It means the website's SEO ranking has improved" },
                { letter: "D", text: "It is guaranteed to be genuine organic interest" }
            ],
            answer: "B",
            topic: "Channels, Sources & Engaged Sessions",
            explanation: "The lecture notes that unexpectedly high international traffic for a geographically-focused business can signal spam/bot traffic, warranting investigation rather than assumption."
        },
        {
            question: "According to the lecture, why do education-focused websites like NMIMS tend to skew more toward desktop traffic than typical mobile-heavy sites?",
            options: [
                { letter: "A", text: "Students do not own smartphones" },
                { letter: "B", text: "Complex forms, applications, and high-value transactions lead users to prefer desktop for these tasks" },
                { letter: "C", text: "Desktop devices load pages faster in general" },
                { letter: "D", text: "Mobile browsing is banned on college networks" }
            ],
            answer: "B",
            topic: "Channels, Sources & Engaged Sessions",
            explanation: "The lecture attributes this to complex forms, applications and important/high-value transactions, for which users prefer desktop devices."
        },
        {
            question: "What is the Brand Visibility formula discussed in class?",
            options: [
                { letter: "A", text: "Brand Mentions ÷ Total Website Visitors × 100" },
                { letter: "B", text: "Brand Mentions ÷ Total Relevant Category Mentions × 100" },
                { letter: "C", text: "Total Category Mentions ÷ Brand Mentions × 100" },
                { letter: "D", text: "Brand Mentions − Category Mentions" }
            ],
            answer: "B",
            topic: "Brand Visibility, UTM & Attribution Models",
            explanation: "Brand Visibility = Brand Mentions ÷ Total Relevant Category Mentions × 100 — e.g., 47 mentions out of 100 category searches = 47%."
        },
        {
            question: "According to the lecture, what does \"Citation Analysis\" in AI visibility tools identify?",
            options: [
                { letter: "A", text: "The sentiment of brand mentions" },
                { letter: "B", text: "Which websites AI cited as sources when generating an answer" },
                { letter: "C", text: "The exact prompt that led to a brand mention" },
                { letter: "D", text: "The core average visibility across a category" }
            ],
            answer: "B",
            topic: "Brand Visibility, UTM & Attribution Models",
            explanation: "Citation Analysis identifies which websites AI cited as sources (AI Answer → Citation → Source Website), useful for spotting SEO/PR/backlink opportunities."
        },
        {
            question: "Which UTM parameter is used to distinguish between two different creative variants of the same campaign?",
            options: [
                { letter: "A", text: "utm_source" },
                { letter: "B", text: "utm_medium" },
                { letter: "C", text: "utm_campaign" },
                { letter: "D", text: "utm_content" }
            ],
            answer: "D",
            topic: "Brand Visibility, UTM & Attribution Models",
            explanation: "utm_content is used to distinguish creative variants, e.g. \"creative_a\" vs \"creative_b,\" while utm_source, utm_medium, and utm_campaign identify platform, traffic type, and campaign name respectively."
        },
        {
            question: "In the UTM naming rules discussed in class, which of the following is correct?",
            options: [
                { letter: "A", text: "UTM values are not case-sensitive" },
                { letter: "B", text: "Multiple \"?\" symbols can be used in one URL for multiple parameters" },
                { letter: "C", text: "UTM parameters are case-sensitive and should avoid spaces" },
                { letter: "D", text: "Spaces in UTM values are automatically handled correctly by all platforms" }
            ],
            answer: "C",
            topic: "Brand Visibility, UTM & Attribution Models",
            explanation: "The lecture states UTM values are case-sensitive (e.g., \"Facebook\" ≠ \"facebook\") and should avoid spaces, using hyphens or underscores instead."
        },
        {
            question: "According to the important update noted in the lecture, which attribution models remain selectable today in Google Ads and GA4?",
            options: [
                { letter: "A", text: "First Click and Linear only" },
                { letter: "B", text: "Last Click and Data-Driven only" },
                { letter: "C", text: "Position-Based and Time Decay only" },
                { letter: "D", text: "All models remain fully selectable" }
            ],
            answer: "B",
            topic: "Brand Visibility, UTM & Attribution Models",
            explanation: "Google officially deprecated First Click, Linear, Time Decay, and Position-Based as selectable models in 2023 — only Last Click and Data-Driven remain selectable (with existing conversions auto-migrated to Data-Driven)."
        },
        {
            question: "In the Position-Based attribution model example discussed in class (Instagram → Google → Email → Purchase), how is credit distributed?",
            options: [
                { letter: "A", text: "100% to Instagram" },
                { letter: "B", text: "Equal credit (⅓) to each channel" },
                { letter: "C", text: "40% Instagram, 20% Google, 40% Email" },
                { letter: "D", text: "100% to Email only" }
            ],
            answer: "C",
            topic: "Brand Visibility, UTM & Attribution Models",
            explanation: "Position-Based attribution gives 40% credit to the first channel, 40% to the last channel, and 20% split among middle channels — in this journey: Instagram 40%, Google 20%, Email 40%."
        },
        {
            question: "According to the \"Last Click exception\" discussed in class, what happens if Direct is the last channel in a conversion path?",
            options: [
                { letter: "A", text: "Direct still receives 100% of the credit" },
                { letter: "B", text: "The second-last source receives the credit instead" },
                { letter: "C", text: "No channel receives any credit" },
                { letter: "D", text: "Credit is split equally among all channels" }
            ],
            answer: "B",
            topic: "Attribution Exceptions & GA4 Reports",
            explanation: "If Direct is the last touchpoint, it does not get 100% credit — the second-last source receives it instead, reflecting the idea that a Direct visit may just be a recalled/bookmarked URL first seen via another channel."
        },
        {
            question: "In the \"Ads Preferred\" attribution model, what happens if there is no Google Ads touchpoint in the conversion path?",
            options: [
                { letter: "A", text: "The first channel automatically receives 100% credit" },
                { letter: "B", text: "The last channel gets full credit" },
                { letter: "C", text: "No credit is attributed at all" },
                { letter: "D", text: "Data-Driven attribution is used instead" }
            ],
            answer: "B",
            topic: "Attribution Exceptions & GA4 Reports",
            explanation: "The Ads Preferred exception states that if there's no Google Ads touchpoint in the path, the last channel in the path receives full credit."
        },
        {
            question: "According to the lecture, what does GA4's Real-Time report show?",
            options: [
                { letter: "A", text: "Data from the past 24 hours" },
                { letter: "B", text: "The last 30 minutes of activity" },
                { letter: "C", text: "Data from the previous calendar month" },
                { letter: "D", text: "Only e-commerce transactions" }
            ],
            answer: "B",
            topic: "Attribution Exceptions & GA4 Reports",
            explanation: "GA4's Real-Time data shows the last 30 minutes of activity, useful for verifying that a fresh campaign or tracking setup is working."
        },
        {
            question: "Which Google product discussed in class is specifically focused on mobile app advertising?",
            options: [
                { letter: "A", text: "Google Merchant Center" },
                { letter: "B", text: "Google AdMob" },
                { letter: "C", text: "DV360" },
                { letter: "D", text: "Google Business Profile" }
            ],
            answer: "B",
            topic: "Attribution Exceptions & GA4 Reports",
            explanation: "Google AdMob was discussed as the platform for mobile app advertising, distinct from Merchant Center (shopping ads), DV360 (programmatic display/video), and Business Profile (local presence)."
        },
        {
            question: "According to the professor's noted preference, which acquisition report is considered more important for reporting purposes?",
            options: [
                { letter: "A", text: "User Acquisition" },
                { letter: "B", text: "Traffic Acquisition (by session)" },
                { letter: "C", text: "Lead Acquisition" },
                { letter: "D", text: "Non-Google Campaigns" }
            ],
            answer: "B",
            topic: "Attribution Exceptions & GA4 Reports",
            explanation: "The professor noted that sessions are more important for reporting, favouring Traffic Acquisition (acquisition by session) over User Acquisition."
        },
        {
            question: "In the GA4 Exercise on the Google Merchandise Store demo, which answer was identified for the Date/Performance question about the highest-traffic weekend days?",
            options: [
                { letter: "A", text: "Weekdays only" },
                { letter: "B", text: "Sat & Sun" },
                { letter: "C", text: "A single specific weekday" },
                { letter: "D", text: "Referral traffic only" }
            ],
            answer: "B",
            topic: "Attribution Exceptions & GA4 Reports",
            explanation: "The exercise's Date/Performance answers identified \"Sat & Sun\" as the relevant answer within that part of the demo exercise."
        },
        {
            question: "What is the purpose of \"Annotations\" in GA4, according to the lecture?",
            options: [
                { letter: "A", text: "To automatically fix tracking errors" },
                { letter: "B", text: "To add notes directly to reports, explaining changes or highlighting important observations" },
                { letter: "C", text: "To create custom dashboards" },
                { letter: "D", text: "To delete outdated events" }
            ],
            answer: "B",
            topic: "GA4 Annotations & WordPress Integration",
            explanation: "Annotations let users add notes to GA4 reports to record events, explain data changes, or highlight important observations such as traffic spikes or campaign launches."
        },
        {
            question: "What is TasteWP, as discussed in class?",
            options: [
                { letter: "A", text: "A GA4 reporting dashboard" },
                { letter: "B", text: "A tool for creating temporary WordPress test sites" },
                { letter: "C", text: "A UTM parameter generator" },
                { letter: "D", text: "An SEO auditing tool" }
            ],
            answer: "B",
            topic: "GA4 Annotations & WordPress Integration",
            explanation: "TasteWP is a tool for creating temporary WordPress test sites, used for experimenting with themes, plugins, and the backend without affecting a live website."
        },
        {
            question: "According to the lecture, when does Enhanced Measurement start collecting website interactions like scrolls and outbound clicks?",
            options: [
                { letter: "A", text: "Automatically the moment a GA4 property is created" },
                { letter: "B", text: "Only after it is enabled/configured at the web data stream level" },
                { letter: "C", text: "Only if Google Tag Manager is also installed" },
                { letter: "D", text: "Only for e-commerce websites" }
            ],
            answer: "B",
            topic: "GA4 Annotations & WordPress Integration",
            explanation: "The lecture stresses that Enhanced Measurement is not activated simply by creating a GA4 property — it must be enabled at the web data stream level."
        },
        {
            question: "Which of the three WordPress + GA4 integration techniques discussed involves adding the Google tag directly to the site's HTML?",
            options: [
                { letter: "A", text: "Plugins" },
                { letter: "B", text: "Google Tag Manager" },
                { letter: "C", text: "Direct Tracking Code" },
                { letter: "D", text: "Enhanced Measurement" }
            ],
            answer: "C",
            topic: "GA4 Annotations & WordPress Integration",
            explanation: "Direct Tracking Code involves adding the Google tag directly to the site's HTML, immediately after the opening `<head>` tag, as opposed to using a plugin or GTM as an intermediary layer."
        },
        {
            question: "According to the lecture, what does GA4's \"Landing Page\" dimension represent?",
            options: [
                { letter: "A", text: "The last page a user visits before leaving" },
                { letter: "B", text: "The page associated with the first page view in a session" },
                { letter: "C", text: "Only the website's homepage" },
                { letter: "D", text: "A page with the highest bounce rate" }
            ],
            answer: "B",
            topic: "GA4 Annotations & WordPress Integration",
            explanation: "The Landing Page dimension is defined as the page associated with the first page view in a session — it can be the homepage, a product page, or any page where the visitor first arrives."
        },
        {
            question: "If a website uses a shared header file across multiple pages, how should the GA4 tracking tag be added according to the lecture?",
            options: [
                { letter: "A", text: "Add the tag separately to every single page" },
                { letter: "B", text: "Edit the shared header file once, and the tag applies to all pages using it" },
                { letter: "C", text: "Tags cannot be added to pages using a shared header" },
                { letter: "D", text: "Use a different plugin for each page" }
            ],
            answer: "B",
            topic: "GA4 Annotations & WordPress Integration",
            explanation: "For a shared header file, editing that one file places the tag on all pages using it, whereas an independent landing page not using the shared header needs the tag added separately."
        }
    ],

    "affiliate": [
        {
            question: "How is Affiliate Marketing defined in the lecture?",
            options: [
                { letter: "A", text: "A fixed-fee advertising arrangement regardless of performance" },
                { letter: "B", text: "A performance-based marketing partnership where affiliates earn commission based on customer actions" },
                { letter: "C", text: "A form of traditional broadcast advertising" },
                { letter: "D", text: "A subscription-based content model" }
            ],
            answer: "B",
            topic: "Affiliate Marketing Basics & Commission Models",
            explanation: "Affiliate Marketing is defined as a performance-based marketing partnership where an affiliate earns a commission based on customer actions such as clicks, leads, or purchases."
        },
        {
            question: "In the three-way affiliate relationship, who pays the commission?",
            options: [
                { letter: "A", text: "The social media platform where content is published" },
                { letter: "B", text: "The consumer" },
                { letter: "C", text: "The Merchant/Advertiser" },
                { letter: "D", text: "The Affiliate Network only" }
            ],
            answer: "C",
            topic: "Affiliate Marketing Basics & Commission Models",
            explanation: "The lecture explicitly notes that the merchant pays the commission, not the social platform where the affiliate publishes content."
        },
        {
            question: "Which commission model is best suited for high-end products like beauty or fashion, according to the class observation?",
            options: [
                { letter: "A", text: "Pay Per Sale (PPS)" },
                { letter: "B", text: "Pay Per Lead (PPL)" },
                { letter: "C", text: "Pay Per Click (PPC)" },
                { letter: "D", text: "Pay Per Impression" }
            ],
            answer: "C",
            topic: "Affiliate Marketing Basics & Commission Models",
            explanation: "The class observation notes that beauty, fashion and other high-end products may use click-based (PPC) affiliate models."
        },
        {
            question: "According to the lecture, what benchmark matters more than follower count when evaluating an affiliate?",
            options: [
                { letter: "A", text: "The affiliate's number of years active" },
                { letter: "B", text: "Engagement with followers and ability to generate customer action" },
                { letter: "C", text: "The affiliate's location" },
                { letter: "D", text: "The affiliate's number of past brand partnerships" }
            ],
            answer: "B",
            topic: "Affiliate Marketing Basics & Commission Models",
            explanation: "Merchants look beyond follower count to engagement, audience interaction, relevance, and ability to generate actual customer action — a smaller, highly engaged creator can be more valuable than a larger one with low engagement."
        },
        {
            question: "What role does \"cookie duration\" play in affiliate tracking, according to the lecture?",
            options: [
                { letter: "A", text: "It determines the affiliate's payment currency" },
                { letter: "B", text: "It determines how long a customer's activity can be attributed to the affiliate" },
                { letter: "C", text: "It sets the maximum number of affiliates per merchant" },
                { letter: "D", text: "It has no impact on commission disputes" }
            ],
            answer: "B",
            topic: "Affiliate Marketing Basics & Commission Models",
            explanation: "Cookie duration (tracking duration) determines how long a customer's activity can be attributed to the affiliate; without proper tracking, commission disputes can occur."
        },
        {
            question: "Which of the following platforms was NOT mentioned in the lecture's list of affiliate networks/e-commerce platforms discussed?",
            options: [
                { letter: "A", text: "Amazon Associates" },
                { letter: "B", text: "EarnKaro" },
                { letter: "C", text: "Shopify" },
                { letter: "D", text: "LinkedIn Ads" }
            ],
            answer: "D",
            topic: "Affiliate Marketing Basics & Commission Models",
            explanation: "The lecture lists Amazon Associates, Flipkart, Meesho, Shopify, EarnKaro, and CashKaro as platforms/examples discussed — LinkedIn Ads was not mentioned in this context."
        }
    ],

    "ai": []

};

function loadQuiz(subject) {
    return quizData[subject] || [];
}
