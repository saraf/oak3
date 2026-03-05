import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.string(),
    category:    z.string(),
    excerpt:     z.string(),
    symbol:      z.string().optional(),
    bgGradient:  z.string().optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    date:  z.string(),
    tag:   z.enum(['news', 'seminar', 'blog']),
    title: z.string(),
    href:  z.string().optional(),
  }),
});

const seminars = defineCollection({
  type: 'data',
  schema: z.object({
    date:     z.string(),
    title:    z.string(),
    format:   z.string(),
    capacity: z.string(),
    status:   z.enum(['open', 'soon', 'full']),
  }),
});

export const collections = { articles, news, seminars };
