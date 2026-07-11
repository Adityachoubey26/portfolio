import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

const skillItemSchema = z.object({
  name: z.string().min(1).max(100),
  icon: z.string().min(1).max(200),
});

export const createSkillsSchema = z.object({
  category: z.string().min(1).max(120),
  skills: z.array(skillItemSchema).optional().default([]),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
});

export const updateSkillsSchema = createSkillsSchema.partial();
export const skillsIdSchema = idParamSchema;
