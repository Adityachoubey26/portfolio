import { z } from 'zod';
import { idParamSchema } from '../../utils/validators.js';

const urlOrPath = z.string().url().or(z.string().min(1));

export const createSettingsSchema = z.object({
  siteName: z.string().min(1).max(120),
  tagline: z.string().min(1).max(200).optional(),
  logo: urlOrPath.optional(),
  favicon: urlOrPath.optional(),
  maintenanceMode: z.boolean().optional().default(false),
  contactEmail: z.string().email().optional(),
  analyticsId: z.string().min(1).max(100).optional(),
  isPublished: z.boolean().optional().default(false),
});

export const updateSettingsSchema = createSettingsSchema.partial();
export const settingsIdSchema = idParamSchema;
