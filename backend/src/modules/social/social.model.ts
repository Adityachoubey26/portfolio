import { Schema, model } from 'mongoose';
import type { SocialDocument } from './social.types.js';

const socialSchema = new Schema<SocialDocument>(
  {
    platform: { type: String, required: true, trim: true },
    label: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
    icon: { type: String, trim: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

socialSchema.index({ isPublished: 1, order: 1 });

export const SocialModel = model<SocialDocument>('Social', socialSchema);
