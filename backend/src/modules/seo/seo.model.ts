import { Schema, model } from 'mongoose';
import type { SeoDocument } from './seo.types.js';

const seoSchema = new Schema<SeoDocument>(
  {
    pageKey: { type: String, required: true, unique: true, trim: true },
    metaTitle: { type: String, required: true, trim: true },
    metaDescription: { type: String, required: true, trim: true },
    keywords: { type: [String], default: [] },
    ogTitle: { type: String, trim: true },
    ogDescription: { type: String, trim: true },
    ogImage: { type: String, trim: true },
    canonicalUrl: { type: String, trim: true },
    robots: { type: String, trim: true },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

seoSchema.index({ isPublished: 1 });

export const SeoModel = model<SeoDocument>('Seo', seoSchema);
