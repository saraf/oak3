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
  type: 'content',
  schema: z.object({
    title:    z.string(),
    date:     z.string(),
    status:   z.enum(['open', 'soon', 'full']),
    format:   z.string(),
    capacity: z.string().optional(),
    deadline: z.string().optional(),
    fee:      z.string().optional(),
    venue: z.object({
      name:    z.string(),
      address: z.string().optional(),
      access:  z.string().optional(),
    }).optional(),
    speakers: z.array(z.object({
      name:  z.string(),
      title: z.string().optional(),
      bio:   z.string().optional(),
    })).optional(),
    images: z.array(z.string()).optional(),
    pdfs: z.array(z.object({
      label: z.string(),
      file:  z.string(),
    })).optional(),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    subtitle:    z.string().optional(),
    category:    z.enum(['regular', 'specialist', 'oneday']),
    schedule:    z.string(),
    duration:    z.string(),
    location:    z.string(),
    status:      z.enum(['open', 'full', 'enquire']),
    fee:         z.string().optional(),
    certificate: z.string().optional(),
    lecturers: z.array(z.object({
      name:        z.string(),
      credentials: z.string().optional(),
      bio:         z.string().optional(),
    })).optional(),
    venue: z.object({
      name:    z.string(),
      address: z.string().optional(),
      access:  z.string().optional(),
    }).optional(),
    syllabus: z.array(z.string()).optional(),
    images:   z.array(z.string()).optional(),
    pdfs: z.array(z.object({
      label: z.string(),
      file:  z.string(),
    })).optional(),
  }),
});

export const collections = { articles, news, seminars, courses };
