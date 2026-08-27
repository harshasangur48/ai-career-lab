import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
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
    translationGroup: z.string().optional(),
    // SEO overrides
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    ogImage: z.string().optional(),
    // Draft
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
};
