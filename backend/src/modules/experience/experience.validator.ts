import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

export const createExperienceSchema = z.object({
  role: z.string().min(1).max(200),
  company: z.string().min(1).max(200),
  duration: z.string().min(1).max(100),
  description: z.string().min(1).max(5000),
  tags: z.array(z.string().min(1).max(100)).optional().default([]),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
});

export const updateExperienceSchema = createExperienceSchema.partial();
export const experienceIdSchema = idParamSchema;
