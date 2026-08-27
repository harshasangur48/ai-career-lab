/**
 * AI Career Lab — Central Site Configuration
 * Change brand name, tagline, domain, and social links here.
 * All components pull from this file — no need to edit multiple places.
 */

export const SITE = {
  name: "AI Career Lab",
  tagline: "Learn AI. Build Projects. Grow Your Career.",
  taglineShort: "AI, Python & Career guides for Indian students",
  description:
    "Practical AI, Machine Learning, Python, and career guides for students, freshers, and aspiring developers in India and worldwide.",
  domain: "https://aicareerlab.com", // Change to your domain before launch
  defaultLocale: "en" as const,
  locales: ["en", "kn", "hi"] as const,
  logoText: "AI Career Lab",
  logoIcon: "🤖", // Replace with SVG later
} as const;

export const AUTHOR = {
  name: "Harsha",
  handle: "harsha",
  bio: "AI/ML enthusiast and technology learner sharing practical guides, projects, tools and career resources for students and aspiring developers.",
  bioShort: "AI/ML enthusiast • Technology learner • Sharing practical guides",
  avatar: "/images/author-harsha.jpg",
  social: {
    twitter: "https://x.com/aicareerlab",
    linkedin: "https://linkedin.com/in/aicareerlab",
    github: "https://github.com/aicareerlab",
    youtube: "",
    instagram: "",
  },
} as const;

export const CATEGORIES = {
  "ai-ml": {
    label: "AI & Machine Learning",
    labelShort: "AI & ML",
    slug: "ai-ml",
    description:
      "Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI, and AI fundamentals.",
    color: "#6366f1", // indigo
    icon: "🧠",
  },
  python: {
    label: "Python & Coding",
    labelShort: "Python",
    slug: "python",
    description:
      "Python programming, Data Structures & Algorithms, development tools, Git & GitHub for beginners.",
    color: "#0ea5e9", // sky blue
    icon: "🐍",
  },
  "ai-tools": {
    label: "AI Tools",
    labelShort: "AI Tools",
    slug: "ai-tools",
    description:
      "Best AI tools for students, AI productivity tools, coding tools, research tools, and free AI tools.",
    color: "#10b981", // emerald
    icon: "🛠️",
  },
  projects: {
    label: "Projects",
    labelShort: "Projects",
    slug: "projects",
    description:
      "Beginner AI projects, ML projects, Python projects, GenAI projects, and project tutorials with deployment guides.",
    color: "#f59e0b", // amber
    icon: "🚀",
  },
  career: {
    label: "Career",
    labelShort: "Career",
    slug: "career",
    description:
      "AI/ML careers, resume building, LinkedIn tips, internships, interview preparation, and career roadmaps.",
    color: "#ec4899", // pink
    icon: "💼",
  },
  tutorials: {
    label: "Tutorials",
    labelShort: "Tutorials",
    slug: "tutorials",
    description:
      "Practical step-by-step guides for AI, Python, tools, and technology concepts.",
    color: "#8b5cf6", // violet
    icon: "📚",
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "AI & ML", href: "/ai-ml/" },
  { label: "Python", href: "/python/" },
  { label: "AI Tools", href: "/ai-tools/" },
  { label: "Projects", href: "/projects/" },
  { label: "Career", href: "/career/" },
  { label: "Tutorials", href: "/tutorials/" },
] as const;

export const FOOTER_LINKS = {
  content: [
    { label: "AI & ML", href: "/ai-ml/" },
    { label: "Python", href: "/python/" },
    { label: "AI Tools", href: "/ai-tools/" },
    { label: "Projects", href: "/projects/" },
    { label: "Career", href: "/career/" },
    { label: "Tutorials", href: "/tutorials/" },
  ],
  legal: [
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms & Conditions", href: "/terms/" },
    { label: "Disclaimer", href: "/disclaimer/" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure/" },
    { label: "Cookie Policy", href: "/cookie-policy/" },
  ],
} as const;

/**
 * Analytics — set IDs here, leave empty strings to disable.
 * Never commit real IDs to public repos; use environment variables.
 */
export const ANALYTICS = {
  // Google Analytics 4 measurement ID (e.g. "G-XXXXXXXXXX")
  googleAnalyticsId: import.meta.env.PUBLIC_GA_ID ?? "",
  // Google Search Console verification (meta tag value)
  searchConsoleVerification: import.meta.env.PUBLIC_GSC_VERIFICATION ?? "",
} as const;

/**
 * AdSense — set publisher ID to enable ad slots.
 * Leave empty to render placeholder divs instead.
 */
export const ADSENSE = {
  publisherId: import.meta.env.PUBLIC_ADSENSE_PUB_ID ?? "",
  enabled: false, // Set to true after AdSense approval
} as const;

/**
 * Newsletter — configure your email provider here.
 * The form will POST to this URL with { email } JSON body.
 */
export const NEWSLETTER = {
  provider: "none" as "mailchimp" | "convertkit" | "brevo" | "none",
  actionUrl: import.meta.env.PUBLIC_NEWSLETTER_URL ?? "",
  leadMagnetTitle: "Free AI/ML Beginner Roadmap",
  leadMagnetDescription:
    "A step-by-step guide to starting your AI/ML journey — curated for beginners.",
} as const;

export const SOCIAL = {
  whatsapp: "https://wa.me/share",
  twitter: "https://x.com/intent/tweet",
  linkedin: "https://www.linkedin.com/shareArticle",
  facebook: "https://www.facebook.com/sharer/sharer.php",
} as const;
