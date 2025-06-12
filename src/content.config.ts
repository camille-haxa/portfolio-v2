// 1. importer des utilitaires depuis `astro:content`
import { defineCollection, z } from "astro:content";

// 2. importer un ou plusieurs chargeurs
import { glob, file } from "astro/loaders";

// 3. definir le(s) collection(s)
const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.json",
    base: "./src/projects/projects.json",
  }),
  schema: z.object({
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z.string(),
    date: z.string(),
    client: z.string(),
    type: z.string(),
    url: z.string(),
  }),
});

// 4. export a single `collections` object to register the collection(s)
export const collections = { projects };
