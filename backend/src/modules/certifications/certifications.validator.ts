import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

const dateString = z.string().datetime().or(z.string().min(1));
const urlOrPath = z.string().url().or(z.string().min(1));

export const createCertificationSchema = z.object({
  title: z.string().min(1).max(200),
  issuer: z.string().min(1).max(200),
  issueDate: dateString,
  expiryDate: dateString.optional(),
  credentialId: z.string().min(1).max(200).optional(),
  credentialUrl: urlOrPath.optional(),
  logo: urlOrPath.optional(),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
});

export const updateCertificationSchema = createCertificationSchema.partial();
export const certificationIdSchema = idParamSchema;
