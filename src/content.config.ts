import { defineCollection, z } from 'astro:content';

const playlists = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    spotify: z.string().url(),
  }),
});

const releases = defineCollection({
  type: 'data',
  schema: z.object({
    catalogue_number: z.number(),
    release_name: z.string(),
    catalogue_reference: z.string(),
    artist: z.string(),
    release_date: z.string(), // dd/mm/yyyy in current data
    type: z.enum(['EP', 'Single', 'Album', 'Merch']).default('Single'),
    format: z.enum(['Digital', 'CD', 'Vinyl', 'Print']).default('Digital'),
    upc: z.union([z.number(), z.null()]).optional(),
    external_link: z.string().url(),
  }),
});

export const collections = {
  playlists,
  releases,
};


