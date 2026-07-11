import { Schema, model } from 'mongoose';
import type { AchievementDocument } from './achievements.types.js';

const achievementSchema = new Schema<AchievementDocument>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    icon: { type: String, required: true, trim: true },
    url: { type: String, trim: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

achievementSchema.index({ isPublished: 1, order: 1 });

export const AchievementModel = model<AchievementDocument>('Achievement', achievementSchema);
