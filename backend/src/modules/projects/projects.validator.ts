import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

const detailedFeatureSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1).max(2000),
  icon: z.string().min(1).max(200),
});

const urlOrPath = z.string().url().or(z.string().min(1));

export const createProjectSchema = z.object({
  slug: z
    .string()
    .min(1)
    .max(200)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase alphanumeric with hyphens'),
  title: z.string().min(1).max(200),
  category: z.string().min(1).max(120),
  description: z.string().min(1).max(2000),
  detailedDescription: z.string().min(1).max(10000),
  problemText: z.string().min(1).max(5000),
  solutionText: z.string().min(1).max(5000),
  impactItems: z.array(z.string().min(1).max(500)).optional().default([]),
  techStack: z.array(z.string().min(1).max(100)).optional().default([]),
  detailedFeatures: z.array(detailedFeatureSchema).optional().default([]),
  github: urlOrPath.optional(),
  live: urlOrPath.optional(),
  images: z.array(urlOrPath).optional().default([]),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
  isFeatured: z.boolean().optional().default(false),
});

export const updateProjectSchema = createProjectSchema.partial();
export const projectIdSchema = idParamSchema;
