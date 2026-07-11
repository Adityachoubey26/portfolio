import { Schema, model } from 'mongoose';
import type { EducationDocument } from './education.types.js';

const educationSchema = new Schema<EducationDocument>(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    logo: { type: String, trim: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

educationSchema.index({ isPublished: 1, order: 1 });

export const EducationModel = model<EducationDocument>('Education', educationSchema);
