import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

export const createAchievementSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1).max(2000),
  date: z.string().datetime().or(z.string().min(1)),
  icon: z.string().min(1).max(200),
  url: z.string().url().or(z.string().min(1)).optional(),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
});

export const updateAchievementSchema = createAchievementSchema.partial();
export const achievementIdSchema = idParamSchema;
