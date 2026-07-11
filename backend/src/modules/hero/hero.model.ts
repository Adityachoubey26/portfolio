import { Schema, model } from 'mongoose';
import type { HeroDocument } from './hero.types.js';

const ctaSchema = new Schema(
  {
    label: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const heroSchema = new Schema<HeroDocument>(
  {
    badge: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    headline: { type: String, required: true, trim: true },
    subheadline: { type: String, trim: true },
    description: { type: String, required: true, trim: true },
    primaryCta: { type: ctaSchema, required: true },
    secondaryCta: { type: ctaSchema, required: true },
    image: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

heroSchema.index({ isPublished: 1, order: 1 });

export const HeroModel = model<HeroDocument>('Hero', heroSchema);
