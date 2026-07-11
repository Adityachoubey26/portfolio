import { z } from 'zod';
import { ctaSchema } from '../../utils/validators.js';

export const createHeroSchema = z.object({
  badge: z.string().min(1).max(120),
  name: z.string().min(1).max(120),
  headline: z.string().min(1).max(200),
  subheadline: z.string().max(200).optional(),
  description: z.string().min(1).max(2000),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema,
  image: z.string().url().or(z.string().min(1)),
  location: z.string().min(1).max(120),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
});

export const updateHeroSchema = createHeroSchema.partial();

export const heroIdSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/),
});
