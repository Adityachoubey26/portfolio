import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

const urlOrPath = z.string().url().or(z.string().min(1));

export const createSocialSchema = z.object({
  platform: z.string().min(1).max(100),
  label: z.string().min(1).max(120),
  url: urlOrPath,
  icon: z.string().min(1).max(200).optional(),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
});

export const updateSocialSchema = createSocialSchema.partial();
export const socialIdSchema = idParamSchema;
