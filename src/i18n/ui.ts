import type { Locales } from "./utils";

/**
 * All UI strings for every supported locale.
 * Add new strings here — never hardcode text in components.
 */
export const ui = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.aiml": "AI & ML",
    "nav.python": "Python",
    "nav.aitools": "AI Tools",
    "nav.projects": "Projects",
    "nav.career": "Career",
    "nav.tutorials": "Tutorials",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.search": "Search",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    // Language switcher
    "lang.en": "English",
    "lang.kn": "ಕನ್ನಡ",
    "lang.hi": "हिन्दी",
    "lang.switchTo": "Switch to",
    "lang.current": "Current language",

    // Hero
    "hero.headline": "Learn AI. Build Projects. Grow Your Career.",
    "hero.subheadline":
      "Practical AI, Python, technology and career guides for students and aspiring developers.",
    "hero.cta.primary": "Explore Articles",
    "hero.cta.secondary": "Start Learning",

    // Sections
    "section.featured": "Featured Articles",
    "section.latest": "Latest Articles",
    "section.categories": "Browse Categories",
    "section.related": "Related Articles",
    "section.readMore": "Read More",
    "section.viewAll": "View All",
    "section.loadMore": "Load More Articles",

    // Article meta
    "article.readingTime": "min read",
    "article.by": "By",
    "article.publishedOn": "Published on",
    "article.updatedOn": "Last updated",
    "article.inCategory": "In",
    "article.toc": "Table of Contents",
    "article.share": "Share this article",
    "article.tags": "Tags",
    "article.prevArticle": "Previous Article",
    "article.nextArticle": "Next Article",

    // Author
    "author.writtenBy": "Written by",
    "author.articlesBy": "Articles by",
    "author.follow": "Follow",

    // Search
    "search.placeholder": "Search articles, topics, tools...",
    "search.noResults": "No results found for",
    "search.resultsFor": "Search results for",
    "search.searching": "Searching...",
    "search.close": "Close search",
    "search.openSearch": "Open search",

    // Newsletter
    "newsletter.title": "Get Practical AI & Tech Guides",
    "newsletter.subtitle":
      "Join thousands of students getting weekly AI, Python, and career tips.",
    "newsletter.emailPlaceholder": "Enter your email address",
    "newsletter.cta": "Subscribe Free",
    "newsletter.privacy": "No spam. Unsubscribe anytime.",
    "newsletter.leadMagnet": "Free AI/ML Beginner Roadmap",
    "newsletter.leadMagnetCta": "Get the Free Roadmap",
    "newsletter.success":
      "You're subscribed! Check your email for the roadmap.",
    "newsletter.error": "Something went wrong. Please try again.",

    // Social share
    "share.whatsapp": "Share on WhatsApp",
    "share.linkedin": "Share on LinkedIn",
    "share.twitter": "Share on X (Twitter)",
    "share.facebook": "Share on Facebook",
    "share.copy": "Copy link",
    "share.copied": "Link copied!",

    // Categories
    "category.aiml": "AI & Machine Learning",
    "category.python": "Python & Coding",
    "category.aitools": "AI Tools",
    "category.projects": "Projects",
    "category.career": "Career",
    "category.tutorials": "Tutorials",

    // Affiliate
    "affiliate.disclosure": "Affiliate link — we may earn a commission",
    "affiliate.learn": "Learn More",

    // Ad
    "ad.label": "Advertisement",

    // Footer
    "footer.tagline": "Learn AI. Build Projects. Grow Your Career.",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with ❤️ for students in India",
    "footer.content": "Content",
    "footer.legal": "Legal",
    "footer.connect": "Connect",

    // Legal pages
    "legal.privacy": "Privacy Policy",
    "legal.terms": "Terms & Conditions",
    "legal.disclaimer": "Disclaimer",
    "legal.affiliateDisclosure": "Affiliate Disclosure",
    "legal.cookiePolicy": "Cookie Policy",

    // 404
    "404.title": "Page Not Found",
    "404.subtitle": "The page you're looking for doesn't exist or has moved.",
    "404.cta": "Go to Homepage",

    // Breadcrumbs
    "breadcrumb.home": "Home",

    // Dark mode
    "theme.toggle": "Toggle dark mode",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",

    // About
    "about.title": "About AI Career Lab",

    // Contact
    "contact.title": "Contact Us",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.message": "Your Message",
    "contact.send": "Send Message",

    // Pagination
    "pagination.prev": "Previous",
    "pagination.next": "Next",
    "pagination.page": "Page",
    "pagination.of": "of",
  },

  kn: {
    // Navigation
    "nav.home": "ಮುಖಪುಟ",
    "nav.aiml": "AI & ML",
    "nav.python": "Python",
    "nav.aitools": "AI ಸಾಧನಗಳು",
    "nav.projects": "ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು",
    "nav.career": "ಕೆರಿಯರ್",
    "nav.tutorials": "ಟ್ಯುಟೋರಿಯಲ್‌ಗಳು",
    "nav.about": "ಬಗ್ಗೆ",
    "nav.contact": "ಸಂಪರ್ಕಿಸಿ",
    "nav.search": "ಹುಡುಕಿ",
    "nav.openMenu": "ಮೆನು ತೆರೆಯಿರಿ",
    "nav.closeMenu": "ಮೆನು ಮುಚ್ಚಿರಿ",

    // Language switcher
    "lang.en": "English",
    "lang.kn": "ಕನ್ನಡ",
    "lang.hi": "हिन्दी",
    "lang.switchTo": "ಭಾಷೆ ಬದಲಿಸಿ",
    "lang.current": "ಪ್ರಸ್ತುತ ಭಾಷೆ",

    // Hero
    "hero.headline": "AI ಕಲಿಯಿರಿ. Projects ನಿರ್ಮಿಸಿ. ಕೆರಿಯರ್ ಬೆಳೆಸಿ.",
    "hero.subheadline":
      "ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಆಕಾಂಕ್ಷಿ developers ಗಾಗಿ AI, Python ಮತ್ತು ಕೆರಿಯರ್ ಮಾರ್ಗದರ್ಶಿಗಳು.",
    "hero.cta.primary": "ಲೇಖನಗಳನ್ನು ನೋಡಿ",
    "hero.cta.secondary": "ಕಲಿಕೆ ಆರಂಭಿಸಿ",

    // Sections
    "section.featured": "ಮುಖ್ಯ ಲೇಖನಗಳು",
    "section.latest": "ಹೊಸ ಲೇಖನಗಳು",
    "section.categories": "ವಿಷಯ ವಿಭಾಗಗಳು",
    "section.related": "ಸಂಬಂಧಿತ ಲೇಖನಗಳು",
    "section.readMore": "ಮತ್ತಷ್ಟು ಓದಿ",
    "section.viewAll": "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",
    "section.loadMore": "ಹೆಚ್ಚು ಲೇಖನಗಳು",

    // Article meta
    "article.readingTime": "ನಿಮಿಷ ಓದು",
    "article.by": "ಲೇಖಕ",
    "article.publishedOn": "ಪ್ರಕಟಿಸಿದ ದಿನಾಂಕ",
    "article.updatedOn": "ಕೊನೆ ಅಪ್‌ಡೇಟ್",
    "article.inCategory": "ವಿಭಾಗ",
    "article.toc": "ವಿಷಯ ಪಟ್ಟಿ",
    "article.share": "ಈ ಲೇಖನ ಹಂಚಿಕೊಳ್ಳಿ",
    "article.tags": "ಟ್ಯಾಗ್‌ಗಳು",
    "article.prevArticle": "ಹಿಂದಿನ ಲೇಖನ",
    "article.nextArticle": "ಮುಂದಿನ ಲೇಖನ",

    // Author
    "author.writtenBy": "ಲೇಖಕ",
    "author.articlesBy": "ಲೇಖನಗಳು",
    "author.follow": "ಅನುಸರಿಸಿ",

    // Search
    "search.placeholder": "ಲೇಖನಗಳು, ವಿಷಯಗಳು ಹುಡುಕಿ...",
    "search.noResults": "ಯಾವುದೂ ಕಂಡುಬರಲಿಲ್ಲ",
    "search.resultsFor": "ಫಲಿತಾಂಶಗಳು",
    "search.searching": "ಹುಡುಕುತ್ತಿದ್ದೇವೆ...",
    "search.close": "ಮುಚ್ಚಿ",
    "search.openSearch": "ಹುಡುಕಾಟ ತೆರೆಯಿರಿ",

    // Newsletter
    "newsletter.title": "Practical AI & Tech ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ಪಡೆಯಿರಿ",
    "newsletter.subtitle":
      "ಪ್ರತಿ ವಾರ AI, Python ಮತ್ತು ಕೆರಿಯರ್ ಸಲಹೆಗಳನ್ನು ಇಮೇಲ್‌ನಲ್ಲಿ ಪಡೆಯಿರಿ.",
    "newsletter.emailPlaceholder": "ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ",
    "newsletter.cta": "ಉಚಿತ Subscribe",
    "newsletter.privacy": "Spam ಇಲ್ಲ. ಯಾವಾಗ ಬೇಕಾದರೂ ನಿಲ್ಲಿಸಬಹುದು.",
    "newsletter.leadMagnet": "ಉಚಿತ AI/ML Beginner Roadmap",
    "newsletter.leadMagnetCta": "Roadmap ಪಡೆಯಿರಿ",
    "newsletter.success": "Subscribe ಯಶಸ್ವಿ! ಇಮೇಲ್ ಪರಿಶೀಲಿಸಿ.",
    "newsletter.error": "ದೋಷ ಸಂಭವಿಸಿದೆ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",

    // Social share
    "share.whatsapp": "WhatsApp ನಲ್ಲಿ ಹಂಚಿ",
    "share.linkedin": "LinkedIn ನಲ್ಲಿ ಹಂಚಿ",
    "share.twitter": "X (Twitter) ನಲ್ಲಿ ಹಂಚಿ",
    "share.facebook": "Facebook ನಲ್ಲಿ ಹಂಚಿ",
    "share.copy": "Link ಕಾಪಿ ಮಾಡಿ",
    "share.copied": "Link ಕಾಪಿ ಆಯಿತು!",

    // Categories
    "category.aiml": "AI & Machine Learning",
    "category.python": "Python & Coding",
    "category.aitools": "AI ಸಾಧನಗಳು",
    "category.projects": "ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು",
    "category.career": "ಕೆರಿಯರ್",
    "category.tutorials": "ಟ್ಯುಟೋರಿಯಲ್‌ಗಳು",

    // Affiliate
    "affiliate.disclosure": "Affiliate link — ನಾವು commission ಗಳಿಸಬಹುದು",
    "affiliate.learn": "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",

    // Ad
    "ad.label": "ಜಾಹೀರಾತು",

    // Footer
    "footer.tagline": "AI ಕಲಿಯಿರಿ. Projects ನಿರ್ಮಿಸಿ. ಕೆರಿಯರ್ ಬೆಳೆಸಿ.",
    "footer.rights": "ಎಲ್ಲ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer.madeWith": "ಭಾರತದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗಾಗಿ ❤️ ನಿಂದ ತಯಾರಿಸಲಾಗಿದೆ",
    "footer.content": "ವಿಷಯ",
    "footer.legal": "ಕಾನೂನು",
    "footer.connect": "ಸಂಪರ್ಕ",

    // Legal
    "legal.privacy": "ಗೌಪ್ಯತಾ ನೀತಿ",
    "legal.terms": "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
    "legal.disclaimer": "ಹೊಣೆಗಾರಿಕೆ ನಿರಾಕರಣೆ",
    "legal.affiliateDisclosure": "Affiliate ಬಹಿರಂಗ",
    "legal.cookiePolicy": "Cookie ನೀತಿ",

    // 404
    "404.title": "ಪುಟ ಕಂಡುಬರಲಿಲ್ಲ",
    "404.subtitle": "ನೀವು ಹುಡುಕುತ್ತಿರುವ ಪುಟ ಇಲ್ಲ ಅಥವಾ ಸ್ಥಳಾಂತರಗೊಂಡಿದೆ.",
    "404.cta": "ಮುಖಪುಟಕ್ಕೆ ಹೋಗಿ",

    // Breadcrumbs
    "breadcrumb.home": "ಮುಖಪುಟ",

    // Dark mode
    "theme.toggle": "ಥೀಮ್ ಬದಲಿಸಿ",
    "theme.light": "ಬೆಳಕಿನ ಮೋಡ್",
    "theme.dark": "ಕತ್ತಲೆಯ ಮೋಡ್",

    // About
    "about.title": "AI Career Lab ಬಗ್ಗೆ",

    // Contact
    "contact.title": "ಸಂಪರ್ಕಿಸಿ",
    "contact.name": "ನಿಮ್ಮ ಹೆಸರು",
    "contact.email": "ನಿಮ್ಮ ಇಮೇಲ್",
    "contact.message": "ನಿಮ್ಮ ಸಂದೇಶ",
    "contact.send": "ಸಂದೇಶ ಕಳಿಸಿ",

    // Pagination
    "pagination.prev": "ಹಿಂದಿನ",
    "pagination.next": "ಮುಂದಿನ",
    "pagination.page": "ಪುಟ",
    "pagination.of": "ರಲ್ಲಿ",
  },

  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.aiml": "AI & ML",
    "nav.python": "Python",
    "nav.aitools": "AI टूल्स",
    "nav.projects": "प्रोजेक्ट्स",
    "nav.career": "करियर",
    "nav.tutorials": "ट्यूटोरियल्स",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क",
    "nav.search": "खोजें",
    "nav.openMenu": "मेनू खोलें",
    "nav.closeMenu": "मेनू बंद करें",

    // Language switcher
    "lang.en": "English",
    "lang.kn": "ಕನ್ನಡ",
    "lang.hi": "हिन्दी",
    "lang.switchTo": "भाषा बदलें",
    "lang.current": "वर्तमान भाषा",

    // Hero
    "hero.headline": "AI सीखें। Projects बनाएं। करियर बढ़ाएं।",
    "hero.subheadline":
      "छात्रों और नए developers के लिए AI, Python, Technology और करियर की practical गाइड्स।",
    "hero.cta.primary": "आर्टिकल्स देखें",
    "hero.cta.secondary": "सीखना शुरू करें",

    // Sections
    "section.featured": "मुख्य आर्टिकल्स",
    "section.latest": "नए आर्टिकल्स",
    "section.categories": "विषय वर्ग",
    "section.related": "संबंधित आर्टिकल्स",
    "section.readMore": "और पढ़ें",
    "section.viewAll": "सभी देखें",
    "section.loadMore": "और आर्टिकल्स लोड करें",

    // Article meta
    "article.readingTime": "मिनट पढ़ें",
    "article.by": "द्वारा",
    "article.publishedOn": "प्रकाशित",
    "article.updatedOn": "अपडेट किया",
    "article.inCategory": "वर्ग",
    "article.toc": "विषय सूची",
    "article.share": "यह आर्टिकल शेयर करें",
    "article.tags": "टैग्स",
    "article.prevArticle": "पिछला आर्टिकल",
    "article.nextArticle": "अगला आर्टिकल",

    // Author
    "author.writtenBy": "लेखक",
    "author.articlesBy": "के आर्टिकल्स",
    "author.follow": "फॉलो करें",

    // Search
    "search.placeholder": "आर्टिकल्स, विषय, टूल्स खोजें...",
    "search.noResults": "कोई परिणाम नहीं मिला",
    "search.resultsFor": "परिणाम",
    "search.searching": "खोज रहे हैं...",
    "search.close": "बंद करें",
    "search.openSearch": "खोज खोलें",

    // Newsletter
    "newsletter.title": "Practical AI & Tech गाइड्स पाएं",
    "newsletter.subtitle":
      "हर हफ्ते AI, Python और करियर टिप्स सीधे आपके inbox में।",
    "newsletter.emailPlaceholder": "अपना ईमेल दर्ज करें",
    "newsletter.cta": "Free Subscribe करें",
    "newsletter.privacy": "Spam नहीं। कभी भी unsubscribe करें।",
    "newsletter.leadMagnet": "Free AI/ML Beginner Roadmap",
    "newsletter.leadMagnetCta": "Roadmap पाएं",
    "newsletter.success": "Subscribe हो गया! ईमेल चेक करें।",
    "newsletter.error": "कुछ गलत हुआ। दोबारा कोशिश करें।",

    // Social share
    "share.whatsapp": "WhatsApp पर शेयर करें",
    "share.linkedin": "LinkedIn पर शेयर करें",
    "share.twitter": "X (Twitter) पर शेयर करें",
    "share.facebook": "Facebook पर शेयर करें",
    "share.copy": "Link कॉपी करें",
    "share.copied": "Link कॉपी हो गई!",

    // Categories
    "category.aiml": "AI & Machine Learning",
    "category.python": "Python & Coding",
    "category.aitools": "AI टूल्स",
    "category.projects": "प्रोजेक्ट्स",
    "category.career": "करियर",
    "category.tutorials": "ट्यूटोरियल्स",

    // Affiliate
    "affiliate.disclosure": "Affiliate link — हम commission कमा सकते हैं",
    "affiliate.learn": "और जानें",

    // Ad
    "ad.label": "विज्ञापन",

    // Footer
    "footer.tagline": "AI सीखें। Projects बनाएं। करियर बढ़ाएं।",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
    "footer.madeWith": "भारत के छात्रों के लिए ❤️ के साथ बनाया गया",
    "footer.content": "सामग्री",
    "footer.legal": "कानूनी",
    "footer.connect": "जुड़ें",

    // Legal
    "legal.privacy": "गोपनीयता नीति",
    "legal.terms": "नियम और शर्तें",
    "legal.disclaimer": "अस्वीकरण",
    "legal.affiliateDisclosure": "Affiliate प्रकटीकरण",
    "legal.cookiePolicy": "Cookie नीति",

    // 404
    "404.title": "पेज नहीं मिला",
    "404.subtitle": "जिस पेज को आप ढूंढ रहे हैं वह मौजूद नहीं है या बदल गया है।",
    "404.cta": "होमपेज पर जाएं",

    // Breadcrumbs
    "breadcrumb.home": "होम",

    // Dark mode
    "theme.toggle": "थीम बदलें",
    "theme.light": "लाइट मोड",
    "theme.dark": "डार्क मोड",

    // About
    "about.title": "AI Career Lab के बारे में",

    // Contact
    "contact.title": "संपर्क करें",
    "contact.name": "आपका नाम",
    "contact.email": "आपका ईमेल",
    "contact.message": "आपका संदेश",
    "contact.send": "संदेश भेजें",

    // Pagination
    "pagination.prev": "पिछला",
    "pagination.next": "अगला",
    "pagination.page": "पेज",
    "pagination.of": "का",
  },
} as const;

export type UiStrings = typeof ui.en;
export type UiKey = keyof UiStrings;
export type Locales = keyof typeof ui;
