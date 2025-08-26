import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    repository: z.string().url().optional(),
    live: z.string().url().optional(),
    image: image(),
    imageAlt: z.string(),
    order: z.number().optional(),
})
});
export const collections = { projects };