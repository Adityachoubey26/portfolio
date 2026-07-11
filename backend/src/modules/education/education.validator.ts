import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

export const createEducationSchema = z.object({
  title: z.string().min(1).max(200),
  subtitle: z.string().min(1).max(200),
  duration: z.string().min(1).max(100),
  description: z.string().min(1).max(5000),
  logo: z.string().url().or(z.string().min(1)).optional(),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
});

export const updateEducationSchema = createEducationSchema.partial();
export const educationIdSchema = idParamSchema;
