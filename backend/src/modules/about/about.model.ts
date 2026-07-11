import { Schema, model } from 'mongoose';
import type { AboutDocument } from './about.types.js';

const statSchema = new Schema(
  {
    value: { type: String, required: true, trim: true },
    label: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const aboutSchema = new Schema<AboutDocument>(
  {
    label: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    paragraphs: { type: [String], required: true, default: [] },
    stats: { type: [statSchema], default: [] },
    image: { type: String, trim: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

aboutSchema.index({ isPublished: 1, order: 1 });

export const AboutModel = model<AboutDocument>('About', aboutSchema);
