import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

const urlOrPath = z.string().url().or(z.string().min(1));

export const createResumeSchema = z.object({
  fileName: z.string().min(1).max(255),
  fileUrl: urlOrPath,
  fileSize: z.number().int().positive().optional(),
  mimeType: z.string().min(1).max(100).optional(),
  version: z.string().min(1).max(50).optional(),
  isActive: z.boolean().optional().default(false),
  isPublished: z.boolean().optional().default(false),
});

export const updateResumeSchema = createResumeSchema.partial();
export const resumeIdSchema = idParamSchema;
