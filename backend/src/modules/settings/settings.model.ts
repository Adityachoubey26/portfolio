import { Schema, model } from 'mongoose';
import type { SettingsDocument } from './settings.types.js';

const settingsSchema = new Schema<SettingsDocument>(
  {
    siteName: { type: String, required: true, trim: true },
    tagline: { type: String, trim: true },
    logo: { type: String, trim: true },
    favicon: { type: String, trim: true },
    maintenanceMode: { type: Boolean, default: false },
    contactEmail: { type: String, trim: true },
    analyticsId: { type: String, trim: true },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

settingsSchema.index({ isPublished: 1 });

export const SettingsModel = model<SettingsDocument>('Settings', settingsSchema);
