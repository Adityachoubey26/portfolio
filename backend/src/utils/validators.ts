import { z } from 'zod';

export const idParamSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid document ID'),
});

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(10),
  search: z.string().trim().optional(),
  isPublished: z
    .union([z.literal('true'), z.literal('false'), z.boolean()])
    .optional()
    .transform((val) => {
      if (val === undefined) return undefined;
      return val === true || val === 'true';
    }),
});

export const ctaSchema = z.object({
  label: z.string().min(1).max(100),
  url: z.string().min(1).max(500),
});

export const statSchema = z.object({
  value: z.string().min(1).max(50),
  label: z.string().min(1).max(100),
});
