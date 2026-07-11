import { z } from 'zod';
import { idParamSchema, statSchema } from '../../utils/validators.js';

export const createAboutSchema = z.object({
  label: z.string().min(1).max(120),
  title: z.string().min(1).max(200),
  paragraphs: z.array(z.string().min(1).max(2000)).min(1),
  stats: z.array(statSchema).optional().default([]),
  image: z.string().url().or(z.string().min(1)).optional(),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
});

export const updateAboutSchema = createAboutSchema.partial();
export const aboutIdSchema = idParamSchema;
