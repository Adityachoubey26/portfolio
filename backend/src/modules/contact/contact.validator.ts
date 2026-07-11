import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

const urlOrPath = z.string().url().or(z.string().min(1));

export const createContactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(1).max(30),
  whatsapp: z.string().min(1).max(30),
  formActionUrl: urlOrPath,
  address: z.string().min(1).max(500).optional(),
  order: z.number().int().min(0).optional().default(0),
  isPublished: z.boolean().optional().default(false),
});

export const updateContactInfoSchema = createContactInfoSchema.partial();
export const contactInfoIdSchema = idParamSchema;

export const contactSubmissionStatusSchema = z.enum(['new', 'read', 'replied']);

export const createContactSubmissionSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
  subject: z.string().min(1).max(200).optional(),
  status: contactSubmissionStatusSchema.optional().default('new'),
});

export const updateContactSubmissionSchema = createContactSubmissionSchema.partial();

export const updateContactSubmissionStatusSchema = z.object({
  status: contactSubmissionStatusSchema,
});

export const contactSubmissionIdSchema = idParamSchema;
