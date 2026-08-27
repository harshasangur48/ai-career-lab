import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    language: z.enum(["en", "kn", "hi"]),
    category: z.enum(["ai-ml", "python", "ai-tools", "projects", "career", "tutorials"]),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Harsha"),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    featuredImage: z.string().default("/images/placeholder.jpg"),
    featuredImageAlt: z.string().default(""),
    readingTime: z.number().default(5),
    featured: z.boolean().default(false),
    translationGroup: z.string().optional(), // Links translations of the same article
    // SEO overrides (optional — auto-generated if not set)
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    ogImage: z.string().optional(),
    // Content extras
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
};
