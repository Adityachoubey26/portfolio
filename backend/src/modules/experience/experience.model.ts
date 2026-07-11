import { Schema, model } from 'mongoose';
import type { ExperienceDocument } from './experience.types.js';

const experienceSchema = new Schema<ExperienceDocument>(
  {
    role: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

experienceSchema.index({ isPublished: 1, order: 1 });

export const ExperienceModel = model<ExperienceDocument>('Experience', experienceSchema);
