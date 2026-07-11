import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

const urlOrPath = z.string().url().or(z.string().min(1));

export const createSeoSchema = z.object({
  pageKey: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Page key must be lowercase alphanumeric with hyphens'),
  metaTitle: z.string().min(1).max(200),
  metaDescription: z.string().min(1).max(500),
  keywords: z.array(z.string().min(1).max(100)).optional().default([]),
  ogTitle: z.string().min(1).max(200).optional(),
  ogDescription: z.string().min(1).max(500).optional(),
  ogImage: urlOrPath.optional(),
  canonicalUrl: urlOrPath.optional(),
  robots: z.string().min(1).max(100).optional(),
  isPublished: z.boolean().optional().default(false),
});

export const updateSeoSchema = createSeoSchema.partial();
export const seoIdSchema = idParamSchema;
