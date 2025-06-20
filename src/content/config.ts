import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default(['post']),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  blog,
  pages,
};